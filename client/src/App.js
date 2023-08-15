import logo from "./logo.svg";
import "./App.css";
import Card from "./components/class card/card";
import Footer from "./components/footer/footer";
import Search from "./components/search/search";
import NavigationBar from "./components/navBar/navigationBar";
import BackImage from "./components/backdrop/backimage";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BackImage />
        <NavigationBar />
        <Container>
          <Search />
          <Footer />
        </Container>
      </header>
    </div>
  );
}

export default App;
