import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/Firebase';
import { Avatar } from '@mui/material';

const Nav = () => {
  const activeLink = 'bg-black text-white p-[.5rem]';
  const regular = 'p-[.5rem]';
  
  const Logout = async() =>{
    try{
      await signOut(auth);
    }catch (err){
      console.error(err);
    }
  }
  return (
    <nav className='fixed z-50 top-0 w-[100%] p-2 flex justify-between items-center border-b border-black pr-8 pl-8 bg-white'>
    <div className='flex justify-around'>
      <NavLink to="/home" className='w-[35%] mr-6'>
        <p className='w-[80%]' alt='logo'></p>
      </NavLink>
    </div>
    
  	<ul className='inline-flex'>
    <li className='mr-6'>
        <NavLink to="/home" className={({isActive}) => isActive? activeLink: regular}> 
        Home</NavLink>
       </li>

       <li className='mr-6'>
        <NavLink to="/createpost" className={({isActive}) => isActive? activeLink: regular}> 
        Create</NavLink>
       </li>

      <li className ='mr-6'>
        <NavLink to="/profile"className={({isActive}) => isActive? activeLink: regular}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </NavLink>
      </li>

      <li className ='mr-6'>
        <NavLink to="/" onClick={Logout} className={({isActive}) => isActive? activeLink: regular}>
          Logout
          </NavLink>
      </li>
       
    </ul>
   
   </nav>
    )
}
export default Nav ;