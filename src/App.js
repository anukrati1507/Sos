import React from "react";
import "./css/app.css";
import Signup from "./components/signUp";
import Login from "./components/login";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/selfdefence" component={Help} />
        </Switch>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
