"use client"

import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample blog posts data
const blogPosts = {
  "future-of-ai": {
    title: "The Future of AI: What's Coming Next",
    content: `
# The Future of AI: What's Coming Next

The landscape of artificial intelligence is evolving at an unprecedented pace. As we stand at the threshold of 2024, several key trends are shaping the future of AI technology.

## Multimodal AI Systems

The next generation of AI systems will seamlessly integrate text, images, audio, and video processing. This convergence will enable more natural human-computer interactions and unlock new possibilities for creative applications.

### Key Developments:
- **Vision-Language Models**: Systems that can understand and generate both text and images
- **Audio Integration**: AI that can process speech, music, and environmental sounds
- **Real-time Processing**: Instant multimodal understanding and generation

## Autonomous Agents

AI agents that can perform complex tasks independently are becoming more sophisticated. These systems will revolutionize how we approach problem-solving and automation.

> "The future belongs to organizations that can effectively collaborate with AI agents to amplify human capabilities."

## Ethical AI and Governance

As AI becomes more powerful, the importance of ethical considerations and governance frameworks cannot be overstated. We're seeing increased focus on:

- Transparency and explainability
- Bias detection and mitigation
- Privacy-preserving AI techniques
- Regulatory compliance frameworks

## The Road Ahead

The convergence of these trends suggests a future where AI becomes an invisible yet indispensable part of our daily lives. The key to success will be maintaining human agency while leveraging AI's capabilities to solve complex global challenges.

---

*What are your thoughts on the future of AI? Share your perspective in the comments below.*
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["AI", "Technology", "Future"],
    excerpt:
      "Exploring the key trends and developments that will shape the future of artificial intelligence in 2024 and beyond.",
  },
  "startup-funding-guide": {
    title: "Complete Guide to Startup Funding in 2024",
    content: `
# Complete Guide to Startup Funding in 2024

Securing funding for your startup has never been more competitive. With changing market conditions and evolving investor preferences, founders need to adapt their strategies to succeed.

## Understanding the Current Landscape

The funding environment has shifted significantly since 2022. Investors are now more cautious, focusing on:

- **Sustainable business models**
- **Clear path to profitability**
- **Strong unit economics**
- **Experienced founding teams**

## Types of Funding Available

### 1. Bootstrapping
Starting with personal savings and revenue from early customers remains the most common approach for many entrepreneurs.

**Pros:**
- Complete control over your company
- No equity dilution
- Forces focus on revenue generation

**Cons:**
- Limited growth potential
- Personal financial risk
- Slower scaling

### 2. Angel Investors
Individual investors who provide capital in exchange for equity, often bringing valuable expertise and networks.

### 3. Venture Capital
Professional investment firms that provide larger amounts of capital for high-growth potential startups.

### 4. Alternative Funding
- Revenue-based financing
- Crowdfunding platforms
- Government grants and programs
- Corporate venture capital

## Preparing for Fundraising

### Essential Documents
1. **Executive Summary** (1-2 pages)
2. **Pitch Deck** (10-15 slides)
3. **Financial Model** (3-year projections)
4. **Product Demo** (if applicable)
5. **Legal Documents** (cap table, incorporation docs)

### Key Metrics to Track
- Monthly Recurring Revenue (MRR)
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- Churn rate
- Gross margins

## The Fundraising Process

### 1. Research and Targeting
Identify investors who:
- Invest in your stage and sector
- Have relevant portfolio companies
- Can provide strategic value beyond capital

### 2. Initial Outreach
- Warm introductions are crucial
- Craft compelling, personalized messages
- Lead with traction and achievements

### 3. Due Diligence
Be prepared for extensive scrutiny of:
- Financial records
- Legal structure
- Market opportunity
- Competitive landscape
- Team background

## Common Mistakes to Avoid

1. **Overvaluing your company**
2. **Raising too little or too much**
3. **Neglecting legal and compliance issues**
4. **Focusing only on the money, not the investor**
5. **Poor communication during the process**

## Conclusion

Successful fundraising requires preparation, persistence, and strategic thinking. Focus on building a strong business first, then use funding to accelerate growth rather than validate your concept.

Remember: fundraising is a means to an end, not the end goal itself.
    `,
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["Startups", "Funding", "Business"],
    excerpt:
      "A comprehensive guide covering everything you need to know about raising capital for your startup in today's market.",
  },
  "tech-trends-2024": {
    title: "Top Technology Trends Shaping 2024",
    content: `
# Top Technology Trends Shaping 2024

As we navigate through 2024, several technological trends are fundamentally reshaping industries and creating new opportunities for innovation.

## 1. Generative AI Goes Mainstream

Generative AI has moved beyond experimental phases into practical business applications:

- **Content Creation**: Automated writing, design, and video production
- **Code Generation**: AI-assisted software development
- **Personalization**: Customized user experiences at scale

### Impact on Industries:
- **Marketing**: Personalized campaigns and content
- **Education**: Adaptive learning systems
- **Healthcare**: Drug discovery and diagnostic assistance

## 2. Edge Computing Revolution

The shift toward edge computing is accelerating, driven by:

- 5G network expansion
- IoT device proliferation
- Real-time processing requirements
- Data privacy concerns

### Key Benefits:
- Reduced latency
- Improved security
- Lower bandwidth costs
- Enhanced reliability

## 3. Quantum Computing Breakthroughs

While still in early stages, quantum computing is showing promising developments:

- **IBM's 1000+ qubit processors**
- **Google's quantum error correction advances**
- **Microsoft's Azure Quantum cloud services**

### Potential Applications:
- Cryptography and security
- Drug discovery and molecular modeling
- Financial modeling and risk analysis
- Climate modeling and optimization

## 4. Sustainable Technology Focus

Environmental consciousness is driving innovation in:

- **Green Cloud Computing**: Energy-efficient data centers
- **Circular Economy Tech**: Waste reduction and recycling
- **Carbon Tracking**: AI-powered emissions monitoring
- **Renewable Energy**: Smart grid technologies

## 5. Extended Reality (XR) Maturation

The convergence of AR, VR, and MR is creating new possibilities:

### Enterprise Applications:
- Remote collaboration and training
- Digital twin visualization
- Maintenance and repair guidance
- Design and prototyping

### Consumer Adoption:
- Gaming and entertainment
- Social interactions
- Shopping experiences
- Education and learning

## 6. Cybersecurity Evolution

As threats become more sophisticated, security approaches are evolving:

- **Zero Trust Architecture**: Never trust, always verify
- **AI-Powered Threat Detection**: Proactive security measures
- **Privacy-Preserving Technologies**: Homomorphic encryption, secure multi-party computation
- **Quantum-Safe Cryptography**: Preparing for quantum threats

## 7. Autonomous Systems Advancement

Beyond self-driving cars, autonomous systems are expanding to:

- **Delivery Drones**: Last-mile logistics
- **Agricultural Robots**: Precision farming
- **Industrial Automation**: Smart manufacturing
- **Service Robots**: Healthcare and hospitality

## Looking Ahead

These trends represent just the beginning of a technological transformation that will continue to accelerate. Organizations that embrace these changes and adapt their strategies accordingly will be best positioned for success.

The key is not just to adopt new technologies, but to understand how they can create value for customers and solve real-world problems.

---

*Which of these trends do you think will have the biggest impact on your industry? Let me know your thoughts!*
    `,
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Technology", "Trends", "Innovation"],
    excerpt:
      "Discover the key technology trends that are defining 2024 and their potential impact across various industries.",
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const parseMarkdownContent = (content: string) => {
    return content
      .split("\n")
      .map((line, index) => {
        // Handle code blocks
        if (line.startsWith("```")) {
          const language = line.slice(3).trim()
          return `<pre class="bg-zinc-900/80 border border-zinc-800/50 rounded-lg p-4 my-6 overflow-x-auto"><code class="text-sm text-zinc-200 font-mono">`
        }
        if (line === "```") {
          return `</code></pre>`
        }

        // Handle inline code
        line = line.replace(
          /`([^`]+)`/g,
          '<code class="bg-zinc-800/60 text-zinc-300 px-2 py-1 rounded text-sm font-mono">$1</code>',
        )

        // Handle headers
        if (line.startsWith("# ")) {
          return `<h1 class="text-2xl font-bold text-white mt-8 mb-4 first:mt-0">${line.slice(2)}</h1>`
        }
        if (line.startsWith("## ")) {
          return `<h2 class="text-xl font-semibold text-white mt-6 mb-3">${line.slice(3)}</h2>`
        }
        if (line.startsWith("### ")) {
          return `<h3 class="text-lg font-medium text-white mt-5 mb-2">${line.slice(4)}</h3>`
        }
        if (line.startsWith("#### ")) {
          return `<h4 class="text-base font-medium text-zinc-200 mt-4 mb-2">${line.slice(5)}</h4>`
        }

        // Handle blockquotes
        if (line.startsWith("> ")) {
          return `<blockquote class="border-l-3 border-zinc-600 bg-zinc-900/40 pl-4 py-2 my-4 italic text-zinc-300">${line.slice(2)}</blockquote>`
        }

        // Handle unordered lists
        if (line.startsWith("- ")) {
          return `<li class="mb-1 text-zinc-300 ml-4 relative before:content-['•'] before:text-zinc-500 before:absolute before:-left-4">${line.slice(2)}</li>`
        }

        // Handle ordered lists
        if (line.match(/^\d+\. /)) {
          const number = line.match(/^(\d+)\. /)?.[1]
          const content = line.replace(/^\d+\. /, "")
          return `<li class="mb-1 text-zinc-300 ml-6 relative"><span class="absolute -left-6 text-zinc-500">${number}.</span>${content}</li>`
        }

        // Handle bold text (remove asterisks)
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        line = line.replace(/\*(.*?)\*/g, '<em class="text-zinc-200">$1</em>')

        // Handle links
        line = line.replace(
          /\[([^\]]+)\]$$([^)]+)$$/g,
          '<a href="$2" class="text-zinc-300 hover:text-white underline">$1</a>',
        )

        // Handle horizontal rules
        if (line.trim() === "---") {
          return `<hr class="border-zinc-700 my-6" />`
        }

        // Handle empty lines
        if (line.trim() === "") {
          return ""
        }

        // Regular paragraphs
        if (line.trim() && !line.startsWith("<")) {
          return `<p class="mb-4 text-zinc-300 leading-relaxed">${line}</p>`
        }

        return line
      })
      .join("\n")
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden md:pr-10">
      {/* Background gradients and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-emerald-950/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/10 via-transparent to-yellow-950/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.15)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.1)_0%,transparent_40%)]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 max-w-2xl">
        {/* Back button */}
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Writing
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-zinc-800/50 text-zinc-300 border-zinc-700/50 text-xs px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">{post.title}</h1>

          <p className="text-lg text-zinc-300 mb-6 leading-relaxed">{post.excerpt}</p>

          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white p-0 h-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        <article className="prose prose-invert prose-zinc max-w-none">
          <div
            className="mdx-content text-sm leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: parseMarkdownContent(post.content),
            }}
          />
        </article>

        {/* Navigation to other posts */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            ← Read more articles
          </Link>
        </div>
      </div>

      <style jsx>{`
        .mdx-content h1:first-child {
          margin-top: 0;
        }
        .mdx-content ul {
          list-style: none;
          padding-left: 0;
          margin: 1rem 0;
        }
        .mdx-content ol {
          list-style: none;
          padding-left: 0;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  )
}
