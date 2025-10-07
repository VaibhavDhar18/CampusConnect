import React from "react";
import blog1 from "/images/blog1.svg";
import blog2 from "/images/blog2.svg";
import {useNavigate} from "react-router-dom";

export function Dashboard() {
    const navigate=useNavigate()
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {/* Sidebar */}
            <aside className="rounded-2xl bg-white border border-amber-300 flex flex-col py-6 px-4 w-64 h-[100vh] shadow-lg mr-8 items-center justify-between">
                <div className="w-full flex flex-col items-center">
                    <div className="mb-8 flex items-center justify-center w-full"/>
                    <nav className="flex-1 w-full space-y-2">
                        <div className="mb-10 text-orange-300 text-2xl font-bold hover:animate-pulse" >Side Bar</div>
                        <SidebarItem icon="🏠" label="Home" active />
                        <SidebarItem icon="📚" onClick={()=>navigate("/books")} label="Book Shelf" />
                        <SidebarItem icon="🤝" onClick={()=>navigate("/committee")} label="Committee" />
                        <SidebarItem icon="📅" onClick={()=>navigate("/calendar")} label="Calendar" />
                        <SidebarItem icon="🔎" onClick={()=>navigate("/lostAfound")} label="Lost & Found" />
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <header className="flex items-center gap-6 px-8 py-4 bg-white rounded-2xl shadow mb-8 mt-4 w-[95%] mx-auto">
                    <img src="/images/logo.svg" alt="App Logo" className="w-10 h-10" />
                    <input
                        type="text"
                        placeholder="Welcome"
                        className="flex-1 px-4 py-2 rounded-full bg-gray-200 text-gray-700 focus:outline-none"
                    />
                    <div className="flex items-center space-x-6">
                        <span className="text-2xl">🔔</span>
                        <span className="text-2xl">✏️</span>
                        <span className="text-2xl">🧑</span>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="flex flex-1 p-2 space-x-8">
                    {/* Center Content */}
                    <main className="flex-1">
                        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                        <h2 className="text-lg font-semibold mb-4">Blogs</h2>
                        <div className="flex space-x-6">
                            <BlogCard
                                image={blog1}
                                onClick={()=>navigate("/blogs")}
                                title="Want to improve your CGPA? Tips from the pros!"
                            />
                            <BlogCard
                                image={blog2}
                                onClick={()=>navigate("/blogs2")}
                                title="Why attending your classes is more important than ever!"
                            />
                        </div>
                    </main>
                </div>
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

function BlogCard({ image, title,onClick }) {
    const navigate=useNavigate()
    return (
        <div className="bg-white rounded-xl shadow p-4 w-72 flex flex-col">
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="font-semibold mb-2">{title}</div>
            <div className="flex justify-end">
                <span onClick={onClick} className="text-2xl text-gray-400 transition-transform duration-200 hover:scale-105 cursor-pointer">↗️</span>
            </div>
        </div>
    );
}
