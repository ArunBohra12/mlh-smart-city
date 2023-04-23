import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Issues from "./pages/issues/issues";
import Profile from "./pages/profile/profile";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import SingleIssue from "./pages/singleIssue/singleIssue";
import Navbar from "./components/navbar/navbar";

import "./app.css";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/issues' element={<Issues />} />
        <Route path='/issue/:issue' element={<SingleIssue />} />
      </Routes>
    </div>
  );
}

export default App;
