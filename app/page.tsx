"use client"

import Link from 'next/link'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Mail,
  Briefcase,
  Package,
  User,
  ArrowRight,
  Sparkles,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import { useRef } from "react"

export default function HomePage() {
  const newsletterRef = useRef<HTMLDivElement>(null)

  const scrollToNewsletter = () => {
    newsletterRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-emerald-950/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/10 via-transparent to-yellow-950/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.15)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.1)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.05)_0%,transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-500/12 to-amber-500/12 rounded-full blur-xl animate-pulse delay-500" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-20 bg-gradient-to-r from-zinc-900/10 via-zinc-800/5 to-zinc-900/10 border-b border-zinc-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-center gap-2 text-xs">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-zinc-400">Newsletter available below</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 max-w-sm">
        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-yellow-500/20 border border-amber-500/30 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-amber-500/10 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 animate-pulse" />
            <User className="w-7 h-7 text-amber-200 relative z-10" />
          </div>

          <h1 className="text-xl font-semibold mb-2 text-white tracking-tight bg-gradient-to-r from-white via-amber-100 to-orange-100 bg-clip-text text-transparent">
            {"Aman Agarwal"}
          </h1>
          <p className="text-zinc-300 text-sm mb-4 font-light">Ai Engineer &amp; Entrepreneur    </p>

          {/* <div className="flex justify-center gap-2 mb-6">
            <Badge
              variant="secondary"
              className="bg-amber-900/30 text-amber-200 border-amber-500/20 text-xs px-3 py-1 font-normal backdrop-blur-sm"
            >
              Designer
            </Badge>
            <Badge
              variant="secondary"
              className="bg-emerald-900/30 text-emerald-200 border-emerald-500/20 text-xs px-3 py-1 font-normal backdrop-blur-sm"
            >
              Developer
            </Badge>
          </div> */}

          <div className="flex justify-center gap-2">
            <a
              href="https://github.com/amanx123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl border-2 border-zinc-700 hover:border-white flex items-center justify-center transition-all duration-300 group hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Github className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors relative z-10" />
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
            </a>
            <a
              href="https://x.com/amanagarwalx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl border-2 border-zinc-700 hover:border-white flex items-center justify-center transition-all duration-300 group hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Twitter className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors relative z-10" />
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
            </a>
            <a
              href="https://linkedin.com/in/amanagarwalx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl border-2 border-zinc-700 hover:border-white flex items-center justify-center transition-all duration-300 group hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors relative z-10" />
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
            </a>
            <a
              href="https://instagram.com/amanagarwal.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl border-2 border-zinc-700 hover:border-white flex items-center justify-center transition-all duration-300 group hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Instagram className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors relative z-10" />
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
            </a>
            <a
              href="https://youtube.com/@amanagarwalx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl border-2 border-zinc-700 hover:border-white flex items-center justify-center transition-all duration-300 group hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Youtube className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors relative z-10" />
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="space-y-2 mb-8 ">
          <Card className="group p-4 bg-transparent bg-gradient-to-r from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-zinc-500/60 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-zinc-500/10 hover:scale-[1.02] relative overflow-hidden">
            <Link href="https://stacflo.com">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl border-2 border-zinc-600 group-hover:border-zinc-400 flex items-center justify-center transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Briefcase className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors relative z-10" />
                    <div className="absolute inset-0 border-2 border-white/10 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-white transition-colors">My Agency</h3>
                    <p className="text-xs text-zinc-400 font-light group-hover:text-zinc-300 transition-colors">
                      {"stacflo.com"}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </Card>
          <Card className="group p-4 bg-transparent bg-gradient-to-r from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-zinc-500/60 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-zinc-500/10 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl border-2 border-zinc-600 group-hover:border-zinc-400 flex items-center justify-center transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Package className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors relative z-10" />
                  <div className="absolute inset-0 border-2 border-white/10 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white transition-colors">My Products</h3>
                  <p className="text-xs text-zinc-400 font-light group-hover:text-zinc-300 transition-colors">
                    Digital tools
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
            </div>
          </Card>

          <Card className="group p-4 bg-transparent bg-gradient-to-r from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-zinc-500/60 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-zinc-500/10 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl border-2 border-zinc-600 group-hover:border-zinc-400 flex items-center justify-center transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Sparkles className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors relative z-10" />
                  <div className="absolute inset-0 border-2 border-white/10 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white transition-colors">About</h3>
                  <p className="text-xs text-zinc-400 font-light group-hover:text-zinc-300 transition-colors">
                    My story
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
            </div>
          </Card>

          <Card className="group p-4 bg-transparent bg-gradient-to-r from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 backdrop-blur-md border border-zinc-700/30 hover:border-zinc-500/60 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-zinc-500/10 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl border-2 border-zinc-600 group-hover:border-zinc-400 flex items-center justify-center transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors relative z-10" />
                  <div className="absolute inset-0 border-2 border-white/10 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white transition-colors">Contact</h3>
                  <p className="text-xs text-zinc-400 font-light group-hover:text-zinc-300 transition-colors">
                    Get in touch
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
            </div>
          </Card>
        </div>

        <Card
          ref={newsletterRef}
          className="p-5 bg-transparent bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-emerald-900/30 border border-amber-500/30 backdrop-blur-md shadow-xl shadow-amber-500/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-emerald-500/5" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          <div className="text-center mb-5 relative z-10">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl border-2 border-amber-500/50 hover:border-amber-400 flex items-center justify-center transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Mail className="w-5 h-5 text-amber-300 group-hover:text-white transition-colors relative z-10" />
              <div className="absolute inset-0 border-2 border-amber-400/20 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
            </div>
            <h3 className="text-base font-semibold mb-2 text-white bg-gradient-to-r from-white via-amber-100 to-emerald-100 bg-clip-text text-transparent">
              Tech & AI Insights
            </h3>
            <p className="text-sm text-zinc-300 font-light">
              Weekly insights on technology, AI breakthroughs, and startup trends
            </p>
          </div>

          <div className="space-y-3 relative z-10">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-black/30 border-amber-500/30 focus:border-amber-400/60 h-10 text-sm text-white placeholder:text-zinc-400 font-light backdrop-blur-sm"
            />
            <Button className="w-full cursor-pointer bg-amber-600 hover:bg-amber-500 text-white transition-all duration-300 h-10 text-sm font-medium group shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02]">
              Subscribe to Newsletter
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-xs text-zinc-500 font-light">© 2024 Your Name</p>
        </div>
      </div>
    </div>
  )
}
