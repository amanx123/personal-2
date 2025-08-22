"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    FlaskConical,
    Zap,
    Code,
    Palette,
    Brain,
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
    Lightbulb,
    Rocket,
    TestTube,
    Eye,
    Heart,
    Mail,
    Play,
    Music,
    Camera,
    Video,
    Gamepad2,
    Sparkles,
    Coffee,
} from "lucide-react"

const experiments = [
    {
        name: "AI Chatbot for Coffee Recommendations",
        description: "Built a simple chatbot that recommends coffee based on your mood and preferences. Just for fun!",
        category: "AI/ML",
        status: "Playing Around",
        lastUpdated: "2 days ago",
        url: "https://coffee-bot-demo.com",
        icon: Coffee,
        features: ["Mood-based recommendations", "Coffee knowledge base", "Simple chat interface"],
        tech: ["Python", "OpenAI API", "Streamlit"],
        progress: 85,
    },
    {
        name: "Personal Music Visualizer",
        description: "Created a web-based music visualizer that responds to my Spotify playlist. Pretty trippy!",
        category: "Creative",
        status: "Working On",
        lastUpdated: "1 week ago",
        url: "https://music-viz-demo.com",
        icon: Music,
        features: ["Real-time visualization", "Spotify integration", "Custom color schemes"],
        tech: ["JavaScript", "Web Audio API", "Three.js", "Spotify API"],
        progress: 60,
    },
    {
        name: "Random Quote Generator",
        description: "A simple app that generates random quotes and lets you save your favorites. Nothing fancy.",
        category: "Content",
        status: "Done",
        lastUpdated: "3 days ago",
        url: "https://quote-generator-demo.com",
        icon: Sparkles,
        features: ["Random quotes", "Save favorites", "Share functionality"],
        tech: ["React", "Quote API", "Local Storage"],
        progress: 100,
    },
    {
        name: "Weather Mood Tracker",
        description: "Tracking how weather affects my mood. Just curious about patterns in my own behavior.",
        category: "Personal",
        status: "Ongoing",
        lastUpdated: "5 days ago",
        url: "https://weather-mood-tracker.com",
        icon: BarChart3,
        features: ["Weather data", "Mood logging", "Pattern analysis"],
        tech: ["Next.js", "Weather API", "Chart.js"],
        progress: 40,
    },
    {
        name: "Simple Game: Color Clicker",
        description: "Made a basic game where you click colors in sequence. Surprisingly addictive!",
        category: "Gaming",
        status: "Done",
        lastUpdated: "1 month ago",
        url: "https://color-clicker-game.com",
        icon: Gamepad2,
        features: ["Color sequences", "Score tracking", "Increasing difficulty"],
        tech: ["HTML5", "CSS3", "JavaScript"],
        progress: 100,
    },
    {
        name: "Photo Filter Experiment",
        description: "Playing around with CSS filters and image manipulation. Some cool effects emerged!",
        category: "Creative",
        status: "Playing Around",
        lastUpdated: "2 weeks ago",
        url: "https://photo-filters-demo.com",
        icon: Camera,
        features: ["Custom filters", "Real-time preview", "Filter combinations"],
        tech: ["React", "CSS Filters", "Canvas API"],
        progress: 75,
    },
]

const categories = [
    { name: "AI/ML", count: 1, icon: Brain },
    { name: "Creative", count: 2, icon: Palette },
    { name: "Content", count: 1, icon: Sparkles },
    { name: "Personal", count: 1, icon: Heart },
    { name: "Gaming", count: 1, icon: Gamepad2 },
]

const insights = [
    {
        title: "Simple is Better",
        description: "Most of my fun experiments are super simple. Complex doesn't always mean better!",
        impact: "High",
        learnings: ["Keep it simple", "Focus on fun", "Learn by doing"],
    },
    {
        title: "Personal Projects Matter",
        description: "Building things for myself often leads to the most interesting discoveries",
        impact: "Medium",
        learnings: ["Personal motivation", "Creative freedom", "No pressure"],
    },
    {
        title: "Play is Important",
        description: "Just playing around with tech without a specific goal can be really rewarding",
        impact: "Medium",
        learnings: ["Exploration", "Curiosity", "Joy of creation"],
    },
]

