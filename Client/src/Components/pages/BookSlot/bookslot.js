import React from "react";
import Navigation from "../Navigation/Navigation";
import { Button } from "react-bootstrap";
import Select from "react-select";
import "react-dropdown/style.css";
import "../../css/App.css";
import { useEffect } from "react";
import axios from "axios"

function BookSlot() {
  const [candidateOneName, setCandidateOneName] = React.useState();
  const [candidateOneRollno, setCandidateOneRollno] = React.useState();
  const [candidateTwoName, setCandidateTwoName] = React.useState();
  const [candidateTwoRollno, setCandidateTwoRollno] = React.useState();
  const [candidateThreeName, setCandidateThreeName] = React.useState();
  const [candidateThreeRollno, setCandidateThreeRollno] = React.useState();
  const [candidateFourName, setCandidateFourName] = React.useState();
  const [candidateFourRollno, setCandidateFourRollno] = React.useState();

  const [courtOptions, setCourtOptions] = React.useState([]);
  const [selectedCourt, setSelectedCourt] = React.useState({value: 0, label: "Select Court"});
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const [slots, setSlots] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/api/courts/");
      // console.log(res.data);
      const courtsData = res.data;

      setCourtOptions(courtsData.map((element, index) => {
        return ({value: index, label: element.name})
      }));

      // const courtOptions = [];

      // courtsData.forEach((element, index) => {
      //   // console.log(index, element)
      //   courtOptions.push({ value: index, label: element.name });
      // });

      // console.log(courtOptions)
    };
    fetchData();

  }, [])


  useEffect(() => {
    console.log(courtOptions);
  }, [courtOptions])

  useEffect(() => {
    updateSlots();
  }, [selectedCourt, selectedDate])

  const options1 = [
    { value: 0, label: "Tennis" },
    { value: 1, label: "Basketball" },
    { value: 2, label: "Football" },
    { value: 3, label: "Cricket" },
  ];
  const options = [
    { value: 0, label: "09:00 to 09:30" },
    { value: 1, label: "10:00 to 10:30" },
    { value: 2, label: "11:00 to 11:30" },
    { value: 3, label: "12:00 to 12:30" },
    { value: 4, label: "13:00 to 13:30" },
    { value: 5, label: "14:00 to 14:30" },
    { value: 6, label: "15:00 to 15:30" },
    { value: 7, label: "16:00 to 16:30" },
    { value: 8, label: "17:00 to 17:30" },
  ];
  const defaultOption = options[0];
  const defaultOption1 = courtOptions[0];
  const formSubmitHandler = async (e) => {};


  
  const updateSlots = async () => {
    console.log("selected court", selectedCourt);
    const courtId = selectedCourt.value + 1;
    const url = "http://localhost:8000/api/courts/" + courtId + "/availableTimeslots/?date=" + selectedDate;

    const token = localStorage.getItem("token");

    const config = {
      headers: {
          "Authorization": `Token ${token}`,
      }
    }

    const res = await axios.get(url, {} , config)

    if(res.status == 200) {
      const slotsData = res.data

      setSlots(slotsData.map((element, index) => {
        return ({value: index, label: element.time_slot})
      }))
    }

  }

  // const courtChanged = (e) => {
  //   setSelectedCourt(e.target.value)
  //   updateSlots()
  // }

  // const dateChanged = (e) => {
  //   setSelectedDate(e.target.value)
  //   updateSlots()
  // }

  return (
    <div>
      <Navigation />
      <div className="card" style={{ marginTop: 50 }}>
        <center>
          <h1 style={{ marginTop: 60 }}>Book a court</h1>
        </center>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 80,
              marginRight: 80,
            }}
          >
            <h5>Choose Court</h5>
            <Select options={courtOptions} value={selectedCourt} onChange={setSelectedCourt}/>
          </div>
          {/* <div style={{display:"flex", flexDirection:"column", marginLeft:80, marginRight:80}}>
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
            /></div> */}
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 80,
              marginRight: 80,
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            
            <h5>Choose Slot</h5>
            <input 
              type="date" 
              htmlFor="date"
              required
              className="mb-3 field"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />

            <Select options={slots} value={selectedDate} onChange={setSelectedDate} />
          </div>
          <center>
            <Button
              variant="info"
              style={{ color: "white", width: 100, marginBottom: 30 }}
              onClick={formSubmitHandler}
            >
              Book
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default BookSlot;
