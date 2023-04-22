import React from "react";
import "./home.css";
import HomeCard from "../../components/homeCard/homeCard";
import homeImg from "./home-img.png";
function Home() {
  return (
    <div className='home'>
      <h1>Creating a Smart and Sophisticated City for the future</h1>

      <img src={homeImg} alt='no' />

      <HomeCard />
    </div>
  );
}

export default Home;
