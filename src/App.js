import './App.css';
import Footer from './components/Footer';
import IntroComponent from './components/Intro';
import Navbar from './components/NavBar';
import NavBar from './components/NavBar';
import SeedFeatures from './components/SeedFeatures';
import SeedGrid from './components/seeds/SeedGrid';
import SubscribeSection from './components/Subscribe';
import Testimonials from './components/Testimonial';

function App() {
  return(
    <div className='App'> 
    <Navbar />
    <IntroComponent />
    
    <SeedGrid />
    <SeedFeatures />
    <Testimonials />
    <SubscribeSection />
    <Footer />
  </div>
  )
}
export default App;