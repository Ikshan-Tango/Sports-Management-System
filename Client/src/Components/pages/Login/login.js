import React, { useReducer } from "react";
import "../../css/Auth.css";
import { Button } from 'react-bootstrap'
import "../../css/App.css"
import axios from "axios"
import { useNavigate } from "react-router";

const Login = () => {
 
    const navigate = useNavigate();

    const [rollNo,setRollNo] = React.useState();
    const [password,setPassword] = React.useState();
    const [loading,setLoading] = React.useState();
    
    const formSubmitHandler = async(e) => {
      e.preventDefault();
      const data = {
        roll_no: rollNo,
        password: password,
      }
      // if(data.roll_no.length!=10){
      //   alert("Please enter correct rollno")
      //   return;
      // }
      try{
        const res = await axios.post("http://localhost:8000/api/login/", {data})        
        if(res.status == 200){
          localStorage.setItem("token",res.data.token)
          navigate("/dashboard")
        }
      }catch (error) {
        alert("Invalid Rollno or Password")
      } 
      
      // setLoading(false);

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
              placeholder="Roll no"
              type="text"
              htmlFor="text"
              className="mb-3 field"
              onChange={(e) => setRollNo(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              type="password"
              htmlFor="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3 field"
            />
            <Button variant="info" style={{color: "white"}} onClick={formSubmitHandler}>Login</Button>
            {/* <div className="text-center mt-4">Don't an account? Click here to Register</div> */}
          </div>
        </form>
  </div>
   );   
  }
  
  };

export default Login;