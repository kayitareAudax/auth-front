import React,{useContext,useEffect} from 'react'
import { AuthContext } from '../contexts/authContext'
import { isAuth } from '../components/loadUser';
import {Navigate, useNavigate} from 'react-router-dom'
import Loader from '../components/Loader';

const DashboardScreen = () => {
    const navigator=useNavigate();
    const {isAuthenticated,user,loadUser,loading}=useContext(AuthContext)
    useEffect(()=>{
        loadUser()
    },[])
    if(!user && !loading ){
        navigator("/")
    }
 return (
    <div>
    {loading && <Loader />}
    {!loading && (
      <div>
        hey there {user.email}
      </div>
    )}
  </div>
  
 )
}
export default DashboardScreen