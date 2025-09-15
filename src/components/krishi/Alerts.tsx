"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertTriangle,
  Cloud,
  Bug,
  Droplets,
  MapPin,
  Calendar,
  Clock,
  Bell,
  BellOff,
  Filter,
  CheckCircle,
  XCircle,
  Info,
  Zap,
  IndianRupee,
  Leaf,
  Settings,
} from "lucide-react"

interface Alert {
  id: string
  title: string
  description: string
  type: "weather" | "pest" | "disease" | "government" | "market" | "irrigation"
  severity: "low" | "medium" | "high" | "critical"
  location: string
  timestamp: Date
  isRead: boolean
  isActive: boolean
  actionRequired: boolean
  source: string
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    title: "Heavy Rainfall Warning",
    description:
      "Heavy to very heavy rainfall expected in next 48 hours. Ensure proper drainage in fields and avoid pesticide application.",
    type: "weather",
    severity: "high",
    location: "Pune District",
    timestamp: new Date(2024, 11, 15, 8, 0),
    isRead: false,
    isActive: true,
    actionRequired: true,
    source: "IMD Weather Service",
  },
  {
    id: "2",
    title: "Brown Plant Hopper Outbreak",
    description:
      "Brown Plant Hopper detected in nearby rice fields. Immediate preventive measures recommended for rice crops.",
    type: "pest",
    severity: "critical",
    location: "Satara District",
    timestamp: new Date(2024, 11, 15, 6, 30),
    isRead: false,
    isActive: true,
    actionRequired: true,
    source: "State Agriculture Department",
  },
  {
    id: "3",
    title: "PM-KISAN Payment Released",
    description:
      "PM-KISAN 16th installment of ₹2000 has been released. Check your bank account for payment confirmation.",
    type: "government",
    severity: "medium",
    location: "Maharashtra",
    timestamp: new Date(2024, 11, 14, 14, 15),
    isRead: true,
    isActive: true,
    actionRequired: false,
    source: "PM-KISAN Portal",
  },
  {
    id: "4",
    title: "Wheat Price Surge",
    description: "Wheat prices increased by 8% in local mandis. Good time to sell stored wheat produce.",
    type: "market",
    severity: "medium",
    location: "Pune Mandi",
    timestamp: new Date(2024, 11, 14, 10, 45),
    isRead: true,
    isActive: true,
    actionRequired: false,
    source: "Market Intelligence",
  },
  {
    id: "5",
    title: "Irrigation Schedule Reminder",
    description: "Scheduled irrigation for wheat field Block-A due tomorrow at 6:00 AM. Ensure water availability.",
    type: "irrigation",
    severity: "low",
    location: "Your Farm",
    timestamp: new Date(2024, 11, 13, 18, 0),
    isRead: true,
    isActive: true,
    actionRequired: true,
    source: "Krishi Assistant",
  },
  {
    id: "6",
    title: "Leaf Blight Disease Alert",
    description:
      "Early signs of leaf blight detected in nearby wheat fields. Monitor your crops and apply fungicide if symptoms appear.",
    type: "disease",
    severity: "high",
    location: "Ahmednagar District",
    timestamp: new Date(2024, 11, 13, 12, 20),
    isRead: false,
    isActive: true,
    actionRequired: true,
    source: "Crop Health Monitoring",
  },
]

