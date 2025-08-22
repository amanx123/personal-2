"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Calendar,
  Award,
  Users,
  Code,
  Palette,
  Zap,
  Heart,
  Coffee,
  Music,
  Camera,
  Plane,
  Mail,
  Download,
} from "lucide-react"

const skills = [
  { name: "Frontend Development", level: 95, icon: Code },
  { name: "UI/UX Design", level: 88, icon: Palette },
  { name: "Product Strategy", level: 92, icon: Zap },
  { name: "Team Leadership", level: 85, icon: Users },
]

const achievements = [
  {
    year: "2024",
    title: "Built AI Content Generator",
    description: "Launched SaaS product serving 2.5K+ users with $50K+ MRR",
    icon: Award,
  },
  {
    year: "2023",
    title: "Founded Digital Agency",
    description: "Grew team to 12 people, delivered 50+ projects for startups",
    icon: Users,
  },
  {
    year: "2022",
    title: "Design System Recognition",
    description: "Featured in top design communities, 10K+ GitHub stars",
    icon: Palette,
  },
  {
    year: "2021",
    title: "Started Tech Writing",
    description: "Published 100+ articles, reached 500K+ developers",
    icon: Code,
  },
]

const interests = [
  { name: "Coffee Brewing", icon: Coffee },
  { name: "Music Production", icon: Music },
  { name: "Photography", icon: Camera },
  { name: "Travel", icon: Plane },
]

export default function AboutPage() {
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
            About Me
          </h1>
          <p className="text-zinc-300 text-sm">Designer, developer, and entrepreneur</p>
        </div>

        {/* Hero Section */}
        <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md">
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-emerald-500/20 border border-amber-500/30 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-amber-500/10 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 animate-pulse" />
                <img
                  src="/professional-headshot.png"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover relative z-10"
                />
              </div>
              <h2 className="text-lg font-bold mb-2 text-white">Hi, I'm Your Name</h2>
              <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                I'm a creative professional with over 8 years of experience in design and development. I specialize in
                building digital products that solve real problems.
              </p>
              <div className="flex flex-col gap-2 text-xs text-zinc-400 mb-4">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-3 h-3 text-amber-300" />
                  San Francisco, CA
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-3 h-3 text-amber-300" />
                  Available for projects
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                <Button size="sm" className="h-8 px-3 text-xs bg-amber-600 hover:bg-amber-500 text-white">
                  <Mail className="w-3 h-3 mr-1" />
                  Contact
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-3 text-xs border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Skills Section */}
        <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30">
          <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-300" />
            Skills & Expertise
          </h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-600 flex items-center justify-center">
                      <skill.icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">{skill.name}</span>
                  </div>
                  <span className="text-amber-300 text-xs font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-emerald-500 h-1.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Journey Section */}
        <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30">
          <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-300" />
            My Journey
          </h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
                    <achievement.icon className="w-4 h-4 text-white" />
                  </div>
                  {index < achievements.length - 1 && <div className="w-px h-8 bg-zinc-700 mt-2" />}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex flex-col gap-1 mb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="text-xs bg-amber-600 text-white border-amber-500">{achievement.year}</Badge>
                      <h4 className="text-sm font-semibold text-white">{achievement.title}</h4>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-xs">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Personal Interests */}
        <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30">
          <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
            <Heart className="w-4 h-4 text-amber-300" />
            When I'm Not Coding
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {interests.map((interest) => (
              <div
                key={interest.name}
                className="flex flex-col items-center p-3 rounded-lg bg-zinc-800/30 border border-zinc-700/30 hover:border-amber-500/40 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <interest.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs text-zinc-300 text-center">{interest.name}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Philosophy */}
        <Card className="mb-6 p-4 bg-transparent bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-emerald-900/20 border border-amber-500/30 backdrop-blur-md">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-3 text-white">My Philosophy</h3>
            <blockquote className="text-sm text-zinc-300 italic mb-4 leading-relaxed">
              "Great products are born from the intersection of user needs, business goals, and technical
              possibilities."
            </blockquote>
            <p className="text-zinc-400 text-xs">
              I believe in building products that solve real problems and create value.
            </p>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-base font-semibold mb-2 text-white">Let's Work Together</h3>
          <p className="text-zinc-400 text-xs mb-4">I'm always interested in new opportunities and collaborations.</p>
          <Button size="sm" className="h-8 px-4 text-xs bg-amber-600 hover:bg-amber-500 text-white">
            <Mail className="w-3 h-3 mr-1" />
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  )
}
