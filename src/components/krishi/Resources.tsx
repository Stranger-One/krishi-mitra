"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  Search,
  Download,
  ExternalLink,
  Calendar,
  Droplets,
  Bug,
  IndianRupee,
  FileText,
  Video,
  Clock,
  MapPin,
  Star,
  Users,
  Phone,
  Mail,
  Tractor,
  Sprout,
} from "lucide-react"

interface Resource {
  id: string
  title: string
  description: string
  category: "irrigation" | "pesticides" | "schemes" | "calendar" | "equipment" | "seeds"
  type: "guide" | "video" | "document" | "calculator" | "calendar" | "contact"
  language: "hi" | "en" | "both"
  difficulty: "beginner" | "intermediate" | "advanced"
  duration?: string
  rating: number
  downloads: number
  lastUpdated: Date
  tags: string[]
  url?: string
  isOffline: boolean
}

const mockResources: Resource[] = [
  {
    id: "1",
    title: "Drip Irrigation Setup Guide",
    description: "Complete step-by-step guide for setting up drip irrigation system for small and medium farms.",
    category: "irrigation",
    type: "guide",
    language: "both",
    difficulty: "intermediate",
    duration: "45 min read",
    rating: 4.8,
    downloads: 1250,
    lastUpdated: new Date(2024, 11, 10),
    tags: ["water-saving", "efficiency", "setup"],
    isOffline: true,
  },
  {
    id: "2",
    title: "Organic Pesticide Preparation",
    description: "Learn to prepare effective organic pesticides using neem, garlic, and other natural ingredients.",
    category: "pesticides",
    type: "video",
    language: "hi",
    difficulty: "beginner",
    duration: "25 min",
    rating: 4.6,
    downloads: 890,
    lastUpdated: new Date(2024, 11, 8),
    tags: ["organic", "natural", "eco-friendly"],
    url: "https://example.com/video",
    isOffline: false,
  },
  {
    id: "3",
    title: "PM-KISAN Application Form",
    description: "Official application form and guidelines for PM-KISAN Samman Nidhi Yojana registration.",
    category: "schemes",
    type: "document",
    language: "both",
    difficulty: "beginner",
    rating: 4.9,
    downloads: 2100,
    lastUpdated: new Date(2024, 11, 15),
    tags: ["government", "subsidy", "application"],
    isOffline: true,
  },
  {
    id: "4",
    title: "Maharashtra Crop Calendar 2024-25",
    description: "Detailed crop calendar with sowing and harvesting times for all major crops in Maharashtra.",
    category: "calendar",
    type: "calendar",
    language: "both",
    difficulty: "beginner",
    rating: 4.7,
    downloads: 1800,
    lastUpdated: new Date(2024, 10, 20),
    tags: ["timing", "seasons", "planning"],
    isOffline: true,
  },
  {
    id: "5",
    title: "Fertilizer Calculator",
    description: "Calculate optimal fertilizer quantities based on crop type, soil condition, and field area.",
    category: "schemes",
    type: "calculator",
    language: "both",
    difficulty: "intermediate",
    rating: 4.5,
    downloads: 950,
    lastUpdated: new Date(2024, 11, 5),
    tags: ["calculation", "nutrients", "optimization"],
    isOffline: true,
  },
  {
    id: "6",
    title: "Tractor Maintenance Checklist",
    description: "Monthly and seasonal maintenance checklist to keep your tractor in optimal condition.",
    category: "equipment",
    type: "guide",
    language: "both",
    difficulty: "intermediate",
    duration: "30 min read",
    rating: 4.4,
    downloads: 720,
    lastUpdated: new Date(2024, 11, 1),
    tags: ["maintenance", "machinery", "checklist"],
    isOffline: true,
  },
]

