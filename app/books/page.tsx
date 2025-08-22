"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star, Calendar, BookOpen, ExternalLink, Filter } from "lucide-react"

const books = [
  {
    id: 1,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    description: "A powerful primer on how—and why—some products satisfy customers while others only frustrate them.",
    category: "Design",
    rating: 5,
    status: "Read",
    dateRead: "2024-01-15",
    cover: "/book-design-everyday-things.png",
    notes: "Essential reading for anyone in product design. Norman's principles of good design are timeless.",
    featured: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy & proven way to build good habits & break bad ones.",
    category: "Productivity",
    rating: 5,
    status: "Read",
    dateRead: "2024-01-10",
    cover: "/book-atomic-habits.png",
    notes: "Practical framework for building habits. The 1% better concept is powerful.",
    featured: false,
  },
  {
    id: 3,
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
    category: "Business",
    rating: 4,
    status: "Read",
    dateRead: "2024-01-05",
    cover: "/book-lean-startup.png",
    notes: "Great introduction to lean methodology and MVP thinking.",
    featured: false,
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A handbook of agile software craftsmanship.",
    category: "Development",
    rating: 5,
    status: "Read",
    dateRead: "2023-12-28",
    cover: "/book-clean-code.png",
    notes: "Must-read for any developer. Changed how I think about writing code.",
    featured: false,
  },
  {
    id: 5,
    title: "Zero to One",
    author: "Peter Thiel",
    description: "Notes on startups, or how to build the future.",
    category: "Business",
    rating: 4,
    status: "Currently Reading",
    dateRead: "",
    cover: "/book-zero-to-one.png",
    notes: "Interesting perspective on monopolies and innovation.",
    featured: false,
  },
  {
    id: 6,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    category: "Psychology",
    rating: 4,
    status: "Want to Read",
    dateRead: "",
    cover: "/book-thinking-fast-slow.png",
    notes: "",
    featured: false,
  },
]

const categories = ["All", "Design", "Development", "Business", "Productivity", "Psychology"]
const statuses = ["All", "Read", "Currently Reading", "Want to Read"]

const statusColors = {
  Read: "bg-emerald-600 text-white",
  "Currently Reading": "bg-amber-600 text-white",
  "Want to Read": "bg-zinc-600 text-white",
}

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory
    const matchesStatus = selectedStatus === "All" || book.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const featuredBook = books.find((book) => book.featured)
  const regularBooks = filteredBooks.filter((book) => !book.featured)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-zinc-600"}`} />
    ))
  }

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
            Books
          </h1>
          <p className="text-zinc-300 text-sm">Reading journey through design and development</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-8 text-sm bg-zinc-900/50 border-zinc-700/50 focus:border-amber-500/50 text-white placeholder:text-zinc-400 backdrop-blur-sm"
            />
          </div>

          <div className="space-y-3">
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
              <h3 className="text-xs font-medium text-zinc-400 mb-2">Status</h3>
              <div className="flex flex-wrap gap-1">
                {statuses.map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedStatus(status)}
                    className={
                      selectedStatus === status
                        ? "h-7 px-2 text-xs bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500"
                        : "h-7 px-2 text-xs bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600"
                    }
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Book */}
        {featuredBook && selectedCategory === "All" && selectedStatus === "All" && (
          <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <Badge className="text-xs bg-amber-600 text-white border-amber-500">Featured</Badge>
              <Badge className={`text-xs ${statusColors[featuredBook.status as keyof typeof statusColors]}`}>
                {featuredBook.status}
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <img
                  src={featuredBook.cover || "/placeholder.svg"}
                  alt={featuredBook.title}
                  className="w-20 h-28 mx-auto rounded-lg shadow-2xl border border-zinc-700/50 mb-3"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-1">{featuredBook.title}</h2>
                <p className="text-amber-300 text-sm font-medium mb-3">by {featuredBook.author}</p>

                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="flex items-center gap-1">{renderStars(featuredBook.rating)}</div>
                  <Badge variant="outline" className="text-xs border-zinc-600 text-zinc-300 bg-zinc-800/30">
                    {featuredBook.category}
                  </Badge>
                </div>

                {featuredBook.dateRead && (
                  <div className="flex items-center justify-center gap-1 text-xs text-zinc-400 mb-3">
                    <Calendar className="w-3 h-3" />
                    {new Date(featuredBook.dateRead).toLocaleDateString()}
                  </div>
                )}

                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{featuredBook.description}</p>

                {featuredBook.notes && (
                  <div className="bg-zinc-900/50 rounded-lg p-3 mb-4 border border-zinc-700/30">
                    <h4 className="text-xs font-medium text-amber-300 mb-2">My Notes</h4>
                    <p className="text-zinc-300 text-xs italic">"{featuredBook.notes}"</p>
                  </div>
                )}

                <div className="flex gap-2 justify-center">
                  <Button size="sm" className="h-8 px-3 text-xs bg-amber-600 hover:bg-amber-500 text-white">
                    <BookOpen className="w-3 h-3 mr-1" />
                    Details
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3 text-xs border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Find
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Books Grid */}
        <div className="space-y-4">
          {regularBooks.map((book) => (
            <Card
              key={book.id}
              className="p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-3">
                <Badge variant="outline" className="text-xs border-zinc-600 text-zinc-300 bg-zinc-800/30">
                  {book.category}
                </Badge>
                <Badge className={`text-xs ${statusColors[book.status as keyof typeof statusColors]}`}>
                  {book.status}
                </Badge>
              </div>

              <div className="flex gap-3">
                <img
                  src={book.cover || "/placeholder.svg"}
                  alt={book.title}
                  className="w-16 h-20 object-cover rounded-lg border border-zinc-700/50 flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white group-hover:text-amber-100 transition-colors mb-1 truncate">
                    {book.title}
                  </h3>

                  <p className="text-amber-300 text-xs font-medium mb-2">by {book.author}</p>

                  <div className="flex items-center gap-1 mb-2">{renderStars(book.rating)}</div>

                  <p className="text-zinc-300 text-xs mb-3 leading-relaxed line-clamp-2">{book.description}</p>

                  {book.dateRead && (
                    <div className="flex items-center gap-1 text-xs text-zinc-400 mb-3">
                      <Calendar className="w-3 h-3" />
                      {new Date(book.dateRead).toLocaleDateString()}
                    </div>
                  )}

                  {book.notes && (
                    <div className="bg-zinc-900/50 rounded p-2 mb-3 border border-zinc-700/30">
                      <p className="text-zinc-400 text-xs italic line-clamp-1">"{book.notes}"</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="h-7 px-2 text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex-1"
                    >
                      <BookOpen className="w-3 h-3 mr-1" />
                      Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 w-7 p-0 border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-8">
            <p className="text-zinc-400 text-sm">No books found matching your criteria.</p>
            <Button
              variant="ghost"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
                setSelectedStatus("All")
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
