import React from 'react'

export default function Signup() {
    return (
        <>
            <h4 className="text-center">Register</h4>
            <br /><br />
            <form >
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
                    <input type="text" className='form-control' placeholder='Confirm Password' name='confirmPass'/>
                    <br />

                    <input type="submit" value='Sign Up' className='btn btn-primary w-100 mt-3' />
                </div>
            </form>

        </>
    )
}
