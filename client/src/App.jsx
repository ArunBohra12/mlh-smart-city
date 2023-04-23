import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Issues from "./pages/issues/issues";
import Profile from "./pages/profile/profile";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import SingleIssue from "./pages/singleIssue/singleIssue";
<<<<<<< HEAD
import Navbar from "./components/navbar/navbar";

import "./app.css";
=======
import Pending from "./pages/pending/pending";
>>>>>>> f8ffd0140827da9c668742e89ab29dcac581645a

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
        <Route path='/pending' element={<Pending />} />
        <Route path='/issues/:issue' element={<SingleIssue />} />
      </Routes>
    </div>
  );
}

export default App;
