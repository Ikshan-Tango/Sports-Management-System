import React from "react";
import "../../css/Auth.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import axios from "axios";

const Signup = () => {
  // const [name, setName] = React.useState();
  // const [branch, setBranch] = React.useState();
  // const [hostel, setHostel] = React.useState();
  // const [year, setYear] = React.useState();
  // const [email, setEmail] = React.useState();
  // const [password, setPassword] = React.useState();
  const [loading, setLoading] = React.useState();

  const [rollNo, setRollNo] = React.useState();
  const [password, setPassword] = React.useState();


  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      roll_no: rollNo,
      password: password,
    }

    const res = await axios.post("http://localhost:8000/api/register/", {data})
    setLoading(false);
    console.log(res)

  };
  if (loading) {
    return <span>Loading.....</span>;
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
            {/* <input
              placeholder="Name"
              type="text"
              htmlFor="text"
              className="mb-3 field"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Branch"
              type="text"
              htmlFor="text"
              className="mb-3 field"
              onChange={(e) => setBranch(e.target.value)}
              required
            />
            <input
              placeholder="Hostel"
              type="text"
              htmlFor="text"
              className="mb-3 field"
              onChange={(e) => setHostel(e.target.value)}
              required
            />
            <input
              placeholder="Year"
              type="number"
              htmlFor="number"
              className="mb-3 field"
              onChange={(e) => setYear(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              type="email"
              htmlFor="email"
              className="mb-3 field"
              onChange={(e) => setEmail(e.target.value)}
              required
            /> */}
            <input
              placeholder="Roll No"
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
              className="mb-3 field"
              onChange={(e) => setPassword(e.target.value)}
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
