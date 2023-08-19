import logo from "./logo.svg";
import "./App.css";
import Card from "./components/class card/card";
// import ProfilePageMobile from "./pages/profile";
import NavigationBar from "./components/navBar/navigationBar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/home/home";
import ProfilePageMobile from "./pages/profile/profile";
import Planet from "./pages/planet/planet";
import Booking from "./pages/booking/booking";
import SignUp from "./pages/signUp/signUp";
import Landing from "./pages/landing/landing";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <div className="App-header">
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfilePageMobile />} />
              <Route path="/planet/:planetName" element={<Planet />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/landing" element={<Landing />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

{
  /* <div>
  <NewCard
    imageUrl="https://wallpaperaccess.com/full/3136563.jpg"
    title="Hey There"
  />
</div> */
}

// import logo from "./logo.svg";
// import "./App.css";
// import Card from "./components/class card/card";
// import ProfilePageMobile from "./pages/profile";
// import New_card from "./components/Aluthcardeka/new_card";
// import Footer from "./components/footer/footer";
// import Checkincard from "./components/cheksin_card/checkincard";
// import BackgroundComponent from "./components/backgroundImage/background";
// import PriceSummery from "./components/priceSummery/priceSummery";
// import Calendar from "./components/calendar/calendar";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <New_card
//           imageUrl="https://wallpaperaccess.com/full/3136563.jpg"
//           title="Hey There"
//         />
//       </header>
//       {/* <BackgroundComponent>
//         <p>Hello</p>
//         <Calendar date={"2023-08-16"} />

//         <Footer />
//       </BackgroundComponent> */}
//     </div>
//   );
// }

// export default App;
