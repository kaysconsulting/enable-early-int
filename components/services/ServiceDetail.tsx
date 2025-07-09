import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageCircle,
  Users,
  Briefcase,
  MapPin,
  UsersIcon,
  Building,
  ArrowLeft,
  CheckCircle,
  Clock,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const iconMap = {
  MessageCircle,
  Users,
  Briefcase,
  MapPin,
  UsersIcon,
  Building,
}

const serviceDetails = {
  "early-childhood-intervention": {
    overview:
      "Every child deserves the opportunity to grow, learn, and thrive. At Enable Early Intervention, our Early Childhood Intervention (ECI) services provide tailored support for children aged 0–6 with developmental delays or disabilities—helping them reach key milestones and build strong foundations for life.",
    subtitle: "Supporting Children Early. Empowering Families Always.",
    approaches: [
      "Developmental Assessments: Identify strengths, challenges, and next steps in your child's growth",
      "Therapy Services: Access to speech therapy, occupational therapy, physiotherapy, or psychology",
      "Family Coaching & Support: Practical strategies to support learning and connection at home",
      "NDIS-Approved Services: We guide families through eligibility, planning, and goal-setting",
      "Inclusive Practice: Services delivered in your home, community settings, or online",
    ],
    whyItMatters:
      "The earlier a child receives the right support, the better the outcomes—for learning, behaviour, confidence, and independence. We work alongside you to create an individualised plan that builds on your child's strengths and adapts as they grow.",
    ageGroups: "0-6 years",
    sessionLength: "45-90 minutes",
    frequency: "Weekly to fortnightly",
    image: "/early-childhood-intervention.jpg",
    imageAlt:
      "Young child in specialized therapeutic chair engaging with colorful developmental toys while receiving support from therapist",
  },
  "support-coordination": {
    overview:
      "Navigating the NDIS can feel overwhelming—but you don't have to do it alone. Our Support Coordination service is designed to take the stress out of managing your NDIS plan.",
    subtitle: "Simplifying Your NDIS Journey",
    approaches: [
      "Understand Your Plan: We break down your NDIS plan in simple terms",
      "Find and Connect with the Right Providers: From therapists to community groups",
      "Build Your Support Network: Establish a collaborative team around you",
      "Coordinate Appointments and Services: Assist with booking and managing services",
      "Problem-Solving and Advocacy: Navigate challenges and advocate for what's best",
      "Track Progress and Prepare for Plan Reviews: Keep records and track achievements",
    ],
    whyItMatters:
      "Support Coordination helps you feel more confident with your NDIS plan and ensures you get the most out of your funding while focusing on achieving your goals.",
    ageGroups: "All ages",
    sessionLength: "Flexible",
    frequency: "As needed",
    image: "/support-coordination.jpg",
    imageAlt:
      "Loving moment between mother and child in wheelchair, both smiling warmly, representing family-centered support",
  },
  "specialised-supported-employment": {
    overview:
      "At Enable Early Intervention, we believe that employment is more than just a job—it's about purpose, confidence, and being part of a community. Our Specialised Supported Employment services help NDIS participants find and maintain meaningful work opportunities.",
    subtitle: "More Than Just a Job - Purpose, Confidence, Community",
    approaches: [
      "Workplace Readiness: Build essential skills like time management and communication",
      "Tailored Job Matching: Match you with opportunities that align with your aspirations",
      "On-the-Job Coaching: Ongoing support at your workplace to develop skills",
      "Skills Development: Training in both soft and hard skills for career progression",
      "Supportive Work Environments: Ensure you're in environments that respect your needs",
    ],
    whyItMatters:
      "This service is tailored for individuals with high support needs who require ongoing assistance in a supported work environment, helping you build confidence and independence.",
    ageGroups: "16+ years",
    sessionLength: "Variable",
    frequency: "Ongoing support",
    image: "/employment-services.jpg",
    imageAlt: "Professional woman in wheelchair working confidently with colleagues in modern office environment",
  },
  "community-participation": {
    overview:
      "At Enable Early Intervention, we believe that true growth happens not just at home or in therapy—but in the heart of the community. Our Community Participation program helps NDIS participants engage with the world around them.",
    subtitle: "Building Connections, Developing Skills, Fostering Independence",
    approaches: [
      "Social & Recreational Outings: Attend community events, local attractions, and hobby groups",
      "Skill-Building Activities: Learn everyday skills like budgeting, shopping, and using transport",
      "Group Participation: Engage with peers in safe, inclusive environments",
      "Cultural & Creative Exploration: Participate in arts, crafts, music, and cultural festivals",
      "Volunteering & Local Involvement: Connect through supported volunteering opportunities",
    ],
    whyItMatters:
      "Social inclusion is a powerful part of wellbeing. Our supports reduce isolation, build confidence, develop real-world skills, and empower participants to lead more active lives.",
    ageGroups: "All ages",
    sessionLength: "2-6 hours",
    frequency: "Weekly to monthly",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Disabled young man in wheelchair playing basketball/sports activity",
  },
  "group-centre-activities": {
    overview:
      "At Enable Early Intervention, we believe in the power of community. Our Group and Centre-Based Activities offer participants a safe, inclusive, and stimulating environment where they can socialise, learn, and grow—at their own pace.",
    subtitle: "Safe, Inclusive, Stimulating Community Environment",
    approaches: [
      "Social Connection: Join a welcoming group and make lasting friendships",
      "Life Skills Development: Learn cooking, budgeting, self-care, and teamwork",
      "Creative Expression: Art, music, dance, drama, and crafts sessions",
      "Wellbeing & Recreation: Movement-based sessions like yoga, fitness, and games",
      "Outings & Excursions: Supervised trips to community spaces and local events",
    ],
    whyItMatters:
      "Group-based activities provide more than entertainment—they're a vital step toward independence, inclusion, and self-discovery in a supportive environment.",
    ageGroups: "All ages",
    sessionLength: "Half-day to full-day",
    frequency: "Weekly programs",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Mental health support group participants/people in group therapy or support setting",
  },
  "access-maintain-employment": {
    overview:
      "At Enable Early Intervention, we believe that meaningful employment opens doors to independence, confidence, and connection. Our Access and Maintain Employment support helps NDIS participants gain the skills and opportunities they need to thrive in the workforce.",
    subtitle: "Opening Doors to Independence, Confidence, and Connection",
    approaches: [
      "Job Readiness Training: Resume writing, interview preparation, and workplace skills",
      "Workplace Access and Adjustment: Assistance with suitable environments and adjustments",
      "Employment Pathway Planning: Career discovery and vocational assessments",
      "Transition Support: From school to work or unemployment to new roles",
    ],
    whyItMatters:
      "Whether you're preparing for your first job, returning to work, or building skills in a supportive environment, we'll be by your side every step of the way.",
    ageGroups: "16+ years",
    sessionLength: "Variable",
    frequency: "As needed",
    image: "/employment-services.jpg",
    imageAlt: "Professional woman in wheelchair working confidently with colleagues in modern office environment",
  },
}

