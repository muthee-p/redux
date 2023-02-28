import React, { useState } from 'react';
import {auth} from '../config/Firebase'
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { userSignIn } from '../actions/LoginActions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = ({isAuthenticated, userSignIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useNavigate();

const submitLogin = e =>{
  e.preventDefault();
};

if(isAuthenticated){
  return <Redirect to="/home" />;
};
  // const submitLogin = async(e) => {
  //   e.preventDefault();
  //   try{
  //   await createUserWithEmailAndPassword(auth, email,password);
  //   history('/home');
  // }catch (err){
  //   console.error(err)
  // }
  // };
  return (
    <div className='mt-36'>
        
        <h4>Login</h4>
        <form onSubmit={userSignIn}>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='text' placeholder='username' />
            <input onChange={(e) => setPassword(e.target.value)} value ={ password} type ='password' placeholder='password' />
            <button onClick={submitLogin}>
              Login
            </button>
        </form>
    </div>
  )
}

export default connect(mapStateToProps, {userSignIn}) (Login);