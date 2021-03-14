import React from "react";
import "./css/app.css";
import Signup from "./components/signUp";
import Login from "./components/login";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import SelfD from './components/SelfD';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SelfD />
      <About />
      <Contact />
    </div>
  );
}

export default App;
