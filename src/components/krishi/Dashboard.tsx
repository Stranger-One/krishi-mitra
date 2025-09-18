import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Cloud,
  Droplets,
  Sun,
  Wind,
  Thermometer,
  AlertTriangle,
  TrendingUp,
  Calendar,
  MapPin,
  Leaf,
  Bug,
  IndianRupee,
} from "lucide-react"
import { useTranslations } from "next-intl"

export default function Dashboard() {
  const t = useTranslations("krishi.dashboard")
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{t("location")}</span>
        </div>
      </div>

      {/* Weather Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-yellow-500" />
           {t("weather.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-2xl font-bold">28°C</p>
                <p className="text-sm text-muted-foreground">{t("weather.temperature")}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">65%</p>
                <p className="text-sm text-muted-foreground">{t("weather.humidity")}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-2xl font-bold">12 km/h</p>
                <p className="text-sm text-muted-foreground">{t("weather.windSpeed")}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-gray-600" />
              <div>
                <p className="text-2xl font-bold">20%</p>
                <p className="text-sm text-muted-foreground">{t("weather.rainChance")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">{t("stats.activeCrops")}</CardTitle>
            <Leaf className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Wheat, Rice, Sugarcane, Cotton</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">{t("stats.totalArea")}</CardTitle>
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5</div>
            <p className="text-xs text-muted-foreground">Acres under cultivation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">{t("stats.expectedRevenue")}</CardTitle>
            <IndianRupee className="h-6 w-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹2,45,000</div>
            <p className="text-xs text-muted-foreground">This season estimate</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              {t("alerts.title")}
            </CardTitle>
            <CardDescription>{t("alerts.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <Bug className="h-4 w-4 text-red-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-red-900">Pest Alert: Brown Plant Hopper</p>
                <p className="text-xs text-red-700">Detected in nearby rice fields. Take preventive measures.</p>
                <Badge variant="destructive" className="mt-1 text-xs">
                  High Priority
                </Badge>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <Cloud className="h-4 w-4 text-yellow-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-yellow-900">Weather Warning</p>
                <p className="text-xs text-yellow-700">Heavy rainfall expected in next 48 hours.</p>
                <Badge variant="secondary" className="mt-1 text-xs">
                  Medium Priority
                </Badge>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <IndianRupee className="h-4 w-4 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-900">New Scheme Available</p>
                <p className="text-xs text-blue-700">PM-KISAN subsidy application deadline approaching.</p>
                <Badge variant="outline" className="mt-1 text-xs">
                  Info
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-600" />
              {t("tasks.title")}
            </CardTitle>
            <CardDescription>{t("tasks.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Wheat Field Irrigation</p>
                <p className="text-xs text-muted-foreground">Tomorrow, 6:00 AM</p>
              </div>
              <Button size="sm" variant="outline">
                Mark Done
              </Button>
            </div>

            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Pesticide Application</p>
                <p className="text-xs text-muted-foreground">Day after tomorrow, 7:00 AM</p>
              </div>
              <Button size="sm" variant="outline">
                Schedule
              </Button>
            </div>

            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Soil Testing</p>
                <p className="text-xs text-muted-foreground">Next week</p>
              </div>
              <Button size="sm" variant="outline">
                Book
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Government Schemes */}
      <Card>
        <CardHeader>
          <CardTitle>{t("schemes.title")}</CardTitle>
          <CardDescription>{t("schemes.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">PM-KISAN Samman Nidhi</h4>
              <p className="text-sm text-muted-foreground mt-1">₹6,000 annual income support</p>
              <Badge className="mt-2">Eligible</Badge>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">Crop Insurance Scheme</h4>
              <p className="text-sm text-muted-foreground mt-1">Protect your crops from natural disasters</p>
              <Badge variant="outline" className="mt-2">
                Apply Now
              </Badge>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">Soil Health Card</h4>
              <p className="text-sm text-muted-foreground mt-1">Free soil testing and recommendations</p>
              <Badge variant="secondary" className="mt-2">
                Available
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
