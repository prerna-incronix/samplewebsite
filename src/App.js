import logo from "./logo.svg";
import "./App.css";
//import Home from './home';
import Navbar from './nav';
import About from './About';
import Category from './category';
import HeroSection from './hero';
import Home from './home';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
// import About from './About';
import CategoryCatalogue from './CategoryCatalogue';
import SunglassCatalogue from './SunglassCatalogue';

function App() {
  return (
    <div>
      <Navbar />
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path='/eyewear' element={< CategoryCatalogue />} />
          <Route path='/sunglass' element={<SunglassCatalogue />} />
          <Route path="/" element={<About />} />
          {/* <Route path='/' element={< E />} />
        <Route path='/' element={<S />} /> */}
      </Routes> 
      }
      <Footer />
    </div>
  );
}

export default App;
