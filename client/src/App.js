import logo from "./logo.svg";
import "./App.css";
import Card from "./components/class card/card";
import Footer from "./components/footer/footer";
import Search from "./components/search/search";
import NavigationBar from "./components/navBar/navigationBar";
import BackImage from "./components/backdrop/backimage";
import Container from "@mui/material/Container";
import DiscoverCard from "./components/discoverCard/discover";
import EnterDetails from "./components/NumberofPassengers/enterDetails";
import PassengerDetailsForm from "./components/passengerDetails/PassengerDetailsForm";
import Booking from "./pages/booking/booking";
import NumberSpinner from "./components/numberSpinner/numSpinner";
import BackgroundComponent from "./components/backgroundImage/background";
import SpacecraftSeatView from "./components/seatView/seat";
import Checkincard from "./components/cheksin_card/checkincard";
import Home from "./pages/home/home";
import BGComponent from "./components/backgroundImage/bg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BackImage />
        <NavigationBar />
        <Container>
           <DiscoverCard />
          <Search />
          <Footer />
        </Container> */}

        {/* <SpacecraftSeatView /> */}
        <Booking />
        {/* <Booking /> */}
        <BGComponent>
          <Footer />
        </BGComponent>
        <Search />
        <Card date={"ghcjc"} />
      </header>
    </div>
  );
}

export default App;
