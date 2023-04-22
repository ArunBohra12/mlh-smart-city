import React, { useState } from "react";
import { motion } from "framer-motion";
import "./navbar.css";

const tabs = ["home", "issues", "pending", "completed", "profile"];

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
              <li key={tab} onMouseEnter={() => setSelectedTab(tab)}>
                <motion.span
                  animate={{ color: tab === selectedTab ? "#fff" : "#000" }}
                  transition={{ duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.1 }}>
                  {tab}
                </motion.span>
                {tab === selectedTab && (
                  <motion.div
                    className='underline'
                    layoutId='underline'
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}></motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
