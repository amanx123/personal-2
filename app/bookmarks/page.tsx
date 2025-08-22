"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ExternalLink, Calendar, Filter, Globe, Code, Palette, Zap } from "lucide-react"

const bookmarks = [
  {
    id: 1,
    title: "Vercel Design System",
    description: "Beautiful design system and component library from Vercel team",
    url: "https://vercel.com/design",
    category: "Design",
    tags: ["Design System", "Components", "UI"],
    dateAdded: "2024-01-15",
    featured: true,
  },
  {
    id: 2,
    title: "OpenAI GPT-4 Documentation",
    description: "Complete guide to integrating GPT-4 into your applications",
    url: "https://platform.openai.com/docs",
    category: "AI",
    tags: ["AI", "API", "Documentation"],
    dateAdded: "2024-01-12",
    featured: false,
  },
  {
    id: 3,
    title: "React Server Components",
    description: "Deep dive into React Server Components and their benefits",
    url: "https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023",
    category: "Development",
    tags: ["React", "Server Components", "Performance"],
    dateAdded: "2024-01-10",
    featured: false,
  },
  {
    id: 4,
    title: "Startup Fundraising Guide",
    description: "Comprehensive guide to raising funds for your startup",
    url: "https://www.ycombinator.com/library/4A-a-guide-to-seed-fundraising",
    category: "Business",
    tags: ["Fundraising", "Startups", "YC"],
    dateAdded: "2024-01-08",
    featured: false,
  },
  {
    id: 5,
    title: "Figma Auto Layout Best Practices",
    description: "Master auto layout in Figma for responsive designs",
    url: "https://www.figma.com/best-practices/auto-layout/",
    category: "Design",
    tags: ["Figma", "Auto Layout", "Responsive"],
    dateAdded: "2024-01-05",
    featured: false,
  },
  {
    id: 6,
    title: "Next.js 14 App Router",
    description: "Everything you need to know about the new App Router",
    url: "https://nextjs.org/docs/app",
    category: "Development",
    tags: ["Next.js", "App Router", "React"],
    dateAdded: "2024-01-03",
    featured: false,
  },
]

const categories = ["All", "Design", "Development", "AI", "Business"]

const categoryIcons = {
  Design: Palette,
  Development: Code,
  AI: Zap,
  Business: Globe,
}

export default function BookmarksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const matchesSearch =
      bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bookmark.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bookmark.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || bookmark.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredBookmark = bookmarks.find((bookmark) => bookmark.featured)
  const regularBookmarks = filteredBookmarks.filter((bookmark) => !bookmark.featured)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-emerald-950/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/10 via-transparent to-yellow-950/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.15)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.1)_0%,transparent_40%)]" />

      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 text-white bg-gradient-to-r from-white via-amber-100 to-emerald-100 bg-clip-text text-transparent">
            Bookmarks
          </h1>
          <p className="text-zinc-300 text-sm">Curated collection of valuable resources</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search bookmarks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-8 text-sm bg-zinc-900/50 border-zinc-700/50 focus:border-amber-500/50 text-white placeholder:text-zinc-400 backdrop-blur-sm"
            />
          </div>

          <div className="flex flex-wrap gap-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "h-7 px-2 text-xs bg-amber-600 hover:bg-amber-500 text-white border-amber-500"
                    : "h-7 px-2 text-xs bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600"
                }
              >
                <Filter className="w-3 h-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Bookmark */}
        {featuredBookmark && selectedCategory === "All" && (
          <Card className="mb-4 p-3 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md hover:border-amber-500/50 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center">
                  <Badge className="text-xs bg-transparent text-white border-0 p-0">★</Badge>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-sm font-bold text-white group-hover:text-amber-100 transition-colors truncate">
                    {featuredBookmark.title}
                  </h2>
                  <Badge className="text-xs bg-amber-600 text-white border-amber-500 flex-shrink-0">Featured</Badge>
                </div>

                <p className="text-zinc-300 text-xs mb-2 leading-relaxed line-clamp-1">{featuredBookmark.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {featuredBookmark.tags.slice(0, 1).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-zinc-800/50 text-zinc-300 border-zinc-700/50 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {featuredBookmark.tags.length > 1 && (
                      <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-300 border-zinc-700/50 text-xs">
                        +{featuredBookmark.tags.length - 1}
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs text-amber-300 hover:text-amber-200 hover:bg-amber-900/20 group"
                    onClick={() => window.open(featuredBookmark.url, "_blank")}
                  >
                    Visit
                    <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Bookmarks Grid */}
        <div className="space-y-2">
          {regularBookmarks.map((bookmark) => (
            <Card
              key={bookmark.id}
              className="p-3 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-300 group cursor-pointer hover:scale-[1.01]"
              onClick={() => window.open(bookmark.url, "_blank")}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {categoryIcons[bookmark.category as keyof typeof categoryIcons] && (
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                      {(() => {
                        const Icon = categoryIcons[bookmark.category as keyof typeof categoryIcons]
                        return <Icon className="w-4 h-4 text-white" />
                      })()}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-white group-hover:text-amber-100 transition-colors truncate">
                      {bookmark.title}
                    </h3>
                    <Badge variant="outline" className="text-xs border-zinc-600 text-zinc-300 bg-zinc-800/30 flex-shrink-0">
                      {bookmark.category}
                    </Badge>
                  </div>

                  <p className="text-zinc-300 text-xs mb-2 leading-relaxed line-clamp-1">{bookmark.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {bookmark.tags.slice(0, 1).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-zinc-800/50 text-zinc-400 border-zinc-700/50 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {bookmark.tags.length > 1 && (
                        <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-400 border-zinc-700/50 text-xs">
                          +{bookmark.tags.length - 1}
                        </Badge>
                      )}
                    </div>
                    <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-amber-300 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredBookmarks.length === 0 && (
          <div className="text-center py-8">
            <p className="text-zinc-400 text-sm">No bookmarks found matching your criteria.</p>
            <Button
              variant="ghost"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="mt-3 h-8 px-3 text-xs text-amber-300 hover:text-amber-200 hover:bg-amber-900/20"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
