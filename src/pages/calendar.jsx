import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

// Example icons (replace with your own SVGs or images)
const icons = {
    bell: "🛎️",
    edit: "✏️",
    user: "🧑",
    home: "🏠",
    bookshelf: "📚",
    committee: "👥",
    calendar: "🗓️",
    lostfound: "🔎",
};


const recentEvents = [
    { day: 1, weekday: "Monday", title: "Crytography AAT" },
    { day: 2, weekday: "Tuesday", title: "TFCS Quiz" },
    { day: 3, weekday: "Wednesday", title: "Maths AAT" },
    { day: 4, weekday: "Thursday", title: "UHV Submission" },
    { day: 5, weekday: "Friday", title: "PAPERS" },
    { day: 6, weekday: "Saturday", title: "Rotaract Event" },
    { day: 7, weekday: "Sunday", title: "" },
];

// Calendar weekday headers
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Example calendar data: true = green, false = orange (for Sundays)
const september = [
    false, false, false, false, true, true, false,
    true, false, true, false, true, true, false,
    false, true, false, true, false, false, true,
    true, false, true, false, false, true, true, false
];
const october = [
    true, false, false, true, true, false, false,
    true, false, true, false, true, true, false,
    false, true, false, true, false, false, true,
    true, false, true, false, false, true, true, false
];

function CalendarGrid({ month, data }) {
    return (
        <div className="bg-white rounded-xl p-4 shadow w-72 mb-4">
            <div className="font-semibold mb-2">{month}</div>
            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-2 mb-2 text-xs font-bold text-center">
                {weekDays.map((d, i) => (
                    <div key={i} className={d === "Sun" ? "text-orange-500" : ""}>{d}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
                {data.map((isGreen, idx) => {
                    const dayNum = idx + 1;
                    const weekdayIdx = idx % 7;
                    const isSunday = weekdayIdx === 6;
                    return (
                        <div
                            key={idx}
                            className={`relative w-10 h-10 flex items-center justify-center rounded 
                                ${isSunday ? "bg-orange-400" : "bg-green-400"} 
                                text-white font-bold`}
                        >
                            {dayNum}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function Calendar() {
    // Each event gets its own task list (array of arrays)
    const [recentTasks, setRecentTasks] = useState(Array(recentEvents.length).fill([]));

    // Handler for Add Task button in recent section
    function handleAddTask(idx) {
        const task = prompt(`Add a task for ${recentEvents[idx].weekday}:`);
        if (task && task.trim()) {
            setRecentTasks(tasks => {
                const newTasks = tasks.map(arr => [...arr]);
                newTasks[idx] = [...newTasks[idx], task];
                return newTasks;
            });
        }
    }
const navigate=useNavigate()
    return (
        <div className="min-h-screen bg-gray-200">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-3 bg-white shadow">
                <div className="flex items-center space-x-4">
                    {/* Mac window dots */}
                    <div className="flex space-x-1 mr-2">
                        <span className="w-3 h-3 bg-red-400 rounded-full inline-block" />
                        <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block" />
                        <span className="w-3 h-3 bg-green-400 rounded-full inline-block" />
                    </div>
                    {/* Logo */}
                    <div className="bg-blue-100 p-2 rounded-xl">
                        <img src="/images/logo.svg" alt="Logo" className="w-8 h-8" />
                    </div>
                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Great to see you!"
                        className="ml-4 px-4 py-2 rounded-full bg-gray-200 text-gray-700 focus:outline-none w-64"
                    />
                </div>
                <div className="flex items-center space-x-6">
                    <span className="relative text-2xl">
                        {icons.bell}
                        <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full border-2 border-white" />
                    </span>
                    <span className="text-2xl">{icons.edit}</span>
                    <span className="text-2xl">{icons.user}</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex p-6 gap-6">
                {/* Sidebar */}
                <aside
                    className="rounded-2xl bg-white border border-amber-300 flex flex-col py-6 px-4 w-64 h-[100vh] shadow-lg mr-8 items-center justify-between">
                    <div className="w-full flex flex-col items-center">
                        <div className="mb-8 flex items-center justify-center w-full"/>
                        <nav className="flex-1 w-full space-y-2">
                            <div className="mb-10 text-orange-300 text-2xl font-bold hover:animate-pulse">Side Bar</div>
                            <SidebarItem icon="🏠" label="Home" active/>
                            <SidebarItem icon="📚" onClick={() => navigate("/books")} label="Book Shelf"/>
                            <SidebarItem icon="🤝" onClick={() => navigate("/committee")} label="Committee"/>
                            <SidebarItem icon="📅" onClick={() => navigate("/calendar")} label="Calendar"/>
                            <SidebarItem icon="🔎" onClick={() => navigate("/lostAfound")} label="Lost & Found"/>
                        </nav>
                    </div>
                </aside>

                {/* Center Content */}
                <main className="flex-1 flex flex-col items-center">
                    <div className="flex items-center justify-between w-full mb-4">
                        <h1 className="text-3xl font-bold text-center flex-1">Calendar</h1>
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2 rounded-lg shadow ml-4">
                            Schedule
                        </button>
                    </div>
                    <div className="flex gap-8">
                        <div>
                            <CalendarGrid month="September" data={september}/>
                            <CalendarGrid month="October" data={october}/>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6 w-80">
                            <div className="text-xl font-bold mb-4">Recent</div>
                            {recentEvents.map((event, idx) => (
                                <div key={idx} className="flex flex-col py-2 border-b last:border-b-0">
                                    <div className="flex items-center">
                                        <div className="w-8 text-2xl font-bold">{event.day}</div>
                                        <div className="flex-1">
                                            <div className="text-xs text-gray-500">{event.weekday}</div>
                                            <div className="font-medium">{event.title}</div>
                                        </div>
                                        <button
                                            className="ml-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
                                            onClick={() => handleAddTask(idx)}
                                        >
                                            Add Task
                                        </button>
                                    </div>
                                    {/* List of tasks below the event title */}
                                    {recentTasks[idx].length > 0 && (
                                        <ol className="ml-12 mt-1 list-decimal">
                                            {recentTasks[idx].map((task, tIdx) => (
                                                <li key={tIdx} className="text-black text-sm">{task}</li>
                                            ))}
                                        </ol>
                                    )}
                                </div>
                            ))}
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
