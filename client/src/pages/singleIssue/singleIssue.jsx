import React from "react";
import "./singleIssue.css";
import { FaMapMarkerAlt } from "react-icons/fa";
function SingleIssue() {
  return (
    <div className='main-div-singleissue'>
      <h1>Pending</h1>
      <div className='singleissue'>
        <div className='issue-image-detail'>
          <img
            src='https://www.deccanherald.com/sites/dh/files/articleimages/2022/08/22/pothole-1138292-1661174905.jpg'
            alt='no image'
            className='issue-update-image'
          />
          <div className='singleissue-text'>
            <h3 className='location-text'>
              {" "}
              <FaMapMarkerAlt /> ramghat,aligarh
            </h3>
            <h3>Description</h3>
            <h4>
              lorem lorem lorem lorem lorem lorem ipsum lorem lorem lorem lorem lorem lorem ipsum lorem lorem lorem
              lorem lorem lorem ipsum lorem lorem lorem lorem lorem lorem ipsum lorem lorem lorem lorem lorem lorem
              ipsum
            </h4>

            <h3>Raised by : Ash </h3>
          </div>
        </div>
        <h1>Updates</h1>
        <input type='text' className='input-issue-update' />
        <button className='update-issue-button'>UPDATE</button>
      </div>
    </div>
  );
}

export default SingleIssue;
