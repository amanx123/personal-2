"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Wrench,
    Zap,
    Code,
    Palette,
    Database,
    Globe,
    Smartphone,
    Cloud,
    Shield,
    BarChart3,
    Settings,
    ExternalLink,
    Download,
    Star,
    Users,
    Calendar,
    ArrowRight,
    Calculator,
    FileText,
    Hash,
    Palette as ColorPalette,
    Clock,
    Search,
    Mail,
    Heart,
    Link,
    MailIcon,
} from "lucide-react"

const tools = [
    {
        name: "Color Palette Generator",
        description: "Generate beautiful color palettes with complementary and analogous colors. Perfect for design projects.",
        category: "Design",
        status: "Live",
        usage: 1250,
        lastUpdated: "2 days ago",
        url: "/tools/color-palette",
        icon: ColorPalette,
        features: ["Color generation", "Palette export", "Accessibility check", "Color harmony"],
        tech: ["Next.js", "Tailwind CSS", "Color theory"],
    },
    {
        name: "Text Case Converter",
        description: "Convert text between different cases - UPPERCASE, lowercase, Title Case, camelCase, and more.",
        category: "Text",
        status: "Live",
        usage: 890,
        lastUpdated: "1 week ago",
        url: "/tools/text-converter",
        icon: FileText,
        features: ["Multiple case formats", "Real-time conversion", "Copy to clipboard", "Character count"],
        tech: ["Next.js", "JavaScript", "Clipboard API"],
    },
    {
        name: "Hash Generator",
        description: "Generate various types of hashes (MD5, SHA-1, SHA-256) for text input. Useful for data verification.",
        category: "Security",
        status: "Live",
        usage: 567,
        lastUpdated: "3 days ago",
        url: "/tools/hash-generator",
        icon: Hash,
        features: ["Multiple hash types", "Real-time generation", "Copy results", "File support"],
        tech: ["Next.js", "Crypto API", "Web Crypto"],
    },
    {
        name: "Simple Calculator",
        description: "A clean, minimal calculator for basic arithmetic operations. No ads, no distractions.",
        category: "Utility",
        status: "Live",
        usage: 2100,
        lastUpdated: "5 days ago",
        url: "/tools/calculator",
        icon: Calculator,
        features: ["Basic operations", "History tracking", "Keyboard support", "Responsive design"],
        tech: ["Next.js", "React", "CSS Grid"],
    },
    {
        name: "Password Strength Checker",
        description: "Check the strength of your passwords and get suggestions for improvement.",
        category: "Security",
        status: "Live",
        usage: 743,
        lastUpdated: "1 week ago",
        url: "/tools/password-checker",
        icon: Shield,
        features: ["Strength analysis", "Suggestions", "Common patterns", "Secure input"],
        tech: ["Next.js", "Zxcvbn", "Security patterns"],
    },
    {
        name: "URL Shortener",
        description: "Create short, shareable URLs for long links. Simple and fast.",
        category: "Utility",
        status: "Live",
        usage: 1567,
        lastUpdated: "2 weeks ago",
        url: "/tools/url-shortener",
        icon: Link,
        features: ["Custom aliases", "Click tracking", "QR codes", "Analytics"],
        tech: ["Next.js", "Database", "QR generation"],
    },
]

const categories = [
    { name: "Design", count: 1, icon: Palette },
    { name: "Text", count: 1, icon: FileText },
    { name: "Security", count: 2, icon: Shield },
    { name: "Utility", count: 2, icon: Wrench },
]

