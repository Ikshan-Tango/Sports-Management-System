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
  const [selectedSlot, setSelectedSlot] = React.useState({value: 0, label: "Select Slot"});

  const [slots, setSlots] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/api/courts/");
      // console.log(res.data);
      const courtsData = res.data;

      setCourtOptions(courtsData.map((element, index) => {
        return ({value: element.id, label: element.name})
      }));
    };
    fetchData();

  }, [])


  useEffect(() => {
    console.log(courtOptions);
  }, [courtOptions])

  useEffect(() => {
    console.log(selectedCourt, selectedDate);

    if(selectedCourt.value != 0 && selectedDate != undefined){
      updateSlots();
    }
  }, [selectedCourt, selectedDate])

  const formSubmitHandler = async (e) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
          "Authorization": `Token ${token}`,
      }
    }

    const data = {
      "date": selectedDate,
      "timeslot_id": selectedSlot.value,
    }

    const res = await axios.post("http://localhost:8000/api/bookslot", data, config)
    console.log(res)

    if(res.status == 200){
      alert("Slot Booked Successfully");

      setSelectedDate("Select Date");
      setSelectedCourt({value: 0, label: "Select Court"});
      setSelectedSlot({value: 0, label: "Select Slot"});
    }
    
  };


  
  const updateSlots = async () => {
    // console.log("selected court", selectedCourt);
    if(selectedDate == "Select Date") {
      return
    }

    const courtId = selectedCourt.value;
    const url = "http://localhost:8000/api/courts/" + courtId + "/availableTimeslots/?date=" + selectedDate;

    const token = localStorage.getItem("token");

    const config = {
      headers: {
          "Authorization": `Token ${token}`,
      }
    }

    const res = await axios.get(url, config)
    console.log(res.data)


    if(res.status == 200) {
      const slotsData = res.data
      setSlots(slotsData.map((element, index) => {
        return ({value: element.id, label: element.time_slot})
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
            <Select options={slots} value={selectedSlot} onChange={setSelectedSlot} />
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
