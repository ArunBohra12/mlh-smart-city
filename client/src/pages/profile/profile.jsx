import React, { useEffect, useState } from "react";
import "./profile.css";

import Details from "../../components/details/details";
import Shanks from "../../assets/shanks.jpg";

import "./profile.css";

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
      {/* <HelperModal token={userData} /> */}
      <div className='profile'>
        <div className='profile-img'>
          <img src={userData.photo} alt='background-img' />
        </div>
        <div className='profile-details'>
          <h3>Details</h3>
          <Details title='Name' detail={userData.name} />
          {/* <Details title='Name' detail='ayush' /> */}
          <Details title='Email' detail={userData.email} />
          {/* <Details title='Email' detail='ayush5april@gmail.com' /> */}
          <Details title='Issues Raised' detail='5' />
          <Details title='Issues Resolved' detail='3' />
        </div>
      </div>
    </>
  );
};

export default Profile;
