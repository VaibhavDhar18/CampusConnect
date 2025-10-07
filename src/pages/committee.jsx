import { useNavigate } from "react-router-dom";
import rotaractLogo from "/images/rotaract.svg";
import pentagramLogo from "/images/pentagram.svg";
import committee1 from "/images/mountaineering.svg";
import committee2 from "/images/upgraha.jpg";
import committee3 from "/images/robotics.svg";
import committee4 from "/images/falcon.svg";
import committee5 from "/images/IEEE.svg";
import orientationIcon from "/images/orientationIcon.svg";
import campusTourIcon from "/images/campusTour.svg";
import quizIcon from "/images/quizIcon.svg";
import resumeIcon from "/images/resumeIcon.svg";

const updates = [
    {
        icon: orientationIcon,
        title: "Orientation",
        subtitle: "IEEE Comsoc",
    },
    {
        icon: campusTourIcon,
        title: "Campus Tour",
        subtitle: "Christ University",
    },
    {
        icon: quizIcon,
        title: "Quiz about Java",
        subtitle: "Room 405",
    },
    {
        icon: resumeIcon,
        title: "Resume Building Workshop",
        subtitle: "Mobile Application",
    },
];

export function Committee() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-white border-b-2 border-blue-400">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        {/* Replace with your sidebar icon */}
                        <img src="/images/logo.svg" alt="logo" className="size-8 rounded-lg" />
                    </div>
                    <input
                        type="text"
                        placeholder="Greetings!"
                        className="ml-4 px-4 py-1 rounded-full bg-gray-200 text-gray-700 focus:outline-none w-64"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    {/* Replace with your actual icons */}
                    <span role="img" aria-label="bell" className="text-xl">🔔</span>
                    <span role="img" aria-label="edit" className="text-xl">✏️</span>
                    <span role="img" aria-label="profile" className="text-xl">🧑‍🎓</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex px-8 py-6 space-x-8">
                {/* Left: Committees */}
                <div className="flex-1">
                    {/* Your Committees */}
                    <h2 className="text-xl font-bold mb-4">Your Committees</h2>
                    <div className="flex space-x-6 mb-8">
                        <img src={committee1} alt="mountaineering" className="w-32 h-32 rounded-xl object-cover" />
                        <img src={pentagramLogo} alt="Pentagram" className="w-32 h-32 rounded-xl object-cover" />
                    </div>

                    {/* Other Committees */}
                    <h2 className="text-xl font-bold mb-4">Other Committees</h2>
                    <div className="flex space-x-6">
                        <img
                            src={rotaractLogo}
                            alt="Rotaract Club"
                            className="w-24 h-24 rounded-xl object-cover transition-transform duration-200 hover:cursor-pointer hover:scale-105"
                            onClick={() => navigate("/about")}
                        />
                        <img
                            src={committee2}
                            alt="Upagraha"
                            className="w-24 h-24 rounded-xl object-contain bg-white transition-transform duration-200 hover:cursor-pointer hover:scale-105"
                            onClick={() => navigate("/about2")}
                        />
                        <img
                            src={committee3}
                            alt="Committee 3"
                            className="w-24 h-24 rounded-xl object-cover bg-white transition-transform duration-200 hover:cursor-pointer hover:scale-105"
                        />
                        <img
                            src={committee4}
                            alt="Committee 4"
                            className="w-24 h-24 rounded-xl object-cover bg-white transition-transform duration-200 hover:cursor-pointer hover:scale-105"
                        />
                        <img
                            src={committee5}
                            alt="Committee 5"
                            className="w-24 h-24 rounded-xl object-contain bg-white transition-transform duration-200 hover:cursor-pointer hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right: Updates */}
                <div className="w-88">
                    <div className="bg-white h-96 rounded-xl p-6 shadow">
                        <h3 className="text-lg font-bold mb-4">Updates</h3>
                        <ul>
                            {updates.map((update, idx) => (
                                <li key={idx} className="flex items-start mb-4 last:mb-0">
                                    <img src={update.icon} alt="" className="w-8 h-8 mr-3 rounded" />
                                    <div>
                                        <div className="font-semibold">{update.title}</div>
                                        <div className="text-sm text-gray-500">{update.subtitle}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
