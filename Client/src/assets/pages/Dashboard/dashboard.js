import React from 'react'
import Navigation from "../Navigation/Navigation"
import image from "../../images/1.jpg"
import image1 from "../../images/2.jpg"
import image2 from "../../images/3.jfif"
import image3 from "../../images/4.jpg"
import "../../css/Dashboard.css"

function Dashboard() {
  return (
    <>
    <Navigation />
    <div style={{marginTop:50}}>
    <center><h1>Upcoming event:<div style={{color:"black"}}>Khelo Thapar</div></h1></center>
    <div className="card" style={{marginBottom:40}}>
      <p>Khelo thapar is being organized by thapar sports executives for all university students and faculty. Interested people can register themselves on the google form link given below or manually at sports complex itself(please bring college-id for manual registration). Sports like badminton, hockey, cricket, volleyball championship will be part of the sport-mania. More information about each game and sport competition will be shared on the platform stay tuned. For end of khelo Thapar a marathon will be organized for everyone(interested people can register). The marathon will not be a part of competition but a gesture and activity to create awareness amongst people regarding safe practices and importance of sports in peoples life.<br /><br /><div style={{color:"black"}}><u>www.bitly.com/khelothapar</u></div></p>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", marginBottom:10}}>
      <img src={image} alt="img" style={{height:"20vh", width:"20vw", margin:2}} />
      <img src={image1} alt="img" style={{height:"20vh", width:"20vw", margin:2}} />
      </div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", marginBottom:10}}>
      <img src={image2} alt="img" style={{height:"20vh", width:"20vw", margin:2}} />
      <img src={image3} alt="img" style={{height:"20vh", width:"20vw", margin:2}} />
    </div>
    </div>
    </div>
    </>
  )
}
export default Dashboard
