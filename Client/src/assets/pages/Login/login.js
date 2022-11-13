import React from "react";
import "../../css/Auth.css";
import { Button } from 'react-bootstrap'

const Login = () => {
    const [email,setEmail] = React.useState();
    const [password,setPassword] = React.useState();
    const [loading,setLoading] = React.useState();
    
    const formSubmitHandler = async(e) => {

    }
     if(loading){
     return(
       <span>Loading.....</span>
     );
   }
   else{
return(
<div
    style={{
      display: "flex",
      flexDirection: "column",
      color: "#17a2b8",
      marginTop: 40,
    }}
  >
    <center>
      <h1>Welcome Back!</h1>
    </center>
   
        <form
          style={{ color: "white", alignSelf: "center" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              placeholder="Email"
              type="email"
              htmlFor="email"
              className="mb-3"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              type="password"
              htmlFor="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3"
            />
            <Button variant="info" style={{color: "white"}} onClick={formSubmitHandler}>Login</Button>
            <div className="text-center mt-4">Don't an account? Click here to Register</div>
          </div>
        </form>
  </div>
   );   
  }
  
  };

export default Login;