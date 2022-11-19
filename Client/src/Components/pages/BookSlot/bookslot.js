import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Button } from 'react-bootstrap'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import "../../css/App.css"
function BookSlot() {
  const [candidateOneName, setCandidateOneName] = React.useState();
  const [candidateOneRollno, setCandidateOneRollno] = React.useState();
  const [candidateTwoName, setCandidateTwoName] = React.useState();
  const [candidateTwoRollno, setCandidateTwoRollno] = React.useState();
  const [candidateThreeName, setCandidateThreeName] = React.useState();
  const [candidateThreeRollno, setCandidateThreeRollno] = React.useState();
  const [candidateFourName, setCandidateFourName] = React.useState();
  const [candidateFourRollno, setCandidateFourRollno] = React.useState();
  const options1 = [
    { value: 0, label: 'Tennis' },
    { value: 1, label: 'Basketball' },
    { value: 2, label: 'Football' },
    { value: 3, label: 'Cricket' },
  ]
  const options = [
    { value: 0, label: '09:00 to 09:30' },
    { value: 1, label: '10:00 to 10:30' },
    { value: 2, label: '11:00 to 11:30' },
    { value: 3, label: '12:00 to 12:30' },
    { value: 4, label: '13:00 to 13:30' },
    { value: 5, label: '14:00 to 14:30' },
    { value: 6, label: '15:00 to 15:30' },
    { value: 7, label: '16:00 to 16:30' },
    { value: 8, label: '17:00 to 17:30' },
  ]
  const defaultOption = options[0]
  const defaultOption1 = options1[0]
  const formSubmitHandler = async(e) => {

  }

  return (
    <div>
      <Navigation />
      <div className="card" style={{marginTop:50}}>
      <center><h1 style={{marginTop:60}}>Book a court</h1></center>
      <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
      <h5>Choose Court</h5>
      <Dropdown options={options1} value={defaultOption1} />
      </div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Name of Candidate 1</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3 field"
              onChange={(e) => setCandidateOneName(e.target.value)}
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Roll no</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3 field"
              onChange={(e) => setCandidateOneRollno(e.target.value)}
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Name of Candidate 2</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3 field"
              onChange={(e) => setCandidateTwoName(e.target.value)}
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Roll no</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3 field"
              onChange={(e) => setCandidateTwoRollno(e.target.value)}
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Name of Candidate 3</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3 field"
              onChange={(e) => setCandidateThreeName(e.target.value)}
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Roll no</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3 field"
              onChange={(e) => setCandidateThreeRollno(e.target.value)}
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Name of Candidate 4</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3 field"
              onChange={(e) => setCandidateFourName(e.target.value)}
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
            <h5>Roll no</h5>
            <input
              type="text"
              htmlFor="text"
              required
              className="mb-3 field"
              onChange={(e) => setCandidateFourRollno(e.target.value)}
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80, marginBottom: 20}}>
            <h5>Choose Slot</h5>
            <Dropdown options={options} value={defaultOption} />
            </div>
            <center><Button variant="info" style={{color: "white", width:100, marginBottom:30}} onClick={formSubmitHandler}>Book</Button></center>
    </div>
      </div>

    </div>
  )
}

export default BookSlot
