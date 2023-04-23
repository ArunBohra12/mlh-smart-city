import React from "react";
import Card from "../../components/card/card";
import PostIssue from "../../components/postIssue/postIssue";
import "./issues.css";

function Issues() {
  return (
    <>
      <PostIssue />
      <div className='issues'>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Issues;
