"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  History,
  Search,
  Filter,
  MessageSquare,
  Mic,
  ImageIcon,
  Calendar,
  Clock,
  Bot,
  User,
  Volume2,
  Download,
  Trash2,
  Star,
  StarOff,
} from "lucide-react"

interface HistoryItem {
  id: string
  query: string
  response: string
  type: "text" | "voice" | "image"
  timestamp: Date
  category: string
  language: "hi" | "en"
  isFavorite: boolean
  imageUrl?: string
}

const mockHistory: HistoryItem[] = [
  {
    id: "1",
    query: "मेरी गेहूं की फसल में पीले पत्ते दिख रहे हैं",
    response:
      "पीले पत्ते नाइट्रोजन की कमी या पानी की अधिकता के कारण हो सकते हैं। मिट्टी की जांच कराएं और उर्वरक का संतुलित उपयोग करें।",
    type: "voice",
    timestamp: new Date(2024, 11, 15, 10, 30),
    category: "crop-health",
    language: "hi",
    isFavorite: true,
  },
  {
    id: "2",
    query: "What is the best time to sow wheat?",
    response:
      "The optimal time for wheat sowing is from mid-November to December. Ensure soil temperature is around 18-20°C for best germination.",
    type: "text",
    timestamp: new Date(2024, 11, 14, 15, 45),
    category: "crop-timing",
    language: "en",
    isFavorite: false,
  },
  {
    id: "3",
    query: "कीट-पतंग की पहचान करें",
    response: "यह ब्राउन प्लांट हॉपर है। नीम का तेल का छिड़काव करें और खेत में पानी का स्तर कम रखें।",
    type: "image",
    timestamp: new Date(2024, 11, 13, 9, 15),
    category: "pest-control",
    language: "hi",
    isFavorite: true,
    imageUrl: "/brown-plant-hopper-pest.jpg",
  },
  {
    id: "4",
    query: "PM-KISAN योजना के लिए आवेदन कैसे करें?",
    response: "PM-KISAN के लिए ऑनलाइन pmkisan.gov.in पर जाएं या नजदीकी CSC केंद्र पर आधार कार्ड और खसरा नंबर लेकर जाएं।",
    type: "text",
    timestamp: new Date(2024, 11, 12, 14, 20),
    category: "government-schemes",
    language: "hi",
    isFavorite: false,
  },
  {
    id: "5",
    query: "मिट्टी की जांच कैसे कराऊं?",
    response: "मिट्टी की जांच के लिए स्थानीय कृषि विभाग या मृदा स्वास्थ्य कार्ड केंद्र पर संपर्क करें। यह सेवा निःशुल्क है।",
    type: "voice",
    timestamp: new Date(2024, 11, 11, 11, 10),
    category: "soil-health",
    language: "hi",
    isFavorite: false,
  },
  {
    id: "6",
    query: "Organic fertilizer preparation",
    response:
      "Mix cow dung, kitchen waste, and dry leaves in 3:1:1 ratio. Add water and let it decompose for 45-60 days with regular turning.",
    type: "text",
    timestamp: new Date(2024, 11, 10, 16, 30),
    category: "fertilizers",
    language: "en",
    isFavorite: true,
  },
]

const categories = [
  { value: "all", label: "All Categories" },
  { value: "crop-health", label: "Crop Health" },
  { value: "pest-control", label: "Pest Control" },
  { value: "crop-timing", label: "Crop Timing" },
  { value: "government-schemes", label: "Government Schemes" },
  { value: "soil-health", label: "Soil Health" },
  { value: "fertilizers", label: "Fertilizers" },
  { value: "weather", label: "Weather" },
]

export default function HistoryComp() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [history, setHistory] = useState<HistoryItem[]>(mockHistory)

  const filteredHistory = history.filter((item) => {
    const matchesSearch =
      item.query.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.response.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesType = selectedType === "all" || item.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const toggleFavorite = (id: string) => {
    setHistory((prev) => prev.map((item) => (item.id === id ? { ...item, isFavorite: !item.isFavorite } : item)))
  }

  const deleteItem = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id))
  }

  const handleTextToSpeech = (text: string, language: "hi" | "en") => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = language === "hi" ? "hi-IN" : "en-US"
    speechSynthesis.speak(utterance)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "voice":
        return <Mic className="h-4 w-4" />
      case "image":
        return <ImageIcon className="h-4 w-4" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "voice":
        return "bg-blue-100 text-blue-800"
      case "image":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Query History</h1>
          <p className="text-muted-foreground">View and manage your past farming queries and solutions</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <History className="h-3 w-3" />
            {filteredHistory.length} Queries
          </Badge>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search queries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Input Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="voice">Voice</SelectItem>
                <SelectItem value="image">Image</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedType("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* History List */}
      <div className="space-y-4">
        {filteredHistory.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <History className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No queries found</h3>
              <p className="text-muted-foreground text-center">
                {searchTerm || selectedCategory !== "all" || selectedType !== "all"
                  ? "Try adjusting your filters to see more results."
                  : "Start asking questions to build your query history."}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredHistory.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    {/* Query Header */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={getTypeColor(item.type)}>
                        {getTypeIcon(item.type)}
                        <span className="ml-1 capitalize">{item.type}</span>
                      </Badge>
                      <Badge variant="outline">{categories.find((c) => c.value === item.category)?.label}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {item.timestamp.toLocaleDateString()}
                        <Clock className="h-3 w-3 ml-2" />
                        {item.timestamp.toLocaleTimeString()}
                      </div>
                    </div>

                    {/* Query and Response */}
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                          <User className="h-3 w-3" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-muted rounded-lg p-3">
                            {item.imageUrl && (
                              <img
                                src={item.imageUrl || "/placeholder.svg"}
                                alt="Query image"
                                className="w-20 h-20 rounded-lg mb-2 object-cover"
                              />
                            )}
                            <p className="text-sm font-medium">{item.query}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center flex-shrink-0">
                          <Bot className="h-3 w-3" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-card border rounded-lg p-3">
                            <p className="text-sm">{item.response}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" size="sm" onClick={() => toggleFavorite(item.id)} className="h-8 w-8 p-0">
                      {item.isFavorite ? (
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ) : (
                        <StarOff className="h-4 w-4" />
                      )}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleTextToSpeech(item.response, item.language)}
                      className="h-8 w-8 p-0"
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteItem(item.id)}
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Query Statistics</CardTitle>
          <CardDescription>Your farming query patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{history.length}</div>
              <div className="text-sm text-muted-foreground">Total Queries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{history.filter((h) => h.isFavorite).length}</div>
              <div className="text-sm text-muted-foreground">Favorites</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{history.filter((h) => h.type === "voice").length}</div>
              <div className="text-sm text-muted-foreground">Voice Queries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-1">{history.filter((h) => h.type === "image").length}</div>
              <div className="text-sm text-muted-foreground">Image Queries</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
