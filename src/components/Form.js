import React from 'react'
import "./Form.css";
import LoginImg from "../LoginImg.png";
import Rectangle from "../Rectangle.png";
import Login from "./Login"
import Signup from "./Signup"
import form1 from "./form1"
import {Routes, Route, Link} from "react-router-dom"

const Form = () => {
  return (
    <>
          <img src={LoginImg} alt="loginImg" className='login__image' /> 
          <img src={Rectangle} alt="Rectangle" className='rectangle__image' /> 
          <form1 />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default Form
