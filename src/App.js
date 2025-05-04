import './App.css';
import NavBar from './components/NavBar';
import IntroComponent from './components/Intro';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroComponent />
      <ContactUs />
      <AboutUs />
      <Faq />
      <Terms />
    </div>
  );
}

export default App;
