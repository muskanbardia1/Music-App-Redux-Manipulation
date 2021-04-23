import React from 'react';
import { store } from "..";
import { signUp, loggedIn } from "../store/actions";
import {useSelector} from 'react-redux';
 const IsAuth=()=>{
  const {signUpList} = useSelector(store => store);
  return signUpList.isLogged;
}
export {IsAuth}
const Auth = {

  
  isAuthenticated:false,
  authenticate() {
    store.dispatch(loggedIn(true));
    
  },
  signout() {
    store.dispatch(loggedIn(false));
  },
  getAuth() {
    return IsAuth();
  },
};
export default Auth;
