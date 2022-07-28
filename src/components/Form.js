import React from 'react'
import "./Form.css";
import LoginImg from "../LoginImg.png";
import Rectangle from "../Rectangle.png";
import { useNavigate , Link} from "react-router-dom"


const Form = () => {
  const navigate = useNavigate()
  const handleClickSignup=()=>{
    navigate("./Signup.js")
  }
  const handleClickLogin=()=>{
    window.location.href = "./Login.js"
  }

  return (
    <>
          <img src={LoginImg} alt="loginImg" className='login__image' /> 
          <img src={Rectangle} alt="Rectangle" className='rectangle__image' /> 
      <div className="login__content" type='button' onclick={handleClickLogin}>Log In</div>
      <div className="signup__content" type="button" onClick={handleClickSignup}>Sign Up</div>
    
    </>
  )
}

export default Form
