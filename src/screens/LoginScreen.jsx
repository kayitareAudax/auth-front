import React,{useContext} from 'react'
import { AuthContext } from '../contexts/authContext'

const LoginScreen = () => {
  const {user,isAuthenticated,loading}=useContext(AuthContext)
  
  return (
    <div>
      
    </div>
  )
}

export default LoginScreen
