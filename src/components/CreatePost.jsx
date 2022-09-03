import React from 'react'

export default function CreatePost() {
  return (
        <>
            <h4 className="text-center">Create a New Post</h4>
            {/* need to include a form onSubmit/onClick= to a fn */}
            <form  >
                <div className="form-group">

                    <label htmlFor="title">Title</label>
                    <input type="text" className='form-control' placeholder='Enter Title' name='title'/>
                    <br />
                    <label htmlFor="body">Content</label>
                    <input type="text" className='form-control' placeholder='Enter Content' name='body'/>
                    <br />
                    <input type="submit" value='Create Post' className='btn btn-primary w-50 mt-3' />
                </div>
            </form>
        </>
  )
}
