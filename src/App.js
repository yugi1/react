import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          
          <ul class="views">
            <li>
              <Link to="/" class='linksdec'>HOME</Link>
            </li>
            <li>
              <Link to="/about" class='linksdec'>ABOUT</Link>
            </li>
            <li>
              <Link to="/portfolio" class='linksdec'>PORTFOLIO</Link>
            </li>
            <li>
              <Link to ="/contact" class='linksdec'>CONTACT</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2 class='logo'>YUDESIGN</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}
function Contact() {
  return <p>Email: yulissagil113@gmail.com</p>
}