const contacts = [
  {
    id: "1",
    name: "District Agriculture Officer",
    designation: "Pune District",
    phone: "+91-20-2612-3456",
    email: "dao.pune@gov.in",
    address: "Agriculture Department, Pune",
    services: ["Crop guidance", "Scheme information", "Soil testing"],
  },
  {
    id: "2",
    name: "Krishi Vigyan Kendra",
    designation: "Baramati",
    phone: "+91-2112-255-789",
    email: "kvk.baramati@gmail.com",
    address: "KVK Baramati, Pune",
    services: ["Training programs", "Technology transfer", "Demonstrations"],
  },
  {
    id: "3",
    name: "Fertilizer Dealer",
    designation: "Local Supplier",
    phone: "+91-98765-43210",
    email: "fertilizer.pune@gmail.com",
    address: "Main Market, Pune",
    services: ["Fertilizers", "Seeds", "Pesticides"],
  },
]

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLanguage, setSelectedLanguage] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const filteredResources = mockResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    const matchesLanguage =
      selectedLanguage === "all" || resource.language === selectedLanguage || resource.language === "both"
    const matchesDifficulty = selectedDifficulty === "all" || resource.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesLanguage && matchesDifficulty
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "irrigation":
        return <Droplets className="h-4 w-4" />
      case "pesticides":
        return <Bug className="h-4 w-4" />
      case "schemes":
        return <IndianRupee className="h-4 w-4" />
      case "calendar":
        return <Calendar className="h-4 w-4" />
      case "equipment":
        return <Tractor className="h-4 w-4" />
      case "seeds":
        return <Sprout className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "document":
        return <FileText className="h-4 w-4" />
      case "calculator":
        return <Calculator className="h-4 w-4" />
      case "calendar":
        return <Calendar className="h-4 w-4" />
      case "contact":
        return <Phone className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Crop Resources</h1>
          <p className="text-muted-foreground">
            Access irrigation guides, pesticide information, government schemes, and crop calendars
          </p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-1">
          <BookOpen className="h-3 w-3" />
          {mockResources.length} Resources
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">
                  {mockResources.filter((r) => r.category === "irrigation").length}
                </div>
                <div className="text-sm text-muted-foreground">Irrigation</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <IndianRupee className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold">{mockResources.filter((r) => r.category === "schemes").length}</div>
                <div className="text-sm text-muted-foreground">Schemes</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Bug className="h-5 w-5 text-red-600" />
              <div>
                <div className="text-2xl font-bold">
                  {mockResources.filter((r) => r.category === "pesticides").length}
                </div>
                <div className="text-sm text-muted-foreground">Pesticides</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <div>
                <div className="text-2xl font-bold">
                  {mockResources.filter((r) => r.category === "calendar").length}
                </div>
                <div className="text-sm text-muted-foreground">Calendars</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="resources" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="resources">Resources & Guides</TabsTrigger>
          <TabsTrigger value="contacts">Expert Contacts</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search & Filter Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search resources..."
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
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="irrigation">Irrigation</SelectItem>
                    <SelectItem value="pesticides">Pesticides</SelectItem>
                    <SelectItem value="schemes">Government Schemes</SelectItem>
                    <SelectItem value="calendar">Crop Calendar</SelectItem>
                    <SelectItem value="equipment">Equipment</SelectItem>
                    <SelectItem value="seeds">Seeds</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                    setSelectedLanguage("all")
                    setSelectedDifficulty("all")
                  }}
                >
                  Clear All
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(resource.category)}
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{resource.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className={getDifficultyColor(resource.difficulty)} variant="outline">
                      {resource.difficulty}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getTypeIcon(resource.type)}
                      {resource.type}
                    </Badge>
                    <Badge variant="outline">
                      {resource.language === "both" ? "Hi/En" : resource.language.toUpperCase()}
                    </Badge>
                    {resource.isOffline && (
                      <Badge variant="outline" className="text-green-600">
                        Offline
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {resource.downloads}
                    </div>
                    {resource.duration && (
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {resource.duration}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    {resource.url && (
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No resources found</h3>
                <p className="text-muted-foreground text-center">
                  Try adjusting your search terms or filters to find relevant resources.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="contacts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Expert Contacts & Support
              </CardTitle>
              <CardDescription>Connect with agricultural experts and local support services</CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact) => (
              <Card key={contact.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{contact.name}</CardTitle>
                  <CardDescription>{contact.designation}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${contact.phone}`} className="hover:underline">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${contact.email}`} className="hover:underline">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{contact.address}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {contact.services.map((service) => (
                        <Badge key={service} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="h-3 w-3 mr-1" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Contacts */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">Emergency Contacts</CardTitle>
              <CardDescription className="text-red-700">
                For urgent agricultural emergencies and disasters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  <div>
                    <div className="font-medium text-red-900">Disaster Helpline</div>
                    <div className="text-sm text-red-700">1077 (Toll Free)</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  <div>
                    <div className="font-medium text-red-900">Kisan Call Centre</div>
                    <div className="text-sm text-red-700">1800-180-1551</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Calculator({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="16" rx="2" width="16" x="4" y="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="m9 10 2 2 4-4" />
    </svg>
  )
}
