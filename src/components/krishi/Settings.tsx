"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Settings,
  User,
  Bell,
  Phone,
  Mail,
  Camera,
  Save,
  Download,
  Upload,
  Trash2,
  Shield,
  Database,
  Smartphone,
  Volume2,
  Moon,
  Sun,
  Languages,
  Leaf,
  Tractor,
} from "lucide-react"

interface UserProfile {
  name: string
  email: string
  phone: string
  location: string
  farmSize: string
  primaryCrops: string[]
  experience: string
  avatar?: string
}

interface NotificationSettings {
  weather: boolean
  pest: boolean
  disease: boolean
  government: boolean
  market: boolean
  irrigation: boolean
  pushNotifications: boolean
  smsAlerts: boolean
  emailNotifications: boolean
}

interface AppSettings {
  language: string
  theme: "light" | "dark" | "system"
  voiceEnabled: boolean
  offlineMode: boolean
  dataSync: boolean
  autoBackup: boolean
}

export default function SettingsComp() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "राम शर्मा",
    email: "ram.sharma@gmail.com",
    phone: "+91-98765-43210",
    location: "Pune, Maharashtra",
    farmSize: "5.5 acres",
    primaryCrops: ["Wheat", "Rice", "Sugarcane"],
    experience: "15 years",
  })

  const [notifications, setNotifications] = useState<NotificationSettings>({
    weather: true,
    pest: true,
    disease: true,
    government: true,
    market: false,
    irrigation: true,
    pushNotifications: true,
    smsAlerts: true,
    emailNotifications: false,
  })

  const [appSettings, setAppSettings] = useState<AppSettings>({
    language: "hi",
    theme: "light",
    voiceEnabled: true,
    offlineMode: true,
    dataSync: true,
    autoBackup: true,
  })

  const [activeTab, setActiveTab] = useState("profile")

  const handleProfileUpdate = () => {
    // Handle profile update logic
    console.log("Profile updated:", profile)
  }

  const handleNotificationUpdate = () => {
    // Handle notification settings update
    console.log("Notifications updated:", notifications)
  }

  const handleAppSettingsUpdate = () => {
    // Handle app settings update
    console.log("App settings updated:", appSettings)
  }

  const exportData = () => {
    // Handle data export
    console.log("Exporting user data...")
  }

  const importData = () => {
    // Handle data import
    console.log("Importing user data...")
  }

  const deleteAccount = () => {
    // Handle account deletion
    console.log("Account deletion requested...")
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your profile, notifications, and app preferences</p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-1">
          <Settings className="h-3 w-3" />
          Preferences
        </Badge>
      </div>

      {/* Settings Navigation */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "profile", label: "Profile", icon: User },
              { id: "notifications", label: "Notifications", icon: Bell },
              { id: "app", label: "App Settings", icon: Smartphone },
              { id: "data", label: "Data & Privacy", icon: Database },
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={activeTab === id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(id)}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Profile Settings */}
      {activeTab === "profile" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your personal and farming details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={profile.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-lg">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Change Photo
                  </Button>
                  <p className="text-sm text-muted-foreground">JPG, PNG up to 2MB</p>
                </div>
              </div>

              <Separator />

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  />
                </div>
              </div>

              <Separator />

              {/* Farming Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Tractor className="h-5 w-5" />
                  Farming Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="farmSize">Farm Size</Label>
                    <Input
                      id="farmSize"
                      value={profile.farmSize}
                      onChange={(e) => setProfile({ ...profile, farmSize: e.target.value })}
                      placeholder="e.g., 5.5 acres"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Farming Experience</Label>
                    <Select
                      value={profile.experience}
                      onValueChange={(value) => setProfile({ ...profile, experience: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5 years">1-5 years</SelectItem>
                        <SelectItem value="5-10 years">5-10 years</SelectItem>
                        <SelectItem value="10-20 years">10-20 years</SelectItem>
                        <SelectItem value="20+ years">20+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Primary Crops</Label>
                  <div className="flex flex-wrap gap-2">
                    {profile.primaryCrops.map((crop) => (
                      <Badge key={crop} variant="secondary" className="flex items-center gap-1">
                        <Leaf className="h-3 w-3" />
                        {crop}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() =>
                            setProfile({
                              ...profile,
                              primaryCrops: profile.primaryCrops.filter((c) => c !== crop),
                            })
                          }
                        >
                          ×
                        </Button>
                      </Badge>
                    ))}
                    <Button variant="outline" size="sm">
                      + Add Crop
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleProfileUpdate}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Notification Settings */}
      {activeTab === "notifications" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose which alerts and notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Alert Types */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Alert Types</h3>
                <div className="space-y-4">
                  {[
                    {
                      key: "weather",
                      label: "Weather Alerts",
                      description: "Heavy rain, drought, temperature warnings",
                    },
                    { key: "pest", label: "Pest Control", description: "Pest outbreaks and prevention measures" },
                    { key: "disease", label: "Disease Alerts", description: "Crop disease warnings and treatments" },
                    {
                      key: "government",
                      label: "Government Schemes",
                      description: "New schemes, subsidies, and policy updates",
                    },
                    { key: "market", label: "Market Prices", description: "Price changes and market trends" },
                    {
                      key: "irrigation",
                      label: "Irrigation Reminders",
                      description: "Scheduled irrigation and water management",
                    },
                  ].map(({ key, label, description }) => (
                    <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">{label}</div>
                        <div className="text-sm text-muted-foreground">{description}</div>
                      </div>
                      <Switch
                        checked={notifications[key as keyof NotificationSettings] as boolean}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, [key]: checked })}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Delivery Methods */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Delivery Methods</h3>
                <div className="space-y-4">
                  {[
                    {
                      key: "pushNotifications",
                      label: "Push Notifications",
                      description: "Instant notifications on your device",
                      icon: Smartphone,
                    },
                    {
                      key: "smsAlerts",
                      label: "SMS Alerts",
                      description: "Text messages for critical alerts",
                      icon: Phone,
                    },
                    {
                      key: "emailNotifications",
                      label: "Email Notifications",
                      description: "Daily/weekly summary emails",
                      icon: Mail,
                    },
                  ].map(({ key, label, description, icon: Icon }) => (
                    <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <div className="space-y-1">
                          <div className="font-medium">{label}</div>
                          <div className="text-sm text-muted-foreground">{description}</div>
                        </div>
                      </div>
                      <Switch
                        checked={notifications[key as keyof NotificationSettings] as boolean}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, [key]: checked })}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleNotificationUpdate}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* App Settings */}
      {activeTab === "app" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                App Settings
              </CardTitle>
              <CardDescription>Customize your app experience and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Language & Region */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Language & Region
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">App Language</Label>
                    <Select
                      value={appSettings.language}
                      onValueChange={(value) => setAppSettings({ ...appSettings, language: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="mr">मराठी (Marathi)</SelectItem>
                        <SelectItem value="gu">ગુજરાતી (Gujarati)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select
                      value={appSettings.theme}
                      onValueChange={(value: "light" | "dark" | "system") =>
                        setAppSettings({ ...appSettings, theme: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">
                          <div className="flex items-center gap-2">
                            <Sun className="h-4 w-4" />
                            Light
                          </div>
                        </SelectItem>
                        <SelectItem value="dark">
                          <div className="flex items-center gap-2">
                            <Moon className="h-4 w-4" />
                            Dark
                          </div>
                        </SelectItem>
                        <SelectItem value="system">
                          <div className="flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            System
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              {/* App Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">App Features</h3>
                <div className="space-y-4">
                  {[
                    {
                      key: "voiceEnabled",
                      label: "Voice Input",
                      description: "Enable voice queries and speech recognition",
                      icon: Volume2,
                    },
                    {
                      key: "offlineMode",
                      label: "Offline Mode",
                      description: "Access resources without internet connection",
                      icon: Download,
                    },
                    {
                      key: "dataSync",
                      label: "Data Sync",
                      description: "Sync data across multiple devices",
                      icon: Database,
                    },
                    {
                      key: "autoBackup",
                      label: "Auto Backup",
                      description: "Automatically backup your data and settings",
                      icon: Shield,
                    },
                  ].map(({ key, label, description, icon: Icon }) => (
                    <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <div className="space-y-1">
                          <div className="font-medium">{label}</div>
                          <div className="text-sm text-muted-foreground">{description}</div>
                        </div>
                      </div>
                      <Switch
                        checked={appSettings[key as keyof AppSettings] as boolean}
                        onCheckedChange={(checked) => setAppSettings({ ...appSettings, [key]: checked })}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleAppSettingsUpdate}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Data & Privacy */}
      {activeTab === "data" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Data & Privacy
              </CardTitle>
              <CardDescription>Manage your data, privacy settings, and account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Data Management */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Download className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">Export Data</div>
                          <div className="text-sm text-muted-foreground">Download all your data</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={exportData} className="w-full bg-transparent">
                        Export Data
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Upload className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium">Import Data</div>
                          <div className="text-sm text-muted-foreground">Restore from backup</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={importData} className="w-full bg-transparent">
                        Import Data
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Privacy Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Privacy Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">Data Collection</div>
                      <div className="text-sm text-muted-foreground">
                        Allow anonymous usage data collection to improve the app
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">Location Services</div>
                      <div className="text-sm text-muted-foreground">Use location for weather and local alerts</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">Personalized Content</div>
                      <div className="text-sm text-muted-foreground">
                        Show personalized recommendations based on your farming data
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Account Actions */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
                <Card className="border-destructive">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="font-medium text-destructive">Delete Account</div>
                        <div className="text-sm text-muted-foreground">
                          Permanently delete your account and all associated data
                        </div>
                      </div>
                      <Button variant="destructive" size="sm" onClick={deleteAccount}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
