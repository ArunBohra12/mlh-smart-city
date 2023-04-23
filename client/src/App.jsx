import Navbar from "./components/navbar/navbar";

import Home from "./pages/home/home";
import Issues from "./pages/issues/issues";
import "./app.css";

import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      {/* <Issues /> */}
    </div>
  );
}

export default App;
