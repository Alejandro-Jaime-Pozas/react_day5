import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ViewPost(props) {

    let navigate = useNavigate()
    props.needToLogIn()

    const [post, setPost] = useState([])
    // already have the postID, so now fetch that postID from API and render results
    useEffect(() => {
        fetch(`https://kekambas-blog.herokuapp.com//blog/posts/${props.postID}`)
        .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    console.log(data)
                    setPost(data)
                }
            });
            
    }, [props.postID] )

    let handleDelete = e => {
        e.preventDefault();
        let token = localStorage.getItem("token")
        // fetch method to delete the current post, takes in post number, and the user's token
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        
        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch(`https://kekambas-blog.herokuapp.com//blog/posts/${props.postID}`, requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data.error) {
                props.flashMessage('You are not authorized to delete this post', 'warning')
                console.log(data.error)
            } else {
                props.flashMessage('You have deleted your post successfully', 'info')
                // console.log(data)
                navigate('/')
            }
        });
    }


    return (

    <div className="text-center">
    <br />
    <div className="card text-start ">
        <div className="card-body">
            <h5 className="card-title mb-3 text-primary">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{post.content}</h6>
            <br />
            {/* ASK BRIAN WHY THIS DID NOT WORKKKKK data.author.username*/}
            {/* <h6 className="card-subtitle mb-2 text-muted">{post.author.id}</h6> */}
        </div>
    </div>
    <br/>
    <div className="d-flex">
        <a href="/editpost" className="btn btn-primary w-50">Edit Post
        </a>

        <button type="button" className="btn btn-danger w-50" data-bs-toggle="modal" data-bs-target="#deleteModal">
            Delete Post
        </button>
        <div className="modal fade" id="deleteModal" tabIndex="-1">
            <div className="modal-dialog" >
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">Delete Post</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div className="modal-body">
            Are you sure you want to delete this post? This action cannot be undone. 
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a onClick={handleDelete} className="btn btn-danger" data-bs-dismiss="modal">Delete</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}