export default function ExperimentsPage() {
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
                        Experiments & Dabblings
                    </h1>
                    <p className="text-zinc-300 text-sm">Just playing around with different stuff and trying cool things</p>
                </div>

                {/* Stats Section */}
                <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-amber-300 mb-1">6</div>
                            <div className="text-xs text-zinc-400">Random Projects</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-emerald-300 mb-1">2</div>
                            <div className="text-xs text-zinc-400">Actually Finished</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-300 mb-1">3</div>
                            <div className="text-xs text-zinc-400">Still Playing</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-purple-300 mb-1">∞</div>
                            <div className="text-xs text-zinc-400">Ideas in Mind</div>
                        </div>
                    </div>
                </Card>

                {/* Categories */}
                <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30">
                    <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                        <TestTube className="w-4 h-4 text-amber-300" />
                        What I'm Playing With
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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

                {/* Experiments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiments.map((experiment, index) => (
                        <Card
                            key={index}
                            className="p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                                        <experiment.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                                            {experiment.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Badge className="text-xs bg-emerald-600/30 text-emerald-300 border-emerald-500/30">
                                                {experiment.category}
                                            </Badge>
                                            <Badge className={`text-xs ${experiment.status === "Done"
                                                ? "bg-green-600/30 text-green-300 border-green-500/30"
                                                : experiment.status === "Working On"
                                                    ? "bg-yellow-600/30 text-yellow-300 border-yellow-500/30"
                                                    : "bg-blue-600/30 text-blue-300 border-blue-500/30"
                                                }`}>
                                                {experiment.status}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href={experiment.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1 rounded border border-zinc-600 hover:border-amber-500 transition-colors group-hover:scale-110"
                                >
                                    <ExternalLink className="w-3 h-3 text-zinc-400 hover:text-amber-300 transition-colors" />
                                </a>
                            </div>

                            <p className="text-xs text-zinc-400 mb-3 leading-relaxed">{experiment.description}</p>

                            <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {experiment.lastUpdated}
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-3">
                                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                                    <span>How far along</span>
                                    <span>{experiment.progress}%</span>
                                </div>
                                <div className="w-full bg-zinc-800 rounded-full h-1.5">
                                    <div
                                        className="bg-gradient-to-r from-amber-500 to-emerald-500 h-1.5 rounded-full transition-all duration-1000"
                                        style={{ width: `${experiment.progress}%` }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div>
                                    <h4 className="text-xs font-medium text-zinc-300 mb-1">What it does</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {experiment.features.slice(0, 3).map((feature, idx) => (
                                            <Badge key={idx} className="text-xs bg-zinc-700/50 text-zinc-300 border-zinc-600/50">
                                                {feature}
                                            </Badge>
                                        ))}
                                        {experiment.features.length > 3 && (
                                            <Badge className="text-xs bg-zinc-700/50 text-zinc-300 border-zinc-600/50">
                                                +{experiment.features.length - 3} more
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-medium text-zinc-300 mb-1">Tech used</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {experiment.tech.slice(0, 3).map((tech, idx) => (
                                            <Badge key={idx} className="text-xs bg-blue-600/30 text-blue-300 border-blue-500/30">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {experiment.tech.length > 3 && (
                                            <Badge className="text-xs bg-blue-600/30 text-blue-300 border-blue-500/30">
                                                +{experiment.tech.length - 3} more
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-zinc-700/30">
                                <Button size="sm" className="w-full h-8 text-xs bg-amber-600 hover:bg-amber-500 text-white">
                                    <Play className="w-3 h-3 mr-1" />
                                    Check it out
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Key Insights */}
                <Card className="mt-8 p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30">
                    <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-300" />
                        What I've Learned from Playing Around
                    </h3>
                    <div className="space-y-4">
                        {insights.map((insight, index) => (
                            <div key={index} className="p-3 rounded-lg bg-transparent bg-zinc-800/30 border border-zinc-700/30">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="text-sm font-semibold text-white">{insight.title}</h4>
                                    <Badge className={`text-xs ${insight.impact === "High"
                                        ? "bg-red-600/30 text-red-300 border-red-500/30"
                                        : "bg-yellow-600/30 text-yellow-300 border-yellow-500/30"
                                        }`}>
                                        {insight.impact} Impact
                                    </Badge>
                                </div>
                                <p className="text-xs text-zinc-400 mb-2">{insight.description}</p>
                                <div className="flex flex-wrap gap-1">
                                    {insight.learnings.map((learning, idx) => (
                                        <Badge key={idx} className="text-xs bg-emerald-600/30 text-emerald-300 border-emerald-500/30">
                                            {learning}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Philosophy */}
                <Card className="mt-8 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md">
                    <div className="text-center">
                        <h3 className="text-lg font-bold mb-3 text-white">Why I Love Playing Around</h3>
                        <blockquote className="text-sm text-zinc-300 italic mb-4 leading-relaxed">
                            "The best discoveries happen when you're just messing around with no specific goal in mind. Sometimes the most interesting things emerge from pure curiosity and play."
                        </blockquote>
                        <p className="text-zinc-400 text-xs">
                            I believe in the power of experimentation and the joy of building things just because they're fun.
                        </p>
                    </div>
                </Card>

                {/* CTA */}
                <div className="text-center mt-8">
                    <h3 className="text-base font-semibold mb-2 text-white">Want to Play Around Together?</h3>
                    <p className="text-zinc-400 text-xs mb-4">I'm always up for collaborating on random experiments and trying new things.</p>
                    <div className="flex gap-2 justify-center">
                        <Button size="sm" className="h-8 px-4 text-xs bg-amber-600 hover:bg-amber-500 text-white">
                            <FlaskConical className="w-3 h-3 mr-1" />
                            Let's Experiment
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-8 px-4 text-xs border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                        >
                            <Mail className="w-3 h-3 mr-1" />
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
