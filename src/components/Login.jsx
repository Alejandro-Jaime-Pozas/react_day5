import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    // fetch username and password from api connection
    // handleSubmit fn to check if input username and password are a match on api
    let navigate = useNavigate()
    let handleSubmit = async e => {
        e.preventDefault()
        let username = e.target.username.value;
        let password = e.target.password.value;
        // to check if username and pswd are match, take inputs and get a token, if token is generated, then pswds are a match..
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + btoa(`${username}:${password}`));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
        };
        // THIS FETCH W/O ASYNC FN COULD CAUSE ERROR
        let response = await fetch("https://kekambas-blog.herokuapp.com//auth/token", requestOptions);
        if (response.ok) {
            let data = await response.json()
            // redirect user to homepage once they successfully logged in, show flash msg, set loggedin to true
            // console.log('need to set localstorage token to: ', data)
            localStorage.setItem("token", data.token)
            props.login()
            // console.log(props.loggedIn)
            props.flashMessage(`Welcome back ${username}!`, 'success')
            navigate('/')
        } else {
            props.flashMessage("Sorry, your username/password is incorrect, try again.", 'info')
        }
    }


    return (
        <>
            <h4 className="text-center">Login</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">

                    <label htmlFor="username">Username</label>
                    <input type="text" className='form-control' placeholder='Enter Username' name='username'/>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control' placeholder='Enter Password' name='password'/>
                    <br />

                    <input type="submit" value='Login' className='btn btn-primary w-50 mt-3' />
                </div>
            </form>

        </>
    )
}
