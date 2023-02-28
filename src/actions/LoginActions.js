import axios from "axios";
import { SET_CURRENT_USER } from "./types";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/Firebase";

export const setCurrentUser = user =>{
    return{
        type: SET_CURRENT_USER,
        data: user
    };
};

export const userSignIn = (email,password) => dispatch => {
    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
        const {displayName, email, photoURL } = result.user;
        const user = {
            name: displayName,
            email,
            avatar : photoURL
        };
        dispatch(setCurrentUser(user));
    })
    .catch(error => console.log(error));
};

export const getUser = userId => dispatch =>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => {
        const {name, email} = res.data;
        const user ={
            name, email
        };
        dispatch(setCurrentUser(user));
    }).catch(error => console.log(error));
};