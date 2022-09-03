import React from 'react'

export default function Login() {
  return (
    <>
        <h4 className="text-center">Login</h4>
        <form >
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
