import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import {
  Globe,
  Zap,
  Shield,
  Bell,
  Brain,
  Languages,
  ToggleLeft,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground">Configure platform settings and system parameters</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-transparent">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="language" className="space-y-6">
        <TabsList>
          <TabsTrigger value="language">Language Rollout</TabsTrigger>
          <TabsTrigger value="model">Model Updates</TabsTrigger>
          <TabsTrigger value="features">Feature Toggles</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="language" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-blue-600" />
                Language Rollout Configuration
              </CardTitle>
              <CardDescription>Manage language availability per state and district</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Language Status Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-900">Active Languages</span>
                  </div>
                  <div className="text-2xl font-bold text-green-900">8</div>
                  <div className="text-sm text-green-700">Currently supported</div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-900">In Development</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-900">4</div>
                  <div className="text-sm text-blue-700">Being prepared</div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-purple-900">Target Coverage</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-900">22</div>
                  <div className="text-sm text-purple-700">Official languages</div>
                </div>
              </div>

              {/* Language Configuration */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Language Configuration by State</h3>

                <div className="border rounded-lg">
                  <div className="grid grid-cols-5 gap-4 p-4 border-b bg-muted/50 font-medium text-sm">
                    <div>Language</div>
                    <div>Status</div>
                    <div>States Enabled</div>
                    <div>Model Accuracy</div>
                    <div>Actions</div>
                  </div>

                  <div className="divide-y">
                    <div className="grid grid-cols-5 gap-4 p-4 items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Hindi</span>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          Primary
                        </Badge>
                      </div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      <div className="text-sm">All 28 states</div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-2 bg-muted rounded-full">
                            <div className="w-11 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span>97.8%</span>
                        </div>
                      </div>
                      <div>
                        <Switch defaultChecked />
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4 p-4 items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">English</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          Secondary
                        </Badge>
                      </div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      <div className="text-sm">All 28 states</div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-2 bg-muted rounded-full">
                            <div className="w-10 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span>96.4%</span>
                        </div>
                      </div>
                      <div>
                        <Switch defaultChecked />
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4 p-4 items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Marathi</span>
                      </div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      <div className="text-sm">Maharashtra, Goa</div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-2 bg-muted rounded-full">
                            <div className="w-9 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                          <span>94.2%</span>
                        </div>
                      </div>
                      <div>
                        <Switch defaultChecked />
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4 p-4 items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Tamil</span>
                      </div>
                      <div>
                        <Badge variant="secondary">
                          <RefreshCw className="h-3 w-3 mr-1" />
                          Beta Testing
                        </Badge>
                      </div>
                      <div className="text-sm">Tamil Nadu (pilot)</div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-2 bg-muted rounded-full">
                            <div className="w-7 h-2 bg-orange-600 rounded-full"></div>
                          </div>
                          <span>89.1%</span>
                        </div>
                      </div>
                      <div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="model" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                AI Model Updates
              </CardTitle>
              <CardDescription>Manage AI model versions and deployment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Model Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-purple-900">Current Model</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-900">v2.4.1</div>
                  <div className="text-sm text-purple-700">Production deployment</div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-900">Performance</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-900">96.4%</div>
                  <div className="text-sm text-blue-700">Accuracy score</div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-900">Last Update</span>
                  </div>
                  <div className="text-2xl font-bold text-green-900">7 days</div>
                  <div className="text-sm text-green-700">ago</div>
                </div>
              </div>

              {/* Model Version Management */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Model Version Management</h3>

                <div className="border rounded-lg">
                  <div className="grid grid-cols-6 gap-4 p-4 border-b bg-muted/50 font-medium text-sm">
                    <div>Version</div>
                    <div>Status</div>
                    <div>Accuracy</div>
                    <div>Deployment</div>
                    <div>Release Date</div>
                    <div>Actions</div>
                  </div>

                  <div className="divide-y">
                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div className="font-medium">v2.5.0</div>
                      <div>
                        <Badge variant="secondary">
                          <RefreshCw className="h-3 w-3 mr-1" />
                          Testing
                        </Badge>
                      </div>
                      <div className="text-sm">97.2%</div>
                      <div className="text-sm">Staging</div>
                      <div className="text-sm">Pending</div>
                      <div>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Deploy
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div className="font-medium">v2.4.1</div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Production
                        </Badge>
                      </div>
                      <div className="text-sm">96.4%</div>
                      <div className="text-sm">Live</div>
                      <div className="text-sm">7 days ago</div>
                      <div>
                        <Button size="sm" variant="ghost">
                          Current
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div className="font-medium">v2.4.0</div>
                      <div>
                        <Badge variant="outline">Archived</Badge>
                      </div>
                      <div className="text-sm">95.1%</div>
                      <div className="text-sm">Retired</div>
                      <div className="text-sm">3 weeks ago</div>
                      <div>
                        <Button size="sm" variant="ghost">
                          Rollback
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Model Configuration */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Model Configuration</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
                    <Input id="confidence-threshold" defaultValue="0.85" />
                    <p className="text-xs text-muted-foreground">Minimum confidence for auto-responses</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-tokens">Max Response Tokens</Label>
                    <Input id="max-tokens" defaultValue="512" />
                    <p className="text-xs text-muted-foreground">Maximum response length</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ToggleLeft className="h-5 w-5 text-green-600" />
                Feature Toggles
              </CardTitle>
              <CardDescription>Enable or disable platform features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Core Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Core Features</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">AI Query Processing</div>
                      <div className="text-sm text-muted-foreground">Enable AI-powered query responses</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">Voice Input</div>
                      <div className="text-sm text-muted-foreground">Allow voice queries from farmers</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">Image Recognition</div>
                      <div className="text-sm text-muted-foreground">Crop and pest identification from images</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">Weather Integration</div>
                      <div className="text-sm text-muted-foreground">Real-time weather data and alerts</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              {/* Experimental Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Experimental Features</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50 border-blue-200">
                    <div className="space-y-1">
                      <div className="font-medium text-blue-900">Market Price Predictions</div>
                      <div className="text-sm text-blue-700">AI-powered crop price forecasting</div>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        Beta
                      </Badge>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg bg-purple-50 border-purple-200">
                    <div className="space-y-1">
                      <div className="font-medium text-purple-900">Yield Optimization</div>
                      <div className="text-sm text-purple-700">Personalized farming recommendations</div>
                      <Badge variant="outline" className="bg-purple-100 text-purple-800">
                        Alpha
                      </Badge>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg bg-orange-50 border-orange-200">
                    <div className="space-y-1">
                      <div className="font-medium text-orange-900">Satellite Monitoring</div>
                      <div className="text-sm text-orange-700">Crop health monitoring via satellite imagery</div>
                      <Badge variant="outline" className="bg-orange-100 text-orange-800">
                        Coming Soon
                      </Badge>
                    </div>
                    <Switch disabled />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-600" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure system notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Alert Thresholds */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Alert Thresholds</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="query-volume">High Query Volume Alert</Label>
                    <Input id="query-volume" defaultValue="50000" />
                    <p className="text-xs text-muted-foreground">Queries per day threshold</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="response-time">Slow Response Alert</Label>
                    <Input id="response-time" defaultValue="5" />
                    <p className="text-xs text-muted-foreground">Response time in seconds</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="error-rate">Error Rate Alert</Label>
                    <Input id="error-rate" defaultValue="5" />
                    <p className="text-xs text-muted-foreground">Error percentage threshold</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accuracy-drop">Accuracy Drop Alert</Label>
                    <Input id="accuracy-drop" defaultValue="90" />
                    <p className="text-xs text-muted-foreground">Minimum accuracy percentage</p>
                  </div>
                </div>
              </div>

              {/* Notification Channels */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Channels</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-muted-foreground">Send alerts via email</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">SMS Alerts</div>
                      <div className="text-sm text-muted-foreground">Critical alerts via SMS</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">Slack Integration</div>
                      <div className="text-sm text-muted-foreground">Team notifications in Slack</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure security policies and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Security Policies */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Security Policies</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-muted-foreground">Require 2FA for admin accounts</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">API Rate Limiting</div>
                      <div className="text-sm text-muted-foreground">Limit API requests per user</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">Data Encryption</div>
                      <div className="text-sm text-muted-foreground">Encrypt sensitive user data</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              {/* Access Control */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Access Control</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Input id="session-timeout" defaultValue="60" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                    <Input id="max-login-attempts" defaultValue="5" />
                  </div>
                </div>
              </div>

              {/* Security Monitoring */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Security Monitoring</h3>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <span className="font-medium text-red-900">Security Status</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-red-700">Failed Login Attempts (24h)</div>
                      <div className="text-2xl font-bold text-red-900">23</div>
                    </div>
                    <div>
                      <div className="text-red-700">Blocked IP Addresses</div>
                      <div className="text-2xl font-bold text-red-900">7</div>
                    </div>
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