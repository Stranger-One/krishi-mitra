import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Database,
  Upload,
  Search,
  Filter,
  Edit,
  Download,
  FileText,
  ImageIcon,
  CheckCircle,
  Clock,
  AlertCircle,
  Leaf,
  Bug,
  Banknote,
  CloudRain,
} from "lucide-react"

export default function AdminResourcesPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resource Management</h1>
          <p className="text-muted-foreground">Manage central knowledge base and RAG system resources</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Resources
          </Button>
        </div>
      </div>

      {/* Resource Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
            <Database className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47,892</div>
            <p className="text-xs text-muted-foreground">Across all categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Crop Datasets</CardTitle>
            <Leaf className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,847</div>
            <p className="text-xs text-muted-foreground">Crop varieties & practices</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pest Libraries</CardTitle>
            <Bug className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,456</div>
            <p className="text-xs text-muted-foreground">Pest identification & control</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheme Database</CardTitle>
            <Banknote className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Government schemes</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter Resources</CardTitle>
          <CardDescription>Find and manage knowledge base resources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search resources by title, category, or tags..." className="pl-10" />
              </div>
            </div>
            <Button variant="outline" className="bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resource Management Tabs */}
      <Tabs defaultValue="crops" className="space-y-6">
        <TabsList>
          <TabsTrigger value="crops">Crop Datasets</TabsTrigger>
          <TabsTrigger value="pests">Pest Libraries</TabsTrigger>
          <TabsTrigger value="schemes">Scheme Database</TabsTrigger>
          <TabsTrigger value="weather">Weather Data</TabsTrigger>
          <TabsTrigger value="advisories">Advisories</TabsTrigger>
        </TabsList>

        <TabsContent value="crops" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Crop Dataset Management</CardTitle>
              <CardDescription>Manage crop varieties, cultivation practices, and agricultural data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Crop Dataset List */}
                <div className="border rounded-lg">
                  <div className="grid grid-cols-6 gap-4 p-4 border-b bg-muted/50 font-medium text-sm">
                    <div>Resource Details</div>
                    <div>Category</div>
                    <div>Last Updated</div>
                    <div>Usage</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>

                  <div className="divide-y">
                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">Rice Cultivation Guide</div>
                        <div className="text-sm text-muted-foreground">
                          Comprehensive guide for rice farming practices
                        </div>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Leaf className="h-3 w-3 mr-1" />
                          Cereals
                        </Badge>
                      </div>
                      <div className="text-sm">2 days ago</div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-2 bg-muted rounded-full">
                            <div className="w-10 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span>8.2k views</span>
                        </div>
                      </div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">Wheat Variety Database</div>
                        <div className="text-sm text-muted-foreground">
                          High-yielding wheat varieties for different regions
                        </div>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <Leaf className="h-3 w-3 mr-1" />
                          Cereals
                        </Badge>
                      </div>
                      <div className="text-sm">1 week ago</div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-2 bg-muted rounded-full">
                            <div className="w-8 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                          <span>6.7k views</span>
                        </div>
                      </div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">Cotton Farming Practices</div>
                        <div className="text-sm text-muted-foreground">
                          Best practices for cotton cultivation and pest management
                        </div>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          <Leaf className="h-3 w-3 mr-1" />
                          Cash Crops
                        </Badge>
                      </div>
                      <div className="text-sm">3 days ago</div>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-2 bg-muted rounded-full">
                            <div className="w-6 h-2 bg-purple-600 rounded-full"></div>
                          </div>
                          <span>4.1k views</span>
                        </div>
                      </div>
                      <div>
                        <Badge variant="secondary">
                          <Clock className="h-3 w-3 mr-1" />
                          Under Review
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Showing 1-10 of 12,847 crop resources</p>
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

        <TabsContent value="pests" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pest Library Management</CardTitle>
              <CardDescription>Manage pest identification guides and control measures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg">
                  <div className="grid grid-cols-6 gap-4 p-4 border-b bg-muted/50 font-medium text-sm">
                    <div>Pest Information</div>
                    <div>Affected Crops</div>
                    <div>Severity</div>
                    <div>Control Methods</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>

                  <div className="divide-y">
                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">Brown Plant Hopper</div>
                        <div className="text-sm text-muted-foreground">Nilaparvata lugens - Rice pest</div>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          Rice
                        </Badge>
                      </div>
                      <div>
                        <Badge variant="destructive">High</Badge>
                      </div>
                      <div className="text-sm">
                        <div>Chemical, Biological</div>
                        <div className="text-xs text-muted-foreground">12 methods available</div>
                      </div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">Bollworm</div>
                        <div className="text-sm text-muted-foreground">Helicoverpa armigera - Cotton pest</div>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          Cotton
                        </Badge>
                      </div>
                      <div>
                        <Badge variant="secondary">Medium</Badge>
                      </div>
                      <div className="text-sm">
                        <div>IPM, Chemical</div>
                        <div className="text-xs text-muted-foreground">8 methods available</div>
                      </div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schemes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Government Scheme Database</CardTitle>
              <CardDescription>Manage government agricultural schemes and subsidies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg">
                  <div className="grid grid-cols-6 gap-4 p-4 border-b bg-muted/50 font-medium text-sm">
                    <div>Scheme Details</div>
                    <div>Category</div>
                    <div>Eligibility</div>
                    <div>Benefits</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>

                  <div className="divide-y">
                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">PM-KISAN</div>
                        <div className="text-sm text-muted-foreground">Pradhan Mantri Kisan Samman Nidhi</div>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700">
                          <Banknote className="h-3 w-3 mr-1" />
                          Direct Benefit
                        </Badge>
                      </div>
                      <div className="text-sm">
                        <div>Small & Marginal</div>
                        <div className="text-xs text-muted-foreground">≤2 hectare land</div>
                      </div>
                      <div className="text-sm">
                        <div>₹6,000/year</div>
                        <div className="text-xs text-muted-foreground">3 installments</div>
                      </div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">Crop Insurance Scheme</div>
                        <div className="text-sm text-muted-foreground">Pradhan Mantri Fasal Bima Yojana</div>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-orange-50 text-orange-700">
                          <Banknote className="h-3 w-3 mr-1" />
                          Insurance
                        </Badge>
                      </div>
                      <div className="text-sm">
                        <div>All Farmers</div>
                        <div className="text-xs text-muted-foreground">Notified crops</div>
                      </div>
                      <div className="text-sm">
                        <div>Risk Coverage</div>
                        <div className="text-xs text-muted-foreground">Up to sum insured</div>
                      </div>
                      <div>
                        <Badge variant="secondary">
                          <Clock className="h-3 w-3 mr-1" />
                          Under Review
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weather" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Weather Data Management</CardTitle>
              <CardDescription>Manage weather data sources and forecasting information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CloudRain className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-900">IMD Integration</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-900">Active</div>
                    <div className="text-sm text-blue-700">Real-time sync enabled</div>
                    <div className="text-xs text-blue-600 mt-1">Last sync: 5 minutes ago</div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-900">Historical Data</span>
                    </div>
                    <div className="text-2xl font-bold text-green-900">15 Years</div>
                    <div className="text-sm text-green-700">Complete dataset available</div>
                    <div className="text-xs text-green-600 mt-1">Updated daily</div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-purple-600" />
                      <span className="font-medium text-purple-900">Alert System</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-900">127</div>
                    <div className="text-sm text-purple-700">Active weather alerts</div>
                    <div className="text-xs text-purple-600 mt-1">Auto-generated</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advisories" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Advisory Management</CardTitle>
              <CardDescription>Manage agricultural advisories and expert recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg">
                  <div className="grid grid-cols-6 gap-4 p-4 border-b bg-muted/50 font-medium text-sm">
                    <div>Advisory Title</div>
                    <div>Category</div>
                    <div>Author</div>
                    <div>Published</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>

                  <div className="divide-y">
                    <div className="grid grid-cols-6 gap-4 p-4 items-center">
                      <div>
                        <div className="font-medium">Monsoon Crop Advisory</div>
                        <div className="text-sm text-muted-foreground">Kharif season preparation guidelines</div>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          Seasonal
                        </Badge>
                      </div>
                      <div className="text-sm">
                        <div>Dr. Agricultural Expert</div>
                        <div className="text-xs text-muted-foreground">ICAR Specialist</div>
                      </div>
                      <div className="text-sm">2 days ago</div>
                      <div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Published
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
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