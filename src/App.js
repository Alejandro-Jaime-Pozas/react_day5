// need to install required packages
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import ViewBlog from "./components/ViewBlog";
import CreatePost from "./components/CreatePost";
import Signup from "./components/Signup";
import Login from "./"

function App() {


    return (
        <>
            <Navbar />
                <div className="container">
                    {/* AlertMessage here */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/" element={<ViewBlog/>} />
                        <Route path="/" element={<CreatePost />} />
                        <Route path="/" element={<Signup />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
        </>
    );
}

export default App;