interface ServiceDetailProps {
  service: {
    title: string
    description: string
    icon: string
    color: string
  }
  slug: string
}

export default function ServiceDetail({ service, slug }: ServiceDetailProps) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap]
  const details = serviceDetails[slug as keyof typeof serviceDetails]

  if (!details) {
    return <div>Service details not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Button asChild variant="ghost" className="mb-8 text-teal-600 hover:text-teal-700">
              <Link href="/services" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Services</span>
              </Link>
            </Button>

            <div
              className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl mb-8 ${
                service.color === "orange"
                  ? "bg-gradient-to-br from-orange-100 to-orange-200"
                  : "bg-gradient-to-br from-teal-100 to-teal-200"
              } shadow-lg`}
            >
              <IconComponent
                className={`h-10 w-10 ${service.color === "orange" ? "text-orange-500" : "text-teal-600"}`}
              />
            </div>

            <h1 className="font-poppins text-4xl font-bold tracking-tight text-teal-800 sm:text-5xl md:text-6xl">
              {service.title}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-orange-600 font-poppins">
              {details.subtitle}
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-gray-600 leading-relaxed font-inter">
              {details.overview}
            </p>

            <div className="mt-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Service Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={details.image || "/placeholder.svg"}
                  alt={details.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-teal-800 font-poppins">What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {details.approaches.map((approach, index) => (
                      <li key={index} className="flex items-start text-gray-700 font-inter">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{approach}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-teal-800 font-poppins">Why It Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-inter leading-relaxed">{details.whyItMatters}</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-teal-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-xl text-teal-800 font-poppins">Service Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <UsersIcon className="h-5 w-5 text-teal-600" />
                    <div>
                      <p className="font-medium text-teal-800">Age Groups</p>
                      <p className="text-gray-600 text-sm">{details.ageGroups}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-teal-600" />
                    <div>
                      <p className="font-medium text-teal-800">Session Length</p>
                      <p className="text-gray-600 text-sm">{details.sessionLength}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-teal-600" />
                    <div>
                      <p className="font-medium text-teal-800">Frequency</p>
                      <p className="text-gray-600 text-sm">{details.frequency}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3 font-poppins">Ready to Get Started?</h3>
                  <p className="text-gray-600 text-sm mb-4 font-inter">
                    Contact us to discuss your needs and how we can support you or your family.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white mb-3"
                  >
                    <Link href="/contact">Book Free Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                  >
                    <Link href="tel:(03)9xxxxxxx">Call Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
