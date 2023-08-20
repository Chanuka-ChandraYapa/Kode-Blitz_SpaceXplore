import React, { useState, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavigationBar from "./components/navBar/navigationBar";
import Home from "./pages/home/home";
import SignUpForm from "./pages/signUp/signUp";
import SigninForm from "./pages/signIn/signIn";
import ProfilePageMobile from "./pages/profile/profile";
import Planet from "./pages/planet/planet";
import Booking from "./pages/booking/booking";

// Create an AuthContext to manage authentication state
const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change as needed

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        {/* <NavigationBar /> */}
        <Routes>
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
