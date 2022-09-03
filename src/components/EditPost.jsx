import React from 'react'

export default function EditPost() {
    return (
        <div className="text-center">
            <h4>Edit Post</h4>
            <br/>
                <form > 
                    form.csrf_token
                    <p>
                        form.name.label <br/>
                        form.name(class='form-control', value=address.name)<br/>
                    </p>
                    <p>
                        form.phone.label<br/>
                        form.phone(class='form-control', value=address.phone)<br/>
                    </p>
                    <p>
                        form.address.label<br/>
                        form.address(class='form-control', value=address.address)<br/>
                    </p>
                    <p>form.submit(class='btn btn-secondary w-100 mt-3')</p>
                    
                </form>

        </div>
    )
}
