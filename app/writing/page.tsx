"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, Clock, ArrowRight, Filter } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    slug: "future-of-ai",
    title: "The Future of AI: What's Coming Next",
    excerpt:
      "Exploring the key trends and developments that will shape the future of artificial intelligence in 2024 and beyond.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI",
    tags: ["AI", "Technology", "Future"],
    featured: true,
  },
  {
    id: 2,
    slug: "startup-funding-guide",
    title: "Complete Guide to Startup Funding in 2024",
    excerpt:
      "A comprehensive guide covering everything you need to know about raising capital for your startup in today's market.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Startups",
    tags: ["Startups", "Funding", "Business"],
    featured: false,
  },
  {
    id: 3,
    slug: "tech-trends-2024",
    title: "Top Technology Trends Shaping 2024",
    excerpt:
      "Discover the key technology trends that are defining 2024 and their potential impact across various industries.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Technology",
    tags: ["Technology", "Trends", "Innovation"],
    featured: false,
  },
]

const categories = ["All", "AI", "Startups", "Technology", "Design"]

export default function WritingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-zinc-800/30" />
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 text-white bg-gradient-to-r from-white via-amber-100 to-emerald-100 bg-clip-text text-transparent">
            Writing
          </h1>
          <p className="text-zinc-300 text-sm">Thoughts on tech, AI, and startups</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-10 text-sm bg-zinc-900/50 border-zinc-700/50 focus:border-amber-500/50 text-white placeholder:text-zinc-400 backdrop-blur-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "h-8 px-3 text-xs bg-amber-600 hover:bg-amber-500 text-white border-amber-500"
                    : "h-8 px-3 text-xs bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600"
                }
              >
                <Filter className="w-3 h-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <Link href={`/writing/${featuredPost.slug}`}>
            <Card className="mb-4 p-3 bg-transparent bg-zinc-900/60 border border-zinc-700/50 backdrop-blur-sm hover:border-zinc-600 transition-all duration-200 group cursor-pointer">
              <div className="flex items-start justify-between mb-2">
                <Badge className="text-xs bg-white text-black">Featured</Badge>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>

              <h2 className="text-base font-semibold mb-2 text-white group-hover:text-zinc-200 transition-colors">
                {featuredPost.title}
              </h2>

              <p className="text-zinc-400 text-xs mb-3 leading-relaxed line-clamp-2">{featuredPost.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {featuredPost.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-800/60 text-zinc-300 border-zinc-700/50 text-xs px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </Card>
          </Link>
        )}

        {/* Regular Posts List */}
        <div>
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/writing/${post.slug}`}>
              <Card className="p-3 mb-3 bg-transparent bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700 transition-all duration-200 group cursor-pointer">
                <div className="flex items-center justify-between mb-2 text-xs text-zinc-500">
                  <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400 bg-transparent px-2 py-0.5">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <h3 className="text-sm font-medium mb-1 text-white group-hover:text-zinc-200 transition-colors">
                  {post.title}
                </h3>

                <p className="text-zinc-400 text-xs mb-2 leading-relaxed line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-zinc-800/40 text-zinc-400 border-zinc-700/50 text-xs px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400 text-sm mb-4">No articles found matching your criteria.</p>
            <Button
              variant="ghost"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="h-9 px-4 text-sm text-amber-300 hover:text-amber-200 hover:bg-amber-900/20"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
