import React, { useState} from 'react';
import './Navbar.css';
import logo from '../Assets/epwlogo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false); 
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return(
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo of the company" />
      </div>
      <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/Executive-Printing-Works/"  className={({ isActive }) => (isActive ? 'navactive' : '')} onClick={() => handleNavigate('/')}>Home</NavLink></li>
          <li><NavLink to="/about"  className={({ isActive }) => (isActive ? 'navactive' : '')} onClick={() => handleNavigate('/about')}>About</NavLink></li>
          <li><NavLink to="/detailedservices"  className={({ isActive }) => (isActive ? 'navactive' : '')} onClick={() => handleNavigate('/detailedservices')}>Services</NavLink></li>
          <li><NavLink to="/products" className={({ isActive }) => (isActive ? 'navactive' : '')} onClick={() => handleNavigate('/products')}>Products</NavLink></li>
          {/* <li><NavLink to="/gallery" onClick={() => handleNavigate('/gallery')}>Gallery</NavLink></li> */}
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'navactive' : '')}  onClick={() => handleNavigate('/contact')}>Contact</NavLink></li>
        </ul>
      </div>
      <div className="nav-login">
        <button>Login</button>     
      </div>
      <div className="nav-toggle" onClick={toggleMobileMenu}>
        <span className="burger"></span>
        <span className="burger"></span>
        <span className="burger"></span>
      </div>
    </div>
  )
}
// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const [activeMenu, setActiveMenu] = useState(localStorage.getItem('activeMenu') || 'Home');

//   const handleScrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     handleScrollToTop();
//     localStorage.setItem('activeMenu', activeMenu);
//   }, [activeMenu]);

//   useEffect(() => {
//     const currentPath = location.pathname.slice(1);
//     setActiveMenu(currentPath ? currentPath : 'Home');
//   }, [location]);

//   const handleMenuClick = (menuItem) => {
//     setActiveMenu(menuItem);
//     setMenuOpen(false);
//   };

//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} alt="logo of the company EPW" />
//         <div className="bar-icon" onClick={() => setMenuOpen(!menuOpen)}>
//           <FontAwesomeIcon icon={faBars} transform="grow-15" />
//         </div>
//       </div>
//       <ul className={menuOpen ? 'open nav-menu' : 'nav-menu'}>
//         <li onClick={() => handleMenuClick('Home')}>
//           <Link to="/">Home</Link>
//           {activeMenu === 'Home' && <hr />}
//         </li>
//         <li onClick={() => handleMenuClick('aboutus')}>
//           <Link to="/aboutus">About</Link>
//           {activeMenu === 'aboutus' && <hr />}
//         </li>
//         <li onClick={() => handleMenuClick('services')}>
//           <Link to="/services">Services</Link>
//           {activeMenu === 'services' && <hr />}
//         </li>
//         <li onClick={() => handleMenuClick('product')}>
//           <Link to="/product">Products</Link>
//           {activeMenu === 'product' && <hr />}
//         </li>
//         <li onClick={() => handleMenuClick('contact')}>
//           <Link to="/contact">Contact</Link>
//           {activeMenu === 'contact' && <hr />}
//         </li>
//       </ul>
//       <div className="nav-login-cart">
//         <button>Login</button>
//         <FontAwesomeIcon className="cart-icon" icon={faCartShopping} transform="grow-15" />
//         <div className="nav-cart-count">0</div>
//       </div>
//     </div>
//   );
// }

export default Navbar;
