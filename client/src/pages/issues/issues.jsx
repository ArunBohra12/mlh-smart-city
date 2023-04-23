import React from "react";
import Card from "../../components/card/card";
import "./issues.css";
import Navbar from "../../components/navbar/navbar";
import PostIssue from "../../components/postIssue/postIssue";

function Issues() {
  return (
    <>
      <Navbar />
      <PostIssue/>
      <div className='issues'>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Issues;
