import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';
import Services from './Pages/Services';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Contact from './Pages/Contact';
import DetailedServicePage from './Pages/DetailedServicePage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Topbar/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productID' element={<Product/>}/>
          </Route>  
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>}>
          </Route>   
          <Route path='/detailedServicePage' element={<DetailedServicePage />}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
