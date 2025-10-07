// Example social icons (replace with your own SVGs or images)
const socials = [
    // ... same as before ...
];

export function Blog2() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Navbar */}
            <nav className="w-full bg-green-500 text-white flex space-x-8 px-8 py-2 font-medium rounded-b">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Blog</a>
                <a href="#" className="hover:underline">About me</a>
                <a href="#" className="hover:underline">Subscribe</a>
            </nav>
            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center px-2 md:px-0">
                <div className="max-w-2xl w-full bg-white mt-8 p-6 rounded shadow mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
                        Why Attending Classes Is More Important Than Ever
                    </h1>
                    {/* Fun Classroom Image */}
                    <div className="flex justify-center mb-6">
                        <div className="w-96 h-40 bg-[#f9e79f] rounded-lg border border-gray-400 overflow-hidden flex items-center justify-center relative">
                            {/* Simple classroom SVG illustration */}
                            <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                                <rect x="10" y="30" width="200" height="70" rx="10" fill="#fffde7" stroke="#b7950b" strokeWidth="3"/>
                                <rect x="30" y="45" width="40" height="40" rx="6" fill="#aed581"/>
                                <rect x="80" y="45" width="40" height="40" rx="6" fill="#81d4fa"/>
                                <rect x="130" y="45" width="40" height="40" rx="6" fill="#ffb74d"/>
                                <ellipse cx="55" cy="95" rx="10" ry="5" fill="#bdbdbd"/>
                                <ellipse cx="105" cy="95" rx="10" ry="5" fill="#bdbdbd"/>
                                <ellipse cx="155" cy="95" rx="10" ry="5" fill="#bdbdbd"/>
                                {/* Black board */}
                                <rect x="60" y="10" width="100" height="20" rx="4" fill="#263238"/>
                                <text x="110" y="25" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace">Attendance 101</text>
                                {/* Funny student */}
                                <circle cx="180" cy="80" r="10" fill="#ffe082"/>
                                <rect x="175" y="90" width="10" height="15" rx="3" fill="#ffb300"/>
                                <ellipse cx="180" cy="108" rx="6" ry="3" fill="#bdbdbd"/>
                                <rect x="185" y="97" width="4" height="10" rx="2" fill="#81d4fa"/>
                                <rect x="171" y="97" width="4" height="10" rx="2" fill="#aed581"/>
                                {/* Hand raised */}
                                <rect x="187" y="75" width="3" height="12" rx="1" fill="#ffe082" transform="rotate(-20 188 81)"/>
                            </svg>
                        </div>
                    </div>
                    {/* Blog Text */}
                    <article className="text-sm md:text-base text-justify leading-relaxed">
                        <p className="mb-4">
                            Let’s be honest: the snooze button is tempting, and online lectures have made it dangerously easy to attend “class” while horizontal. But in 2025, showing up to class (in person!) is more important than ever. Why? Because your WiFi can’t freeze your face in real life, and professors are much less likely to ignore you if you’re sitting in the front row (or even the back, but at least you’re there).
                        </p>
                        <p className="mb-4">
                            First, attending class is like subscribing to a YouTube channel, except the notifications are your grades. Studies show students who attend classes regularly not only learn more but also remember more—mainly because they’re not distracted by their fridge or their cat walking across the keyboard. Plus, you get all the bonus hints professors drop, like “this will definitely be on the test,” which never makes it into the group chat.
                        </p>
                        <p className="mb-4">
                            Second, being present means you can ask questions, clarify doubts, and occasionally impress your classmates with your knowledge (or your ability to ask, “Can you repeat that?” in 17 creative ways). Participation isn’t just for the teacher’s ego—it actually helps you retain information, build communication skills, and maybe even make a friend who will share their notes when you inevitably catch a cold during finals week.
                        </p>
                        <p className="mb-4">
                            Let’s not forget the power of routine. Attending class keeps you organized, on track, and less likely to mistake Thursday for Saturday. Plus, teachers notice who shows up—and sometimes, that’s the difference between a B+ and an A- (or at least a smiley face on your assignment).
                        </p>
                        <p className="mb-4">
                            And finally, classroom humor is a real thing. Being there means you get to laugh at the professor’s dad jokes, groan at their puns, and maybe even contribute your own. Laughter boosts memory and makes learning less painful—science says so.
                        </p>
                        <p className="mb-4">
                            So next time you’re tempted to skip class, remember: your future self (and your GPA) will thank you. Besides, you can always nap after class—just not during the lecture (unless you’ve mastered the art of sleeping with your eyes open, in which case, teach us your ways).
                        </p>
                        <div className="text-xs text-gray-600 mt-6">Published on 3 June 2025</div>
                    </article>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-green-500 text-white mt-8 py-8">
                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    <div className="text-xl md:text-2xl font-bold mb-4 text-center">
                        Get in touch with me on other platforms
                    </div>
                    <div className="flex gap-6 mb-2">
                        {socials.map((s, i) => (
                            <a key={i} href={s.url} className="hover:text-blue-200" aria-label={s.icon}>
                                {s.svg}
                            </a>
                        ))}
                    </div>
                    <div className="text-blue-200 text-sm font-semibold opacity-70">Dashboard</div>
                </div>
            </footer>
        </div>
    );
}
