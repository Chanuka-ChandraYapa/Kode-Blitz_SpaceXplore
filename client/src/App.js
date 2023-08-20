import logo from "./logo.svg";
import "./App.css";
import Card from "./components/class card/card";
// import ProfilePageMobile from "./pages/profile";
import NewCard from "./components/Aluthcardeka/new_card";

import Footer from "./components/footer/footer";

import BackgroundComponent from "./components/backgroundImage/background";
import Calendar from "./components/calendar/calendar";

import CardSlider from "./cardSlider";

import ImageSlider from "./components/slidingCard/Slideshow";
import BGComponent from "./components/backgroundImage/bg";


import { BrowserRouter as Router, Routes, Route,Switch } from "react-router-dom";

import ProfilePageMobile from "./pages/profile/profile";
import Planet from "./pages/planet/planet";
import Booking from "./pages/booking/booking";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change as needed

  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/Signin" element={<SigninForm />} />

          <Route exact path="/" element={<PrivateRoute Component={Home} />} />
          <Route
            exact
            path="/profile"
            element={<PrivateRoute Component={ProfilePageMobile} />}
          />
          <Route
            exact
            path="/planet"
            element={<PrivateRoute Component={Planet} />}
          />
          <Route
            exact
            path="/booking"
            element={<PrivateRoute Component={Booking} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

// Custom PrivateRoute component
function PrivateRoute({ Component }) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Component /> : <Navigate to="/Signin" />;
}

export default App;


