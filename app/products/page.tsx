"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Users,
  Zap,
  Palette,
  Code,
  Smartphone,
  Database,
  Brain,
  ArrowRight,
} from "lucide-react"

const products = [
  {
    id: 1,
    name: "Plug",
    description:
      "Transform your content creation with AI-powered writing assistance. Generate blog posts, social media content, and marketing copy in seconds.",
    category: "AI Tools",
    status: "Live",
    price: "$29/month",
    image: "/ai-content-dashboard.png",
    features: ["GPT-4 Integration", "50+ Templates", "Multi-language Support", "SEO Optimization"],
    stats: { users: "1.2K+" },
    links: {
      website: "https://aicontentgen.com",
    },
    tech: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    featured: true,
  },
  {
    id: 2,
    name: "Magictools",
    description:
      "Discover, Launch and Buy / Sell the best tech and ai products.",
    category: "Marketplace",
    status: "Beta",
    price: "Free",
    image: "/design-system-builder.png",
    features: ["Component Library", "Design Tokens", "Auto Documentation", "Figma Integration"],
    stats: { users: "850+" },
    links: {
      website: "https://designsystembuilder.com",
    },
    tech: ["React", "Storybook", "TypeScript", "Figma API"],
    featured: false,
  },
  {
    id: 3,
    name: "Proshorts",
    description:
      "Comprehensive analytics platform for startups. Track KPIs, user behavior, and growth metrics in one beautiful dashboard.",
    category: "Analytics",
    status: "Live",
    price: "$49/month",
    image: "/startup-analytics-dashboard.png",
    features: ["Real-time Analytics", "Custom Reports", "Team Collaboration", "API Integration"],
    stats: { users: "650+" },
    links: {
      website: "https://startupanalytics.com",
    },
    tech: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
    featured: false,
  },
  {
    id: 4,
    name: "Topdevs",
    description:
      "Production-ready React Native templates for rapid mobile app development. Includes authentication, payments, and more.",
    category: "Mobile",
    status: "Live",
    price: "$99 one-time",
    image: "/mobile-app-templates.png",
    features: ["10+ Templates", "Authentication", "Payment Integration", "Push Notifications"],
    stats: { users: "2.1K+" },
    links: {
      website: "https://mobileappkit.com",
    },
    tech: ["React Native", "Expo", "Firebase", "Stripe"],
    featured: false,
  },
  {
    id: 5,
    name: "Nomadsfuel",
    description:
      "Automatically generate beautiful, interactive API documentation from your code. Keep docs in sync with zero effort.",
    category: "Developer Tools",
    status: "Coming Soon",
    price: "$19/month",
    image: "/api-doc-generator-interface.png",
    features: ["Auto Generation", "Interactive Examples", "Version Control", "Team Collaboration"],
    stats: { users: "320+" },
    links: {
      website: "https://apidocgen.com",
    },
    tech: ["Node.js", "OpenAPI", "React", "MongoDB"],
    featured: false,
  },
  {
    id: 6,
    name: "LearnFast",
    description:
      "Build and deploy databases without writing SQL. Visual interface for creating tables, relationships, and APIs.",
    category: "No-Code",
    status: "Beta",
    price: "Free",
    image: "/no-code-database-builder.png",
    features: ["Visual Builder", "Auto API Generation", "Real-time Sync", "Export Options"],
    stats: { users: "1.5K+" },
    links: {
      website: "https://nocodedatabase.com",
    },
    tech: ["Svelte", "GraphQL", "Prisma", "Docker"],
    featured: false,
  },
  {
    id: 7,
    name: "BuildFast",
    description: "",
    category: "",
    status: "",
    price: "",
    image: "",
    features: [],
    stats: {},
    links: {},
    tech: [],
    featured: false,
  },
  {
    id: 8,
    name: "Humax",
    description: "",
    category: "",
    status: "",
    price: "",
    image: "",
    features: [],
    stats: {},
    links: {},
    tech: [],
    featured: false,
  },
  {
    id: 9,
    name: "Logical",
    description: "",
    category: "",
    status: "",
    price: "",
    image: "",
    features: [],
    stats: {},
    links: {},
    tech: [],
    featured: false,
  },
  {
    id: 10,
    name: "AdFast Ai",
    description: "",
    category: "",
    status: "",
    price: "",
    image: "",
    features: [],
    stats: {},
    links: {},
    tech: [],
    featured: false,
  },
  {
    id: 11,
    name: "Realesthetic",
    description: "",
    category: "",
    status: "",
    price: "",
    image: "",
    features: [],
    stats: {},
    links: {},
    tech: [],
    featured: false,
  },
  {
    id: 12,
    name: "Photopov",
    description: "",
    category: "",
    status: "",
    price: "",
    image: "",
    features: [],
    stats: {},
    links: {},
    tech: [],
    featured: false,
  },
  {
    id: 13,
    name: "Timesaver Ai",
    description: "",
    category: "",
    status: "",
    price: "",
    image: "",
    features: [],
    stats: {},
    links: {},
    tech: [],
    featured: false,
  }
]

