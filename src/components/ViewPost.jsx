import React from 'react'

export default function ViewPost() {
    return (

    <div className="text-center">
    <br />
    <div className="card text-start ">
        <div className="card-body">
            <h5 className="card-title mb-3 text-primary">title</h5>
            <h6 className="card-subtitle mb-2 text-muted">content</h6>
            <br />
            <h6 className="card-subtitle mb-2 text-muted">author.username</h6>
        </div>
    </div>
    <br/>
    <div className="d-flex">
        <a href="/editpost" className="btn btn-primary w-50">Edit Post
        </a>

        <button type="button" className="btn btn-danger w-50" data-bs-toggle="modal" data-bs-target="#deleteModal">
            Delete Post
        </button>
        <div className="modal fade" id="deleteModal" tabindex="-1">
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
                    <a href="/viewblog" className="btn btn-danger">Delete</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}
