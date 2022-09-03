import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {

    let navigate = useNavigate()
    // need to create handlesubmit for the form to create a user, fetch api and post new user..no useEffect needed here. remember useeffect is to render data fetched from other sources. since it is dynamic
    const handleSubmit = e => {
        e.preventDefault();
        let email = e.target.email.value;
        let username = e.target.username.value;
        let password = e.target.password.value;
        let confirmPass = e.target.confirmPass.value;
        // console.log(email, username, password, confirmPass)

        // check if pswds do not match
        if (password !== confirmPass) {
            props.FlashMessage('Make sure your passwords match!', 'danger')
        } else{
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "username": username,
            "email": email,
            "password": password
            });

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://kekambas-blog.herokuapp.com//auth/users", requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.error){ // this checks for the API error that is in backend code (400 error)
                        console.error(data.error)
                    } else{
                        // console.log(data)
                        props.flashMessage(`You have registered successfully, welcome ${username}!`, 'success')
                        navigate('/')
                    }
                })
        }

    } 

    return (
        <>
            <h4 className="text-center">Sign Up</h4>
            <br /><br />
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className='form-control' placeholder='Enter Email' name='email'/>
                    <br />
                    <label htmlFor="username">Username</label>
                    <input type="text" className='form-control' placeholder='Enter Username' name='username'/>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control' placeholder='Enter Password' name='password'/>
                    <br />
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type="password" className='form-control' placeholder='Confirm Password' name='confirmPass'/>
                    <br />

                    <input type="submit" value='Sign Up' className='btn btn-primary w-100 mt-3' />
                </div>
            </form>

        </>
    )
}
