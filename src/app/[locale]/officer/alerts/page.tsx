"use client"
import Topbar from "@/components/officer/Topbar";

// export default function Page () {
//   return (
//       <>
//         <Topbar location="alerts" />
//         <div className="px-4 sm:px-6 lg:px-8 py-6">
//           {/* <Alerts /> */}
//           Alert Page
//         </div>
//       </>
//     );
// };


import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bell,
  Plus,
  Edit,
  CheckCircle,
  XCircle,
  Send,
  Eye,
  Clock,
  AlertTriangle,
  Cloud,
  Bug,
  IndianRupee,
  Droplets,
} from "lucide-react"

interface AlertDraft {
  id: string
  title: string
  content: string
  type: "weather" | "pest" | "disease" | "government" | "market" | "irrigation"
  severity: "low" | "medium" | "high" | "critical"
  targetAudience: string
  status: "draft" | "pending-approval" | "approved" | "published" | "rejected"
  createdBy: string
  createdAt: Date
  scheduledFor?: Date
  aiGenerated: boolean
}

const mockAlerts: AlertDraft[] = [
  {
    id: "ALT-001",
    title: "Heavy Rainfall Warning - Next 48 Hours",
    content:
      "Heavy to very heavy rainfall (115-204 mm) expected across Pune district in the next 48 hours. Farmers are advised to:\n\n• Ensure proper drainage in fields\n• Avoid pesticide/fertilizer application\n• Harvest mature crops if possible\n• Protect livestock and equipment\n\nFor emergency assistance, contact District Collector Office: 020-26123456",
    type: "weather",
    severity: "high",
    targetAudience: "All farmers in Pune district",
    status: "pending-approval",
    createdBy: "AI System",
    createdAt: new Date(2024, 11, 15, 10, 0),
    aiGenerated: true,
  },
  {
    id: "ALT-002",
    title: "Brown Plant Hopper Alert - Rice Crops",
    content:
      "Brown Plant Hopper (BPH) outbreak detected in Baramati and Indapur talukas. Immediate preventive measures required:\n\n• Monitor rice fields daily\n• Apply recommended insecticides\n• Maintain proper water levels\n• Remove alternate host plants\n\nContact nearest Agricultural Extension Officer for technical support.",
    type: "pest",
    severity: "critical",
    targetAudience: "Rice farmers in Baramati, Indapur",
    status: "draft",
    createdBy: "Dr. Patil (Entomologist)",
    createdAt: new Date(2024, 11, 15, 9, 30),
    aiGenerated: false,
  },
  {
    id: "ALT-003",
    title: "PM-KISAN 16th Installment Released",
    content:
      "The 16th installment of PM-KISAN Samman Nidhi (₹2000) has been released. Eligible farmers should check their bank accounts.\n\nIf payment not received:\n• Verify Aadhaar linking\n• Check land records\n• Visit nearest CSC center\n\nHelpline: 155261 | Portal: pmkisan.gov.in",
    type: "government",
    severity: "medium",
    targetAudience: "All registered PM-KISAN beneficiaries",
    status: "approved",
    createdBy: "Officer Sharma",
    createdAt: new Date(2024, 11, 14, 14, 15),
    scheduledFor: new Date(2024, 11, 15, 18, 0),
    aiGenerated: false,
  },
]

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<AlertDraft[]>(mockAlerts)
  const [selectedAlert, setSelectedAlert] = useState<AlertDraft | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [newAlert, setNewAlert] = useState({
    title: "",
    content: "",
    type: "weather" as const,
    severity: "medium" as const,
    targetAudience: "",
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "weather":
        return <Cloud className="h-4 w-4" />
      case "pest":
        return <Bug className="h-4 w-4" />
      case "government":
        return <IndianRupee className="h-4 w-4" />
      case "irrigation":
        return <Droplets className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "pending-approval":
        return "bg-yellow-100 text-yellow-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "published":
        return "bg-blue-100 text-blue-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
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

  const handleApprove = (id: string) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, status: "approved" as const } : alert)))
  }

  const handleReject = (id: string) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, status: "rejected" as const } : alert)))
  }

  const handlePublish = (id: string) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, status: "published" as const } : alert)))
  }

  const handleCreateAlert = () => {
    // const alert: AlertDraft = {
    //   id: ALT-${String(alerts.length + 1).padStart(3, "0")},
    //   ...newAlert,
    //   status: "draft",
    //   createdBy: "Current Officer",
    //   createdAt: new Date(),
    //   aiGenerated: false,
    // }
    // setAlerts((prev) => [alert, ...prev])
    // setNewAlert({
    //   title: "",
    //   content: "",
    //   type: "weather",
    //   severity: "medium",
    //   targetAudience: "",
    // })
    // setIsCreating(false)
  }

  return (
    <>
    <Topbar location="alerts" />
      
    <div className="space-y-6 px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage Alerts</h1>
          <p className="text-muted-foreground">Review, approve, and publish district-wide alerts</p>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Alert
        </Button>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold text-yellow-900">
                  {alerts.filter((a) => a.status === "pending-approval").length}
                </div>
                <div className="text-sm text-yellow-700">Pending Approval</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-green-900">
                  {alerts.filter((a) => a.status === "approved").length}
                </div>
                <div className="text-sm text-green-700">Approved</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Send className="h-5 w-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-900">
                  {alerts.filter((a) => a.status === "published").length}
                </div>
                <div className="text-sm text-blue-700">Published</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <div className="text-2xl font-bold text-red-900">
                  {alerts.filter((a) => a.severity === "critical").length}
                </div>
                <div className="text-sm text-red-700">Critical Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Alert Modal */}
      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Alert</CardTitle>
            <CardDescription>Draft a new alert for district farmers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Alert Type</label>
                <Select
                  value={newAlert.type}
                  onValueChange={(value: any) => setNewAlert((prev) => ({ ...prev, type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weather">Weather</SelectItem>
                    <SelectItem value="pest">Pest Control</SelectItem>
                    <SelectItem value="disease">Disease</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="market">Market</SelectItem>
                    <SelectItem value="irrigation">Irrigation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Severity</label>
                <Select
                  value={newAlert.severity}
                  onValueChange={(value: any) => setNewAlert((prev) => ({ ...prev, severity: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Title</label>
              <Input
                value={newAlert.title}
                onChange={(e) => setNewAlert((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Alert title..."
              />
            </div>
            <div>
              <label className="text-sm font-medium">Target Audience</label>
              <Input
                value={newAlert.targetAudience}
                onChange={(e) => setNewAlert((prev) => ({ ...prev, targetAudience: e.target.value }))}
                placeholder="e.g., All farmers in Pune district"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Content</label>
              <Textarea
                value={newAlert.content}
                onChange={(e) => setNewAlert((prev) => ({ ...prev, content: e.target.value }))}
                placeholder="Alert content and instructions..."
                className="min-h-[120px]"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleCreateAlert} disabled={!newAlert.title || !newAlert.content}>
                Create Alert
              </Button>
              <Button variant="outline" onClick={() => setIsCreating(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Alerts List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Alert Queue</h2>
          {alerts.map((alert) => (
            <Card
              key={alert.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedAlert?.id === alert.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedAlert(alert)}
            >
              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge >
                        {/* className={${getTypeIcon(alert.type)} bg-transparent} */}
                        {getTypeIcon(alert.type)}
                        <span className="ml-1 capitalize">{alert.type}</span>
                      </Badge>
                      <Badge className={getSeverityColor(alert.severity)} variant="outline">
                        {alert.severity.toUpperCase()}
                      </Badge>
                      {alert.aiGenerated && (
                        <Badge variant="secondary" className="text-xs">
                          AI Generated
                        </Badge>
                      )}
                    </div>
                    <Badge className={getStatusColor(alert.status)}>
                      {alert.status.replace("-", " ").toUpperCase()}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold">{alert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{alert.content}</p>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>By {alert.createdBy}</span>
                    <span>{alert.createdAt.toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alert Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Alert Details</h2>
          {selectedAlert ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {getTypeIcon(selectedAlert.type)}
                    {selectedAlert.title}
                  </CardTitle>
                  <Badge className={getSeverityColor(selectedAlert.severity)} variant="outline">
                    {selectedAlert.severity.toUpperCase()}
                  </Badge>
                </div>
                <CardDescription>
                  {selectedAlert.id} | Created by {selectedAlert.createdBy}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Status */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge className={getStatusColor(selectedAlert.status)}>
                    {selectedAlert.status.replace("-", " ").toUpperCase()}
                  </Badge>
                </div>

                {/* Target Audience */}
                <div>
                  <span className="text-sm font-medium">Target Audience:</span>
                  <p className="text-sm text-muted-foreground mt-1">{selectedAlert.targetAudience}</p>
                </div>

                {/* Content */}
                <div>
                  <span className="text-sm font-medium">Content:</span>
                  <div className="mt-2 p-3 bg-muted rounded-lg">
                    <p className="text-sm whitespace-pre-wrap">{selectedAlert.content}</p>
                  </div>
                </div>

                {/* Scheduled Time */}
                {selectedAlert.scheduledFor && (
                  <div>
                    <span className="text-sm font-medium">Scheduled for:</span>
                    <p className="text-sm text-muted-foreground mt-1">{selectedAlert.scheduledFor.toLocaleString()}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t">
                  {selectedAlert.status === "pending-approval" && (
                    <>
                      <Button size="sm" onClick={() => handleApprove(selectedAlert.id)}>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleReject(selectedAlert.id)}>
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </>
                  )}
                  {selectedAlert.status === "approved" && (
                    <Button size="sm" onClick={() => handlePublish(selectedAlert.id)}>
                      <Send className="h-4 w-4 mr-2" />
                      Publish Now
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Select an Alert</h3>
                <p className="text-muted-foreground text-center">
                  Choose an alert from the queue to review and manage.
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
