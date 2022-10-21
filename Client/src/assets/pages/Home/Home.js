import React from 'react'
import image from "../../images/Tennis player.png"
import { Button } from 'react-bootstrap'
function Home() {
  return (
    <div style={{backgroundColor:"#f3fffd", display:"flex", flexDirection:'row'}}>
    <center><img src={image} alt="img" style={{height:"80vh", width:"40vw", marginTop: "15%", marginLeft:"8%"}} /></center>
      <div style={{display: 'flex', flexDirection: 'column', marginTop:"18%", marginLeft:"12%"}}>
      <Button variant="info" style={{width:'300%', margin:"4%", color: "white"}}>Login</Button>
      <Button variant="info" style={{width:'300%', margin:"4%", color: "white"}}>SignUp</Button>
      <Button variant="info" style={{width:'300%', margin:"4%", color: "white"}}>Emergency Aid</Button>
      </div>
    </div>
  )
}

export default Home
