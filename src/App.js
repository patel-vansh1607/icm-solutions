import './App.css';
import CookiesPolicy from './components/CookiePolicy';
import IntroComponent from './components/Intro';
import NavBar from './components/NavBar';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroComponent />
      <PrivacyPolicy />
      <CookiesPolicy />
    </div>
  );
}

export default App;
