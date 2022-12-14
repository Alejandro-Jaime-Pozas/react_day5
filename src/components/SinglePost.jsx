import React from 'react'

export default function SinglePost(props) {

  return (
    <div className="card border-primary mb-3 w-50 p-0">
        <div className="card-header">{props.pusername}</div>
            <div className="card-body text-primary">
                <a className='mb-3 text-primary btn btn-light border pb-0' href='/' onClick={() => props.handleClick(props.post_id)} >
                <h5 className={`"card-title ${props.post_id}"`}>{props.ptitle}</h5>
                </a>
                <p className="card-text">{props.pcontent}</p>
            </div>
    </div>
  )
}
