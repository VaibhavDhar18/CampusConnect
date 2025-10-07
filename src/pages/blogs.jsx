
// Example social icons (replace with your own SVGs or images)
const socials = [
    { icon: "linkedin", url: "#", svg: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.097-.021-2.507-1.527-2.507-1.528 0-1.763 1.195-1.763 2.428v4.683h-3v-9h2.881v1.229h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.996 3.595 4.59v4.744z"/></svg> },
    { icon: "twitter", url: "#", svg: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.16-10.123-5.134a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.085c.63 1.965 2.445 3.393 4.6 3.434a9.868 9.868 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg> },
    { icon: "github", url: "#", svg: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.042-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.649.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .319.216.694.825.576 4.765-1.589 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg> },
    { icon: "medium", url: "#", svg: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.52c.02-.21-.06-.42-.21-.57l-1.6-1.93v-.29h5.02l3.87 8.47 3.41-8.47h4.83v.29l-1.37 1.31c-.12.09-.18.24-.15.39v11.32c-.03.15.03.3.15.39l1.34 1.31v.29h-6.89v-.29l1.39-1.35c.14-.14.14-.18.14-.39v-9.14l-3.88 10.17h-.52l-4.51-10.17v6.83c-.04.28.06.56.28.75l1.81 2.2v.29h-5.16v-.29l1.81-2.2c.21-.19.31-.47.28-.75v-8.19z"/></svg> },
];

export function Blog() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Navbar */}
            <nav className="w-full bg-blue-500 text-white flex space-x-8 px-8 py-2 font-medium rounded-b">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Blog</a>
                <a href="#" className="hover:underline">About me</a>
                <a href="#" className="hover:underline">Subscribe</a>
            </nav>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center px-2 md:px-0">
                <div className="max-w-2xl w-full bg-white mt-8 p-6 rounded shadow mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
                        How to Boost Your CGPA (Without Sacrificing Your Sanity or Sleep)
                    </h1>
                    {/* CGPA Card Image */}
                    <div className="flex justify-center mb-6">
                        <div className="w-96 h-40 bg-[#6ed0f6] rounded-lg border border-gray-400 overflow-hidden flex items-center justify-center relative">
                            {/* Top black arc */}
                            <div className="absolute top-0 left-0 w-full h-10 bg-black rounded-b-full" />
                            {/* Bookmark/arrow */}
                            <div className="absolute top-2 right-4">
                                <svg width="32" height="48" viewBox="0 0 32 48" fill="none">
                                    <rect x="12" width="8" height="32" fill="black"/>
                                    <polygon points="0,32 16,48 32,32" fill="black"/>
                                </svg>
                            </div>
                            {/* CGPA text */}
                            <div className="relative z-10 mt-4">
                                <div className="bg-blue-100 rounded-lg px-8 py-2 border-2 border-blue-200 shadow text-4xl font-black tracking-widest text-black">
                                    CGPA
                                </div>
                            </div>
                            {/* Calculator buttons */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                <span className="w-4 h-4 bg-gray-300 rounded-full inline-block" />
                                <span className="w-4 h-4 bg-gray-300 rounded-full inline-block" />
                                <span className="w-6 h-6 bg-gray-400 rounded-full inline-block" />
                                <span className="w-4 h-4 bg-gray-300 rounded-full inline-block" />
                                <span className="w-4 h-4 bg-gray-300 rounded-full inline-block" />
                            </div>
                        </div>
                    </div>
                    {/* Blog Text */}
                    <article className="text-sm md:text-base text-justify leading-relaxed">
                        <p className="mb-4">
                            Trying to boost your CGPA at BMSCE? You're not alone — every semester, students across campus have that "I'll do better next time" moment after results drop. Step one: actually attend classes, even if the professor sounds like a TED Talk on 0.5x speed. Being present helps you catch important hints (like "this will come for internals!") and gets you noticed — which, let’s be honest, can translate to bonus marks. Sit in the front row sometimes. It’s terrifying, yes. But also, effective.
                        </p>
                        <p className="mb-4">
                            Next, don’t underestimate the power of strategic friendships. Find that one topper who’s always three units ahead and somehow calm during internals. Be their friend (genuinely), and you’ll get access to golden notes, prep tips, and “imp topics.” Combine that with smart studying — focus on past year questions, selective topics, and don’t try to learn everything. This isn’t UPSC. Study what matters, and skip the guilt of not reading every page in your textbook.
                        </p>
                        <p className="mb-4">
                            Internals and projects are secret weapons. Don’t wing it — study two units really well, write lengthy answers, and add diagrams even if no one asked. For projects, pick a topic that sounds fancy, say words like “optimization” and “scalability,” and act confident. Half the marks are for effort, the other half for convincing your guide that you tried. And please — don’t pull all-nighters every time. Study a bit each day, use YouTube wisely, and sleep like you respect your own brain.
                        </p>
                        <p className="mb-4">
                            Finally, learn from your screw-ups. That one paper you flunked? Figure out why. Maybe you wrote too little, studied the wrong units, or scrolled reels with a book on your lap. Whatever it was, improve from it. Your CGPA isn’t a personality trait — it’s just a number that can go up with a little planning, effort, and less procrastination. So go ahead, chase that 8-point-something, and reward yourself with a canteen samosa when you get there. You’ve got this.
                        </p>
                        <div className="text-xs text-gray-600 mt-6">Published on 1 Mar 2022</div>
                    </article>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-blue-500 text-white mt-8 py-8">
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
