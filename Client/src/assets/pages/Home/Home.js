import React from 'react'
import image from "../../images/favicon.png"
import {Link} from "react-router-dom"
import { Button } from 'react-bootstrap'
function Home() {
  return (
    <div style={{display:"flex", flexDirection:'row'}}>
    <center><img src={image} alt="img" style={{height:"80vh", width:"40vw", marginTop: "15%", marginLeft:"8%"}} /></center>
      <div style={{display: 'flex', flexDirection: 'column', marginTop:"18%", marginLeft:"12%"}}>
      <Link to="/login"><Button variant="info" style={{width:'300%', margin:"4%", color: "white"}}>Login</Button></Link>
      <Link to="/signup"><Button variant="info" style={{width:'300%', margin:"4%", color: "white"}}>SignUp</Button></Link>
      <Link to="/precautions"><Button variant="info" style={{width:'300%', margin:"4%", color: "white"}}>Emergency Aid</Button></Link>
      </div>
    </div>
  )
}

export default Home
