"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Github,
    Star,
    GitBranch,
    Eye,
    Code,
    Heart,
    ExternalLink,
    Calendar,
    Users,
    Zap,
    Globe,
    Download,
    MailCheckIcon,
    MailIcon,
} from "lucide-react"

const projects = [
    {
        name: "AI Content Generator",
        description: "Open-source AI-powered content creation tool with 2.5K+ stars",
        language: "TypeScript",
        stars: 2547,
        forks: 342,
        watchers: 156,
        lastUpdated: "2 days ago",
        url: "https://github.com/example/ai-content-generator",
        category: "AI/ML",
        icon: Zap,
    },
    {
        name: "Design System Builder",
        description: "Component library and design system for modern web applications",
        language: "React",
        stars: 1892,
        forks: 234,
        watchers: 89,
        lastUpdated: "1 week ago",
        url: "https://github.com/example/design-system",
        category: "UI/UX",
        icon: Code,
    },
    {
        name: "API Documentation Generator",
        description: "Automated API documentation generator with interactive examples",
        language: "Python",
        stars: 1247,
        forks: 156,
        watchers: 67,
        lastUpdated: "3 days ago",
        url: "https://github.com/example/api-docs-generator",
        category: "Developer Tools",
        icon: Globe,
    },
    {
        name: "Mobile App Templates",
        description: "Collection of React Native templates for rapid app development",
        language: "JavaScript",
        stars: 892,
        forks: 123,
        watchers: 45,
        lastUpdated: "1 month ago",
        url: "https://github.com/example/mobile-templates",
        category: "Mobile",
        icon: Download,
    },
]

const contributions = [
    {
        repo: "Next.js",
        type: "Bug Fix",
        description: "Fixed hydration issue in dynamic imports",
        date: "2024-01-15",
        url: "https://github.com/vercel/next.js/pull/12345",
    },
    {
        repo: "React",
        type: "Feature",
        description: "Added new hook for state management",
        date: "2024-01-10",
        url: "https://github.com/facebook/react/pull/67890",
    },
    {
        repo: "TypeScript",
        type: "Documentation",
        description: "Updated API documentation for v5.0",
        date: "2024-01-05",
        url: "https://github.com/microsoft/TypeScript/pull/11111",
    },
]

export default function OpenSourcePage() {
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
                        Open Source
                    </h1>
                    <p className="text-zinc-300 text-sm">Contributing to the developer community</p>
                </div>

                {/* Stats Section */}
                <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-amber-300 mb-1">6.5K+</div>
                            <div className="text-xs text-zinc-400">GitHub Stars</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-emerald-300 mb-1">855</div>
                            <div className="text-xs text-zinc-400">Forks</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-300 mb-1">357</div>
                            <div className="text-xs text-zinc-400">Contributions</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-purple-300 mb-1">12</div>
                            <div className="text-xs text-zinc-400">Projects</div>
                        </div>
                    </div>
                </Card>

                {/* Featured Projects */}
                <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30">
                    <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                        <Github className="w-4 h-4 text-amber-300" />
                        Featured Projects
                    </h3>
                    <div className="space-y-4">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="p-4 bg-transparent bg-gradient-to-r from-zinc-800/30 via-zinc-700/20 to-zinc-800/30 border border-zinc-600/30 hover:border-amber-500/40 transition-all duration-300 group"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-6 h-6 rounded-lg bg-emerald-600 flex items-center justify-center">
                                                <project.icon className="w-3 h-3 text-white" />
                                            </div>
                                            <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                                                {project.name}
                                            </h4>
                                            <Badge className="text-xs bg-emerald-600/30 text-emerald-300 border-emerald-500/30">
                                                {project.category}
                                            </Badge>
                                        </div>
                                        <p className="text-xs text-zinc-400 mb-3 leading-relaxed">{project.description}</p>
                                        <div className="flex items-center gap-4 text-xs text-zinc-500">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3" />
                                                {project.stars.toLocaleString()}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <GitBranch className="w-3 h-3" />
                                                {project.forks.toLocaleString()}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Eye className="w-3 h-3" />
                                                {project.watchers.toLocaleString()}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {project.lastUpdated}
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-4 p-2 rounded-lg border border-zinc-600 hover:border-amber-500 transition-colors group-hover:scale-110"
                                    >
                                        <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-amber-300 transition-colors" />
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Card>

                {/* Recent Contributions */}
                <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30">
                    <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                        <Heart className="w-4 h-4 text-amber-300" />
                        Recent Contributions
                    </h3>
                    <div className="space-y-3">
                        {contributions.map((contribution, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-transparent bg-zinc-800/30 border border-zinc-700/30">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
                                        <Code className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-medium text-white">{contribution.repo}</span>
                                            <Badge className="text-xs bg-blue-600/30 text-blue-300 border-blue-500/30">
                                                {contribution.type}
                                            </Badge>
                                        </div>
                                        <p className="text-xs text-zinc-400">{contribution.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-zinc-500">{contribution.date}</span>
                                    <a
                                        href={contribution.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1 rounded border border-zinc-600 hover:border-amber-500 transition-colors"
                                    >
                                        <ExternalLink className="w-3 h-3 text-zinc-400 hover:text-amber-300 transition-colors" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Philosophy */}
                <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md">
                    <div className="text-center">
                        <h3 className="text-lg font-bold mb-3 text-white">Why Open Source?</h3>
                        <blockquote className="text-sm text-zinc-300 italic mb-4 leading-relaxed">
                            "Open source is not just about code—it's about building a community, sharing knowledge, and making technology accessible to everyone."
                        </blockquote>
                        <p className="text-zinc-400 text-xs">
                            I believe in giving back to the developer community and helping others learn and grow.
                        </p>
                    </div>
                </Card>

                {/* CTA */}
                <div className="text-center">
                    <h3 className="text-base font-semibold mb-2 text-white">Want to Collaborate?</h3>
                    <p className="text-zinc-400 text-xs mb-4">I'm always open to new open source projects and contributions.</p>
                    <div className="flex gap-2 justify-center">
                        <Button size="sm" className="h-8 px-4 text-xs bg-amber-600 hover:bg-amber-500 text-white">
                            <Github className="w-3 h-3 mr-1" />
                            View GitHub
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-8 px-4 text-xs border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                        >
                            <MailIcon className="w-3 h-3 mr-1" />
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
