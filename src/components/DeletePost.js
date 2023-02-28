import React from 'react'
import{deletePost} from '../actions/PostActions'
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux';

const DeletePost = () => {
    const handleDelete = () =>{
        deletePost(post.id);
    };
  return (
    <div>
        <DeleteIcon onclick={handleDelete} />
    </div>
  )
}

export default connect(null, {deletePost})( DeletePost);