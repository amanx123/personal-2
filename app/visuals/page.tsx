"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download, Heart, Calendar, Filter, ImageIcon, Video, Palette } from "lucide-react"

const visuals = [
  {
    id: 1,
    title: "AI-Generated Abstract Art",
    description: "Exploring the intersection of technology and creativity through AI-generated abstract compositions",
    image: "/ai-abstract-art-collection.png",
    type: "Digital Art",
    category: "AI Art",
    date: "2024-01-15",
    featured: true,
  },
  {
    id: 2,
    title: "Product Design Mockups",
    description: "Clean and modern product design mockups for various digital interfaces",
    image: "/product-design-mockups.png",
    type: "Design",
    category: "UI/UX",
    date: "2024-01-12",
    featured: false,
  },
  {
    id: 3,
    title: "Brand Identity Collection",
    description: "Logo designs and brand identity systems for various client projects",
    image: "/brand-identity-showcase.png",
    type: "Branding",
    category: "Identity",
    date: "2024-01-10",
    featured: false,
  },
  {
    id: 4,
    title: "Photography Portfolio",
    description: "Street photography and urban landscapes captured during travels",
    image: "/photography-portfolio.png",
    type: "Photography",
    category: "Street",
    date: "2024-01-08",
    featured: false,
  },
  {
    id: 5,
    title: "3D Illustrations",
    description: "Modern 3D illustrations and renders for web and mobile applications",
    image: "/3d-illustrations-collection.png",
    type: "3D Art",
    category: "Illustration",
    date: "2024-01-05",
    featured: false,
  },
  {
    id: 6,
    title: "Motion Graphics Reel",
    description: "Collection of motion graphics and animations for various projects",
    image: "/motion-graphics-reel.png",
    type: "Animation",
    category: "Motion",
    date: "2024-01-03",
    featured: false,
  },
]

const categories = ["All", "AI Art", "UI/UX", "Identity", "Street", "Illustration", "Motion"]
const types = ["All", "Digital Art", "Design", "Branding", "Photography", "3D Art", "Animation"]

const typeIcons = {
  "Digital Art": Palette,
  Design: ImageIcon,
  Branding: Heart,
  Photography: Eye,
  "3D Art": ImageIcon,
  Animation: Video,
}

export default function VisualsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All")

  const filteredVisuals = visuals.filter((visual) => {
    const matchesCategory = selectedCategory === "All" || visual.category === selectedCategory
    const matchesType = selectedType === "All" || visual.type === selectedType
    return matchesCategory && matchesType
  })

  const featuredVisual = visuals.find((visual) => visual.featured)
  const regularVisuals = filteredVisuals.filter((visual) => !visual.featured)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden md:pr-10">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-emerald-950/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/10 via-transparent to-yellow-950/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.15)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.1)_0%,transparent_40%)]" />

      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 text-white bg-gradient-to-r from-white via-amber-100 to-emerald-100 bg-clip-text text-transparent">
            Visuals
          </h1>
          <p className="text-zinc-300 text-sm">Creative work spanning digital art and design</p>
        </div>

        {/* Filters */}
        <div className="mb-6 space-y-3">
          <div>
            <h3 className="text-xs font-medium text-zinc-400 mb-2">Category</h3>
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

          <div>
            <h3 className="text-xs font-medium text-zinc-400 mb-2">Type</h3>
            <div className="flex flex-wrap gap-1">
              {types.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className={
                    selectedType === type
                      ? "h-7 px-2 text-xs bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500"
                      : "h-7 px-2 text-xs bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600"
                  }
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Visual */}
        {featuredVisual && selectedCategory === "All" && selectedType === "All" && (
          <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <Badge className="text-xs bg-amber-600 text-white border-amber-500">Featured</Badge>
              <div className="flex items-center gap-1 text-xs text-zinc-400">
                <Calendar className="w-3 h-3" />
                {new Date(featuredVisual.date).toLocaleDateString()}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {typeIcons[featuredVisual.type as keyof typeof typeIcons] && (
                    <div className="w-6 h-6 rounded-lg bg-amber-600 flex items-center justify-center">
                      {(() => {
                        const Icon = typeIcons[featuredVisual.type as keyof typeof typeIcons]
                        return <Icon className="w-3 h-3 text-white" />
                      })()}
                    </div>
                  )}
                  <h2 className="text-lg font-bold text-white">{featuredVisual.title}</h2>
                </div>

                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{featuredVisual.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="text-xs border-zinc-600 text-zinc-300 bg-zinc-800/30">
                    {featuredVisual.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs border-zinc-600 text-zinc-300 bg-zinc-800/30">
                    {featuredVisual.category}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="h-8 px-3 text-xs bg-amber-600 hover:bg-amber-500 text-white">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3 text-xs border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                </div>
              </div>

              <div className="relative group">
                <img
                  src={featuredVisual.image || "/placeholder.svg"}
                  alt={featuredVisual.title}
                  className="w-full h-32 object-cover rounded-lg border border-zinc-700/50 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </Card>
        )}

        {/* Visuals Grid */}
        <div className="space-y-4">
          {regularVisuals.map((visual) => (
            <Card
              key={visual.id}
              className="overflow-hidden bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="relative">
                <img
                  src={visual.image || "/placeholder.svg"}
                  alt={visual.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-2 right-2">
                  <Badge className="text-xs bg-black/50 text-white border-zinc-600 backdrop-blur-sm">
                    {visual.type}
                  </Badge>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {typeIcons[visual.type as keyof typeof typeIcons] && (
                    <div className="w-5 h-5 rounded bg-emerald-600 flex items-center justify-center">
                      {(() => {
                        const Icon = typeIcons[visual.type as keyof typeof typeIcons]
                        return <Icon className="w-2.5 h-2.5 text-white" />
                      })()}
                    </div>
                  )}
                  <h3 className="text-sm font-semibold text-white group-hover:text-amber-100 transition-colors">
                    {visual.title}
                  </h3>
                </div>

                <p className="text-zinc-300 text-xs mb-3 leading-relaxed">{visual.description}</p>

                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                  <Badge variant="outline" className="text-xs border-zinc-600 text-zinc-300 bg-zinc-800/30">
                    {visual.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(visual.date).toLocaleDateString()}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="h-7 px-2 text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex-1">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 w-7 p-0 border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                  >
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredVisuals.length === 0 && (
          <div className="text-center py-8">
            <p className="text-zinc-400 text-sm">No visuals found matching your criteria.</p>
            <Button
              variant="ghost"
              onClick={() => {
                setSelectedCategory("All")
                setSelectedType("All")
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