export default function ToolsPage() {
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
                        Helpful Tools
                    </h1>
                    <p className="text-zinc-300 text-sm">Small utilities I've built to make things easier</p>
                </div>

                {/* Stats Section */}
                <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-amber-300 mb-1">6</div>
                            <div className="text-xs text-zinc-400">Available Tools</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-emerald-300 mb-1">7.1K+</div>
                            <div className="text-xs text-zinc-400">Total Uses</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-300 mb-1">4</div>
                            <div className="text-xs text-zinc-400">Categories</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-purple-300 mb-1">100%</div>
                            <div className="text-xs text-zinc-400">Free to Use</div>
                        </div>
                    </div>
                </Card>

                {/* Categories */}
                <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30">
                    <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                        <Settings className="w-4 h-4 text-amber-300" />
                        Tool Categories
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-3 rounded-lg bg-transparent bg-zinc-800/30 border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <category.icon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-xs text-zinc-300 text-center font-medium">{category.name}</span>
                                <span className="text-xs text-zinc-500 mt-1">{category.count}</span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Tools Grid */}
                <div className="space-y-4">
                    {tools.map((tool, index) => (
                        <Card
                            key={index}
                            className="p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                                        <tool.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                                            {tool.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Badge className="text-xs bg-emerald-600/30 text-emerald-300 border-emerald-500/30">
                                                {tool.category}
                                            </Badge>
                                            <Badge className="text-xs bg-green-600/30 text-green-300 border-green-500/30">
                                                {tool.status}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href={tool.url}
                                    className="p-1 rounded border border-zinc-600 hover:border-amber-500 transition-colors group-hover:scale-110"
                                >
                                    <ArrowRight className="w-3 h-3 text-zinc-400 hover:text-amber-300 transition-colors" />
                                </a>
                            </div>

                            <p className="text-xs text-zinc-400 mb-3 leading-relaxed">{tool.description}</p>

                            <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    {tool.usage.toLocaleString()} uses
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {tool.lastUpdated}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div>
                                    <h4 className="text-xs font-medium text-zinc-300 mb-1">Features</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {tool.features.slice(0, 3).map((feature, idx) => (
                                            <Badge key={idx} className="text-xs bg-zinc-700/50 text-zinc-300 border-zinc-600/50">
                                                {feature}
                                            </Badge>
                                        ))}
                                        {tool.features.length > 3 && (
                                            <Badge className="text-xs bg-zinc-700/50 text-zinc-300 border-zinc-600/50">
                                                +{tool.features.length - 3} more
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-medium text-zinc-300 mb-1">Built with</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {tool.tech.slice(0, 3).map((tech, idx) => (
                                            <Badge key={idx} className="text-xs bg-blue-600/30 text-blue-300 border-blue-500/30">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {tool.tech.length > 3 && (
                                            <Badge className="text-xs bg-blue-600/30 text-blue-300 border-blue-500/30">
                                                +{tool.tech.length - 3} more
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-zinc-700/30">
                                <Button size="sm" className="w-full h-8 text-xs bg-amber-600 hover:bg-amber-500 text-white">
                                    <ArrowRight className="w-3 h-3 mr-1" />
                                    Use {tool.name}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Philosophy */}
                <Card className="mt-8 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md">
                    <div className="text-center">
                        <h3 className="text-lg font-bold mb-3 text-white">Why I Build These Tools</h3>
                        <blockquote className="text-sm text-zinc-300 italic mb-4 leading-relaxed">
                            "I build these small tools because I often need them myself. If they're useful to me, they might be useful to others too."
                        </blockquote>
                        <p className="text-zinc-400 text-xs">
                            All tools are free to use and built with simplicity in mind.
                        </p>
                    </div>
                </Card>

                {/* CTA */}
                <div className="text-center mt-8">
                    <h3 className="text-base font-semibold mb-2 text-white">Need a Custom Tool?</h3>
                    <p className="text-zinc-400 text-xs mb-4">If you have an idea for a useful tool, I'd love to hear about it!</p>
                    <div className="flex gap-2 justify-center">
                        <Button size="sm" className="h-8 px-4 text-xs bg-amber-600 hover:bg-amber-500 text-white">
                            <Wrench className="w-3 h-3 mr-1" />
                            Suggest a Tool
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
