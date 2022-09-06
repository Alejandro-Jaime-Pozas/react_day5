import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SinglePost from './SinglePost';

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
        
        // console.log(posts[0])
        let navigate = useNavigate()

        function handleClick(post_id) {
            console.log('Clicked')
            props.getPostID(post_id);
            localStorage.setItem("post_id", post_id)
            navigate('/viewpost')
        }
    
    return (
        // want to return a card with a single post's author's username, title, and content. loop/map through all posts
        <div >
            <h1 className='mb-4 text-secondary'>This is the Kekambas Blog:</h1>
            {/* card element here */}
            {posts.map((post, i) => <SinglePost key={i} handleClick={handleClick} post_id={post.id} pusername={post.author.username} ptitle={post.title} pcontent={post.content} postID={props.postID} />
            )}

        </div>
    )
}
