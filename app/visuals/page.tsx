"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const photos = [
  {
    id: 1,
    title: "Urban Sunset",
    category: "Street",
    featured: true,
    image: "/photos/urban-sunset.jpg",
  },
  {
    id: 2,
    title: "Mountain Peaks",
    category: "Landscape",
    featured: false,
    image: "/photos/mountain-peaks.jpg",
  },
  {
    id: 3,
    title: "Portrait Study",
    category: "Portrait",
    featured: false,
    image: "/photos/portrait-study.jpg",
  },
  {
    id: 4,
    title: "Street Life",
    category: "Street",
    featured: false,
    image: "/photos/street-life.jpg",
  },
  {
    id: 5,
    title: "Abstract Forms",
    category: "Abstract",
    featured: false,
    image: "/photos/abstract-forms.jpg",
  },
  {
    id: 6,
    title: "Nature's Palette",
    category: "Nature",
    featured: false,
    image: "/photos/natures-palette.jpg",
  },
  {
    id: 7,
    title: "City Lights",
    category: "Urban",
    featured: false,
    image: "/photos/city-lights.jpg",
  },
  {
    id: 8,
    title: "Minimalist",
    category: "Abstract",
    featured: false,
    image: "/photos/minimalist.jpg",
  },
]

export default function VisualsPage() {
  const featuredPhoto = photos.find((photo) => photo.featured)
  const regularPhotos = photos.filter((photo) => !photo.featured)

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
            Photos
          </h1>
          <p className="text-zinc-300 text-sm">Capturing moments through the lens</p>
        </div>



        {/* Featured Photo */}
        {featuredPhoto && (
          <Card className="mb-4 p-3 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md hover:border-amber-500/50 transition-all duration-300">
            <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 relative group">
            </div>
          </Card>
        )}

        {/* Photos Grid */}
        <div className="grid grid-cols-2 gap-2">
          {regularPhotos.map((photo) => (
            <Card
              key={photo.id}
              className="bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 relative group">
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
