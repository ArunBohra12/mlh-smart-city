import React, { useEffect, useState } from "react";
import "./profile.css";

import Details from "../../components/details/details";
import Shanks from "../../assets/shanks.jpg";

import "./profile.css";

import Navbar from "../../components/navbar/navbar";
import { localStorageUser } from "../../utils/globalConstants";
import HelperModal from "../../components/helperModal/helperModal";

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchUserData() {
      const data = await JSON.parse(localStorage.getItem(localStorageUser));
      setUserData(data);
    }
    fetchUserData();
  }, []);
  return (
    <>
      {!userData.isHelper ? <HelperModal token={userData.token} /> : null}

      <div className='profile'>
        <div className='profile-img'>
          <img src={userData.photo} alt='background-img' />
        </div>
        <div className='profile-details'>
          <h3>Details</h3>
          <Details>
            <h3>{userData.name}</h3>
            <h4>{userData.email}</h4>
          </Details>
          <Details title='Issues Raised' detail='5' />
          <Details title='Issues Resolved' detail='3' />
        </div>
      </div>
    </>
  );
};

export default Profile;
