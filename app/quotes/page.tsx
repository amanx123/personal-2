"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Quote, Share, Copy, Check } from "lucide-react"

const quotes = [
  {
    id: 1,
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    category: "Innovation",
    featured: true,
  },
  {
    id: 2,
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    category: "Design",
    featured: false,
  },
  {
    id: 3,
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    category: "Development",
    featured: false,
  },
  {
    id: 4,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivation",
    featured: false,
  },
  {
    id: 5,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "Leadership",
    featured: false,
  },
  {
    id: 6,
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    category: "Design",
    featured: false,
  },
  {
    id: 7,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Motivation",
    featured: false,
  },
  {
    id: 8,
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    category: "Technology",
    featured: false,
  },
]

const categories = ["All", "Innovation", "Design", "Development", "Motivation", "Leadership", "Technology"]

export default function QuotesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const filteredQuotes = quotes.filter((quote) => {
    return selectedCategory === "All" || quote.category === selectedCategory
  })

  const copyToClipboard = (text: string, author: string, id: number) => {
    navigator.clipboard.writeText(`"${text}" - ${author}`)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const featuredQuote = quotes.find((quote) => quote.featured)
  const regularQuotes = filteredQuotes.filter((quote) => !quote.featured)

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
            Quotes
          </h1>
          <p className="text-zinc-300 text-sm">Inspiring words that fuel creativity</p>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-1 justify-center">
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
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Quote */}
        {featuredQuote && selectedCategory === "All" && (
          <Card className="mb-4 p-3 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md text-center">
            <Badge className="text-xs bg-amber-600 text-white border-amber-500 mb-3">Featured</Badge>
            <Quote className="w-6 h-6 text-amber-300 mx-auto mb-3" />
            <blockquote className="text-base font-bold text-white mb-3 leading-relaxed">
              "{featuredQuote.text}"
            </blockquote>
            <p className="text-amber-300 text-sm font-medium mb-3">— {featuredQuote.author}</p>
            <div className="flex justify-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(featuredQuote.text, featuredQuote.author, featuredQuote.id)}
                className="h-6 w-6 p-0 text-amber-300 hover:text-amber-200 hover:bg-amber-900/20"
              >
                {copiedId === featuredQuote.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-amber-300 hover:text-amber-200 hover:bg-amber-900/20"
              >
                <Share className="w-3 h-3" />
              </Button>
            </div>
          </Card>
        )}

        {/* Quotes Grid */}
        <div className="space-y-2">
          {regularQuotes.map((quote) => (
            <Card
              key={quote.id}
              className="p-3 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-300 group hover:scale-[1.01]"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs border-zinc-600 text-zinc-300 bg-zinc-800/30 flex-shrink-0">
                      {quote.category}
                    </Badge>
                  </div>

                  <blockquote className="text-sm font-medium text-white mb-2 leading-relaxed line-clamp-2">"{quote.text}"</blockquote>

                  <div className="flex items-center justify-between">
                    <p className="text-amber-300 text-xs font-medium">— {quote.author}</p>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(quote.text, quote.author, quote.id)}
                        className="h-6 w-6 p-0 text-zinc-400 hover:text-amber-300 hover:bg-amber-900/20"
                      >
                        {copiedId === quote.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-zinc-400 hover:text-amber-300 hover:bg-amber-900/20"
                      >
                        <Share className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredQuotes.length === 0 && (
          <div className="text-center py-8">
            <p className="text-zinc-400 text-sm">No quotes found in this category.</p>
            <Button
              variant="ghost"
              onClick={() => setSelectedCategory("All")}
              className="mt-3 h-8 px-3 text-xs text-amber-300 hover:text-amber-200 hover:bg-amber-900/20"
            >
              View All Quotes
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
