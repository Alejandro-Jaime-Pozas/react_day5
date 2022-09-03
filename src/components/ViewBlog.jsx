import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ViewBlog(props) {

    const [posts, setPosts] = useState([])
    // here only need to fetch all the data from blog/posts, no need for fn, but need to pass that data somehow to the cards, like racers
    useEffect(() => {
        fetch('https://kekambas-blog.herokuapp.com/blog/posts')
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setPosts(data)
                    // console.log(data)
                }
            });
            
        }, [] )
        
        console.log(posts[0])
    
    return (
        // want to return a card with a single post's author's username, title, and content. loop/map through all posts
        <div >
            <h1 className='mb-4 text-secondary'>This is the Kekambas Blog:</h1>
            {/* card element here */}
            {posts.map((post, i) => {
                return (
                    <div className="card border-primary mb-3 w-50 p-0" key={i} >
                        <div className="card-header">{post.author.username}</div>
                            <div className="card-body text-primary">
                                {/* COME BACK TURN THIS a INTO A LINK TO EDIT/DELETE CARD */}
                                <a href="/viewpost">
                                <h5 className="card-title">{post.title}</h5>
                                </a>
                                <p className="card-text">{post.content}</p>
                            </div>
                    </div>
                )}
            )}

        </div>
    )
}
