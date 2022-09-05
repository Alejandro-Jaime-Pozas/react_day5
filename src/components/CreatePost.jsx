import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost(props) {

    let navigate = useNavigate();
    // props.needToLogIn()
    // create handleSubmit: e.preventdefault, get form data, fetch user token, create new post, redirect to all posts
    let handleSubmit = e => {
        e.preventDefault();
        let title = e.target.title.value;
        let content = e.target.content.value;
        let token = localStorage.getItem('token')

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "title": title,
          "content": content
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://kekambas-blog.herokuapp.com//blog/posts", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            props.flashMessage('You have created a post successfully', 'success')
            navigate('/viewblog');
          })
          .catch(error => console.log('error', error));
    }


    return (
        <>
            <h4 className="text-center">Create a New Post</h4>
            {/* need to include a form onSubmit/onClick= to a fn */}
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className='form-control' placeholder='Enter Title' name='title'/>
                    <br />
                    <label htmlFor="body">Content</label>
                    <input type="text" className='form-control' placeholder='Enter Content' name='content'/>
                    <br />
                    <input type="submit" value='Create Post' className='btn btn-primary w-50 mt-3' />
                </div>
            </form>
        </>
    )
    }
