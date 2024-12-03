import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Navbar from './Components/Navbar/Navbar';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Services from './Pages/Services';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Contact from './Pages/Contact';
import DetailedServices from './Pages/DetailedServices';
import Footer from './Components/Footer/Footer';
import Gallery from './Pages/Gallery';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Topbar/>
        <Navbar/>
        <Routes>
          <Route path='/Executive-Printing-Works/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/products' element={<Products/>}>
            {/* <Route path=':productID' element={<Product/>}/> */}
          </Route>  
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/detailedservices' element={<DetailedServices/>}/>   
           <Route path='/contact' element={<Contact/>}>
            {/* <Route path=':get-a-quote' element={<Contact/>}/> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
