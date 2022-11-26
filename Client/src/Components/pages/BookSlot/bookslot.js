import React from "react";
import Navigation from "../Navigation/Navigation";
import { Button } from "react-bootstrap";
import Select from "react-select";
import "react-dropdown/style.css";
import "../../css/App.css";
import { useEffect } from "react";
import axios from "axios"
function BookSlot() {
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
    };
    fetchData();

  }, [])


  useEffect(() => {
    console.log(courtOptions);
  }, [courtOptions])

  useEffect(() => {
    updateSlots();
  }, [selectedCourt, selectedDate])

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
