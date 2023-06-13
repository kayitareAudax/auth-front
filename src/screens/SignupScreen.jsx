import React, { useEffect, useRef, useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import loginVector from '../assets/desiredVector.avif'
import {Link} from 'react-router-dom'
import {Toast} from 'primereact/toast'
import { redirect } from 'react-router-dom';
import axios from 'axios';
import { showAlert } from '../components/Alert';
import { useNavigate } from 'react-router-dom';
const SignupScreen = () => {
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const toast=useRef(null);
  useEffect(()=>{
    if(localStorage.getItem("token")){
      navigate("/dash")
    }
  },[])
  const handleusername=(e)=>{
    setUsername(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlenames=(e)=>{
    setFullname(e.target.value)
  }
  const handleSubmit =async (e) => {
    // Perform form submission logic here
    e.preventDefault();
    setLoading(true);
    const body={names:fullname,email,password,username}
    const resp=await axios.post("/auth/register",body);
    const {data}=resp;
    console.log(data.message);
    if(!data.success){
      setError(data.message);
      showAlert("Error message","error",data.message,toast);
      // toast.current.show({severity:"error",summary:"error message",description:"You are not valid"});
    }
    localStorage.setItem("token",data.message);
    navigate("/dash")
    setLoading(false);
  };

  return (
    <>
      <Toast ref={toast} position='top-right'/>
    <div className="flex justify-center h-[100vh]">
      <div className="w-1/2 bg-gray-100 p-8">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <CustomInput inputType={'text'} label={"Full names"} value={fullname} handleChange={handlenames}/>
          <CustomInput inputType={'text'} label={"username"} value={username} handleChange={handleusername}/>
          <CustomInput inputType={'text'} label={"Email"} value={email} handleChange={handleEmail}/>
          <CustomInput inputType={'password'} label={"Password"} value={password} handleChange={handlePassword}/> 
          <CustomButton text={"signup"} handleSubmit={handleSubmit} />
          <p className='mt-2 text-right'>Already have an account? <Link className='text-red-like'>Login</Link> </p> 
        </form>
      </div>

      <div className="w-1/2">
        <img src={loginVector} alt=""  className='ml-2 object-cover w-full h-full'/>
      </div>
    </div>
    </>
  );
};

export default SignupScreen;
