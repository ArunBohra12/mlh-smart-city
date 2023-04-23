import React from "react";
import Card from "../../components/card/card";
import "./issues.css";
import Navbar from "../../components/navbar/navbar";

function Issues() {
  return (
    <>
      <Navbar />
      <div className='issues'>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Issues;
