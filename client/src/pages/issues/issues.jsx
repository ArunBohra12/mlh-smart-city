import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import PostIssue from "../../components/postIssue/postIssue";
import "./issues.css";
import axios from "axios";
import { API, BASE_URL } from "../../utils/APIRoutes";

function Issues() {
  const [issues, setIssues] = useState([]);

  async function fetchUnApprovedIssues() {
    const { data } = await axios.get(`${BASE_URL}${API}/issue/unapproved`);
    console.log(data);
    setIssues(data.unapprovedIssues);
  }

  useEffect(() => {
    fetchUnApprovedIssues();
  }, []);

  return (
    <>
      <PostIssue />
      <div className='issues'>
        {issues &&
          issues.map((issue, index) => {
            return <Card key={index} issue={issue} />;
          })}
        <Card />
      </div>
    </>
  );
}

export default Issues;
