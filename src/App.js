import logo from './logo.svg';
import './App.css';
import  Navbar from './nav';
import About from './About';
import HeroSection from './hero';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
     
      {/* <Routes>
        <Route path='/aboutus' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/Catalogue' element={<Catlogue />} />
        <Route path='/Product' element={<Products />} /> 
      </Routes> */}
      
      <Footer />
    </div>
  );
}

export default App;
