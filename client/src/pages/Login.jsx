import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext} from '../context/authContext';


const Login = () => {

  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  })
const [err,setErr] = useState();
const navigate = useNavigate();
const {login} =useContext(AuthContext);


  
  const handleChange = (e) =>{
setInputs(prev =>({...prev,[e.target.name]:e.target.value}));
  }

const handleSubmit = async e =>{
e.preventDefault();
try{
await login(inputs);
navigate("/");
}catch(err){
 setErr(err.response.data);
}

  }



  return (
    <div className='auth'>
        <h1>LOGIN</h1>
        <form>
            <input type='text' name='username' placeholder='username' onChange={handleChange}/>
            <input type='password' name='password' placeholder='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
          {err &&  <p>There is an error!</p>} 
            <span>Don't you have an account?<Link to="/register">Register</Link></span>
        </form>
      
    </div>
  )
}

export default Login
