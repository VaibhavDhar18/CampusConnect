import React, { useState } from "react";

// Example avatars and images (replace with your own paths)
const avatars = {
    wolf: "/images/wolf.svg",
    salman: "/images/salman.svg",
    archie: "/images/archie.svg",
    shahrukh: "/images/shahrukh.svg",
    rohit:"/images/rohit.svg",
    default: "/images/default-avatar.svg", // fallback avatar
};

const images = {
    earphones:"/images/earphone.svg",
    tiffin: "/images/tiffin.svg",
};

export function LostAndFound() {
    // State for lost and found items
    const [lostItems, setLostItems] = useState([
        {
            user: "Wolf Gupta",
            avatar: avatars.wolf,
            message: "Hey guys i have found this earphone! You can find me at the college SRS canteen.\n+91 9546437388",
            image: images.earphones,
        },
        {
            user: "Shahrukh Khan",
            avatar: avatars.shahrukh,
            message: "Hey guys i have found this tiffin! You can find me at the Mannat.\n+91 9546437388",
            image: images.tiffin,
        },
    ]);
    const [foundItems, setFoundItems] = useState([
        {
            user: "Salman Khan",
            avatar: avatars.salman,
            message: "Hey guys i have found this earphone! You can find me at the college SRS canteen.\n+91 9546437388",
        },
        {
            user: "Archie Patel",
            avatar: avatars.archie,
            message: "Hey guys i have lost my earphone elago light green color! You can reach me at the following number.\n+91 9546437388",
        },
        {
            user: "Rohit",
            avatar: avatars.rohit,
            message: "Hey guys i have lost my tiffin wrapped in a black cloth! My absolute favourite food was there in it (Vadapav).You can reach me at the following number.\n+91 9546437388",
        },
    ]);

    // State for form inputs
    const [form, setForm] = useState({
        user: "",
        message: "",
        image: null,
        imagePreview: null,
        section: "lost", // "lost" or "found"
    });

    // Handle form input changes
    function handleChange(e) {
        const { name, value, files } = e.target;
        if (name === "image" && files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                setForm(f => ({
                    ...f,
                    image: files[0],
                    imagePreview: reader.result,
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setForm(f => ({
                ...f,
                [name]: value,
            }));
        }
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        let avatar;
        if (form.section === "lost") {
            avatar = avatars.wolf;
        } else {
            avatar = avatars.salman;
        }
        const newItem = {
            user: form.user || "Anonymous",
            avatar,
            message: form.message,
            image: form.section === "lost" ? form.imagePreview : undefined,
        };
        if (form.section === "lost") {
            setLostItems(items => [...items, newItem]);
        } else {
            setFoundItems(items => [...items, newItem]);
        }
        // Reset form
        setForm({
            user: "",
            message: "",
            image: null,
            imagePreview: null,
            section: "lost",
        });
    }


    return (
        <div className="min-h-screen bg-gray-300">
            {/* Top Bar */}
            <div className="bg-blue-500 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img
                        src="/images/logo.svg"
                        alt="Logo"
                        className="w-10 h-10 rounded-lg bg-white p-1"
                    />
                    <input
                        type="text"
                        placeholder="We've got you covered!"
                        className="bg-gray-200 px-6 py-2 rounded-full w-64 focus:outline-none"
                    />
                </div>
                <div className="flex items-center space-x-6 text-2xl text-white">
                    <span>🔔</span>
                    <span>✏️</span>
                    <span>🧑</span>
                </div>
            </div>

            {/* Add Comment Form */}
            <div className="flex justify-center mt-8">
                <form
                    className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 w-[500px]"
                    onSubmit={handleSubmit}
                >
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="user"
                            value={form.user}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="bg-gray-100 px-3 py-2 rounded w-1/2"
                        />
                        <select
                            name="section"
                            value={form.section}
                            onChange={handleChange}
                            className="bg-gray-100 px-3 py-2 rounded w-1/2"
                        >
                            <option value="lost">Lost</option>
                            <option value="found">Found</option>
                        </select>
                    </div>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Enter your message..."
                        className="bg-gray-100 px-3 py-2 rounded h-20"
                        required
                    />
                    <label className="text-blue-600 underline cursor-pointer font-medium w-fit">
                        Upload Photo
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="hidden"
                        />
                    </label>
                    {form.imagePreview && (
                        <img
                            src={form.imagePreview}
                            alt="Preview"
                            className="rounded-lg w-32 h-24 object-cover border"
                        />
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded font-bold hover:bg-blue-600"
                    >
                        Add
                    </button>
                </form>
            </div>

            {/* Main Content */}
            <div className="flex justify-center gap-8 py-10">
                {/* Lost Column */}
                <div className="bg-white rounded-3xl shadow-lg w-[380px] p-6">
                <div className="flex justify-center mb-4">
                        <div className="bg-black rounded-full px-8 py-2">
                            <span className="text-white text-xl font-bold tracking-wider">LOST</span>
                        </div>
                    </div>
                    {lostItems.map((item, idx) => (
                        <div key={idx} className="mb-8">
                            <div className="flex items-center mb-2">
                                <img
                                    src={item.avatar}
                                    alt={item.user}
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span className="font-semibold text-gray-700">{item.user}</span>
                            </div>
                            <div className="bg-gray-100 rounded-lg shadow px-4 py-2 mb-2 text-gray-700 whitespace-pre-line">
                                {item.message}
                            </div>
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt="Lost item"
                                    className="rounded-lg w-full h-40 object-cover border"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Found Column */}
                <div className="bg-white rounded-3xl shadow-lg w-[380px] p-6">
                    <div className="flex justify-center mb-4">
                        <div className="bg-black rounded-full px-8 py-2">
                            <span className="text-white text-xl font-bold tracking-wider">FOUND</span>
                        </div>
                    </div>
                    {foundItems.map((item, idx) => (
                        <div key={idx} className="mb-8">
                            <div className="flex items-center mb-2">
                                <img
                                    src={item.avatar}
                                    alt={item.user}
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span className="font-semibold text-gray-700">{item.user}</span>
                            </div>
                            <div className="bg-gray-100 rounded-lg shadow px-4 py-2 text-gray-700 whitespace-pre-line">
                                {item.message}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
