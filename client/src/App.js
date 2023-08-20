import logo from "./logo.svg";
import "./App.css";

// import ProfilePageMobile from "./pages/profile";
import { useState, useContext, createContext} from "react";

import NavigationBar from "./components/navBar/navigationBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/home";
import ProfilePageMobile from "./pages/profile/profile";
import Planet from "./pages/planet/planet";
import Booking from "./pages/booking/booking";
import SignUp from "./pages/signUp/signUp";
import SigninForm from "./pages/signIn/signIn";
import Landing from "./pages/landing/landing";
import Yet from "./pages/ToBeImplemented/yet";

const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change as needed

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <div>
          <div className="App">
            <div className="App-header">
              <NavigationBar />

              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/Signin" element={<SigninForm />} />
                <Route path="/landing" element={<Landing />} />
                <Route
                  exact
                  path="/"
                  element={<PrivateRoute Component={Home} />}
                />
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
                <Route
                  exact
                  path="/planet/:planetName"
                  element={<PrivateRoute Component={Planet} />}
                />
                <Route
                  exact
                  path="/flights"
                  element={<PrivateRoute Component={Yet} />}
                />
                <Route
                  exact
                  path="/team"
                  element={<PrivateRoute Component={Yet} />}
                />
                <Route
                  exact
                  path="/about"
                  element={<PrivateRoute Component={Yet} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

// Custom PrivateRoute component
function PrivateRoute({ Component }) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Component /> : <Navigate to="/Signin" />;
}

export default App;
