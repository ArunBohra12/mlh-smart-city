import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { API, BASE_URL } from "../../utils/APIRoutes";
import Card from "../../components/card/card";

const Completed = () => {
  const [completedIssues, setCompletedIssues] = useState([]);

  async function getCompletedIssues() {
    const { data } = await axios.get(`${BASE_URL}${API}/issue/completed`);
    console.log(data.resolvedIssues);
    setCompletedIssues(data.resolvedIssues);
  }

  useEffect(() => {
    getCompletedIssues();
  }, []);

  return (
    <>
      <div className='issues'>
        {completedIssues.map((issue, index) => {
          console.log(issue);
          return <Card issue={issue} key={index} />;
        })}
      </div>
    </>
  );
};

export default Completed;
