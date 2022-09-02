import React from 'react'

export default function Navbar() {
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
                <a className="nav-link" href="/">View Blog.</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Create Post.</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Signup.</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Login.</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Logout.</a>
                </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}
