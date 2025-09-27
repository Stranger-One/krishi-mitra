"use client";

import type React from "react";

import { useState, useRef, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageSquare,
  Send,
  Mic,
  MicOff,
  ImageIcon,
  Upload,
  Bot,
  User,
  Volume2,
  VolumeX,
  Loader2,
} from "lucide-react";
import Link from "next/link";

// --- API Configuration ---
const API_KEY = "AIzaSyDXivjGISZ3oU3nSYFILNiA9SokCgJTqOA"; // Leave empty - handled at runtime
const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/";
const MODEL_NAME = "gemini-2.5-flash-preview-05-20";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  inputType?: "text" | "voice" | "image";
  imageUrl?: string;
}

export default function Query() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hello! I am your Krishi Assistant. You can ask me anything about crops, weather, pests, or government schemes. You can ask questions through text, voice, or images.",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Utility to convert File to Base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // Fetch with retry mechanism
  const fetchWithRetry = useCallback(async (url: string, options: RequestInit, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          return response;
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      } catch (error) {
        console.error(`Attempt ${i + 1} failed:`, error);
        if (i < maxRetries - 1) {
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
        } else {
          throw new Error("Failed to connect to the API after multiple retries.");
        }
      }
    }
  }, []);

  // Generate content using Gemini API
  const generateContent = useCallback(async (prompt: string, imageData?: { base64Data: string; mimeType: string }, type: 'text' | 'image' = 'text') => {
    const url = `${BASE_URL}${MODEL_NAME}:generateContent?key=${API_KEY}`;

    let contents = [{ parts: [] as any[] }];
    let systemInstructionText: string;

    if (type === 'image' && imageData) {
      systemInstructionText = "You are an expert plant pathology and agronomy assistant. Analyze the provided image of the crop, identify any visible diseases or deficiencies, provide a clear diagnosis, and recommend a specific, actionable organic or chemical treatment plan. Respond in English. Format the response clearly with Diagnosis, Symptoms, and Recommended Treatment sections.";
      contents[0].parts.push({ text: prompt });
      contents[0].parts.push({
        inlineData: {
          mimeType: imageData.mimeType,
          data: imageData.base64Data,
        }
      });
    } else {
      systemInstructionText = "You are an expert Krishi-Mitra (Farmer's Friend) providing advice on crops, weather, and general agricultural topics. Use the Google Search tool to provide accurate, up-to-date, and region-relevant information. Be supportive and offer practical solutions. Respond in English. Focus on farming practices, local conditions, and government schemes.";
      contents[0].parts.push({ text: prompt });
    }

    const payload = {
      contents: contents,
      systemInstruction: { parts: [{ text: systemInstructionText }] },
      ...(type === 'text' && { tools: [{ google_search: {} }] }),
      generationConfig: {
        temperature: 0.2
      }
    };

    try {
      const response = await fetchWithRetry(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response) throw new Error("No response received");

      const result = await response.json();
      const candidate = result.candidates?.[0];

      if (candidate && candidate.content?.parts?.[0]?.text) {
        let text = candidate.content.parts[0].text;
        
        // Extract grounding sources if used
        const groundingMetadata = candidate.groundingMetadata;
        if (groundingMetadata && groundingMetadata.groundingAttributions) {
          const sources = groundingMetadata.groundingAttributions
            .map((attribution: any) => ({
              uri: attribution.web?.uri,
              title: attribution.web?.title,
            }))
            .filter((source: any) => source.uri && source.title);
          
          if (sources.length > 0) {
            text += "\n\n**Sources:**\n" + sources.map((s: any) => `[${s.title}](${s.uri})`).join('\n');
          }
        }

        return text;
      } else {
        console.error("API response structure unexpected:", result);
        return "Sorry, I didn't get a proper response from the server. Please try again.";
      }
    } catch (error) {
      console.error("Gemini API call failed:", error);
      return "A communication error occurred. Please check your network connection or try a different query.";
    }
  }, [fetchWithRetry]);

  const handleSendMessage = async (
    content: string,
    type: "text" | "voice" | "image" = "text",
    imageUrl?: string,
    imageFile?: File
  ) => {
    if (!content.trim() && !imageUrl) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: content || "Image uploaded",
      timestamp: new Date(),
      inputType: type,
      imageUrl,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      let botResponse: string;
      
      if (type === "image" && imageFile) {
        const base64Data = await fileToBase64(imageFile);
        const imageData = {
          base64Data,
          mimeType: imageFile.type
        };
        botResponse = await generateContent(content || "Analyze this image and identify any diseases or problems.", imageData, 'image');
      } else {
        botResponse = await generateContent(content, undefined, 'text');
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "Sorry, there was a technical issue. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleVoiceInput = () => {
    if (isRecording) {
      setIsRecording(false);
      // Simulate voice recognition result
      setTimeout(() => {
        handleSendMessage(
          "My wheat crop is showing yellow leaves",
          "voice"
        );
      }, 1000);
    } else {
      setIsRecording(true);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleSendMessage(
        "Please analyze this image and tell me what problem it shows",
        "image",
        imageUrl,
        file
      );
    }
  };

  const handleTextToSpeech = (text: string) => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ask Query</h1>
          <p className="text-muted-foreground">
            Get instant answers to your farming questions
          </p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-1">
          <Bot className="h-3 w-3" />
          AI Assistant
        </Badge>
      </div>

      {/* Input Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="">
          <Card className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="text-center pb-2">
              <MessageSquare className="h-8 w-8 text-primary mx-auto" />
              <CardTitle className="text-lg">Text Query</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Type your farming questions
              </p>
            </CardContent>
          </Card>
        </Link>

        <Card className="border-2 border-dashed border-secondary/20 hover:border-secondary/40 transition-colors">
          <CardHeader className="text-center pb-2">
            <Mic className="h-8 w-8 text-secondary mx-auto" />
            <CardTitle className="text-lg">Voice Query</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Speak in your local language
            </p>
          </CardContent>
        </Card>

        <Card
          id="chat-interface"
          className="border-2 border-dashed border-accent/20 hover:border-accent/40 transition-colors"
        >
          <CardHeader className="text-center pb-2">
            <ImageIcon className="h-8 w-8 text-accent mx-auto" />
            <CardTitle className="text-lg">Image Query</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Upload crop/pest photos
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <Card className=" flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            Krishi AI Assistant
          </CardTitle>
          <CardDescription>
            Chat with our AI-powered farming expert
          </CardDescription>
        </CardHeader>

        <CardContent className="  flex flex-col p-0">
          {/* Messages */}
          <ScrollArea className="p-4 h-[500px] overflow-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-3 max-w-[80%] ${
                      message.type === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.type === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>

                    <div
                      className={`rounded-lg p-3 ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.imageUrl && (
                        <img
                          src={message.imageUrl || "/placeholder.svg"}
                          alt="Uploaded"
                          className="max-w-48 rounded-lg mb-2"
                        />
                      )}
                      <p className="text-sm whitespace-pre-wrap">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                        {/* {message.content} */}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                        {message.type === "bot" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleTextToSpeech(message.content)}
                            className="h-6 w-6 p-0"
                          >
                            {isSpeaking ? (
                              <VolumeX className="h-3 w-3" />
                            ) : (
                              <Volume2 className="h-3 w-3" />
                            )}
                          </Button>
                        )}
                      </div>
                      {message.inputType && (
                        <Badge variant="outline" className="mt-1 text-xs">
                          {message.inputType === "voice"
                            ? "Voice"
                            : message.inputType === "image"
                            ? "Image"
                            : "Text"}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Textarea
                  placeholder="Type your question here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(inputText);
                    }
                  }}
                  className="min-h-[60px] resize-none pr-20"
                />
                <div className="absolute right-2 top-2 flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    className="h-8 w-8 p-0"
                  >
                    <Upload className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleVoiceInput}
                    className={`h-8 w-8 p-0 ${
                      isRecording ? "text-red-500" : ""
                    }`}
                  >
                    {isRecording ? (
                      <MicOff className="h-4 w-4" />
                    ) : (
                      <Mic className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <Button
                onClick={() => handleSendMessage(inputText)}
                disabled={!inputText.trim() || isLoading}
                className="h-[60px]"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            {isRecording && (
              <div className="mt-2 flex items-center gap-2 text-red-500">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Recording... Click mic to stop</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Quick Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Questions</CardTitle>
          <CardDescription>
            Common farming queries to get you started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "My crops have insects, what should I do?",
              "Will it rain today?",
              "What is the right time to sow wheat?",
              "How to apply for PM-KISAN scheme?",
              "How to get soil tested?",
              "How to make organic fertilizer?",
            ].map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start h-auto p-3 text-left whitespace-normal bg-transparent"
                onClick={() => handleSendMessage(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}