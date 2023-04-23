import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import PostIssue from "../../components/postIssue/postIssue";
<<<<<<< HEAD
import "./issues.css";
=======
import axios from 'axios'
import { API, BASE_URL } from "../../utils/APIRoutes";
>>>>>>> f8ffd0140827da9c668742e89ab29dcac581645a

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
<<<<<<< HEAD
=======
      <Navbar />
>>>>>>> f8ffd0140827da9c668742e89ab29dcac581645a
      <PostIssue />
      <div className='issues'>
        {
          issues && issues.map((issue,index) => {
            return <Card key={index} issue={issue} />
          })
        }
        <Card />
      </div>
    </>
  );
}

export default Issues;
