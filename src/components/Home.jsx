import React from 'react'
import bg from '../images/bg2.jpg'

export default function Home() {
    return (
        <div className='display-3 text-center text-secondary my-5'>
            Welcome to the Kekambas:
            <br /><br />
            <img src={bg} className="img-fluid rounded" alt=""></img>
        </div>
    )
}
