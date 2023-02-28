import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Nav from './Nav';
import { fetchPosts, editPost, deletePost, createPost } from '../actions/PostActions';

const Profile = ({posts, fetchPosts, editPost, deletePost}) => {
  const [title, setTitle] = useState('');
  const [ body, setBody] = useState('');
  const [editId, setEditId] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const submit = (e) => {
    e.preventDefault();
    if (editing){
      editPost({id: editId, title, body});
      setEditing(false);
    }else {
      createPost({title, body});
    }
    setTitle('');
    setBody('');
  };
  const handleEdit = (id) =>{
    const edited = posts.find((post) => post.id === id);
    setTitle(edited.title);
    setBody(edited.body);
    setEditing(true);
    setEditId(id);
  };

 const handleDelete = (id) => {
  deletePost(id);
 }

  return (
    <div className='mt-36'>
      <Nav />
        <img src='' alt='profile' className='self-center' />
        <h4>posts</h4>
        <form onSubmit={submit}>
        <input type = 'text' onChange={(e) => setTitle(e.target.value)} value={title} name='title' />
          <input type = 'text' onChange={(e) => setBody(e.target.value)} value={body} name='body' />
          <button type='submit'> {editing ? 'update' : "post"}</button>
        </form>

        {posts.map((post) => (
          <div key = {post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <EditIcon onClick={() => handleEdit(post.id)} />
            <DeleteIcon onClick={() => handleDelete(post.id)}/>
            </div>
        ))}
    
    </div>
  )
}

export default Profile