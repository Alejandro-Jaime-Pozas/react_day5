import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark ">
            <div className="container-fluid d-flex flex-column">
            <a className="navbar-brand " href="/"><h1 className='display-6'>Kekambas Blog</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse lead" id="navbarNav">
            <ul className="navbar-nav ">
                <li className="nav-item">
                <Link className="nav-link" to="/viewblog">View Blog.</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/createpost">Create Post.</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup.</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login.</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={props.logout} >Logout.</Link>
                </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}
