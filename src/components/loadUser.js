import axios from 'axios'
import { Navigate } from 'react-router-dom';
export const isAuth=async()=>{
    const token=localStorage.getItem("token");
    if(!token){
      
      return false;
    }
    axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
    const resp=await axios.get("/auth/admin");
    const {data}=resp;
    console.log(data);
    if(!data.success){
      return false
    }
    return true;
  }