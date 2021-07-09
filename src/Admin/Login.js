import React,{useEffect} from 'react';
import  './Admin.css';
import google from '../Image/google.svg'
import { Auth } from '../Componet/useContext/useContext'; 
import { Link } from "react-router-dom"; 
const Login = () => {

    const auth = Auth();
    const {googleSingin,logIn,hendleChange,users} = auth;
    

    return (
      <> 
        <div className="login-area">

     <div className="auth pb-5">
        <div className="auth__wrapper">
          <h5>Login</h5>

          <form  onSubmit={logIn} >
            <div className="form-group">
              <input
              onBlur={hendleChange} required
              type="email"  placeholder="Email"  name="email"  /> 
            </div>
            <div className="form-group">
              <input 
              onBlur={hendleChange} required
              type="password" placeholder="Password"  name="password"  /> 
            </div> 
            <div className="form-group">
              <button className="login_btn" type="submit">Login</button>
            </div>
            <p style={{color:'red'}}>{users.error}</p> 
             
             {users.success && <p style={{color:'green'}}>User Login Successfully</p> }
          </form>
          <p>
            Don't have an account?  <Link to="/register">Register</Link>
          </p>
        </div>  
        <button 
        onClick={googleSingin}
         className="google-btn">
        <img   style={{width:'25px',marginRight:'18px'}}   src={google} alt="" />
              Continue with google
              </button> 
               
      </div> 
        </div>
        </>
    );
};

export default Login;