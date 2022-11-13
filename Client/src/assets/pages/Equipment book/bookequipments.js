import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Button } from 'react-bootstrap'

function IssueEquipments() {
  const [equipmentName, setEquipmentName] = React.useState();
  const [quantity, setQuantity] = React.useState();
  const formSubmitHandler = async(e) => {

  }
  return (
    <>
    <Navigation />
    <div className="card" style={{marginTop:50}}>
    <center><h1 style={{marginTop:60}}>Issue equipments for use</h1></center>
    <div>
    <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{display:"flex", flexDirection:"column", marginLeft:50, marginRight:50}}><h5>Equipment Name</h5>
            <input
              type="text"
              htmlFor="text"
              className="mb-3"
              onChange={(e) => setEquipmentName(e.target.value)}
              required
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:50, marginRight:50}}>
            <h5>Quantity</h5>
            <input
              type="number"
              htmlFor="number"
              onChange={(e) => setQuantity(e.target.value)}
              required
              className="mb-3"
            /></div>
            <center><Button variant="info" style={{color: "white", width:100, marginBottom:30}} onClick={formSubmitHandler}>Issue</Button></center>
    </div>
    </div>
    </div>
    </>
  )
}

export default IssueEquipments
