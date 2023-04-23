import Navbar from "./components/navbar/navbar";

import Home from "./pages/home/home";
import Issues from "./pages/issues/issues";
import "./app.css";

import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import SingleIssue from "./pages/singleIssue/singleIssue";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <SingleIssue />
      </Routes>
      {/* <Issues /> */}
      {/* <SingleIssue /> */}
    </div>
  );
}

export default App;
