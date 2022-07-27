import React from 'react'
import {Link} from "react-router-dom"

const form1 = () => {
  return (
    <div>
      <form >
      <div className="loginForm">
      <Link to="/Login">
      <div className="login__content">Log In</div>
      </Link>
      </div>
      </form>
    </div>
  )
}

export default form1
