import './App.css';
import IntroComponent from './components/Intro';
import NavBar from './components/NavBar';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroComponent />
      <PrivacyPolicy />
    </div>
  );
}

export default App;
