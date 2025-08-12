import React from 'react';
import './App.css';
import Header from './components/Header.js'
import AboutMe from './components/AboutMe.js'

function App() {
  return (
    <div className="app-wrapper">
     <Header></Header>
     <AboutMe></AboutMe>
    </div>
  );
}

export default App;
