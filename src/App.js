import logo from './logo.svg';
import './App.css';
import Navbar from './nav'; 
import HeroSection from './hero';

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
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
