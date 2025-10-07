import React from "react";

// Example image imports (replace with your actual paths)
import clubLogo from "/images/upgraha.jpg";
import coordinatorImg from "/images/coordinator2.png";
import coordinatorImg2 from "/images/coordinator3.png";
import coordinatorImg3 from "/images/coordinator4.png";
import gallery1 from "/images/gallery1.svg";
import gallery2 from "/images/gallery2.svg";
import gallery3 from "/images/gallery3.svg";
import gallery4 from "/images/gallery4.svg";
import gallery5 from "/images/gallery5.svg";

export function About2() {
    return (
        <div className="min-h-screen bg-gray-200">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-white border-b-2 border-blue-400">
                <div className="flex items-center space-x-2">
                    <img src="/images/logo.svg" alt="Sidebar" className="w-8 h-8" />
                    <input
                        type="text"
                        placeholder="Hey there!"
                        className="ml-4 px-4 py-1 rounded-full bg-gray-200 text-gray-700 focus:outline-none w-64"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <span role="img" aria-label="bell" className="text-xl">🔔</span>
                    <span role="img" aria-label="edit" className="text-xl">✏️</span>
                    <span role="img" aria-label="profile" className="text-xl">🧑‍🎓</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-10 py-8">
                <div className="flex flex-row justify-between">
                    {/* Left Content */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">About the Club</h2>
                        <p className="text-sm text-gray-700 mb-3 max-w-2xl">
                            The BMS College of Engineering management along with Alpha Design Technologies Limited
                            started working jointly with a vision to build a series of satellites to help the students
                            get hands on exposure to the space segment in 2017. Student satellite development is a
                            multi-disciplinary and complex technology development process. It provides a wonderful
                            learning experience, facilitates hands on experience and is collaborative platform for
                            faculty and students. BMSCE has been carrying out several activities related to building of
                            satellites and its related systems. It has a vision of developing a series of satellites and
                            its ground systems. </p>
                        <span className="text-sm text-gray-700 mb-6 max-w-2xl">
                            Contact No:9453675980
                        </span>
                        <h3 className="text-xl font-bold mb-2">Coordinator</h3>
                        <div className="flex space-x-8 mb-8">
                            <div className="flex flex-col items-center">
                                <img
                                    src={coordinatorImg}
                                    alt="Coordinator 1"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <span className="mt-2 text-sm font-medium text-gray-800">Dr. Jayanthi K Murthy</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={coordinatorImg2}
                                    alt="Coordinator 2"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <span className="mt-2 text-sm font-medium text-gray-800">Dr. H N Suma</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={coordinatorImg3}
                                    alt="Coordinator 3"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <span className="mt-2 text-sm font-medium text-gray-800">Sri C D Shridhar</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2">Gallery</h3>
                        <div className="flex flex-row space-x-4">
                            <img src={gallery1} alt="Gallery 1" className="w-40 h-32 object-cover rounded-md"/>
                            <img src={gallery2} alt="Gallery 2" className="w-40 h-32 object-cover rounded-md"/>
                            <img src={gallery3} alt="Gallery 3" className="w-40 h-32 object-cover rounded-md"/>
                        </div>
                    </div>
                    {/* Right Content */}
                    <div className="flex flex-col justify-start items-center">
                    <img
                            src={clubLogo}
                            alt="Rotaract Club Logo"
                            className="w-40 h-40 rounded-2xl object-contain mb-6 bg-white shadow"
                        />
                        <button
                            className="px-8 py-2 bg-green-500 text-white font-semibold rounded-full text-lg shadow hover:bg-green-600 transition">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
