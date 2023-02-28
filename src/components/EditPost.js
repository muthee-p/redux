import React, {useState} from 'react'

const EditPost = ({post, editPost}) => {
    const [title, setTitle] = useState(post.title);
    const[body, setBody] = useState(post.body);
    
    const submit = (e) =>{
        e.preventDefault();
        const editedPost  ={
            id:post.id,
            title,
            body,
        };
        editPost(editedPost);
    };
  return (
    <form onSubmit={submit}>
        <imput type='text' value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button type ='submit'>Post</button>

    </form>
  )
}

export default EditPost