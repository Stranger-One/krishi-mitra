"use client"
import Topbar from "@/components/officer/Topbar";

// export default function Page() {
//   return (
//     <>
//       <Topbar location="resources" />
//       <div className="px-4 sm:px-6 lg:px-8 py-6">
//         {/* <Alerts /> */}
//         Resources{" "}
//       </div>
//     </>
//   );
// }


import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  Upload,
  FileText,
  ImageIcon,
  Video,
  Download,
  Edit,
  Trash2,
  Search,
  Filter,
  Eye,
  Calendar,
  User,
} from "lucide-react"

interface Resource {
  id: string
  title: string
  description: string
  type: "advisory" | "scheme" | "pest-data" | "disease-data" | "weather-data" | "market-data"
  category: string
  fileType: "pdf" | "image" | "video" | "text"
  fileSize: string
  uploadedBy: string
  uploadedAt: Date
  lastModified: Date
  downloads: number
  status: "active" | "draft" | "archived"
  tags: string[]
}

const mockResources: Resource[] = [
  {
    id: "RES-001",
    title: "Brown Plant Hopper Management Guide",
    description: "Comprehensive guide for identifying and managing Brown Plant Hopper in rice crops",
    type: "pest-data",
    category: "Pest Control",
    fileType: "pdf",
    fileSize: "2.4 MB",
    uploadedBy: "Dr. Patil",
    uploadedAt: new Date(2024, 11, 10, 14, 30),
    lastModified: new Date(2024, 11, 12, 10, 15),
    downloads: 1247,
    status: "active",
    tags: ["rice", "pest", "BPH", "management"],
  },
  {
    id: "RES-002",
    title: "PM-KISAN Application Process 2024",
    description: "Step-by-step guide for PM-KISAN Samman Nidhi scheme application and troubleshooting",
    type: "scheme",
    category: "Government Schemes",
    fileType: "pdf",
    fileSize: "1.8 MB",
    uploadedBy: "Officer Sharma",
    uploadedAt: new Date(2024, 11, 8, 11, 0),
    lastModified: new Date(2024, 11, 8, 11, 0),
    downloads: 2156,
    status: "active",
    tags: ["PM-KISAN", "subsidy", "application", "government"],
  },
  {
    id: "RES-003",
    title: "Wheat Disease Identification Chart",
    description: "Visual guide for identifying common wheat diseases with symptoms and treatment",
    type: "disease-data",
    category: "Disease Management",
    fileType: "image",
    fileSize: "5.2 MB",
    uploadedBy: "Dr. Singh",
    uploadedAt: new Date(2024, 11, 5, 9, 45),
    lastModified: new Date(2024, 11, 5, 9, 45),
    downloads: 892,
    status: "active",
    tags: ["wheat", "disease", "identification", "symptoms"],
  },
  {
    id: "RES-004",
    title: "Organic Farming Practices Video Series",
    description: "Complete video series on organic farming techniques and certification process",
    type: "advisory",
    category: "Sustainable Agriculture",
    fileType: "video",
    fileSize: "125 MB",
    uploadedBy: "Extension Officer",
    uploadedAt: new Date(2024, 11, 3, 16, 20),
    lastModified: new Date(2024, 11, 3, 16, 20),
    downloads: 567,
    status: "active",
    tags: ["organic", "sustainable", "certification", "practices"],
  },
]

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>(mockResources)
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const [newResource, setNewResource] = useState({
    title: "",
    description: "",
    type: "advisory" as const,
    category: "",
    tags: "",
  })

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = filterType === "all" || resource.type === filterType
    const matchesStatus = filterStatus === "all" || resource.status === filterStatus

    return matchesSearch && matchesType && matchesStatus
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case "advisory":
        return "bg-blue-100 text-blue-800"
      case "scheme":
        return "bg-green-100 text-green-800"
      case "pest-data":
        return "bg-red-100 text-red-800"
      case "disease-data":
        return "bg-orange-100 text-orange-800"
      case "weather-data":
        return "bg-purple-100 text-purple-800"
      case "market-data":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getFileTypeIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        return <FileText className="h-4 w-4" />
      case "image":
        return <ImageIcon className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const handleUpload = () => {
    // const resource: Resource = {
    //   id: RES-${String(resources.length + 1).padStart(3, "0")},
    //   ...newResource,
    //   fileType: "pdf",
    //   fileSize: "1.2 MB",
    //   uploadedBy: "Current Officer",
    //   uploadedAt: new Date(),
    //   lastModified: new Date(),
    //   downloads: 0,
    //   status: "draft",
    //   tags: newResource.tags.split(",").map((tag) => tag.trim()),
    // }
    // setResources((prev) => [resource, ...prev])
    // setNewResource({
    //   title: "",
    //   description: "",
    //   type: "advisory",
    //   category: "",
    //   tags: "",
    // })
    // setIsUploading(false)
  }

  const handleDelete = (id: string) => {
    setResources((prev) => prev.filter((resource) => resource.id !== id))
    if (selectedResource?.id === id) {
      setSelectedResource(null)
    }
  }

  const handleStatusChange = (id: string, status: "active" | "draft" | "archived") => {
    setResources((prev) => prev.map((resource) => (resource.id === id ? { ...resource, status } : resource)))
  }

  return (
    <>
    <Topbar location="resources" />
    <div className="space-y-6 px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
          <p className="text-muted-foreground">Manage advisories, schemes, and agricultural data for the RAG system</p>
        </div>
        <Button onClick={() => setIsUploading(true)}>
          <Upload className="h-4 w-4 mr-2" />
          Upload Resource
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-900">{resources.length}</div>
                <div className="text-sm text-blue-700">Total Resources</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-green-900">
                  {resources.reduce((sum, r) => sum + r.downloads, 0)}
                </div>
                <div className="text-sm text-green-700">Total Downloads</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" />
              <div>
                <div className="text-2xl font-bold text-purple-900">
                  {resources.filter((r) => r.status === "active").length}
                </div>
                <div className="text-sm text-purple-700">Active Resources</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Edit className="h-5 w-5 text-orange-600" />
              <div>
                <div className="text-2xl font-bold text-orange-900">
                  {resources.filter((r) => r.status === "draft").length}
                </div>
                <div className="text-sm text-orange-700">Draft Resources</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Form */}
      {isUploading && (
        <Card>
          <CardHeader>
            <CardTitle>Upload New Resource</CardTitle>
            <CardDescription>Add new content to the knowledge base</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Resource Type</label>
                <Select
                  value={newResource.type}
                  onValueChange={(value: any) => setNewResource((prev) => ({ ...prev, type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advisory">Advisory</SelectItem>
                    <SelectItem value="scheme">Government Scheme</SelectItem>
                    <SelectItem value="pest-data">Pest Data</SelectItem>
                    <SelectItem value="disease-data">Disease Data</SelectItem>
                    <SelectItem value="weather-data">Weather Data</SelectItem>
                    <SelectItem value="market-data">Market Data</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Category</label>
                <Input
                  value={newResource.category}
                  onChange={(e) => setNewResource((prev) => ({ ...prev, category: e.target.value }))}
                  placeholder="e.g., Pest Control, Disease Management"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Title</label>
              <Input
                value={newResource.title}
                onChange={(e) => setNewResource((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Resource title..."
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={newResource.description}
                onChange={(e) => setNewResource((prev) => ({ ...prev, description: e.target.value }))}
                placeholder="Detailed description of the resource..."
                className="min-h-[80px]"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Tags (comma-separated)</label>
              <Input
                value={newResource.tags}
                onChange={(e) => setNewResource((prev) => ({ ...prev, tags: e.target.value }))}
                placeholder="e.g., rice, pest, management, BPH"
              />
            </div>
            <div>
              <label className="text-sm font-medium">File Upload</label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, Images, Videos up to 50MB</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleUpload} disabled={!newResource.title || !newResource.description}>
                Upload Resource
              </Button>
              <Button variant="outline" onClick={() => setIsUploading(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder="Resource Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="advisory">Advisory</SelectItem>
                <SelectItem value="scheme">Government Scheme</SelectItem>
                <SelectItem value="pest-data">Pest Data</SelectItem>
                <SelectItem value="disease-data">Disease Data</SelectItem>
                <SelectItem value="weather-data">Weather Data</SelectItem>
                <SelectItem value="market-data">Market Data</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setFilterType("all")
                setFilterStatus("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resources List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Resources ({filteredResources.length})</h2>
          {filteredResources.map((resource) => (
            <Card
              key={resource.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedResource?.id === resource.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedResource(resource)}
            >
              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={getTypeColor(resource.type)}>
                        {resource.type.replace("-", " ").toUpperCase()}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          resource.status === "active"
                            ? "border-green-500 text-green-700"
                            : resource.status === "draft"
                              ? "border-yellow-500 text-yellow-700"
                              : "border-gray-500 text-gray-700"
                        }
                      >
                        {resource.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      {getFileTypeIcon(resource.fileType)}
                      <span className="text-xs">{resource.fileSize}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{resource.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {resource.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{resource.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {resource.uploadedBy}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {resource.downloads}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {resource.uploadedAt.toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resource Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Resource Details</h2>
          {selectedResource ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {getFileTypeIcon(selectedResource.fileType)}
                    {selectedResource.title}
                  </CardTitle>
                  <Badge className={getTypeColor(selectedResource.type)}>
                    {selectedResource.type.replace("-", " ").toUpperCase()}
                  </Badge>
                </div>
                <CardDescription>
                  {selectedResource.id} | {selectedResource.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Status */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge
                    variant="outline"
                    className={
                      selectedResource.status === "active"
                        ? "border-green-500 text-green-700"
                        : selectedResource.status === "draft"
                          ? "border-yellow-500 text-yellow-700"
                          : "border-gray-500 text-gray-700"
                    }
                  >
                    {selectedResource.status.toUpperCase()}
                  </Badge>
                </div>

                {/* Description */}
                <div>
                  <span className="text-sm font-medium">Description:</span>
                  <p className="text-sm text-muted-foreground mt-1">{selectedResource.description}</p>
                </div>

                {/* File Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">File Type:</span>
                    <p className="text-muted-foreground">{selectedResource.fileType.toUpperCase()}</p>
                  </div>
                  <div>
                    <span className="font-medium">File Size:</span>
                    <p className="text-muted-foreground">{selectedResource.fileSize}</p>
                  </div>
                  <div>
                    <span className="font-medium">Downloads:</span>
                    <p className="text-muted-foreground">{selectedResource.downloads}</p>
                  </div>
                  <div>
                    <span className="font-medium">Uploaded By:</span>
                    <p className="text-muted-foreground">{selectedResource.uploadedBy}</p>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <span className="text-sm font-medium">Tags:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedResource.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Uploaded:</span>
                    <p className="text-muted-foreground">{selectedResource.uploadedAt.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="font-medium">Last Modified:</span>
                    <p className="text-muted-foreground">{selectedResource.lastModified.toLocaleString()}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t">
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  {selectedResource.status === "draft" && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusChange(selectedResource.id, "active")}
                    >
                      Publish
                    </Button>
                  )}
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(selectedResource.id)}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Select a Resource</h3>
                <p className="text-muted-foreground text-center">
                  Choose a resource from the list to view details and manage.
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