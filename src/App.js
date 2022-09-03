// need to install required packages
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ViewBlog from "./components/ViewBlog";
import CreatePost from "./components/CreatePost";
import Signup from "./components/Signup";
import Login from "./components/Login"

function App() {

        // console.log('hello')
    // Date obj gives us the date, 
    const now = new Date();
    // set a state for an alert msg. if there is a msg, show its content (str) if not, dont show message
    const [message, setMessage] = useState(null); 
    const [category, setCategory] = useState(null); 
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('expiration')) > now) ? true : false) // gets token and expiration from Application>local Storage
    
    // inserting a flash msg and category to a fn so that it can be pushed as a prop to other js files
    const flashMessage = (message, category) => {
        setMessage(message);
        setCategory(category);
    }

    const login = () => {
        setLoggedIn(true)
    }
    
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('expiration')
        setLoggedIn(false)
    }


    return (
        <>
            <Navbar />
                <div className="container ">
                    <br />
                    <div className="row justify-content-center">                        
                    {/* AlertMessage here */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/viewblog" element={<ViewBlog flashMessage={flashMessage} />} />
                        <Route path="/createpost" element={<CreatePost />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        {/* add logout method with useState loggedin=false */}
                        <Route path="/logout" element={<Login />} />
                    </Routes>
                    </div>
                </div>
        </>
    );
}

export default App;
