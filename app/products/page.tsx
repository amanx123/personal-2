"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  Star,
  Users,
  Download,
  Zap,
  Palette,
  Code,
  Smartphone,
  Globe,
  Database,
  Brain,
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
    stats: { users: "1K+", rating: 4.8, downloads: "15K+" },
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example/ai-content",
      website: "https://aicontentgen.com",
    },
    tech: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    featured: true,
  },
  {
    id: 2,
    name: "Design System Builder",
    description:
      "Create consistent, scalable design systems for your team. Generate components, tokens, and documentation automatically.",
    category: "Design Tools",
    status: "Beta",
    price: "Free",
    image: "/design-system-builder.png",
    features: ["Component Library", "Design Tokens", "Auto Documentation", "Figma Integration"],
    stats: { users: "1.2K+", rating: 4.6, downloads: "8K+" },
    links: {
      demo: "https://demo.designsystem.com",
      github: "https://github.com/example/design-system",
      website: "https://designsystembuilder.com",
    },
    tech: ["React", "Storybook", "TypeScript", "Figma API"],
    featured: false,
  },
  {
    id: 3,
    name: "Startup Analytics Dashboard",
    description:
      "Comprehensive analytics platform for startups. Track KPIs, user behavior, and growth metrics in one beautiful dashboard.",
    category: "Analytics",
    status: "Live",
    price: "$49/month",
    image: "/startup-analytics-dashboard.png",
    features: ["Real-time Analytics", "Custom Reports", "Team Collaboration", "API Integration"],
    stats: { users: "850+", rating: 4.9, downloads: "5K+" },
    links: {
      demo: "https://demo.startupanalytics.com",
      website: "https://startupanalytics.com",
    },
    tech: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
    featured: false,
  },
  {
    id: 4,
    name: "Mobile App Template Kit",
    description:
      "Production-ready React Native templates for rapid mobile app development. Includes authentication, payments, and more.",
    category: "Mobile",
    status: "Live",
    price: "$99 one-time",
    image: "/mobile-app-templates.png",
    features: ["10+ Templates", "Authentication", "Payment Integration", "Push Notifications"],
    stats: { users: "3.1K+", rating: 4.7, downloads: "12K+" },
    links: {
      demo: "https://demo.mobilekit.com",
      github: "https://github.com/example/mobile-kit",
      website: "https://mobileappkit.com",
    },
    tech: ["React Native", "Expo", "Firebase", "Stripe"],
    featured: false,
  },
  {
    id: 5,
    name: "API Documentation Generator",
    description:
      "Automatically generate beautiful, interactive API documentation from your code. Keep docs in sync with zero effort.",
    category: "Developer Tools",
    status: "Coming Soon",
    price: "$19/month",
    image: "/api-doc-generator-interface.png",
    features: ["Auto Generation", "Interactive Examples", "Version Control", "Team Collaboration"],
    stats: { users: "500+", rating: 4.5, downloads: "2K+" },
    links: {
      website: "https://apidocgen.com",
    },
    tech: ["Node.js", "OpenAPI", "React", "MongoDB"],
    featured: false,
  },
  {
    id: 6,
    name: "No-Code Database Builder",
    description:
      "Build and deploy databases without writing SQL. Visual interface for creating tables, relationships, and APIs.",
    category: "No-Code",
    status: "Beta",
    price: "Free",
    image: "/no-code-database-builder.png",
    features: ["Visual Builder", "Auto API Generation", "Real-time Sync", "Export Options"],
    stats: { users: "1.8K+", rating: 4.4, downloads: "7K+" },
    links: {
      demo: "https://demo.nocodedatabase.com",
      github: "https://github.com/example/nocode-db",
      website: "https://nocodedatabase.com",
    },
    tech: ["Svelte", "GraphQL", "Prisma", "Docker"],
    featured: false,
  },
]

const categories = ["All", "AI Tools", "Design Tools", "Analytics", "Mobile", "Developer Tools", "No-Code"]

const statusColors = {
  Live: "bg-emerald-600 text-white",
  Beta: "bg-amber-600 text-white",
  "Coming Soon": "bg-zinc-600 text-white",
}

