import React, { useState } from "react";
import { motion } from "framer-motion";
import "./navbar.css";
import { Link } from "react-router-dom";

// const tabs = ["home", "issues", "pending", "completed", "profile"];
const tabs = [
  {
    page: 'home',
    path: '/'
  },
  {
    page: 'issues',
    path: '/issues'
  },
  {
    page: 'pending',
    path: '/pending'
  },
  {
    page: 'completed',
    path: '/completed'
  },
  {
    page: 'profile',
    path: '/profile'
  },
]

function Navbar() {
  const [selectedTab, setSelectedTab] = useState(null);
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='' alt='' />
      </div>
      <div className='menu'>
        <ul>
          {tabs.map((tab) => {
            return (
              <Link to={tab.path} >
                <li key={tab} onMouseEnter={() => setSelectedTab(tab.page)}>
                  <motion.span
                    animate={{ color: tab.page === selectedTab ? "#000" : "#fff" }}
                    transition={{ duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.1 }}>
                    {tab.page}
                  </motion.span>
                  {tab.page === selectedTab && (
                    <motion.div
                      className='underline'
                      layoutId='underline'
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}></motion.div>
                  )}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
