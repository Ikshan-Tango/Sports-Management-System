import React from 'react'
import Navigation from '../Navigation/Navigation';
import image from "../../images/Profile.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "../../css/profile.css"
import axios from "axios"
import {useEffect, useState} from "react"

function Profile() {
  const [rollNo, setRollNo] = useState("");
  const [fine, setFine] = useState();
  const [court, setCourt] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [date, setDate] = useState("");
  

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
            "Authorization": `Token ${token}`,
        }
      }

      const res = await axios.get("http://localhost:8000/api/profile", config)
      console.log(res)


      setRollNo(res.data.user.roll_no);
      setFine(res.data.user.fine);
      setCourt(res.data.court);
      setTimeSlot(res.data.timeslot);
      setDate(res.data.date);

    };
    fetchData();

  }, [])


  return (
    <>
    <Navigation />
    <div className="body">
      <div className="wrapper">
      <div className="profile-card js-profile-card">
      <div className="profile-card__img">
      <img src={image} alt="img" />
      </div>

    <div className="profile-card__cnt js-profile-cnt">
      <center><div className="profile-card__name">{rollNo}</div></center>
      {/* <center><div className="profile-card__txt">3rd Year, Computer Engineering</div></center> */}
      {/* <div className="profile-card-loc">
        <span className="profile-card-loc__icon">
        <LocationOnIcon />
        </span>

        <span className="profile-card-loc__txt">
          Hostel J
        </span>
      </div> */}
      <div style={{background: "#f3fffd", height: "40vh", marginTop: 10}}>
       <center><h4>Court Booked</h4></center>
       <ul>
        <h6>{court}</h6>
        <h6>{date} @ {timeSlot}</h6>
       </ul>
       <center><h4>Fine or Dues</h4></center>
       <ul>
        <h6>{fine}</h6>
        </ul>
      </div>
     </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Profile
