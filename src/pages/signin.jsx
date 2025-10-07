import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function Signin() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.includes("@")) {
            alert("Please enter a valid email address and password");
            return;
        }
        if (!password) {
            alert("Password required");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/api/signin", {
                username,
                password,
            });

            if (response.data.token) {
                navigate("/dashboard");
            } else {
                alert(response.data.message);
            }
        } catch (err) {
            alert(err.response?.data?.message || "Signin failed. Please check your credentials.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white font-sans">
            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Left Section */}
                <div className="w-full md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <img src="/images/logo.svg" alt="logo" className="h-10" />
                        <h1 className="text-3xl font-semibold text-blue-600">CampusConnect</h1>
                    </div>

                    <h2 className="text-lg text-center font-semibold text-green-600 mb-6">Login</h2>

                    <form onSubmit={handleSubmit}>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="username@gmail.com"
                            className="w-full px-4 py-2 mb-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onChange={(e) => setusername(e.target.value)}
                        />

                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mb-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onChange={(e) => setpassword(e.target.value)}
                        />

                        <a href="#" className="text-sm text-blue-500 hover:underline mb-4 inline-block">Forgot Password?</a>

                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition duration-300"
                        >
                            Sign in
                        </button>
                    </form>

                    <div className="mt-6 text-center text-gray-500">or continue with</div>
                    <div className="flex justify-center gap-4 mt-4">
                        <button className="p-2 rounded-full border hover:shadow">
                            <img src="https://img.icons8.com/color/48/google-logo.png" alt="google" className="h-6 w-6" />
                        </button>
                        <button className="p-2 rounded-full border hover:shadow">
                            <img src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" className="h-6 w-6" />
                        </button>
                        <button className="p-2 rounded-full border hover:shadow">
                            <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook" className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <span>Don't have an account yet? </span>
                        <Link to="/signup" className=" text-blue-700 hover:underline ">Signup for free</Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 bg-blue-600 flex items-center justify-center relative p-8">
                    <img
                        src="/images/animation.svg"
                        alt="monk"
                        className="max-h-[400px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
