import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Issues from "./pages/issues/issues";
import SingleIssue from "./pages/singleIssue/singleIssue";

import "./app.css";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/issues' element={<Issues />} />
        <Route path='/issues/:issueId' element={<SingleIssue />} />
      </Routes>
    </div>
  );
}

export default App;
