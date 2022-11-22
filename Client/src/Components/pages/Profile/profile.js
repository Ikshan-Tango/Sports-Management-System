import React from 'react'
import Navigation from '../Navigation/Navigation';
import image from "../../images/Profile.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "../../css/profile.css"
import axios from "axios"
import {useEffect} from "react"

function Profile() {
  const [profileOptions, setProfileOptions] = React.useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      // const userid = 
      const token = localStorage.getItem("token");

      console.log(token);
      userid = token;//need to change this shit 

      const res = await axios.get("http://127.0.0.1:8000/api/users/" +userid);
      // console.log(res.data);
      const profileData = res.data;

      setProfileOptions(profileData.map((element, index) => {
        return ({value: index, label: element.name})
      }));
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
      <center><div className="profile-card__name">Ikshan Bhardwaj</div></center>
      <center><div className="profile-card__txt">2nd Year, Computer Engineering</div></center>
      <div className="profile-card-loc">
        <span className="profile-card-loc__icon">
        <LocationOnIcon />
        </span>

        <span className="profile-card-loc__txt">
          Hostel J
        </span>
      </div>
      <div style={{background: "#f3fffd", height: "40vh", marginTop: 10}}>
       <center><h4>Equipments issued</h4></center>
       <ul>
        <h6>Badminton X 2</h6>
        <h6>Balls X 1</h6>
       </ul>
       <center><h4>Fine or Dues</h4></center>
       <ul>
        <h6>No pending dues or fine</h6>
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
