"use client"

import Topbar from "@/components/officer/Topbar";

// export default function Page () {
//   return (
//       <>
//         <Topbar location="escalations" />
//         <div className="px-4 sm:px-6 lg:px-8 py-6">
//           {/* <Alerts /> */}
//           Escalations page
//         </div>
//       </>
//     );
// };


import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertTriangle,
  Clock,
  User,
  MapPin,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Filter,
  Calendar,
  Phone,
  Mail,
} from "lucide-react"

interface Escalation {
  id: string
  farmerId: string
  farmerName: string
  farmerPhone: string
  location: string
  category: string
  priority: "low" | "medium" | "high" | "critical"
  title: string
  description: string
  originalQuery: string
  aiResponse: string
  escalationReason: string
  timestamp: Date
  status: "pending" | "in-progress" | "resolved" | "closed"
  assignedTo?: string
}

const mockEscalations: Escalation[] = [
  {
    id: "ESC-001",
    farmerId: "F12345",
    farmerName: "राम कुमार शर्मा",
    farmerPhone: "+91 9876543210",
    location: "Village Khed, Pune",
    category: "crop-disease",
    priority: "critical",
    title: "Severe Crop Disease Outbreak",
    description: "Multiple crops showing severe yellowing and wilting. AI couldn't provide specific treatment.",
    originalQuery: "मेरी सभी फसलों में पीले पत्ते और मुरझाना दिख रहा है। क्या करूं?",
    aiResponse: "यह नाइट्रोजन की कमी हो सकती है। उर्वरक का उपयोग करें।",
    escalationReason: "Farmer reported AI solution ineffective, symptoms worsening",
    timestamp: new Date(2024, 11, 15, 9, 30),
    status: "pending",
  },
  {
    id: "ESC-002",
    farmerId: "F12346",
    farmerName: "सुनीता देवी",
    farmerPhone: "+91 9876543211",
    location: "Village Baramati, Pune",
    category: "government-scheme",
    priority: "high",
    title: "PM-KISAN Application Rejected",
    description: "Application rejected multiple times despite correct documentation.",
    originalQuery: "PM-KISAN के लिए आवेदन कैसे करें?",
    aiResponse: "ऑनलाइन पोर्टल पर जाकर आधार कार्ड से आवेदन करें।",
    escalationReason: "Application rejected 3 times, needs manual verification",
    timestamp: new Date(2024, 11, 15, 8, 15),
    status: "in-progress",
    assignedTo: "Officer Patil",
  },
  {
    id: "ESC-003",
    farmerId: "F12347",
    farmerName: "विकास जाधव",
    farmerPhone: "+91 9876543212",
    location: "Village Shirur, Pune",
    category: "irrigation",
    priority: "high",
    title: "Water Supply Emergency",
    description: "Complete water shortage affecting 50+ acres of crops.",
    originalQuery: "पानी की कमी के कारण फसल सूख रही है।",
    aiResponse: "स्थानीय जल संसाधन विभाग से संपर्क करें।",
    escalationReason: "Emergency situation requiring immediate intervention",
    timestamp: new Date(2024, 11, 14, 16, 45),
    status: "pending",
  },
]

export default function EscalationsPage() {
  const [escalations, setEscalations] = useState<Escalation[]>(mockEscalations)
  const [selectedEscalation, setSelectedEscalation] = useState<Escalation | null>(null)
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")
  const [resolution, setResolution] = useState("")

  const filteredEscalations = escalations.filter((esc) => {
    const matchesStatus = filterStatus === "all" || esc.status === filterStatus
    const matchesPriority = filterPriority === "all" || esc.priority === filterPriority
    return matchesStatus && matchesPriority
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-red-100 text-red-800"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleResolve = (id: string) => {
    setEscalations((prev) => prev.map((esc) => (esc.id === id ? { ...esc, status: "resolved" as const } : esc)))
    setSelectedEscalation(null)
    setResolution("")
  }

  const handleAssign = (id: string, officer: string) => {
    setEscalations((prev) =>
      prev.map((esc) => (esc.id === id ? { ...esc, status: "in-progress" as const, assignedTo: officer } : esc)),
    )
  }

  return (
    <>
    <Topbar location="escalations" />
    <div className="space-y-6 px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Escalated Queries</h1>
          <p className="text-muted-foreground">Queries requiring manual intervention and expert review</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            {escalations.filter((e) => e.status === "pending").length} Pending
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {escalations.filter((e) => e.status === "in-progress").length} In Progress
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterPriority} onValueChange={setFilterPriority}>
              <SelectTrigger>
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setFilterStatus("all")
                setFilterPriority("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Escalations List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Escalation Queue</h2>
          {filteredEscalations.map((escalation) => (
            <Card
              key={escalation.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedEscalation?.id === escalation.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedEscalation(escalation)}
            >
              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(escalation.priority)} variant="outline">
                        {escalation.priority.toUpperCase()}
                      </Badge>
                      <Badge className={getStatusColor(escalation.status)}>
                        {escalation.status.replace("-", " ").toUpperCase()}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{escalation.id}</span>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="font-semibold text-lg">{escalation.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{escalation.description}</p>
                  </div>

                  {/* Farmer Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {escalation.farmerName}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {escalation.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {escalation.timestamp.toLocaleDateString()}
                    </div>
                  </div>

                  {/* Assigned Officer */}
                  {escalation.assignedTo && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Assigned to:</span>
                      <Badge variant="outline">{escalation.assignedTo}</Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Escalation Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Escalation Details</h2>
          {selectedEscalation ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{selectedEscalation.title}</span>
                  <Badge className={getPriorityColor(selectedEscalation.priority)} variant="outline">
                    {selectedEscalation.priority.toUpperCase()}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Escalation ID: {selectedEscalation.id} | Category: {selectedEscalation.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Farmer Information */}
                <div className="space-y-3">
                  <h4 className="font-medium">Farmer Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{selectedEscalation.farmerName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{selectedEscalation.farmerPhone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedEscalation.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedEscalation.timestamp.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Original Query */}
                <div className="space-y-2">
                  <h4 className="font-medium">Original Query</h4>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm">{selectedEscalation.originalQuery}</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="space-y-2">
                  <h4 className="font-medium">AI Response</h4>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm">{selectedEscalation.aiResponse}</p>
                  </div>
                </div>

                {/* Escalation Reason */}
                <div className="space-y-2">
                  <h4 className="font-medium">Escalation Reason</h4>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm">{selectedEscalation.escalationReason}</p>
                  </div>
                </div>

                {/* Resolution Section */}
                {selectedEscalation.status === "pending" && (
                  <div className="space-y-3">
                    <h4 className="font-medium">Resolution</h4>
                    <Textarea
                      placeholder="Provide detailed resolution and recommendations..."
                      value={resolution}
                      onChange={(e) => setResolution(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex gap-2">
                      <Button onClick={() => handleResolve(selectedEscalation.id)} disabled={!resolution.trim()}>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Resolve
                      </Button>
                      <Button variant="outline" onClick={() => handleAssign(selectedEscalation.id, "Officer Singh")}>
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Assign to Expert
                      </Button>
                    </div>
                  </div>
                )}

                {/* Contact Actions */}
                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Farmer
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Send SMS
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Select an Escalation</h3>
                <p className="text-muted-foreground text-center">
                  Choose an escalation from the list to view details and take action.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
    </>
  )
}
