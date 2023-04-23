import React from "react";
import "./details.css";

const Details = ({ title, detail }) => {
  return (
    <div>
      <h2 className='detail-h2'>{title}</h2>
      <h4>{detail}</h4>
    </div>
  );
};

export default Details;
