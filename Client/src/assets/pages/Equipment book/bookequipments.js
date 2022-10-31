import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Button } from 'react-bootstrap'

function IssueEquipments() {
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
              required
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:50, marginRight:50}}>
            <h5>Quantity</h5>
            <input
              type="number"
              htmlFor="number"
              required
              className="mb-3"
            /></div>
            <center><Button variant="info" style={{color: "white", width:100, marginBottom:30}}>Issue</Button></center>
    </div>
    </div>
    </div>
    </>
  )
}

export default IssueEquipments
