import React from "react";
import "../../css/Auth.css";
import { Button } from 'react-bootstrap'

const Signup = () => {
    const [loading,setLoading] = React.useState();
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
      <h1>Create an Account</h1>
    </center>
   
        <form
          style={{ color: "white", alignSelf: "center" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
          <input
              placeholder="Name"
              type="text"
              htmlFor="text"
              className="mb-3"
              required
            /><input
            placeholder="Branch"
            type="text"
            htmlFor="text"
            className="mb-3"
            required
          /><input
          placeholder="Hostel"
          type="text"
          htmlFor="text"
          className="mb-3"
          required
        /><input
        placeholder="Year"
        type="number"
        htmlFor="number"
        className="mb-3"
        required
      />
            <input
              placeholder="Email"
              type="email"
              htmlFor="email"
              className="mb-3"
              required
            />
            <input
              placeholder="Password"
              type="password"
              htmlFor="password"
              required
              className="mb-3"
            />
            <Button variant="info" style={{color: "white"}}>Login</Button>
            <div className="text-center mt-4">Don't an account? Click here to Register</div>
          </div>
        </form>
  </div>
   );   
  }
  
  };

export default Signup;