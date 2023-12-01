import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services  from './Service';
import Product from './Product';
import Contact from './Contact';
import Navbar from './Navbar';



function App() {
  
  return (
    <div className="App">
    
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
       
      
       
   

      </Routes>
   
     
    </div>
  );
}

export default App;
