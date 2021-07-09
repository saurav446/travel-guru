import React from 'react';

import { Link } from "react-router-dom";
import { Auth } from '../Componet/useContext/useContext';
import google from '../Image/google.svg'
import Header from '../Componet/Header/Header';

const Register = () => {
     const auth = Auth();
     const {googleSingin,createAccount,hendleChange,users} = auth;

    return (
      <>
      <Header></Header>
        <div className="login-area">
            <div className="auth pb-5">
        <div className="auth__wrapper">
          <h5>Create an account</h5>

          <form onSubmit={createAccount}  >
            <div className="form-group">
              <input   onBlur={hendleChange}  type="text" placeholder="First Name" name="name"  /> 
            </div>
            <div className="form-group">
              <input   onBlur={hendleChange}   type="text" placeholder="Last Name"  name="lname"  /> 
            </div>
            <div className="form-group">
              <input onBlur={hendleChange}  type="email" placeholder="Email" name="email" /> 
            </div>
            <div className="form-group">
              <input onBlur={hendleChange}   type="password" placeholder="Password" name="password" />  
                
            </div> 
            {/* <div className="form-group">
              <input  onBlur={hendleChage}  type="password"   placeholder="Confirm Password"  name="c_password" /> 
            </div> */}
            <div className="form-group">
              <button   className="login_btn" type="submit">Create an account</button>
            </div> 
            
            {/* {users.success && <p style={{color:'red',textAlign:'left'}}>User Created Successfully</p> }  */}
            <p style={{color:'red',textAlign:'left'}}>{users.error}</p>   
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          
        </div>
      
           <button   onClick={googleSingin} className="google-btn">
           <img   style={{width:'25px',marginRight:'18px'}}   src={google} alt="" />
           Continue with google
           </button>  
              
        </div> 
        </div>
        </>
    );
};

export default Register; 