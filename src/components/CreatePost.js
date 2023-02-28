import React, { useState} from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/PostActions';
import Nav from './Nav';

const CreatePost = ({createPost}) =>{
  const [state, setState] = useState({
      title:'',
      body: '',
    });
  
  const handleChange = e =>{
    setState({ ...state, [e.target.name]: e.target.value});
  }
  const handleSubmit = e =>{
    e.preventDefault();
    const post = {
      title:state.title,
      body:state.body,
    }; 
    createPost(post);
  };

  return (
    <div>
      <Nav />
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={state.title} name='title' placeholder='title'/>
            <input type='text' onChange={handleChange} value={state.body}name='body' placeholder='body'/>
            <button type='submit'>Create</button>
        </form>
    </div>
  );
};


export default connect(null,{createPost})(CreatePost);