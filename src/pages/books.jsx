import React from "react";

// Example book cover images (replace with your actual paths)
import book1 from "/images/book1.svg";
import book2 from "/images/book2.svg";
import book3 from "/images/book3.svg";
import book4 from "/images/book4.svg";
import book5 from "/images/book5.svg";
import {useNavigate} from "react-router-dom";

export function Books() {
    const navigate=useNavigate()
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Top Bar */}
            <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
                <div className="flex items-center space-x-4">
                    <img src="/images/logo.svg" alt="Logo" className="w-10 h-10" />
                    <input
                        type="text"
                        placeholder="How are you doing champ!"
                        className="ml-6 px-4 py-2 rounded-full bg-gray-200 text-gray-700 focus:outline-none w-96"
                    />
                </div>
                <div className="flex items-center space-x-6">
                    <span className="text-2xl text-gray-500 cursor-pointer">🔔</span>
                    <span className="text-2xl text-gray-500 cursor-pointer">✏️</span>
                    <span className="text-2xl text-gray-500 cursor-pointer">🧑</span>
                </div>
            </header>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 min-h-[calc(100vh-80px)] bg-white rounded-2xl m-6 p-4 shadow flex flex-col">
                    <nav className="flex-1">
                        <SidebarItem icon="📚" onClick={()=>navigate("/books")} label="Book Shelf" />
                        <SidebarItem icon="🤝" onClick={()=>navigate("/committee")} label="Committee" />
                        <SidebarItem icon="📅" onClick={()=>navigate("/calendar")} label="Calendar" />
                        <SidebarItem icon="🔎" onClick={()=>navigate("/lostAfound")} label="Lost & Found" />
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8 pt-4">
                    {/* Reading Now Card */}
                    <div className="bg-white rounded-2xl shadow p-6 flex items-center mb-8">
                        <img
                            src={book2}
                            alt="Cryptography and Network Security"
                            className="w-28 h-36 object-cover rounded-lg mr-6"
                        />
                        <div className="flex-1">
                            <div className="text-lg font-semibold">Reading Now</div>
                            <div className="font-bold text-xl mt-1">
                                Cryptography and Network Security
                            </div>
                            <div className="text-gray-700 mb-2">William Stallings</div>
                            <div className="text-xs text-gray-500 mb-2">
                                In this age of viruses and hackers, of electronic eavesdropping and electronic fraud, security is paramount. This up-to-date tutorial is a comprehensive survey of cryptography and network security...
                            </div>
                            <button
                                className="text-blue-600 text-xs hover:underline"
                                onClick={() => window.open('/books/cryptography.pdf', '_blank')}
                            >
                                Open Book
                            </button>

                        </div>
                        {/* Today's Reading Progress */}
                        <div className="flex flex-col items-center ml-8">
                            <div className="w-28 h-28 flex items-center justify-center">
                                {/* Replace with an actual progress component if needed */}
                                <svg width="80" height="80">
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="35"
                                        stroke="#e5e7eb"
                                        strokeWidth="6"
                                        fill="none"
                                    />
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="35"
                                        stroke="#60a5fa"
                                        strokeWidth="6"
                                        fill="none"
                                        strokeDasharray="220"
                                        strokeDashoffset="220"
                                    />
                                </svg>
                                <div onClick={()=>window.open("/books/cryptographyPYQ.pdf","_blank")} className="absolute text-blue-500 text-xs underline hover:cursor-pointer font-bold">PYQ's</div>
                            </div>
                            <div className="text-xs text-gray-600 text-center mt-2">
                                Today's Reading<br />
                            </div>
                        </div>
                    </div>

                    {/* My Books Section */}
                    <div>
                        <div className="text-xl font-bold mb-4">My Books</div>
                        <div className="flex space-x-6 overflow-x-auto pb-2">
                            <BookCard image={book1} onClick1={()=>window.open("/books/MathsPYQ.pdf","_blank")} onClick2={()=>window.open("/books/maths.pdf","_blank")} title="Linear Algebra and Its Applications" />
                            <BookCard image={book2} onClick1={()=>window.open("/books/cryptographyPYQ.pdf","_blank")} onClick2={()=>window.open("/books/cryptography.pdf","_blank")} title="Cryptography and Network Security" />
                            <BookCard image={book3} onClick1={()=>window.open("/books/TFCSpyq.pdf","_blank")} onClick2={()=>window.open("/books/tfcs.pdf","_blank")} title="Automata, Theory, Languages, and Computation" />
                            <BookCard image={book4} onClick1={()=>window.open("/books/operatingSystemPYQ.pdf","_blank")} onClick2={()=>window.open("/books/os.pdf","_blank")} title="Operating Systems" />
                            <BookCard image={book5} onClick1={()=>window.open("/books/ADApyqs.pdf","_blank")} onClick2={()=>window.open("https://www.scribd.com/document/858441832/Design-and-Analysis-of-Algorithms-Anany-Levitin","_blank")} title="The Design and Analysis of Algorithms" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function SidebarItem({ icon, label, active,onClick }) {
    return (
        <div
            className={` flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${
                active ? "bg-gray-200 font-bold" : "hover:bg-gray-100"
            }`}
            onClick={onClick}
        >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>

        </div>
    );
}

function BookCard({ image, title,onClick1,onClick2 }) {
    return (
        <div className="w-36 flex-shrink-0">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-lg shadow"
            />
            <div className="mt-2 text-xs font-semibold">{title}</div>
            <div onClick={onClick2}
                 className="mt-2 text-xs font-semibold text-blue-500 underline hover:cursor-pointer">Open
            </div>
            <div onClick={onClick1} className="mt-2 text-xs font-semibold text-blue-500 underline hover:cursor-pointer">PYQ
            </div>
        </div>
    );
}
