import React from 'react'
import Auth from '../components/form-auth/Auth'
import { useDispatch } from 'react-redux';
import { getMeUser } from '../features/authSlice';
import { useCallback } from 'react';
import { useEffect } from 'react';

const AuthPage = ({ auth }) => {

   const dispatch = useDispatch();

   const checkUserLoggedIn = useCallback (() => (dispatch) => {
      dispatch(getMeUser());
   }, [])

   useEffect(() => {
      dispatch(checkUserLoggedIn());
   }, [checkUserLoggedIn, dispatch]);

   return (
      <>
         <Auth auth={auth} />
      </>
   )
}

export default AuthPage