import logo from "./logo.svg";
import "./App.css";
import Card from "./components/class card/card";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    <div className="App">
      <header className="App-header">
        <Card />
      </header>
    </div>
  );
}

export default App;
