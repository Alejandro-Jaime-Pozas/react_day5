import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function EditPost(props) {

    let navigate = useNavigate()
    props.needToLogIn()

    let handleSubmit = e => {
        e.preventDefault();
        let title = e.target.title.value;
        let content = e.target.content.value;
        // change the title and content of the post...think i need user token, and title, content to edit post
        let token = localStorage.getItem('token')

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "title": title,
          "content": content
        });
        
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        // NEED TO SPECIFY THE POST_ID IN THE FETCH URL TO CHANGE THAT POST...
        fetch(`https://kekambas-blog.herokuapp.com//blog/posts/${localStorage.getItem("post_id")}`, requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data.error) {
                props.flashMessage('You are not allowed to edit this post', 'warning')
                console.log(data.error) // DO NOT ALLOW USER TO ACCESS THIS PAGE IN APP.JS....
            } else {
                props.flashMessage('You have edited this post successfully', 'success')
                navigate('/viewblog')
                // console.log(data)
            }
        });
    }


    return (
        <div >
            <h4 className='text-center'>Edit Post</h4>
            <br/>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className='form-control' placeholder='title content goes here' name='title'/>
                    <br />
                    <label htmlFor="content">Content</label>
                    <input type="text" className='form-control' placeholder='body content goes here' name='content'/>
                    <br />
                    <input type="submit" value='Submit' className='btn btn-primary w-50 mt-3' />
                </div>
            </form>

        </div>
    )
}
