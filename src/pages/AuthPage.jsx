import React from 'react'
import Auth from '../components/form-auth/Auth'

const AuthPage = ({ auth }) => {
   return (
      <>
         <Auth auth={auth} />
      </>
   )
}

export default AuthPage