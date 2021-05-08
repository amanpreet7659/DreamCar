import Crousel from "./Dashboard/Crousel";
import Navbar from "./Dashboard/Navbar";
import Front from "./Dashboard/Whyweare/Front";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Crousel/>
        <Front/>
      </header>
    </div>
  );
}

export default App;
