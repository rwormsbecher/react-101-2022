import React, {useState} from 'react'   
import axios from "axios";


function PostCreate() {
    const [title, setTitle] = useState('')

    async function onSubmit(e) {
        e.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <div className='form-group'>
                    <label>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className='form-control' />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </div>
            
        </form>
    )
}


export default PostCreate;