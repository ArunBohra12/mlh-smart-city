import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import "./app.css";
import Issues from "./pages/issues/issues";
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
