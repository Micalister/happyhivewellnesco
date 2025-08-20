import React from 'react';
import './App.css';
import Header from './components/Header.js'
import AboutMe from './components/AboutMe.js'
import Plans from './components/Plans.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="app-wrapper">
     <Header></Header>
     <AboutMe></AboutMe>
     <Plans></Plans>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
