import React from "react";
import "./home.css";
import HomeCard from "../../components/homeCard/homeCard";
import homeImg from "./home-img.png";

function Home() {
  return (
    <div className='home'>
      <header className='landing-page-header'>
        <h1 className='landing-page-heading'>Smart and Sophisticated City for the future</h1>
        <img src={homeImg} alt='' />
      </header>
      <HomeCard />
    </div>
  );
}

export default Home;