const categories = ["All", "AI Tools", "Design Tools", "Analytics", "Mobile", "Developer Tools", "No-Code"]

const statusColors = {
  Live: "bg-emerald-600 text-white border-emerald-500",
  Beta: "bg-amber-600 text-white border-amber-500",
  "Coming Soon": "bg-zinc-600 text-white border-zinc-500",
}

const categoryIcons = {
  "AI Tools": Brain,
  "Design Tools": Palette,
  Analytics: Database,
  Mobile: Smartphone,
  "Developer Tools": Code,
  "No-Code": Zap,
  "Marketplace": Users,
}

export default function ProductsPage() {
  const featuredProduct = products.find((p) => p.featured)
  const regularProducts = products.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-emerald-950/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/10 via-transparent to-yellow-950/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.15)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.1)_0%,transparent_40%)]" />

      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-white bg-gradient-to-r from-white via-amber-100 to-emerald-100 bg-clip-text">
            Products
          </h1>
          <p className="text-zinc-300 text-sm">
            I create apps and SaaS products to solve problems of myself and others.
          </p>
        </div>

        {/* Featured Product */}
        {featuredProduct && (
          <Card className="mb-8 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.02] group cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <Badge className="bg-amber-600 text-white border-amber-500 text-xs">Featured</Badge>
              <Badge className={statusColors[featuredProduct.status as keyof typeof statusColors] + " text-xs"}>
                {featuredProduct.status}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {categoryIcons[featuredProduct.category as keyof typeof categoryIcons] && (
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {(() => {
                      const Icon = categoryIcons[featuredProduct.category as keyof typeof categoryIcons]
                      return <Icon className="w-3 h-3 text-white" />
                    })()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-bold text-white group-hover:text-amber-100 transition-colors duration-300 truncate">
                    {featuredProduct.name}
                  </h2>
                  <p className="text-amber-300 text-xs font-medium">{featuredProduct.price}</p>
                </div>
              </div>

              <p className="text-zinc-300 text-xs leading-relaxed line-clamp-2 ">{featuredProduct.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-zinc-400">
                  <Users className="w-3 h-3" />
                  {featuredProduct.stats.users}
                </div>
                {/* <div className="flex flex-wrap gap-1">
                  {featuredProduct.tech.slice(0, 2).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-zinc-600 text-zinc-300 bg-zinc-800/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div> */}
              </div>

              <div className="pt-1">
                <Button size="sm" className="w-full h-7 text-xs bg-emerald-600 hover:bg-emerald-500 text-white group-hover:bg-emerald-500 transition-all duration-300">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Checkout
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {regularProducts.map((product) => (
            <Card
              key={product.id}
              className="group bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-500 hover:scale-[1.03] flex flex-col cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  <Badge className={statusColors[product.status as keyof typeof statusColors] + " text-xs"}>
                    {product.status}
                  </Badge>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <Badge variant="outline" className="text-xs border-zinc-600 text-zinc-300 bg-zinc-800/80 backdrop-blur-sm">
                    {product.category}
                  </Badge>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  {categoryIcons[product.category as keyof typeof categoryIcons] && (
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {(() => {
                        const Icon = categoryIcons[product.category as keyof typeof categoryIcons]
                        return <Icon className="w-3 h-3 text-white" />
                      })()}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-100 transition-colors duration-300 truncate">
                      {product.name}
                    </h3>
                    <p className="text-amber-300 text-xs font-medium">{product.price}</p>
                  </div>
                </div>

                <p className="text-zinc-300 text-xs leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Stats and Tech Stack */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-zinc-400">
                    <Users className="w-3 h-3" />
                    {product.stats.users}
                  </div>
                  {/* <div className="flex flex-wrap gap-1">
                    {product.tech.slice(0, 2).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-zinc-800/50 text-zinc-400 border-zinc-700/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {product.tech.length > 2 && (
                      <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-400 border-zinc-700/50 text-xs">
                        +{product.tech.length - 2}
                      </Badge>
                    )}
                  </div> */}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-3 pt-0">
                <Button size="sm" className="w-full h-6 text-xs bg-emerald-600 hover:bg-emerald-500 text-white group-hover:bg-emerald-500 transition-all duration-300">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Checkout
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12 pt-8 border-t border-zinc-800">
          <p className="text-zinc-400 mb-4 text-sm">Have an idea for collaboration?</p>
          <Button className="cursor-pointer bg-amber-600 hover:bg-amber-500 text-white text-sm h-9 px-4 transition-all duration-300 hover:scale-105">
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
