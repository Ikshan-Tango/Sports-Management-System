import React from "react";
import "../../css/Auth.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState();
  const [rollNo, setRollNo] = React.useState(null);
  const [password, setPassword] = React.useState();
  const rollnoInputHandler = event => {
    setRollNo(event.target.value);
    if(event.target.value.length!=10){
      setRollNo(null);
    }
  }

  const passwordInputHandler = event => {
    setPassword(event.target.value);
    if(event.target.value.length<8){
      setPassword('');
    }
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(rollNo==null){
      alert('Please enter valid Rollno (10 digits long)');
      setLoading(false);
      return;
    }
    if(password.trim()==''){
      alert('Please enter valid Password atleast 8 characters long');
      setLoading(false);
      return;
    }
    const data = {
      roll_no: rollNo,
      password: password,
    }

    const res = await axios.post("http://localhost:8000/api/register/", {data})
    setLoading(false);
    if(res.status==200){
      alert("User created successfully, Now you can Login!");
      navigate('/login');
    }
    
    console.log(res)

  };
  if (loading) {
    return <span></span>;
  } else {
    return (
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

        <form style={{ color: "white", alignSelf: "center" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              placeholder="Roll No"
              type="text"
              htmlFor="text"
              className="mb-3 field"
              onChange={rollnoInputHandler}
              required
            />
            <input
              placeholder="Password"
              type="password"
              htmlFor="password"
              className="mb-3 field"
              onChange={passwordInputHandler}
              required
            />
            <Button
              variant="info"
              style={{ color: "white" }}
              onClick={formSubmitHandler}
            >
              Create account
            </Button>
          </div>
        </form>
      </div>
    );
  }
};

export default Signup;
