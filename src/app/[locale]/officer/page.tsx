import Topbar from "@/components/officer/Topbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  MapPin,
  MessageSquare,
  Bell,
  BarChart3,
  FileText,
  Activity,
} from "lucide-react"

export default function Page() {
  return (
    <>
      <Topbar location="dashboard" />
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* <Alerts /> */}
        <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Officer Dashboard</h1>
          <p className="text-muted-foreground">District agricultural oversight and management center</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Pune District, Maharashtra</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Queries Today</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Escalations</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <Bell className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">District-wide notifications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">This week average</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Escalations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Recent Escalations
            </CardTitle>
            <CardDescription>Queries requiring manual intervention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-red-900">Crop Disease Outbreak</p>
                <p className="text-xs text-red-700">Multiple farmers reporting leaf blight in Sector 7</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="destructive" className="text-xs">
                    High Priority
                  </Badge>
                  <span className="text-xs text-red-600">2 hours ago</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <Clock className="h-4 w-4 text-orange-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-orange-900">Subsidy Application Issue</p>
                <p className="text-xs text-orange-700">PM-KISAN portal technical difficulties reported</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    Medium Priority
                  </Badge>
                  <span className="text-xs text-orange-600">4 hours ago</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <Users className="h-4 w-4 text-yellow-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-yellow-900">Irrigation Water Shortage</p>
                <p className="text-xs text-yellow-700">Farmers in Block C requesting emergency water supply</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    Medium Priority
                  </Badge>
                  <span className="text-xs text-yellow-600">6 hours ago</span>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-transparent">
              View All Escalations
            </Button>
          </CardContent>
        </Card>

        {/* Alert Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-600" />
              Alert Management
            </CardTitle>
            <CardDescription>Pending alerts for district publication</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Bell className="h-4 w-4 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-900">Weather Alert Draft</p>
                <p className="text-xs text-blue-700">Heavy rainfall warning for next 48 hours</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="default" className="text-xs">
                    Approve & Publish
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs bg-transparent">
                    Edit
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-green-900">Pest Control Advisory</p>
                <p className="text-xs text-green-700">Brown plant hopper prevention measures</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="default" className="text-xs">
                    Approve & Publish
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs bg-transparent">
                    Edit
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <FileText className="h-4 w-4 text-purple-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-purple-900">Scheme Notification</p>
                <p className="text-xs text-purple-700">New crop insurance enrollment deadline</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="default" className="text-xs">
                    Approve & Publish
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs bg-transparent">
                    Edit
                  </Button>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-transparent">
              Manage All Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* District Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Query Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Top Query Categories
            </CardTitle>
            <CardDescription>Most common farmer inquiries</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Crop Health</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full">
                  <div className="w-16 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">342</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Weather Queries</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full">
                  <div className="w-12 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">287</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Government Schemes</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full">
                  <div className="w-10 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">198</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Pest Control</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full">
                  <div className="w-8 h-2 bg-red-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">156</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest district actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Published weather alert</p>
                <p className="text-xs text-muted-foreground">30 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Updated pest advisory</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Resolved escalation #1247</p>
                <p className="text-xs text-muted-foreground">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">Added new scheme data</p>
                <p className="text-xs text-muted-foreground">6 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common officer tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Bell className="h-4 w-4 mr-2" />
              Create New Alert
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <FileText className="h-4 w-4 mr-2" />
              Upload Advisory
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <BarChart3 className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Users className="h-4 w-4 mr-2" />
              Farmer Outreach
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>District Performance Metrics</CardTitle>
          <CardDescription>Key performance indicators for the district</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98.5%</div>
              <div className="text-sm text-muted-foreground">Query Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2.3 min</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15,847</div>
              <div className="text-sm text-muted-foreground">Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">89.2%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Score</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
      </div>
    </>
  );
}
