import { MessageCircle, Users, Briefcase, MapPin, UsersIcon, Building } from "lucide-react"

export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  features: string[]
  longDescription: string[]
  icon: any
  color: 'orange' | 'teal'
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'early-childhood-intervention',
    title: 'Early Childhood Intervention',
    shortDescription: 'Supporting Children Early. Empowering Families Always.',
    description: 'Tailored support for children aged 0-6 with developmental delays or disabilities—helping them reach key milestones and build strong foundations for life.',
    longDescription: [
      'Every child deserves the opportunity to grow, learn, and thrive. At Enable Early Intervention, our Early Childhood Intervention (ECI) services provide tailored support for children aged 0–6 with developmental delays or disabilities—helping them reach key milestones and build strong foundations for life.',
      'We take a holistic, family-centred approach, recognising that no one knows your child better than you. That\'s why we work in partnership with families to deliver early, evidence-based support that nurtures every area of development—communication, motor skills, emotional regulation, social interaction, and daily routine.'
    ],
    features: [
      'Developmental Assessments: Identify strengths, challenges, and next steps in your child\'s growth.',
      'Therapy Services: Access to speech therapy, occupational therapy, physiotherapy, or psychology—based on your child\'s needs and goals.',
      'Family Coaching & Support: Practical strategies to support learning and connection at home, in childcare, and in the community.',
      'NDIS-Approved Services: We guide families through eligibility, planning, and goal-setting within the NDIS Early Childhood Approach.',
      'Inclusive Practice: Services can be delivered in your home, in community settings, online, or wherever your child learns best.'
    ],
    icon: MessageCircle,
    color: 'orange',
    image: '/early-childhood-intervention.jpg',
    imageAlt: 'Therapist working with a young child on developmental activities',
  },
  {
    id: 'support-coordination',
    title: 'Support Coordination',
    shortDescription: 'Simplifying the NDIS journey for you and your family',
    description: 'We help you navigate the NDIS, connect with the right providers, and make the most of your plan.',
    longDescription: [
      'Our Support Coordinators work with you to understand your NDIS plan and connect you with the right services and supports.',
      'We advocate for your needs and help you achieve your goals through effective plan management.'
    ],
    features: [
      'NDIS plan implementation',
      'Service provider connections',
      'Goal setting and review',
      'Advocacy and support'
    ],
    icon: Users,
    color: 'teal',
    image: '/support-coordination.jpg',
    imageAlt: 'Support coordinator meeting with clients',
  },
  // Add other services here with the same structure
]
