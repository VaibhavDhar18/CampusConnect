import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const avatars = [
    '/images/avtr1.svg',
    '/images/avtr2.svg',
    '/images/avtr3.svg',
    '/images/avtr4.svg',
];

export function Signup() {
    const [firstname, setfirstname] = useState("");
    const [mobile, setmobile] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedImage(URL.createObjectURL(file));
            setSelectedAvatar(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!/^\d{10}$/.test(mobile)) {
            alert("Mobile must be 10 digits");
            return;
        }
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}/.test(password)) {
            alert("Password must be at least 6 characters and include uppercase, lowercase, and a number");
            return;
        }
        if (!username.includes("@")) {
            alert("Please enter a valid email address");
            return;
        }
        if (firstname.length < 3) {
            alert("Firstname must be at least 3 characters");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/api/signup", {
                username,
                password,
                firstname,
                mobile
            });

            if (response.data.message === "User created successfully") {
                navigate("/signin");
            } else {
                alert(response.data.message);
            }
        } catch (err) {
            alert(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl w-full max-w-5xl p-8 flex flex-col md:flex-row text-white">
                {/* Left Section - Form */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/images/logo.svg" alt="CampusConnect" className="h-10" />
                        <h1 className="text-3xl font-bold text-white">CampusConnect</h1>
                    </div>
                    <h2 className="text-xl text-center font-semibold text-white mb-6">Register</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            placeholder="email"
                            onChange={(e) => setusername(e.target.value)}
                            className="w-full px-4 py-2 rounded-full bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            onChange={(e) => setpassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-full bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <input
                            type="text"
                            placeholder="firstname"
                            onChange={(e) => setfirstname(e.target.value)}
                            className="w-full px-4 py-2 rounded-full bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <input
                            type="text"
                            placeholder="mobile"
                            onChange={(e) => setmobile(e.target.value)}
                            className="w-full px-4 py-2 rounded-full bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition duration-300"
                        >
                            Register
                        </button>
                    </form>
                </div>

                {/* Right Section - Profile Picture */}
                <div className="flex-1 flex flex-col items-center justify-center mt-8 md:mt-0">
                    <h3 className="text-white text-lg font-medium mb-2">Profile Picture</h3>
                    <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center overflow-hidden mb-4">
                        {uploadedImage ? (
                            <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                        ) : selectedAvatar ? (
                            <img src={selectedAvatar} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                            <img
                                src="https://img.icons8.com/ios-filled/100/user-male-circle.png"
                                alt="Default"
                                className="w-20 h-20"
                            />
                        )}
                    </div>
                    <label className="mb-2 cursor-pointer bg-green-500 px-4 py-1 rounded-full hover:bg-green-600 transition">
                        Upload Image
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </label>

                    <div className="text-white my-2">or</div>
                    <p className="text-white mb-2">Select Avatar</p>
                    <div className="flex gap-3">
                        {avatars.map((avatar, idx) => (
                            <img
                                key={idx}
                                src={avatar}
                                alt={`avatar-${idx}`}
                                className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
                                    selectedAvatar === avatar ? 'border-green-500' : 'border-transparent'
                                }`}
                                onClick={() => {
                                    setSelectedAvatar(avatar);
                                    setUploadedImage(null);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
