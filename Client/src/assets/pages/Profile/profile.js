import React from 'react'
import image from "../../images/Profile.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "../../css/profile.css"

function Profile() {
  return (
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
      <div style={{background: "#f3fffd", height: "30vh", marginTop: 10}}>
       <center><h4>Equipments issued</h4></center>
       <ol>
        <li>Badminton X 2</li>
        <li>Balls X 1</li>
       </ol>
       <center><h4>Fine or Dues</h4></center>
       <ul>
        <li>No pending dues or fine</li>
        </ul>
      </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Profile
