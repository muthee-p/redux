import React, { useState } from 'react';
import {auth} from '../config/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();


  const submitLogin = async() => {
    try{
    await createUserWithEmailAndPassword(auth, email,password);
    history('/home');
  }catch (err){
    console.error(err)
  }
  };
  return (
    <div className='mt-36'>
        
        <h4>Login</h4>
        <form>
            <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='username' />
            <input onChange={(e) => setPassword(e.target.value)} type ='password' placeholder='password' />
            <button onClick={submitLogin}>
              Login
            </button>
        </form>
    </div>
  )
}

export default Login