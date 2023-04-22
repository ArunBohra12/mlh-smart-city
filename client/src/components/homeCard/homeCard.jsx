import React from "react";
import "./homeCard.css";
import card from "./card-img.png";
function HomeCard() {
  return (
    <div className='homecard'>
      <div className='homecard-text'>
        <h1>What we do?</h1>
        <h4>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsu lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsu lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu
        </h4>
      </div>
      <div className='img-home'>
        <img src={card} alt='' />
      </div>
    </div>
  );
}

export default HomeCard;
