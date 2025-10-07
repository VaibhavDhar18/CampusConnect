import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Signup} from "./pages/signup.jsx";
import {Signin} from "./pages/signin.jsx";
import {Committee} from "./pages/committee.jsx";
import {About} from "./pages/about.jsx";
import {Dashboard} from "./pages/dashboard.jsx";
import {Blog} from "./pages/blogs.jsx";
import {Books} from "./pages/books.jsx";
import {LostAndFound} from "./pages/lostAfound.jsx";
import {Calendar} from "./pages/calendar.jsx";
import {Blog2} from "./pages/blogs2.jsx";
import {About2} from "./pages/about2.jsx";

export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signin />} />
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/committee" element={<Committee/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/blogs" element={<Blog/>}/>
                    <Route path="/blogs2" element={<Blog2/>}/>
                    <Route path="/books" element={<Books/>}/>
                    <Route path="/lostAfound" element={<LostAndFound/>}/>
                    <Route path="/calendar" element={<Calendar/>}/>
                    <Route path="/about2" element={<About2/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}