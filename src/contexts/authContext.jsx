import { createContext, useState } from "react";
import axios from 'axios'
const AuthContext=createContext();
const AuthProvider=({ children })=>{
    const [isAuthenticated,setIsAuthenticated]=useState(true);
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(false);
    const loadUser=async()=>{
        const token=localStorage.getItem("token");
        if(!token){
          setIsAuthenticated(false);
          return;
        }
        setLoading(true);
        axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
        const resp=await axios.get("/auth/admin");
        const {data}=resp;
        console.log(data);
        if(!data.success){
          setIsAuthenticated(false);
          return;
        }
        console.log(data.message);
        setUser(data.message);
        setLoading(false);
        setIsAuthenticated(true);
      }
      const signOut = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
      };
      return(
        <AuthContext.Provider value={{isAuthenticated,loadUser,signOut,user,loading}}>
            {children}
        </AuthContext.Provider>
      )
}
export {AuthContext,AuthProvider}