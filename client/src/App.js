import logo from "./logo.svg";
import "./App.css";
import Card from "./components/class card/card";
import Footer from "./components/footer/footer";
import Search from "./components/search/search";
import NavigationBar from "./components/navBar/navigationBar";

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
        {/* <Card />
        <Footer /> */}
        <NavigationBar />
        {/* <Search /> */}
      </header>
    </div>
  );
}

export default App;
