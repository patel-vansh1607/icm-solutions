import './App.css';
import NavBar from './components/NavBar';
import IntroComponent from './components/Intro';

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
