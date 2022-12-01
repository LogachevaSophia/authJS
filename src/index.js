import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

const App = () => {
  const [token, setToken] = useState();
  console.log(localStorage.getItem('token'));
  if(localStorage.getItem('token')==null) {
    return <Signin />
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