export default function Alerts() {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts)
  const [selectedType, setSelectedType] = useState("all")
  const [selectedSeverity, setSelectedSeverity] = useState("all")
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  const filteredAlerts = alerts.filter((alert) => {
    const matchesType = selectedType === "all" || alert.type === selectedType
    const matchesSeverity = selectedSeverity === "all" || alert.severity === selectedSeverity
    const matchesReadStatus = !showOnlyUnread || !alert.isRead

    return matchesType && matchesSeverity && matchesReadStatus && alert.isActive
  })

  const markAsRead = (id: string) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, isRead: true } : alert)))
  }

  const markAllAsRead = () => {
    setAlerts((prev) => prev.map((alert) => ({ ...alert, isRead: true })))
  }

  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, isActive: false } : alert)))
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "weather":
        return <Cloud className="h-4 w-4" />
      case "pest":
        return <Bug className="h-4 w-4" />
      case "disease":
        return <Leaf className="h-4 w-4" />
      case "government":
        return <IndianRupee className="h-4 w-4" />
      case "market":
        return <IndianRupee className="h-4 w-4" />
      case "irrigation":
        return <Droplets className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "weather":
        return "bg-blue-100 text-blue-800"
      case "pest":
        return "bg-red-100 text-red-800"
      case "disease":
        return "bg-orange-100 text-orange-800"
      case "government":
        return "bg-green-100 text-green-800"
      case "market":
        return "bg-purple-100 text-purple-800"
      case "irrigation":
        return "bg-cyan-100 text-cyan-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const unreadCount = alerts.filter((alert) => !alert.isRead && alert.isActive).length
  const criticalCount = alerts.filter((alert) => alert.severity === "critical" && alert.isActive).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">District Alerts</h1>
          <p className="text-muted-foreground">Stay updated with important farming alerts and notifications</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={criticalCount > 0 ? "destructive" : "secondary"} className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            {criticalCount} Critical
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Bell className="h-3 w-3" />
            {unreadCount} Unread
          </Badge>
        </div>
      </div>

      {/* Alert Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <div className="text-2xl font-bold text-red-900">{criticalCount}</div>
                <div className="text-sm text-red-700">Critical Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-orange-600" />
              <div>
                <div className="text-2xl font-bold text-orange-900">
                  {alerts.filter((a) => a.type === "weather" && a.isActive).length}
                </div>
                <div className="text-sm text-orange-700">Weather Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Bug className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-green-900">
                  {alerts.filter((a) => (a.type === "pest" || a.type === "disease") && a.isActive).length}
                </div>
                <div className="text-sm text-green-700">Crop Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <IndianRupee className="h-5 w-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-900">
                  {alerts.filter((a) => (a.type === "government" || a.type === "market") && a.isActive).length}
                </div>
                <div className="text-sm text-blue-700">Financial Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters & Settings
            </CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} id="notifications" />
                <label htmlFor="notifications" className="text-sm font-medium flex items-center gap-1">
                  {notificationsEnabled ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
                  Notifications
                </label>
              </div>
              <Button variant="outline" size="sm" onClick={markAllAsRead}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark All Read
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Alert Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="weather">Weather</SelectItem>
                <SelectItem value="pest">Pest Control</SelectItem>
                <SelectItem value="disease">Disease</SelectItem>
                <SelectItem value="government">Government</SelectItem>
                <SelectItem value="market">Market</SelectItem>
                <SelectItem value="irrigation">Irrigation</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
              <SelectTrigger>
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Switch checked={showOnlyUnread} onCheckedChange={setShowOnlyUnread} id="unread-only" />
              <label htmlFor="unread-only" className="text-sm font-medium">
                Unread Only
              </label>
            </div>

            <Button
              variant="outline"
              onClick={() => {
                setSelectedType("all")
                setSelectedSeverity("all")
                setShowOnlyUnread(false)
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Bell className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No alerts found</h3>
              <p className="text-muted-foreground text-center">
                {selectedType !== "all" || selectedSeverity !== "all" || showOnlyUnread
                  ? "Try adjusting your filters to see more alerts."
                  : "All caught up! No new alerts at the moment."}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredAlerts.map((alert) => (
            <Card
              key={alert.id}
              className={`transition-all hover:shadow-md ${
                !alert.isRead ? "border-l-4 border-l-primary bg-primary/5" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    {/* Alert Header */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={getTypeColor(alert.type)}>
                        {getTypeIcon(alert.type)}
                        <span className="ml-1 capitalize">{alert.type}</span>
                      </Badge>
                      <Badge className={getSeverityColor(alert.severity)} variant="outline">
                        {alert.severity.toUpperCase()}
                      </Badge>
                      {alert.actionRequired && (
                        <Badge variant="destructive" className="animate-pulse">
                          <Zap className="h-3 w-3 mr-1" />
                          Action Required
                        </Badge>
                      )}
                      {!alert.isRead && (
                        <Badge variant="default" className="bg-primary">
                          New
                        </Badge>
                      )}
                    </div>

                    {/* Alert Content */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{alert.title}</h3>
                      <p className="text-muted-foreground mb-3">{alert.description}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {alert.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {alert.timestamp.toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {alert.timestamp.toLocaleTimeString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Info className="h-3 w-3" />
                          {alert.source}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {alert.actionRequired && (
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="default">
                          Take Action
                        </Button>
                        <Button size="sm" variant="outline">
                          Learn More
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Alert Actions */}
                  <div className="flex flex-col gap-2">
                    {!alert.isRead && (
                      <Button variant="ghost" size="sm" onClick={() => markAsRead(alert.id)} className="h-8 w-8 p-0">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => dismissAlert(alert.id)}
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Alert Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Alert Preferences
          </CardTitle>
          <CardDescription>Customize which alerts you want to receive</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Alert Types</h4>
              {[
                { type: "weather", label: "Weather Alerts", icon: Cloud },
                { type: "pest", label: "Pest Control", icon: Bug },
                { type: "disease", label: "Disease Alerts", icon: Leaf },
              ].map(({ type, label, icon: Icon }) => (
                <div key={type} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{label}</span>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Notification Methods</h4>
              {[
                { method: "push", label: "Push Notifications" },
                { method: "sms", label: "SMS Alerts" },
                { method: "email", label: "Email Notifications" },
              ].map(({ method, label }) => (
                <div key={method} className="flex items-center justify-between">
                  <span className="text-sm">{label}</span>
                  <Switch defaultChecked={method === "push"} />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