const categoryIcons = {
  "AI Tools": Brain,
  "Design Tools": Palette,
  Analytics: Database,
  Mobile: Smartphone,
  "Developer Tools": Code,
  "No-Code": Zap,
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

      <div className="relative z-10 container mx-auto px-6 py-16 pt-24 max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold mb-2 text-white bg-gradient-to-r from-white via-amber-100 to-emerald-100 bg-clip-text text-transparent">
            Products
          </h1>
          <p className="text-zinc-300 text-sm font-light">Digital tools and solutions I've built</p>
        </div>

        {/* Featured Product */}
        {featuredProduct && (
          <Card className="mb-8 p-6 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md hover:border-amber-500/50 transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-start justify-between mb-4">
              <Badge className="bg-amber-600 text-white border-amber-500 text-xs">Featured</Badge>
              <Badge className={statusColors[featuredProduct.status as keyof typeof statusColors] + " text-xs"}>
                {featuredProduct.status}
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {categoryIcons[featuredProduct.category as keyof typeof categoryIcons] && (
                    <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center">
                      {(() => {
                        const Icon = categoryIcons[featuredProduct.category as keyof typeof categoryIcons]
                        return <Icon className="w-4 h-4 text-white" />
                      })()}
                    </div>
                  )}
                  <h2 className="text-xl font-semibold text-white">{featuredProduct.name}</h2>
                </div>

                <p className="text-zinc-300 mb-6 text-sm leading-relaxed">{featuredProduct.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-300" />
                    <span className="text-zinc-300">{featuredProduct.stats.users}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-300" />
                    <span className="text-zinc-300">{featuredProduct.stats.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-amber-300" />
                    <span className="text-zinc-300">{featuredProduct.stats.downloads}</span>
                  </div>
                  <div className="text-lg font-semibold text-amber-300">{featuredProduct.price}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProduct.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-zinc-600 text-zinc-300 bg-zinc-800/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {featuredProduct.links.demo && (
                    <Button className="bg-amber-600 hover:bg-amber-500 text-white text-sm">
                      <Globe className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {featuredProduct.links.github && (
                    <Button
                      variant="outline"
                      className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent text-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative">
                <img
                  src={featuredProduct.image || "/placeholder.svg"}
                  alt={featuredProduct.name}
                  className="w-full h-48 object-cover rounded-lg border border-zinc-700/50"
                />
              </div>
            </div>
          </Card>
        )}

        {/* Products List */}
        <div className="space-y-4">
          {regularProducts.map((product) => (
            <Card
              key={product.id}
              className="p-5 bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-300 group hover:scale-[1.01]"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="border-zinc-600 text-zinc-300 bg-zinc-800/30 text-xs">
                  {product.category}
                </Badge>
                <Badge className={statusColors[product.status as keyof typeof statusColors] + " text-xs"}>
                  {product.status}
                </Badge>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    {categoryIcons[product.category as keyof typeof categoryIcons] && (
                      <div className="w-6 h-6 rounded bg-emerald-600 flex items-center justify-center">
                        {(() => {
                          const Icon = categoryIcons[product.category as keyof typeof categoryIcons]
                          return <Icon className="w-3 h-3 text-white" />
                        })()}
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-white group-hover:text-amber-100 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{product.description}</p>

                  <div className="flex items-center justify-between text-sm text-zinc-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {product.stats.users}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {product.stats.rating}
                      </div>
                    </div>
                    <div className="text-amber-300 font-semibold">{product.price}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tech.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-zinc-800/50 text-zinc-400 border-zinc-700/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {product.tech.length > 3 && (
                      <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-400 border-zinc-700/50 text-xs">
                        +{product.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {product.links.demo && (
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    )}
                    {product.links.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent text-xs"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg border border-zinc-700/50"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12">
          <p className="text-zinc-400 mb-4 text-sm">Have an idea for collaboration?</p>
          <Button className="bg-amber-600 hover:bg-amber-500 text-white text-sm">
            Get in Touch
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
