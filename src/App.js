import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Navbar from './Components/Navbar/Navbar';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';
import Services from './Pages/Services';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Contact from './Pages/Contact';
import DetailedServices from './Pages/DetailedServices';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Topbar/>
        <Navbar/>
        <Routes>
          <Route path='/Executive-Printing-Works/' element={<Home/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productID' element={<Product/>}/>
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
