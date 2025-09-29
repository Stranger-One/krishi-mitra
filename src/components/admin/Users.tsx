import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Shield,
  Search,
  Filter,
  MoreHorizontal,
  UserPlus,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Activity,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

export default function AdminUsersPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">Manage farmers and agricultural officers across all states</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export Users
          </Button>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            <CardTitle className="text-sm font-medium">Active Farmers</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,45,044</div>
            <p className="text-xs text-muted-foreground">98.9% of total users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Officers</CardTitle>
            <Shield className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">Across 847 districts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New This Month</CardTitle>
            <UserPlus className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,847</div>
            <p className="text-xs text-muted-foreground">+23% growth rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter Users</CardTitle>
          <CardDescription>Find and manage users across the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name, phone, or location..." className="pl-10" />
              </div>
            </div>
            <Button variant="outline" className="bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* User Management Tabs */}
      <Tabs defaultValue="farmers" className="space-y-6">
        <TabsList>
          <TabsTrigger value="farmers">Farmers</TabsTrigger>
          <TabsTrigger value="officers">Officers</TabsTrigger>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="farmers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Farmer Management</CardTitle>
              <CardDescription>Manage registered farmers across all states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Farmer List */}
                <div className="border rounded-lg">
                  <div className="grid grid-cols-6 gap-4 p-4 border-b bg-muted/50 font-medium text-sm">
                    <div>Farmer Details</div>
                    <div>Location</div>
                    <div>Registration</div>
                    <div>Last Active</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>

                  <div className="divide-y">
                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">राम कुमार शर्मा</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          +91 98765 43210
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Pune, Maharashtra
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Jan 15, 2024
                        </div>
                      </div>
                      <div className="text-sm">2 hours ago</div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">सुनीता देवी</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          +91 87654 32109
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Lucknow, UP
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Dec 28, 2023
                        </div>
                      </div>
                      <div className="text-sm">1 day ago</div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          Active
                        </Badge>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">अजय सिंह</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          +91 76543 21098
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Amritsar, Punjab
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Nov 10, 2023
                        </div>
                      </div>
                      <div className="text-sm">3 days ago</div>
                      <div>
                        <Badge variant="secondary">Inactive</Badge>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Showing 1-10 of 2,45,044 farmers</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="officers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Officer Management</CardTitle>
              <CardDescription>Manage agricultural officers and their permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Officer List */}
                <div className="border rounded-lg">
                  <div className="grid grid-cols-6 gap-4 p-4 border-b bg-muted/50 font-medium text-sm">
                    <div>Officer Details</div>
                    <div>District</div>
                    <div>Joined</div>
                    <div>Performance</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>

                  <div className="divide-y">
                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">Dr. Priya Sharma</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          priya.sharma@agri.gov.in
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Pune, Maharashtra
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Mar 15, 2023
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Activity className="h-3 w-3 text-green-600" />
                          Excellent (96%)
                        </div>
                      </div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">Rajesh Kumar</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          rajesh.kumar@agri.gov.in
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Lucknow, UP
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Jan 20, 2023
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Activity className="h-3 w-3 text-blue-600" />
                          Good (89%)
                        </div>
                      </div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">Amit Patel</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          amit.patel@agri.gov.in
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Ahmedabad, Gujarat
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Aug 10, 2023
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Activity className="h-3 w-3 text-orange-600" />
                          Needs Improvement (72%)
                        </div>
                      </div>
                      <div>
                        <Badge variant="secondary">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Under Review
                        </Badge>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Showing 1-10 of 2,847 officers</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent User Activity</CardTitle>
              <CardDescription>Latest user registrations and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <UserPlus className="h-4 w-4 text-green-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-900">New farmer registered</p>
                    <p className="text-xs text-green-700">मोहन लाल from Jaipur, Rajasthan joined the platform</p>
                    <p className="text-xs text-green-600">5 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-900">Officer account activated</p>
                    <p className="text-xs text-blue-700">Dr. Kavita Singh assigned to Bhopal district</p>
                    <p className="text-xs text-blue-600">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-orange-900">Account suspended</p>
                    <p className="text-xs text-orange-700">Farmer account suspended due to policy violation</p>
                    <p className="text-xs text-orange-600">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <Users className="h-4 w-4 text-purple-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-purple-900">Bulk registration completed</p>
                    <p className="text-xs text-purple-700">247 farmers from Haryana added via district office</p>
                    <p className="text-xs text-purple-600">6 hours ago</p>
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