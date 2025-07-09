"use client"

import { ArrowUpRight, Search, ExternalLink, BookOpen, Heart, LifeBuoy } from "lucide-react"
import { useState, useMemo } from "react"

const resourceCategories = [
  {
    category: "General Child Development Resources",
    resources: [
      {
        name: "Raising Children Network",
        url: "https://raisingchildren.net.au/",
        description: "A comprehensive Australian resource for parenting newborns to teens.",
      },
      {
        name: "NSW Health - Child Health and Development",
        url: "https://www.health.nsw.gov.au/childdevelopment",
        description: "Information on developmental checks and support services.",
      },
      {
        name: "Healthdirect - Developmental Milestones",
        url: "https://www.healthdirect.gov.au/developmental-milestones",
        description: "A guide to developmental milestones for babies and children.",
      },
      {
        name: "CDC’s Developmental Milestones",
        url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html",
        description: "Tools and resources from the Centers for Disease Control and Prevention.",
      },
      {
        name: "Early Childhood Australia",
        url: "https://www.earlychildhoodaustralia.org.au/parent-resources/",
        description: "Resources and information for parents and early childhood educators.",
      },
      {
        name: "Brighter Beginnings NSW",
        url: "https://www.nsw.gov.au/family-and-relationships/early-child-development",
        description: "Support for families and early childhood development in NSW.",
      },
    ],
  },
  {
    category: "Early Intervention Support Services",
    resources: [
      {
        name: "Lifestart",
        url: "https://www.lifestart.org.au/services/early-childhood-intervention-supports/",
        description: "Specialised therapy and support for children and young people with disability.",
      },
      {
        name: "EACH Services",
        url: "https://www.each.com.au/services/audience/children",
        description: "Health and support services for children and families.",
      },
      {
        name: "NDIS Early Childhood Support",
        url: "https://www.ndis.gov.au/understanding/families-and-carers/early-childhood-approach-children-younger-9",
        description: "Official information on the NDIS Early Childhood Approach.",
      },
      {
        name: "SNAICC - National Voice for Our Children",
        url: "https://www.snaicc.org.au/our-work/early-childhood-development/",
        description: "Resources for Aboriginal and Torres Strait Islander children.",
      },
      {
        name: "EarlyEd",
        url: "https://www.earlyed.com.au/",
        description: "Early intervention services for young children with disabilities.",
      },
    ],
  },
  {
    category: "Other Support Services & Helplines",
    resources: [
      {
        name: "Carers Australia",
        url: "https://www.carersaustralia.com.au/information-for-carers/early-childhood-intervention/",
        description: "Support and resources for carers of children with disabilities.",
      },
      {
        name: "Autism Connect (Amaze)",
        url: "https://www.amaze.org.au/",
        description: "Australia's national autism helpline. Phone: 1300 308 699",
      },
      {
        name: "Parent Line",
        url: "https://www.parentline.org.au/",
        description: "Confidential telephone counselling for parents. Phone: 1300 1300 52",
      },
      {
        name: "Kids Helpline",
        url: "https://kidshelpline.com.au/",
        description: "Free, private and confidential 24/7 phone counselling. Phone: 1800 55 1800",
      },
    ],
  },
]

export default function ExternalResources() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase()
    if (!query && !activeCategory) return resourceCategories
    
    return resourceCategories
      .map(category => ({
        ...category,
        resources: category.resources.filter(
          resource =>
            resource.name.toLowerCase().includes(query) ||
            resource.description.toLowerCase().includes(query) ||
            resource.url.toLowerCase().includes(query)
        )
      }))
      .filter(category => 
        (activeCategory ? category.category === activeCategory : true) && 
        category.resources.length > 0
      )
  }, [searchQuery, activeCategory])

  const categoryIcons = {
    'General Child Development Resources': <BookOpen className="h-5 w-5 text-teal-600" />,
    'Early Intervention Support Services': <Heart className="h-5 w-5 text-orange-500" />,
    'Other Support Services & Helplines': <LifeBuoy className="h-5 w-5 text-amber-500" />
  }

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
            External Resources
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-poppins">
            Helpful Links & Support Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover trusted organizations and services offering valuable information and support for families and children.
          </p>
          
          {/* Search and Filter */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-sm font-medium rounded-full ${
                  !activeCategory
                    ? 'bg-teal-100 text-teal-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {resourceCategories.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full inline-flex items-center gap-2 ${
                    activeCategory === category.category
                      ? 'bg-teal-100 text-teal-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {categoryIcons[category.category as keyof typeof categoryIcons]}
                  {category.category.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.category} className="scroll-mt-24" id={category.category.replace(/\s+/g, '-').toLowerCase()}>
                <div className="flex items-center gap-3 mb-6">
                  {categoryIcons[category.category as keyof typeof categoryIcons]}
                  <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                    {category.category}
                  </h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  {category.resources.map((resource) => (
                    <div 
                      key={resource.name} 
                      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-teal-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                            {resource.name}
                          </h4>
                          <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Visit
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                          {resource.description}
                        </p>
                        <div className="mt-4">
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 group-hover:underline"
                          >
                            Learn more
                            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No resources found matching your search. Try different keywords.</p>
            </div>
          )}
        </div>

        {/* Back to top button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
          >
            Back to top
          </button>
        </div>
      </div>
    </div>
  )
}
