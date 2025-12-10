"use client"
import Link from "next/link"
import { useState } from "react"

const digitalProducts = [
    {
        title: "SaaS Starter Boilerplate",
        description: "Full-stack Next.js SaaS starter with billing, authentication, user dashboard & beautiful UI kit. Get your SaaS up and running in days, not weeks.",
        type: "Boilerplate",
        category: "Web Apps",
        highlights: ["Built-in Auth", "Payments", "Modern UI", "Reusable Components"],
        demo: "https://saas-boilerplate-demo.vercel.app",
        cta: "View Demo",
        comingSoon: false,
        badge: "Popular",
        color: "from-amber-500/20 to-emerald-500/10"
    },
    {
        title: "Mobile App MVP Boilerplate",
        description:
            "Production-ready React Native template. Authentication, navigation, theming, notifications, and robust folder architecture included.",
        type: "Boilerplate",
        category: "Mobile Apps",
        highlights: ["Expo", "Auth Flows", "Theming", "Fast Start"],
        demo: "https://mobile-boilerplate-demo.vercel.app",
        cta: "View Demo",
        comingSoon: false,
        badge: "Mobile Ready",
        color: "from-teal-400/20 to-amber-400/10"
    },
    {
        title: "Landing Page Templates",
        description:
            "A collection of aesthetic and high-converting landing pages for launches, products, startups and more. Custom sections, copy prompts, and easy customization.",
        type: "Template",
        category: "UI Kits",
        highlights: ["Conversion-focused", "SEO", "Customizable", "Modern Tech"],
        demo: "https://landing-templates-demo.vercel.app",
        cta: "Preview Templates",
        comingSoon: false,
        badge: "New",
        color: "from-amber-400/10 to-emerald-400/10"
    },
    {
        title: "Admin Dashboard UI",
        description:
            "Clean admin dashboard template: analytics, insights, user management. Modern dashboard widgets, charts, and responsive layouts.",
        type: "Template",
        category: "UI Kits",
        highlights: ["Analytics Widgets", "Charts", "User Ready"],
        demo: "https://admin-dashboard-demo.vercel.app",
        cta: "Try Demo",
        comingSoon: false,
        badge: "Trending",
        color: "from-emerald-400/10 to-amber-300/10"
    },
    {
        title: "AI SaaS Starter Kit",
        description:
            "Launch your AI-powered SaaS in record time. Next.js, Stripe payments, OpenAI API ready, all essentials to get from idea to launch.",
        type: "Boilerplate",
        category: "Web Apps",
        highlights: ["Stripe", "OpenAI Ready", "User Profiles"],
        demo: "https://ai-saas-starter-demo.vercel.app",
        cta: "View Demo",
        comingSoon: false,
        badge: "AI",
        color: "from-indigo-700/10 to-emerald-400/10"
    },
    {
        title: "Notion OS for Founders",
        description:
            "A Notion workspace & documentation kit to go from idea to MVP: planning, features, kanban, and launch checklists. For busy founders.",
        type: "Template",
        category: "Docs",
        highlights: ["Notion", "Kanban", "Launch checklist"],
        demo: "https://notion.so",
        cta: "Download",
        comingSoon: true,
        badge: "Coming Soon",
        color: "from-zinc-500/20 to-zinc-900/5"
    },
    {
        title: "Portfolio Starter Kit",
        description:
            "Modern Next.js + Tailwind portfolio boilerplate for designers & indie hackers. Ready for content, fast and SEO-perfect.",
        type: "Boilerplate",
        category: "Web Apps",
        highlights: ["SEO", "Markdown", "Blog-ready", "Deploy Fast"],
        demo: "https://portfolio-kit-demo.vercel.app",
        cta: "View Demo",
        comingSoon: false,
        badge: "Creator",
        color: "from-amber-700/10 to-teal-900/10"
    },
    {
        title: "E-commerce Micro Kit",
        description:
            "A headless commerce starter: Shop pages, carts, Stripe integration, product admin & modern UI. Built for fast experimentation.",
        type: "Boilerplate",
        category: "Web Apps",
        highlights: ["Stripe", "Cart Logic", "Headless"],
        demo: "https://ecom-micro-demo.vercel.app",
        cta: "View Demo",
        comingSoon: true,
        badge: "Coming Soon",
        color: "from-fuchsia-500/10 to-yellow-300/10"
    },
    {
        title: "Design System UI Kit",
        description:
            "A reusable Tailwind+Radix UI kit. Buttons, modals, forms, alerts, ready for slicing into any web product.",
        type: "UI Kit",
        category: "UI Kits",
        highlights: ["Radix UI", "TailwindCSS", "Accessibility"],
        demo: "https://ui-kit-demo.vercel.app",
        cta: "Preview UI",
        comingSoon: false,
        badge: "Reusable",
        color: "from-lime-500/10 to-emerald-700/5"
    }
];

