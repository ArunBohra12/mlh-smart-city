import Navbar from "./components/navbar/navbar";

import Home from "./pages/home/home";
import Issues from "./pages/issues/issues";
import "./app.css";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      {/* <Issues /> */}
    </div>
  );
}

export default App;
