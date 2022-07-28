import React, { useState, useEffect } from 'react'
import "./Login.css"
import alertIcon from "../alerterrorIcon.png"
import { 
    signInWithGooglePopup, 
  createUserDocumentFromAuth ,
  signInAuthUserWithEmailAndPassword
} from '../utils/firebase/firebase'


const Login = () => {

  const signInWithGoogle = async()=>{
    const {user}= await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const initialValues = { email: "", password: "" }
  const [formValues, setFormValues] = useState(initialValues);
  const { email, password } = formValues;
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange=(e)=>{
    const{name, value}= e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    try{
      const response = await signInAuthUserWithEmailAndPassword(email,password);
      console.log(response);
    }catch(error){
      if (error.code ==='auth/wrong-password'){
        alert('Incorrect password for email')
      }
      else if (error.code ==='auth/user-not-found'){
        alert('User not Found')
      }else{
        console.log(error)
      }
    }
  };

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])

  const validate = (values)=>{
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!values.email){
      errors.email= "Email is required!"
    }else if(!regex.test(values.email)){
      errors.email="Please enter a valid email"
    }
    if(!values.password){
      errors.password= "Password is required!"
    }
    return errors;
  }

  return (
    <div>
      <div className="login__line"></div>
      <div className="login__longline"></div>
      <div className="continue__text">To Continue</div>
      <div className="name__email">We need your name and email</div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' className='email' name="email" onChange={handleChange} />
        <p className='email__error'>
        {formErrors.email}</p>
        <input type="password" placeholder='Password' className='password' name="password" onChange={handleChange} />
        <p className='password__error'>{formErrors.password}</p>
        <button type="submit" className='btn login__btn' >Log In</button>
        <button type="button" className='btn google__popup' onClick={signInWithGoogle}>Log In with Google</button>
      </form>
    </div>
  )
}

export default Login
