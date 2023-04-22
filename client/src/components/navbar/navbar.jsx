import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='' alt='' />
      </div>
      <div className='menu'>
        <h3>Home</h3>
        <h3>Issues</h3>
        <h3>Pending</h3>
        <h3>Completed</h3>
      </div>
    </div>
  );
}

export default Navbar;
