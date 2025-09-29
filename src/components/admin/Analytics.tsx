import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  TrendingUp,
  Users,
  MessageSquare,
  Globe,
  MapPin,
  Clock,
  Target,
  Activity,
  Brain,
  Database,
  Server,
  AlertTriangle,
} from "lucide-react"

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">AI performance, usage trends, and platform insights</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-transparent">
            <BarChart3 className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <TrendingUp className="h-4 w-4 mr-2" />
            Generate Insights
          </Button>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
            <Brain className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">96.4%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">1.8s</div>
            <p className="text-xs text-muted-foreground">-0.3s improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Queries</CardTitle>
            <MessageSquare className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">45,672</div>
            <p className="text-xs text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Target className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">99.2%</div>
            <p className="text-xs text-muted-foreground">Queries resolved</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Satisfaction</CardTitle>
            <Users className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">92.7%</div>
            <p className="text-xs text-muted-foreground">Based on feedback</p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="ai-performance" className="space-y-6">
        <TabsList>
          <TabsTrigger value="ai-performance">AI Performance</TabsTrigger>
          <TabsTrigger value="usage-trends">Usage Trends</TabsTrigger>
          <TabsTrigger value="geographic">Geographic Analysis</TabsTrigger>
          <TabsTrigger value="system-health">System Health</TabsTrigger>
        </TabsList>

        <TabsContent value="ai-performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AI Model Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  AI Model Performance
                </CardTitle>
                <CardDescription>Model accuracy and performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Crop Health Queries</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-19 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">97.8%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pest Identification</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-18 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">96.2%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Weather Predictions</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-17 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">94.5%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Scheme Recommendations</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-19 h-2 bg-orange-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">98.1%</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">v2.4.1</div>
                      <div className="text-sm text-muted-foreground">Current Model</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">+3.2%</div>
                      <div className="text-sm text-muted-foreground">Improvement</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Query Resolution Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Query Resolution Analysis
                </CardTitle>
                <CardDescription>How queries are being resolved</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-green-900">AI Resolved</span>
                        <span className="text-sm font-medium text-green-900">89.2%</span>
                      </div>
                      <p className="text-sm text-green-700">Queries resolved by AI without escalation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-blue-900">Officer Assisted</span>
                        <span className="text-sm font-medium text-blue-900">8.7%</span>
                      </div>
                      <p className="text-sm text-blue-700">Queries requiring officer intervention</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-orange-900">Escalated</span>
                        <span className="text-sm font-medium text-orange-900">2.1%</span>
                      </div>
                      <p className="text-sm text-orange-700">Complex queries requiring expert review</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">1.8 sec</div>
                    <div className="text-sm text-muted-foreground">Average Resolution Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Model Training & Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-600" />
                Model Training & Updates
              </CardTitle>
              <CardDescription>Recent model improvements and training data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">2.4M</div>
                  <div className="text-sm text-muted-foreground">Training Queries</div>
                  <div className="text-xs text-blue-600 mt-1">Last 30 days</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">15</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                  <div className="text-xs text-green-600 mt-1">Supported</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">847</div>
                  <div className="text-sm text-muted-foreground">Districts</div>
                  <div className="text-xs text-purple-600 mt-1">Data coverage</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">99.8%</div>
                  <div className="text-sm text-muted-foreground">Data Quality</div>
                  <div className="text-xs text-orange-600 mt-1">Validation score</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage-trends" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Query Volume Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Query Volume Trends
                </CardTitle>
                <CardDescription>Daily and monthly query patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Today</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-16 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">45,672</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Yesterday</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-14 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">40,821</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">This Week</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-18 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">287,456</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">This Month</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-19 h-2 bg-orange-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">1,234,567</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">+12%</div>
                      <div className="text-sm text-muted-foreground">Growth Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">Peak: 14:00</div>
                      <div className="text-sm text-muted-foreground">Daily Peak Hour</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Engagement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  User Engagement
                </CardTitle>
                <CardDescription>User activity and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Activity className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-blue-900">Daily Active Users</span>
                        <span className="text-sm font-medium text-blue-900">89,234</span>
                      </div>
                      <p className="text-sm text-blue-700">+8.2% from last week</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <MessageSquare className="h-4 w-4 text-green-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-green-900">Avg Queries per User</span>
                        <span className="text-sm font-medium text-green-900">3.2</span>
                      </div>
                      <p className="text-sm text-green-700">Consistent engagement</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <Clock className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-purple-900">Session Duration</span>
                        <span className="text-sm font-medium text-purple-900">4.7 min</span>
                      </div>
                      <p className="text-sm text-purple-700">Average session time</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">92.7%</div>
                    <div className="text-sm text-muted-foreground">User Satisfaction Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Popular Query Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                Popular Query Categories
              </CardTitle>
              <CardDescription>Most common types of farmer queries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Crop Health & Disease</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-20 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">18,472</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Weather & Climate</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">12,847</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Government Schemes</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-14 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">9,234</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Market Prices</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-12 h-2 bg-orange-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">7,891</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pest Control</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-10 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">6,543</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Soil & Fertilizers</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-8 h-2 bg-yellow-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">5,234</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Irrigation</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-6 h-2 bg-teal-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">4,123</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Others</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-4 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">2,891</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="geographic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* State-wise Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  State-wise Usage
                </CardTitle>
                <CardDescription>Query distribution across Indian states</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Maharashtra</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">8,472</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Uttar Pradesh</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-14 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">7,234</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Punjab</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-12 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">6,123</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Karnataka</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-10 h-2 bg-orange-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">5,891</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Haryana</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div className="w-8 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">4,567</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* District Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Top Performing Districts
                </CardTitle>
                <CardDescription>Districts with highest engagement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Pune, Maharashtra</div>
                      <div className="text-xs text-muted-foreground">98.2% satisfaction</div>
                    </div>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      Excellent
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Ludhiana, Punjab</div>
                      <div className="text-xs text-muted-foreground">96.7% satisfaction</div>
                    </div>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      Excellent
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Lucknow, UP</div>
                      <div className="text-xs text-muted-foreground">94.3% satisfaction</div>
                    </div>
                    <Badge variant="secondary">Good</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Bangalore, Karnataka</div>
                      <div className="text-xs text-muted-foreground">92.1% satisfaction</div>
                    </div>
                    <Badge variant="secondary">Good</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Language Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-600" />
                Language Distribution
              </CardTitle>
              <CardDescription>Query distribution by language preference</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Hindi</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div className="w-12 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">42.3%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">English</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div className="w-8 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">28.7%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Marathi</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div className="w-4 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">12.1%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Punjabi</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div className="w-3 h-2 bg-orange-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">8.9%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Others</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">8.0%</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-900 mb-2">Language Rollout Status</h4>
                    <div className="space-y-2 text-sm text-blue-700">
                      <div>✅ Phase 1: Hindi, English, Marathi, Punjabi</div>
                      <div>🔄 Phase 2: Tamil, Telugu, Gujarati (In Progress)</div>
                      <div>📋 Phase 3: Bengali, Kannada, Malayalam (Planned)</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system-health" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* System Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-blue-600" />
                  System Performance
                </CardTitle>
                <CardDescription>Infrastructure and system health metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-green-900">System Uptime</span>
                        <span className="text-sm font-medium text-green-900">99.8%</span>
                      </div>
                      <p className="text-sm text-green-700">Excellent availability this month</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-blue-900">Response Time</span>
                        <span className="text-sm font-medium text-blue-900">1.8s</span>
                      </div>
                      <p className="text-sm text-blue-700">Average query processing time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-purple-900">Database Health</span>
                        <span className="text-sm font-medium text-purple-900">Optimal</span>
                      </div>
                      <p className="text-sm text-purple-700">All database connections stable</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">15ms</div>
                      <div className="text-sm text-muted-foreground">API Latency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">99.9%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Error Monitoring */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Error Monitoring
                </CardTitle>
                <CardDescription>System errors and issue tracking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-green-900">Critical Errors</span>
                        <span className="text-sm font-medium text-green-900">0</span>
                      </div>
                      <p className="text-sm text-green-700">No critical issues in last 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="w-3 h-3 bg-yellow-600 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-yellow-900">Warnings</span>
                        <span className="text-sm font-medium text-yellow-900">3</span>
                      </div>
                      <p className="text-sm text-yellow-700">Minor performance alerts</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-blue-900">Info Messages</span>
                        <span className="text-sm font-medium text-blue-900">127</span>
                      </div>
                      <p className="text-sm text-blue-700">Routine system notifications</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">99.97%</div>
                    <div className="text-sm text-muted-foreground">Error-free Requests</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resource Utilization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                Resource Utilization
              </CardTitle>
              <CardDescription>Server resources and capacity monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">67%</div>
                  <div className="text-sm text-muted-foreground">CPU Usage</div>
                  <div className="w-full h-2 bg-muted rounded-full mt-2">
                    <div className="w-2/3 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">54%</div>
                  <div className="text-sm text-muted-foreground">Memory Usage</div>
                  <div className="w-full h-2 bg-muted rounded-full mt-2">
                    <div className="w-1/2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">23%</div>
                  <div className="text-sm text-muted-foreground">Storage Usage</div>
                  <div className="w-full h-2 bg-muted rounded-full mt-2">
                    <div className="w-1/4 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">89%</div>
                  <div className="text-sm text-muted-foreground">Network Usage</div>
                  <div className="w-full h-2 bg-muted rounded-full mt-2">
                    <div className="w-5/6 h-2 bg-orange-600 rounded-full"></div>
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