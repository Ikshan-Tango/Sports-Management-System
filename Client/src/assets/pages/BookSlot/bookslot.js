import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Button } from 'react-bootstrap'

function BookSlot() {
  return (
    <div>
      <Navigation />
      <div className="card" style={{marginTop:50}}>
      <center><h1 style={{marginTop:60}}>Book a court</h1></center>
      <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Court no</h5>
            <input
              type="number"
              htmlFor="number"
              required
              className="mb-3"
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Name of Candidate 1</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3"
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Roll no</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3"
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Name of Candidate 2</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3"
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Roll no</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3"
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Name of Candidate 3</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3"
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Roll no</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3"
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Name of Candidate 4</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3"
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Roll no</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3"
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Start time <h6>(It should be between 9 am to 5 pm)</h6></h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3"
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>End time <h6>(You can book a court for 1 hour maximum)</h6></h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3"
            /></div>
            <center><Button variant="info" style={{color: "white", width:100, marginBottom:30}}>Book</Button></center>
    </div>
      </div>

    </div>
  )
}

export default BookSlot
