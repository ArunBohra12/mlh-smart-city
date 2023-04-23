import card from "./card-img.png";

import "./homeCard.css";

function HomeCard() {
  return (
    <div className='homecard'>
      <div className='homecard-text'>
        <h1>What we do?</h1>
        <p>
          Transform your city with our innovative app! We empower citizens to raise issues and work collaboratively with
          local authorities.
        </p>
        <p>Help transform your city - One issue at a time.</p>
      </div>
      <img className='homecard-img' src={card} alt='' />
    </div>
  );
}

export default HomeCard;
