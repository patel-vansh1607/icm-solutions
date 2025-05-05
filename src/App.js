import './App.css';
import IntroComponent from './components/Intro';
import NavBar from './components/NavBar';
import SeedFeatures from './components/SeedFeatures';
import SeedGrid from './components/seeds/SeedGrid';
import TestimonialSection from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroComponent />
      <SeedGrid />
      <SeedFeatures />
      <TestimonialSection />
    </div>
  );
}

export default App;
