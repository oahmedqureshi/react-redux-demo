import React from "react";
import {Link} from "react-router-dom"

const Login = () => (
  <div>
    <Link to='/'>
      Home
    </Link>
    My Login Page
    <button onClick={()=>{console.log("onClick")}}>Login</button>
  </div>
)

export default Login;