import React from "react";
import "./home.css";
import HomeCard from "../../components/homeCard/homeCard";
import homeImg from "./home-img.png";
import Navbar from "../../components/navbar/navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>
        <h1 className='landing-page-header'>Creating a Smart and Sophisticated City for the future</h1>
        <div className='home-reactangle'></div>
        <img src={homeImg} alt='no' />
        <HomeCard />
      </div>
    </>
  );
}

export default Home;
