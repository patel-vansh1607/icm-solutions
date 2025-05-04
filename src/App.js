import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import IntroComponent from './components/Intro';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Terms from './pages/Terms';
import Faq from './pages/Faq';

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroComponent />
      <AboutUs />
      <ContactUs />
      <Terms />
      <Faq />
    </div>
  );
}

export default App;
