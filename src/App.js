import logo from './logo.svg';
import './App.css';
//import Home from './home';
import Navbar from './nav';
import About from './About';
import Category from './category';
import HeroSection from './hero';
import Home from './home';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
    
      
      { <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/Catalogue' element={<Catlogue />} />
        <Route path='/Product' element={<Products />} />  */}
      </Routes> }
      
      <Footer />
    </div>
  );
}

export default App;
