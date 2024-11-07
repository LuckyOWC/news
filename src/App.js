import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Newsitem from "./Components/Newsitem";
import CustomNavbar from "./Components/CustomNavbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomNavbar />
      </header>
      <Newsitem />
    </div>
  );
}

export default App;
