import React from 'react';
import './App.css';
import Header from './components/Header.js'
import AboutMe from './components/AboutMe.js'
import Plans from './components/Plans.js'

function App() {
  return (
    <div className="app-wrapper">
     <Header></Header>
     <AboutMe></AboutMe>
     <Plans></Plans>
    </div>
  );
}

export default App;
