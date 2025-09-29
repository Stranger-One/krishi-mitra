import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  MessageSquare,
  Bell,
  BarChart3,
  Activity,
  Server,
  Database,
  Shield,
  Zap,
} from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform overview and system management center</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Globe className="h-4 w-4" />
          <span>All India Platform</span>
        </div>
      </div>

      {/* System Health & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,47,891</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Server className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">99.8%</div>
            <p className="text-xs text-muted-foreground">Uptime this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Queries</CardTitle>
            <MessageSquare className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,672</div>
            <p className="text-xs text-muted-foreground">Across all states</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <Bell className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">Nationwide notifications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
            <Zap className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.4%</div>
            <p className="text-xs text-muted-foreground">Model performance</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Management Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              User Management Overview
            </CardTitle>
            <CardDescription>Platform user statistics and management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-900">1,89,234</div>
                <div className="text-sm text-blue-700">Active Farmers</div>
                <div className="text-xs text-blue-600">+3.2% this week</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-900">2,847</div>
                <div className="text-sm text-green-700">Agricultural Officers</div>
                <div className="text-xs text-green-600">+12 new this month</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Maharashtra</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">45,672</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Uttar Pradesh</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-14 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">38,921</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Punjab</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-12 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">29,847</span>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-transparent">
              Manage All Users
            </Button>
          </CardContent>
        </Card>

        {/* System Alerts & Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-red-600" />
              System Alerts & Notifications
            </CardTitle>
            <CardDescription>Critical system alerts and nationwide notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-red-900">High Server Load</p>
                <p className="text-xs text-red-700">Mumbai region experiencing 85% CPU usage</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="destructive" className="text-xs">
                    Critical
                  </Badge>
                  <span className="text-xs text-red-600">15 minutes ago</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <Database className="h-4 w-4 text-orange-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-orange-900">Database Backup Pending</p>
                <p className="text-xs text-orange-700">Weekly backup scheduled for tonight</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    Scheduled
                  </Badge>
                  <span className="text-xs text-orange-600">2 hours ago</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-900">Security Update Available</p>
                <p className="text-xs text-blue-700">New security patches ready for deployment</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="default" className="text-xs">
                    Deploy Now
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs bg-transparent">
                    Schedule
                  </Button>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-transparent">
              View All System Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Platform Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Query Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Query Analytics
            </CardTitle>
            <CardDescription>Platform-wide query trends</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Crop Health</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full">
                  <div className="w-16 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">18,472</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Weather Queries</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full">
                  <div className="w-14 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">12,847</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Government Schemes</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full">
                  <div className="w-12 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">9,234</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Market Prices</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full">
                  <div className="w-10 h-2 bg-orange-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">7,891</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resource Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-purple-600" />
              Resource Management
            </CardTitle>
            <CardDescription>Central knowledge base status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Crop Datasets</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">2,847 entries</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Pest Libraries</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">1,234 entries</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Scheme Database</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium">Update pending</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Weather Data</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Real-time sync</span>
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Manage Resources
            </Button>
          </CardContent>
        </Card>

        {/* System Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Recent System Activities
            </CardTitle>
            <CardDescription>Latest platform activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Model updated to v2.4.1</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">New state onboarded: Assam</p>
                <p className="text-xs text-muted-foreground">6 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Database optimization completed</p>
                <p className="text-xs text-muted-foreground">12 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Security patch deployed</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Performance Metrics</CardTitle>
          <CardDescription>Key performance indicators across all states and districts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99.2%</div>
              <div className="text-sm text-muted-foreground">Query Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1.8 sec</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">28</div>
              <div className="text-sm text-muted-foreground">Active States</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">847</div>
              <div className="text-sm text-muted-foreground">Active Districts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">92.7%</div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">15</div>
              <div className="text-sm text-muted-foreground">Languages Supported</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}