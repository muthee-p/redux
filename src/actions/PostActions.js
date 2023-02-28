import {FETCH_POSTS,NEW_POST, DELETE_POST, EDIT_POST} from './types';

export const fetchPosts =() => dispatch =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => 
        dispatch({
            type:FETCH_POSTS,
            data: posts
        })
        );
};
export const createPost = (postData) => dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        headers:{
            'content-type': 'appplication/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post =>
        dispatch({
            type:NEW_POST,
            data:post
        })
        );
};
export const deletePost = (postId) => dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/posts/${postId}",{
        method: 'DELETE',
    })
    .then(() => {
        dispatch({
            type: DELETE_POST,
            data:postId
        })
    })
    .catch((error) => {
        console.log('Error deleting post:', error);
    });
};
export const editPost = (postId, postData, updatePost) => dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/posts/${postId}",{
        method: 'PUT',
        headers:{
            'content-type': 'appplication/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post =>
        dispatch({
            type: EDIT_POST,
            data:post
        })
    )
    };