const productCategories = [
    "All",
    ...Array.from(
        new Set(digitalProducts.map(product => product.category))
    )
];

function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

function ProductCard({ product }: { product: typeof digitalProducts[0] }) {
    return (
        <div
            className={classNames(
                "group relative flex flex-col justify-between bg-gradient-to-br",
                product.color,
                "border border-zinc-700/40 rounded-2xl p-6 shadow-md transition-all duration-200 min-h-[320px]",
                "hover:shadow-amber-900/20 hover:-translate-y-1 hover:border-amber-500/40 focus-within:border-amber-300"
            )}
            tabIndex={0}
        >
            <div>
                <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-black/60 border border-zinc-600 text-amber-300">
                        {product.type}
                    </span>
                    {product.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-800/10 text-amber-300 border border-amber-300/20 ml-2">
                            {product.badge}
                        </span>
                    )}
                </div>
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-amber-100 transition-colors line-clamp-2">
                    {product.title}
                </h2>
                <p className="text-zinc-300 text-sm mb-4 line-clamp-2">{product.description}</p>
                <ul className="flex flex-wrap gap-2 mb-3">
                    {product.highlights.map((h, i) => (
                        <li
                            key={i}
                            className="text-xs px-2 py-1 bg-zinc-800/40 text-emerald-300 rounded-full border border-zinc-700/20 select-none"
                        >
                            {h}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-3">
                {product.comingSoon ? (
                    <span className="w-full py-2 px-4 text-sm text-zinc-400 rounded-full bg-zinc-900/30 border border-zinc-700/30 block text-center cursor-not-allowed opacity-70 animate-pulse">
                        Coming Soon
                    </span>
                ) : (
                    <Link
                        href={product.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-4 text-sm font-semibold bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-500 hover:from-amber-500 hover:to-emerald-400 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none shadow-md hover:shadow-lg outline-none"
                    >
                        {product.cta}
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="none"><path d="M7 13l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                )}
            </div>
            <div
                className="absolute inset-0 z-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: 'radial-gradient(ellipse at 50% 40%,rgba(245,158,11,0.10) 40%,transparent 100%)'
                }}
            />
        </div>
    )
}

export default function DigitalProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = selectedCategory === "All"
        ? digitalProducts
        : digitalProducts.filter((product) => product.category === selectedCategory);

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-emerald-950/20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/10 via-transparent to-yellow-950/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(245,158,11,0.12)_0%,transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.08)_0%,transparent_40%)]" />

            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-1000" />

            <div className="relative z-10 container mx-auto px-4 pt-20 pb-8 max-w-5xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white bg-gradient-to-r from-white via-amber-100 to-emerald-100 bg-clip-text text-transparent">
                        Digital Products
                    </h1>
                    <p className="text-zinc-300 text-base mx-auto max-w-lg">
                        Inspiring, minimal, and highly practical digital assets for creators & developers. Find your next boilerplate, template, or UI kit—crafted to save you time and deliver value instantly.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {productCategories.map((cat) => (
                        <button
                            key={cat}
                            className={classNames(
                                "h-9 px-5 text-xs font-semibold rounded-full border backdrop-blur-sm transition-all",
                                selectedCategory === cat
                                    ? "bg-amber-500 text-white border-amber-700 shadow"
                                    : "bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-amber-200"
                            )}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, idx) => (
                            <ProductCard product={product} key={idx} />
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-16 opacity-70">
                            <span className="text-2xl text-amber-300 mb-4">¯\_(ツ)_/¯</span>
                            <span className="px-4 py-2 bg-zinc-900/40 border border-zinc-700/40 rounded-full text-zinc-400 text-sm">
                                No products found in this category.
                            </span>
                        </div>
                    )}
                </div>

                {/* Suggestion CTA */}
                <div className="text-center mt-12">
                    <span className="text-zinc-400/60 text-xs">
                        Can’t find what you need?{" "}
                        <a
                            href="mailto:hello@yoursite.com"
                            className="text-amber-300 hover:underline font-semibold"
                        >
                            Suggest a digital product &rarr;
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}