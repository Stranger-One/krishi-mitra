"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Send, Mic, MicOff, ImageIcon, Upload, Bot, User, Volume2, VolumeX, Loader2 } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  inputType?: "text" | "voice" | "image"
  imageUrl?: string
}

export default function Query() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "नमस्ते! मैं आपका कृषि सहायक हूं। आप मुझसे फसल, मौसम, कीट-पतंग, या सरकारी योजनाओं के बारे में कुछ भी पूछ सकते हैं। आप टेक्स्ट, आवाज़, या तस्वीर के जरिए सवाल पूछ सकते हैं।",
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async (content: string, type: "text" | "voice" | "image" = "text", imageUrl?: string) => {
    if (!content.trim() && !imageUrl) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: content || "Image uploaded",
      timestamp: new Date(),
      inputType: type,
      imageUrl,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: generateBotResponse(content, type),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
      setTimeout(scrollToBottom, 100)
    }, 1500)

    setTimeout(scrollToBottom, 100)
  }

  const generateBotResponse = (query: string, type: "text" | "voice" | "image"): string => {
    const responses = {
      pest: "कीट-पतंग की समस्या के लिए: 1) नीम का तेल का छिड़काव करें 2) जैविक कीटनाशक का उपयोग करें 3) फसल चक्र अपनाएं। अधिक जानकारी के लिए स्थानीय कृषि विभाग से संपर्क करें।",
      weather:
        "मौसम की जानकारी: आज बारिश की 20% संभावना है। तापमान 28°C रहेगा। अगले 3 दिन शुष्क मौसम रहेगा, सिंचाई की योजना बनाएं।",
      crop: "फसल की देखभाल: 1) नियमित सिंचाई करें 2) मिट्टी की जांच कराएं 3) उर्वरक का सही उपयोग करें 4) कीट-पतंग पर नजर रखें।",
      scheme:
        "सरकारी योजनाएं: PM-KISAN (₹6000/वर्ष), फसल बीमा योजना, मृदा स्वास्थ्य कार्ड उपलब्ध हैं। आवेदन के लिए नजदीकी CSC केंद्र पर जाएं।",
      default: "आपका सवाल दिलचस्प है। कृषि विशेषज्ञों से सलाह लेने के लिए हमारे रिसोर्स सेक्शन में जाएं या स्थानीय कृषि विभाग से संपर्क करें।",
    }

    const lowerQuery = query.toLowerCase()
    if (lowerQuery.includes("कीट") || lowerQuery.includes("pest") || lowerQuery.includes("bug")) {
      return responses.pest
    } else if (lowerQuery.includes("मौसम") || lowerQuery.includes("weather") || lowerQuery.includes("बारिश")) {
      return responses.weather
    } else if (lowerQuery.includes("फसल") || lowerQuery.includes("crop") || lowerQuery.includes("खेती")) {
      return responses.crop
    } else if (lowerQuery.includes("योजना") || lowerQuery.includes("scheme") || lowerQuery.includes("subsidy")) {
      return responses.scheme
    } else {
      return responses.default
    }
  }

  const handleVoiceInput = () => {
    if (isRecording) {
      setIsRecording(false)
      // Simulate voice recognition result
      setTimeout(() => {
        handleSendMessage("मेरी गेहूं की फसल में पीले पत्ते दिख रहे हैं", "voice")
      }, 1000)
    } else {
      setIsRecording(true)
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      handleSendMessage("कृपया इस तस्वीर को देखकर बताएं कि क्या समस्या है", "image", imageUrl)
    }
  }

  const handleTextToSpeech = (text: string) => {
    if (isSpeaking) {
      speechSynthesis.cancel()
      setIsSpeaking(false)
    } else {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "hi-IN"
      utterance.onend = () => setIsSpeaking(false)
      speechSynthesis.speak(utterance)
      setIsSpeaking(true)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ask Query</h1>
          <p className="text-muted-foreground">Get instant answers to your farming questions</p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-1">
          <Bot className="h-3 w-3" />
          AI Assistant
        </Badge>
      </div>

      {/* Input Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader className="text-center pb-2">
            <MessageSquare className="h-8 w-8 text-primary mx-auto" />
            <CardTitle className="text-lg">Text Query</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">Type your farming questions</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-dashed border-secondary/20 hover:border-secondary/40 transition-colors">
          <CardHeader className="text-center pb-2">
            <Mic className="h-8 w-8 text-secondary mx-auto" />
            <CardTitle className="text-lg">Voice Query</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">Speak in your local language</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-dashed border-accent/20 hover:border-accent/40 transition-colors">
          <CardHeader className="text-center pb-2">
            <ImageIcon className="h-8 w-8 text-accent mx-auto" />
            <CardTitle className="text-lg">Image Query</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">Upload crop/pest photos</p>
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <Card className="h-[500px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            Krishi AI Assistant
          </CardTitle>
          <CardDescription>Chat with our AI-powered farming expert</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex gap-3 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>

                    <div
                      className={`rounded-lg p-3 ${
                        message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.imageUrl && (
                        <img
                          src={message.imageUrl || "/placeholder.svg"}
                          alt="Uploaded"
                          className="max-w-48 rounded-lg mb-2"
                        />
                      )}
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs opacity-70">{message.timestamp.toLocaleTimeString()}</span>
                        {message.type === "bot" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleTextToSpeech(message.content)}
                            className="h-6 w-6 p-0"
                          >
                            {isSpeaking ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                          </Button>
                        )}
                      </div>
                      {message.inputType && (
                        <Badge variant="outline" className="mt-1 text-xs">
                          {message.inputType === "voice" ? "Voice" : message.inputType === "image" ? "Image" : "Text"}
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
                  placeholder="अपना सवाल यहाँ लिखें... (Type your question here...)"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage(inputText)
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
                    className={`h-8 w-8 p-0 ${isRecording ? "text-red-500" : ""}`}
                  >
                    {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
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
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

      {/* Quick Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Questions</CardTitle>
          <CardDescription>Common farming queries to get you started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "मेरी फसल में कीड़े लग गए हैं, क्या करूं?",
              "आज बारिश होगी क्या?",
              "गेहूं की बुआई का सही समय क्या है?",
              "PM-KISAN योजना के लिए कैसे आवेदन करूं?",
              "मिट्टी की जांच कैसे कराऊं?",
              "जैविक खाद कैसे बनाऊं?",
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
  )
}
