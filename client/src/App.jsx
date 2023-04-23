import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import "./app.css";
import Issues from "./pages/issues/issues";
import SingleIssue from "./pages/singleIssue/singleIssue";
function App() {
  return (
    <div className='app'>
      <Navbar />
      {/* <Home /> */}
      {/* <Issues /> */}
      <SingleIssue />
    </div>
  );
}

export default App;
