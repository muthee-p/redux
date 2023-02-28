import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/PostActions';
import Nav from './Nav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AddCommentIcon from '@mui/icons-material/AddComment';


const Home = ({ posts, fetchPosts}) => {
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>

  useEffect(()=>{
    fetchPosts();
  }, [fetchPosts]);

  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState ({});

  const handleLike = postId =>{
      const newLikes = {...likes};
      newLikes[postId] = (newLikes[postId] || 0) + 1;
      setLikes(newLikes);
    };
   

  const handleComment = (postId, comment) =>{
      const newComments = {...comments};
      newComments[postId] = [...(newComments[postId] || []), comment];
      setComments(newComments);
    };


    const postItems = posts.map(post =>(
      <Card key={post.id} sx={{ minWidth: 275}} >
        <CardContent>
        <Typography variant="h5" component="div">{post.title}
        </Typography>
    
        <Typography variant="body2">
          {post.body}
          </Typography>
        
      <div>
        <AddCommentIcon onclick={() => {
        const comment= prompt('Enter your comments:');
        if(comments){
          handleComment(post.id, comment)
        }
          }} />

      <ThumbUpAltIcon onClick={() => handleLike(post.id)} />
      <span>{likes[post.id] || 0}</span>
      <div>
        <TextField type='text' 
        value={comments[post.id] || ''}
        onChange={e => handleComment(post.id, e.target.value)}
         id="filled-basic" label="Add comment" variant="filled"/>
         <button onClick={() => handleComment(post.id, comments[post.id])}>comment</button>
              </div></div>
              {comments[post.id] &&(
                <div>
                  {comments[post.id].map((comment, index) =>(
                <p key={index}>{comment}</p>
              ))}
                  </div>
              )}
              </CardContent>
              </Card>

    ));

    return (
      <div className='mt-36'>
          <Nav />
          <h3>Home</h3>
          <div className=''>
              {postItems}
              
              
          </div>
      </div>
    )
  }
  //map state to prop

  const mapStateToProps = state =>({
    posts:state.posts.items,
    newPost: state.posts.items,
  });
  


export default connect(mapStateToProps, {fetchPosts})(Home);