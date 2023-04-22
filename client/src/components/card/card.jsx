import React from "react";
import "./card.css";
import { FaMapMarkerAlt } from "react-icons/fa";
function Card() {
  return (
    <div className='card'>
      <img
        className='card-image'
        src='https://www.deccanherald.com/sites/dh/files/articleimages/2022/08/22/pothole-1138292-1661174905.jpg'
        alt=''
      />
      <h3 className='location-text'>
        <FaMapMarkerAlt /> ramghat,aligarh
      </h3>
      <div className='card-text'>
        <h3>Description</h3>
        <h4>lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem ipsum</h4>
        <h3>Raised by: Ash</h3>
      </div>
    </div>
  );
}

export default Card;
