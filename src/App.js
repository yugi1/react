import './App.css';
import React from "react";
import picture from './what.jpg';
import education from './uvu.png';
import gold from './texture.png';
import drawingone from './draw/drawing1.png';
import drawingtwo from './draw/drawing2.png';
import drawingthree from './draw/drawing3.png';
import drawingfour from './draw/drawing4.png';
import drawingfive from './draw/drawing5.png';
import {useGlobalContext} from "./context/globalcontext";
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
  return (
    <div class="outer">
      <div class="landing">
        <div class="bigcon">

 <div class="chunk">

 
      <h2 class='logo'>YUDESIGN</h2>
      <h3 class='slogan'>YOUR IDEAS.</h3>
     <a href="#services"><button id="quickscroll-first">Get Started<i class="fas fa-arrow-circle-down" id="arrow"></i></button></a> 
     </div>

     <div class="hero">
       <img src={gold} alt="geometric design" width='800' />
     </div>
     </div>
      </div>
    
      <div class="home-content-sec1">
     <h4 class="sec-head-first" id="services">S E R V I C E S</h4>
        <div class="icon-set-one">
          <div class="first-icon-in-set">
        <i class="fas fa-drafting-compass"></i><h5 class="drafting">P R O F E S S I O N A L<span class="break"></span>D R A F T I N G</h5>
        </div>
        <div class="first-icon-in-set">
        <i class="fas fa-download"></i><h5 class="drafting">H D<span class="break"></span>D R A W I N G S</h5>
        </div>
        <div class="first-icon-in-set">
        <i class="fas fa-camera"></i><h5 class="drafting">H I G H<span class="break"></span>Q U A L I T Y<span class="break"></span>R E N D E R I N G S</h5>
        </div>
        </div>
      </div>
    </div>

  );
}

function About() {
  return (
    <div class="outer2">
      <div class="intro-section">
      <h2 class='header'>ABOUT</h2>
      </div>
      <div class="about-section">
      <h5 class="about-header">I N T R O D U C T I O N</h5>
      
      </div>
      <div class="content-holder">
      <div class="p-holder">
        <p>Cras sit amet scelerisque dui, vitae sagittis nunc. Curabitur placerat in nulla eu condimentum. Praesent sed libero 
          a risus feugiat tincidunt. Pellentesque pharetra at purus hendrerit volutpat. Sed pharetra, turpis eu lobortis commodo, odio augue
           faucibus sem, a elementum ex lectus at urna. Fusce a quam ut turpis rutrum dapibus. Sed tellus odio, viverra vitae viverra vitae, maximus 
           id leo. Fusce imperdiet arcu et dolor vestibulum lacinia. Sed nec tincidunt nunc. Fusce sed gravida arcu, in viverra purus. Praesent nec bl
           andit tellus. Aenean facilisis leo nulla, in placerat neque pharetra a. Praesent sit amet tellus risus. Aliquam venenatis eros facilisis, venenatis urna eu, varius eros. Proin tincidun
           t, tellus id accumsan congue, orci felis tinc
          idunt enim, sit amet venenatis leo nibh ut odio. Etiam sed diam aliquam, congue felis non, ornare odio.</p>
      </div>
      <div class="intro-img">
        <img src={picture} alt="Picture" width='350' class="what"/>
      </div>
      
      </div>
      <div class="second-about-sec">
        <div class="education-sec">
          <h2 class="about-header">E D U C A T I O N</h2>
          <div class="p-holder-two">
            <p>
            faucibus sem, a elementum ex lectus at urna. Fusce a quam ut turpis rutrum dapibus. Sed tellus odio, viverra vitae viverra vitae, maximus 
           id leo. Fusce imperdiet arcu et dolor vestibulum lacinia. Sed nec tincidunt nunc. Fusce sed gravida arcu, in viverra purus. Praesent nec bl
           andit tellus. Aenean facilisis leo nulla, in placerat neque pharetra a. Praesent sit amet tellus risus. Aliquam venenatis eros facilisis, venenatis urna eu, varius eros. Proin tincidun
           t, tellus id accumsan congue, orci felis tinc
            </p>
          </div>
          <div class="image-two">
            <img src={education} alt="uvu logo" width='350' class="uvu"/>
          </div>
        </div>
      </div>
  
    </div>

  );
}

function Portfolio() {
  return (
    <div class="outer3">
      
      <h2 class='header'>MY WORK</h2>
      <div class="column">
        <h5 class="heading">EVAPORATOR <span class="break"></span>CTRL<span class="break"></span>PANEL<span class="break"></span>2021</h5>
      <img src={drawingone} alt="drawing" width='800'/>

        <h5 class="heading">MECH ARM 2021</h5>
        <img src={drawingtwo} alt="drawing" width='800'/>

        <h5 class="heading">BOUNDARY 8 2021</h5>
        <img src={drawingthree} alt="drawing" width='800'/>

        <h5 class="heading">SITE PLAN #9</h5>
        <img src={drawingfour} alt="drawing" width='800'/>

        <h5 class="heading">BEAM #15 2021</h5>
        <img src={drawingfive} alt="drawing" width='800'/>
      </div>
    </div>
    
  );
}

function Contact() {
  const {contactCount, setContactCount} = useGlobalContext()
  const handleSend = () => {
    const contactForm = {
      firstName: 'bob',
      lastName: 'bbob',
      message: 'this is a message'
    }
    fetch ("http://localhost:820/contact-form", {method:"post", headers: {"Contact-Type": "application/json"}, body:JSON.stringify(contactForm)}).then(res => res.json()).then(contact => console.log(contact))
  }
  return (
    <div class="outer4">
      <h2 class='header'>CONTACT</h2>
      <button onClick={handleSend}>Click me {contactCount}</button>
    </div>
  );
}