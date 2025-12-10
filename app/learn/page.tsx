import Link from "next/link"

const courses = [
    {
        title: "Vibecoding Mastery",
        description: "Creative coding quests and gamified logic challenges. Build your unique coding vibe.",
        href: "/learn/vibecoding",
        color: "from-amber-900/40 to-emerald-900/10"
    },
    {
        title: "Web dev fundamentals",
        description: "Demystify tech stacks, tools, and developer workflows. Play your way into the industry standard.",
        href: "/learn/tech",
        color: "from-teal-900/40 to-yellow-400/10"
    },
    {
        title: "App dev fundamentals",
        description: "Demystify tech stacks, tools, and developer workflows. Play your way into the industry standard.",
        href: "/learn/tech",
        color: "from-teal-900/40 to-yellow-400/10"
    },
    {
        title: "Software engineering fundamentals",
        description: "Learn about data structures, algorithms, linux, operating systems, computer networks, databases, sql and software engineering best practices.",
        href: "/learn/tech",
        color: "from-teal-900/40 to-yellow-400/10"
    },
    {
        title: "Full stack development with Typescript, React and Nextjs",
        description: "Game-style lessons on algorithms, problem-solving, and programming basics.",
        href: "/learn/coding",
        color: "from-emerald-800/30 to-amber-500/10"
    },
    {
        title: "Product Management",
        description: "Interactive tracks on business models, product thinking, and creative entrepreneurship.",
        href: "/learn/business",
        color: "from-amber-800/20 to-fuchsia-900/10"
    },
    {
        title: "Ai engineering",
        description: "Level up by building and launching actual products—get badges, XP, and portfolio gems.",
        href: "/learn/product",
        color: "from-amber-700/10 to-teal-900/10"
    }
];

function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

export default function LearnPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 py-12 px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-3 leading-tight tracking-tight">
                    <span className="drop-shadow-sm">
                        Gamify Your Learning Journey
                    </span>
                </h1>
                <p className="text-zinc-300 text-base md:text-lg mb-6">
                    Courses in <span className="text-emerald-300 font-semibold">Vibecoding</span>, <span className="text-amber-200 font-semibold">Tech</span>, <span className="text-fuchsia-300 font-semibold">Coding</span>, <span className="text-amber-300 font-semibold">Business</span> & <span className="text-teal-200 font-semibold">Product</span>.<br />
                    Unlock levels. Earn badges. Make learning an adventure.
                </p>
            </div>
            <section className="max-w-5xl mx-auto grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map(course => (
                    <Link
                        key={course.title}
                        href={course.href}
                        className={classNames(
                            "group bg-gradient-to-br",
                            course.color,
                            "border border-zinc-700/40 rounded-2xl p-6 shadow-md transition-all duration-200 min-h-[220px] flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300",
                            "hover:shadow-amber-900/10 hover:-translate-y-1 hover:border-amber-400/40"
                        )}
                    >
                        <div>
                            <h2 className="text-lg font-bold text-white group-hover:text-amber-100 transition-colors mb-1 line-clamp-2">
                                {course.title}
                            </h2>
                            <p className="text-zinc-300 text-sm mb-4 line-clamp-3">{course.description}</p>
                        </div>
                        <span className="w-full mt-auto py-2 px-4 text-sm font-semibold bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-500 hover:from-amber-500 hover:to-emerald-400 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none shadow-md hover:shadow-lg outline-none">
                            Enroll Now
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="none"><path d="M7 13l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                    </Link>
                ))}
            </section>
        </main>
    );
}