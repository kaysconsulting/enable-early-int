import type { Metadata } from "next"
import { notFound } from "next/navigation"
import NewsArticle from "@/components/news/NewsArticle"

const articles = {
  "ndis-changes-2024": {
    title: "New NDIS Changes: What Families Need to Know",
    excerpt:
      "Understanding the latest updates to NDIS funding and how they affect early childhood intervention services.",
    content: `
      <p>The National Disability Insurance Scheme (NDIS) has announced significant changes that will affect how families access and use early childhood intervention services. These updates, effective from July 2024, aim to improve outcomes for children and provide clearer pathways for families.</p>
      
      <h2>Key Changes Overview</h2>
      <p>The most significant changes include streamlined assessment processes, enhanced support for families in rural areas, and improved coordination between service providers. These changes are designed to reduce waiting times and ensure children receive the support they need more quickly.</p>
      
      <h2>What This Means for Your Family</h2>
      <p>For families currently receiving NDIS support, these changes will be gradually implemented over the next 12 months. Your existing services will continue uninterrupted, and your support coordinator will help you understand how these changes might benefit your child's plan.</p>
      
      <h2>Early Childhood Focus</h2>
      <p>The NDIS has placed particular emphasis on early childhood intervention, recognizing that early support leads to better long-term outcomes. New funding categories have been introduced specifically for developmental assessments and family coaching services.</p>
      
      <h2>How Enable Us Can Help</h2>
      <p>Our team stays up-to-date with all NDIS changes to ensure your family receives the best possible support. We can help you understand how these changes affect your plan and assist with any transitions needed.</p>
    `,
    date: "March 15, 2024",
    author: "Enable Us Team",
    category: "NDIS Updates",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=800",
    imageAlt: "NDIS planning meeting with family and support coordinator",
  },
  "early-intervention-importance": {
    title: "The Importance of Early Intervention in Child Development",
    excerpt:
      "Research shows that early intervention can significantly improve outcomes for children with developmental delays.",
    content: `
      <p>Early intervention is one of the most powerful tools we have for supporting children with developmental delays or disabilities. Research consistently shows that the earlier a child receives appropriate support, the better their long-term outcomes across all areas of development.</p>
      
      <h2>The Science Behind Early Intervention</h2>
      <p>During the first few years of life, a child's brain develops at an extraordinary rate. Neural pathways are formed rapidly, and the brain's plasticity—its ability to adapt and change—is at its peak. This makes early childhood the optimal time for intervention.</p>
      
      <h2>Key Benefits of Early Support</h2>
      <ul>
        <li><strong>Improved Communication Skills:</strong> Early speech and language therapy can help children develop crucial communication abilities.</li>
        <li><strong>Enhanced Social Development:</strong> Learning social skills early helps children build relationships and participate in community activities.</li>
        <li><strong>Better School Readiness:</strong> Children who receive early intervention are better prepared for the academic and social demands of school.</li>
        <li><strong>Family Confidence:</strong> Parents and caregivers gain skills and confidence in supporting their child's development.</li>
      </ul>
      
      <h2>When to Seek Support</h2>
      <p>Trust your instincts as a parent. If you have concerns about your child's development, it's always better to seek assessment early. Common signs that might indicate a need for support include delays in reaching milestones, difficulties with communication, or challenges with social interaction.</p>
      
      <h2>Our Approach at Enable Us</h2>
      <p>We believe in family-centered early intervention that builds on your child's strengths while addressing areas of need. Our multidisciplinary team works closely with families to create individualized support plans that fit into your daily routines and activities.</p>
    `,
    date: "March 10, 2024",
    author: "Dr. Sarah Mitchell",
    category: "Child Development",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=800",
    imageAlt: "Child with therapist engaged in play-based learning activity",
  },
  "inclusive-communities": {
    title: "Building Inclusive Communities: Our Community Participation Program",
    excerpt:
      "How our community participation services are helping individuals with disabilities engage more fully in their communities.",
    content: `
      <p>True inclusion happens when everyone in our community has the opportunity to participate, contribute, and belong. Our Community Participation program is designed to break down barriers and create meaningful connections between people with disabilities and their local communities.</p>
      
      <h2>What Community Participation Looks Like</h2>
      <p>Community participation isn't just about being present in community spaces—it's about active engagement, building relationships, and contributing to community life. This might involve joining local clubs, volunteering, participating in cultural events, or simply feeling comfortable accessing everyday services like shops and libraries.</p>
      
      <h2>Success Stories</h2>
      <p>We've seen incredible transformations when people are supported to engage with their communities. From individuals discovering new talents through art classes to participants building lasting friendships through sports groups, the impact extends far beyond the activities themselves.</p>
      
      <h2>Our Support Approach</h2>
      <p>Our community participation support is highly individualized. We work with each person to identify their interests, goals, and any barriers they might face. Our support workers then provide the right level of assistance to help people engage confidently in their chosen activities.</p>
      
      <h2>Building Bridges</h2>
      <p>We also work with community organizations to build their capacity to welcome and include people with disabilities. This might involve providing disability awareness training, suggesting simple accessibility improvements, or facilitating introductions between participants and community groups.</p>
      
      <h2>The Ripple Effect</h2>
      <p>When communities become more inclusive, everyone benefits. People with disabilities gain confidence and skills, while community members develop greater understanding and appreciation for diversity. This creates stronger, more connected communities for all.</p>
    `,
    date: "March 5, 2024",
    author: "Michael Chen",
    category: "Community Inclusion",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=800",
    imageAlt: "Diverse group of people participating in community garden project",
  },
  "employment-pathways": {
    title: "Creating Meaningful Employment Pathways for People with Disabilities",
    excerpt:
      "Exploring how supported employment services are opening doors to meaningful work opportunities and career development.",
    content: `
      <p>Employment is about more than earning an income—it's about purpose, identity, social connection, and contributing to society. For people with disabilities, accessing meaningful employment can be challenging, but with the right support, it's absolutely achievable.</p>
      
      <h2>The Employment Landscape</h2>
      <p>While employment rates for people with disabilities have improved in recent years, there's still significant work to be done. Many employers are eager to create inclusive workplaces but need guidance on how to provide appropriate support and accommodations.</p>
      
      <h2>Our Supported Employment Approach</h2>
      <p>We believe in a person-centered approach to employment support. This means starting with the individual's interests, strengths, and career goals, then working to find or create opportunities that align with these factors.</p>
      
      <h3>Key Elements of Our Service:</h3>
      <ul>
        <li><strong>Career Exploration:</strong> Helping individuals discover their interests and aptitudes</li>
        <li><strong>Skills Development:</strong> Building both job-specific and workplace social skills</li>
        <li><strong>Job Matching:</strong> Finding roles that suit the person's abilities and interests</li>
        <li><strong>Workplace Support:</strong> Providing on-the-job coaching and advocacy</li>
        <li><strong>Employer Education:</strong> Working with employers to create inclusive workplaces</li>
      </ul>
      
      <h2>Success in Action</h2>
      <p>We've supported people into diverse roles across many industries—from administration and retail to hospitality and creative industries. Each success story reinforces our belief that with the right support, people with disabilities can thrive in the workplace.</p>
      
      <h2>The Business Case for Inclusion</h2>
      <p>Employers who embrace inclusive hiring practices often find that employees with disabilities bring unique perspectives, strong work ethics, and valuable skills to their teams. Many also report improved workplace culture and customer satisfaction.</p>
    `,
    date: "February 28, 2024",
    author: "Lisa Thompson",
    category: "Employment",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    imageAlt: "Person with disability working confidently in modern office environment",
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    return {
      title: "Article Not Found - Enable Us",
    }
  }

  return {
    title: `${article.title} - Enable Us News`,
    description: article.excerpt,
  }
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <NewsArticle article={article} />
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }))
}
