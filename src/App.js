// need to install required packages
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ViewBlog from "./components/ViewBlog";
import CreatePost from "./components/CreatePost";
import Signup from "./components/Signup";
import Login from "./components/Login"
import ViewPost from './components/ViewPost';
import EditPost from './components/EditPost';
import AlertMessage from './components/AlertMessage';

function App() {

    // console.log('hello')
    // set a state for an alert msg. if there is a msg, show its content (str) if not, dont show message
    const [message, setMessage] = useState(null); 
    const [category, setCategory] = useState(null); 
    // CHECK THIS BELOW TO SEE IF LOGGEDIN WORKS FROM LOCALSTORAGE OR IF NEED TO CHANGE TOKEN/EXPIRATION NAMES
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token')) ? true : false) // gets token and expiration from Application>local Storage
    let navigate = useNavigate()
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
        // localStorage.removeItem('expiration')
        flashMessage('You have logged out successfully', 'info')
        setLoggedIn(false)
    }

    const needToLogIn = () => {
        if (loggedIn){
            console.log('user is logged in and can create posts')
        } else{
            flashMessage('You need to login to view this page', 'info')
            navigate('/login')
        }
    }


    return (
        <>
            <Navbar logout={logout} flashMessage={flashMessage} />
                <div className="container ">
                    <br />
                    <div className="row justify-content-center">                        
                    {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null }
                    <Routes>
                        <Route path="/" element={<Home  />} />
                        <Route path="/viewblog" element={<ViewBlog  />} />
                        <Route path="/createpost" element={<CreatePost loggedIn={loggedIn} needToLogIn={needToLogIn} />} />
                        <Route path="/signup" element={<Signup flashMessage={flashMessage} />} />
                        <Route path="/login" element={<Login flashMessage={flashMessage} login={login} loggedIn={loggedIn} />} />
                        <Route path="/viewpost" element={<ViewPost />} />
                        <Route path="/editpost" element={<EditPost />} />
                    </Routes>
                    </div>
                </div>
        </>
    );
}

export default App;
