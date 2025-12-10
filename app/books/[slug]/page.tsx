import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

const books = [
  {
    id: 1,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    description: "A powerful primer on how—and why—some products satisfy customers while others only frustrate them.",
    category: "Design",
    status: "Read",
    dateRead: "2024-01-15",
    cover: "/book-design-everyday-things.png",
    notes: "Essential reading for anyone in product design. Norman's principles of good design are timeless.",
    slug: "design-of-everyday-things",
    summary: "A comprehensive guide to human-centered design principles that explains why some products work intuitively while others fail.",
    content: {
      overview: "Don Norman's seminal work on human-centered design principles that have influenced generations of designers and product developers.",
      keyConcepts: [
        {
          title: "Affordances",
          description: "Objects should suggest their use through their design",
          points: [
            "A button should look clickable",
            "A handle should look graspable",
            "Visual cues guide user behavior"
          ]
        },
        {
          title: "Signifiers",
          description: "Clear indicators of what actions are possible",
          points: [
            "Visual cues that guide user behavior",
            "Consistent design patterns",
            "Clear action indicators"
          ]
        },
        {
          title: "Mapping",
          description: "The relationship between controls and their effects",
          points: [
            "Natural mapping reduces cognitive load",
            "Intuitive control layouts",
            "Logical control relationships"
          ]
        },
        {
          title: "Feedback",
          description: "Users need clear feedback for their actions",
          points: [
            "Immediate response to interactions",
            "Error prevention and recovery",
            "Clear success indicators"
          ]
        }
      ],
      notes: "This book fundamentally changed how I think about design. Norman's principles are timeless and apply to everything from physical products to digital interfaces.",
      keyTakeaway: "Good design is invisible. When something works intuitively, users don't notice the design - they just use it."
    }
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy & proven way to build good habits & break bad ones.",
    category: "Productivity",
    status: "Read",
    dateRead: "2024-01-10",
    cover: "/book-atomic-habits.png",
    notes: "Practical framework for building habits. The 1% better concept is powerful.",
    slug: "atomic-habits",
    summary: "A practical guide to building good habits and breaking bad ones through small, incremental changes.",
    content: {
      overview: "James Clear's systematic approach to building good habits and breaking bad ones through tiny changes that lead to remarkable results.",
      keyConcepts: [
        {
          title: "Make it Obvious",
          description: "Design your environment for success",
          points: [
            "Use implementation intentions",
            "Stack habits together",
            "Create clear visual cues"
          ]
        },
        {
          title: "Make it Attractive",
          description: "Pair habits with things you enjoy",
          points: [
            "Join groups where your desired behavior is normal",
            "Create a motivation ritual",
            "Link habits to positive emotions"
          ]
        },
        {
          title: "Make it Easy",
          description: "Reduce friction for good habits",
          points: [
            "Increase friction for bad habits",
            "Use the two-minute rule",
            "Simplify the process"
          ]
        },
        {
          title: "Make it Satisfying",
          description: "Track your progress",
          points: [
            "Celebrate small wins",
            "Use habit contracts",
            "Create immediate rewards"
          ]
        }
      ],
      notes: "The 1% better concept is incredibly powerful. Small improvements compound over time to create massive results.",
      keyTakeaway: "Focus on systems, not goals. Goals are about the results you want to achieve. Systems are about the processes that lead to those results."
    }
  },
  {
    id: 3,
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
    category: "Business",
    status: "Read",
    dateRead: "2024-01-05",
    cover: "/book-lean-startup.png",
    notes: "Great introduction to lean methodology and MVP thinking.",
    slug: "lean-startup",
    summary: "A methodology for developing businesses and products that aims to shorten product development cycles.",
    content: {
      overview: "Eric Ries introduces a systematic approach to creating and managing successful startups through validated learning and rapid iteration.",
      keyConcepts: [
        {
          title: "Validated Learning",
          description: "Build-Measure-Learn feedback loop",
          points: [
            "Test assumptions with real customers",
            "Pivot when necessary",
            "Focus on actionable insights"
          ]
        },
        {
          title: "Minimum Viable Product (MVP)",
          description: "Build the smallest thing that can be tested",
          points: [
            "Focus on core value proposition",
            "Iterate based on feedback",
            "Avoid over-engineering"
          ]
        },
        {
          title: "Innovation Accounting",
          description: "Measure progress with actionable metrics",
          points: [
            "Avoid vanity metrics",
            "Focus on customer behavior",
            "Track meaningful progress"
          ]
        }
      ],
      notes: "The MVP concept has been incredibly valuable in my own projects. It's amazing how much you can learn from a simple prototype.",
      keyTakeaway: "Start with the simplest version that can test your core hypothesis. Don't over-engineer solutions to problems you don't have yet."
    }
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A handbook of agile software craftsmanship.",
    category: "Development",
    status: "Read",
    dateRead: "2023-12-28",
    cover: "/book-clean-code.png",
    notes: "Must-read for any developer. Changed how I think about writing code.",
    slug: "clean-code",
    summary: "A guide to writing clean, maintainable code that follows best practices and principles.",
    content: {
      overview: "Robert C. Martin's comprehensive guide to writing clean, maintainable, and professional code that other developers can easily understand and modify.",
      keyConcepts: [
        {
          title: "Meaningful Names",
          description: "Use descriptive variable and function names",
          points: [
            "Avoid abbreviations and single letters",
            "Make intent clear",
            "Use consistent naming conventions"
          ]
        },
        {
          title: "Functions",
          description: "Keep functions small and focused",
          points: [
            "Single responsibility principle",
            "Descriptive function names",
            "Minimal parameters"
          ]
        },
        {
          title: "Comments",
          description: "Code should be self-documenting",
          points: [
            "Use comments to explain 'why' not 'what'",
            "Keep comments up to date",
            "Prefer clear code over comments"
          ]
        },
        {
          title: "Formatting",
          description: "Consistent indentation and spacing",
          points: [
            "Logical grouping of code",
            "Readable structure",
            "Follow team conventions"
          ]
        }
      ],
      notes: "This book completely changed how I write code. The principles are timeless and apply to any programming language.",
      keyTakeaway: "Clean code is not just about aesthetics - it's about maintainability, readability, and professionalism."
    }
  },
  {
    id: 5,
    title: "Zero to One",
    author: "Peter Thiel",
    description: "Notes on startups, or how to build the future.",
    category: "Business",
    status: "Currently Reading",
    dateRead: "",
    cover: "/book-zero-to-one.png",
    notes: "Interesting perspective on monopolies and innovation.",
    slug: "zero-to-one",
    summary: "Insights on building unique businesses and creating value in the startup world.",
    content: {
      overview: "Peter Thiel's contrarian views on building successful startups and creating value in the business world.",
      keyConcepts: [
        {
          title: "Competition vs Monopoly",
          description: "Competition is for losers",
          points: [
            "Monopolies create value",
            "Focus on unique value propositions",
            "Avoid crowded markets"
          ]
        },
        {
          title: "Secrets",
          description: "Look for secrets that others don't see",
          points: [
            "Question conventional wisdom",
            "Find hidden opportunities",
            "Think contrarian thoughts"
          ]
        },
        {
          title: "Technology",
          description: "Technology should make things better",
          points: [
            "Focus on 10x improvements",
            "Build the future you want to see",
            "Solve real problems"
          ]
        }
      ],
      notes: "Thiel's perspective on monopolies is controversial but thought-provoking. It challenges conventional thinking about competition.",
      keyTakeaway: "Don't just copy existing businesses - create something truly new and valuable."
    }
  },
  {
    id: 6,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    category: "Psychology",
    status: "Want to Read",
    dateRead: "",
    cover: "/book-thinking-fast-slow.png",
    notes: "",
    slug: "thinking-fast-and-slow",
    summary: "An exploration of the two systems that drive the way we think and make decisions.",
    content: {
      overview: "Daniel Kahneman's exploration of the two systems that drive our thinking: the fast, intuitive system and the slow, logical system.",
      keyConcepts: [
        {
          title: "System 1: Fast Thinking",
          description: "Automatic and unconscious",
          points: [
            "Intuitive and emotional",
            "Prone to biases and heuristics",
            "Quick pattern recognition"
          ]
        },
        {
          title: "System 2: Slow Thinking",
          description: "Deliberate and effortful",
          points: [
            "Logical and analytical",
            "More accurate but lazy",
            "Requires conscious effort"
          ]
        }
      ],
      notes: "This book provides fascinating insights into how our minds work and why we make the decisions we do.",
      keyTakeaway: "Understanding our cognitive biases can help us make better decisions and avoid common thinking traps."
    }
  },
]

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = books.find((b) => b.slug === params.slug)

  if (!book) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-emerald-950/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/10 via-transparent to-yellow-950/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.15)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.1)_0%,transparent_40%)]" />

      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-6 py-20 max-w-2xl">
        {/* Back Button */}
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Books
        </Link>

        {/* Book Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-xs border-zinc-600 text-zinc-300 bg-zinc-800/30">
              {book.category}
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">{book.title}</h1>
          <p className="text-lg text-amber-300 font-medium mb-6">by {book.author}</p>
          <p className="text-lg text-zinc-300 mb-6 leading-relaxed">{book.description}</p>

          <div className="flex items-center gap-4">
            <Button size="sm" className="h-8 px-3 text-xs bg-amber-600 hover:bg-amber-500 text-white">
              <ExternalLink className="w-3 h-3 mr-1" />
              Find Book
            </Button>
          </div>
        </header>

        {/* Book Summary */}
        <article className="space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
            <p className="text-zinc-300 leading-relaxed">{book.content.overview}</p>
          </section>

          {/* Key Concepts */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6">Key Concepts</h2>
            <div className="space-y-4">
              {book.content.keyConcepts.map((concept, index) => (
                <div key={index} className="bg-zinc-900/30 rounded-lg p-4 border border-zinc-700/30">
                  <h3 className="text-lg font-semibold text-amber-300 mb-2">{concept.title}</h3>
                  <p className="text-zinc-300 text-sm mb-3">{concept.description}</p>
                  <ul className="space-y-1">
                    {concept.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-zinc-400 text-sm flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* My Notes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">My Notes</h2>
            <div className="bg-amber-900/10 rounded-lg p-4 border border-amber-500/20">
              <p className="text-zinc-300 leading-relaxed italic">{book.content.notes}</p>
            </div>
          </section>

          {/* Key Takeaway */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Key Takeaway</h2>
            <div className="bg-emerald-900/10 rounded-lg p-4 border border-emerald-500/20">
              <p className="text-zinc-300 leading-relaxed font-medium">{book.content.keyTakeaway}</p>
            </div>
          </section>
        </article>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            ← Browse more books
          </Link>
        </div>
      </div>
    </div>
  )
}
