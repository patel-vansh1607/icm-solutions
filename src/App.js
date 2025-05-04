import React from 'react';
import './App.css';
import IntroComponent from './components/Intro';  
import NavBar from './components/NavBar';         
            
import ContactUs from './pages/ContactUs';        
 


function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroComponent />
      <ContactUs />
      

    </div>
  );
}

export default App;
