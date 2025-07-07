import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, CheckSquare } from "lucide-react"

export default function DownloadableResources() {
  const downloadableResources = [
    {
      icon: FileText,
      title: "New Client Registration Form",
      description: "Complete this form before your first appointment to help us understand your child's needs.",
      type: "PDF Form",
    },
    {
      icon: CheckSquare,
      title: "Developmental Milestone Checklist",
      description: "Track your child's development with our comprehensive milestone checklist (0-5 years).",
      type: "PDF Checklist",
    },
    {
      icon: FileText,
      title: "NDIS Preparation Guide",
      description: "Everything you need to know to prepare for your NDIS planning meeting.",
      type: "PDF Guide",
    },
    {
      icon: CheckSquare,
      title: "Home Activity Ideas",
      description: "Fun, therapeutic activities you can do at home to support your child's development.",
      type: "PDF Resource",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-teal-800 mb-8 text-center font-poppins">Downloadable Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloadableResources.map((resource, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-orange-200 transition-colors duration-200"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                      <resource.icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-teal-800 font-poppins">{resource.title}</CardTitle>
                      <span className="text-xs text-orange-600 font-medium">{resource.type}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-600 font-inter">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download {resource.type}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
