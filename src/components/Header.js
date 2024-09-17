import { Link, animateScroll as scroll } from 'react-scroll';
import {useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Home';
function Header(){
    const [activeLink, setActiveLink] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);
    const handleSetActive = (linkName) => {
        setActiveLink(linkName);
    };
    const scrollToTop = () => {
        scroll.scrollToTop();
        handleSetActive('Home'); // Set active link to Home when clicked
    };
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {  // Change 100 to the scroll height you prefer
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <header className={`Header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
               <div className="row">
                    <nav className="nav navbar-expand-xl">
                        <div className="container-fluid d-flex align-items-center justify-content-between">
                            <Link
                             className="Logo-a" to="Home"
                              smooth={true}
                               duration={500}
                               onClick={scrollToTop}
                            >
                                <span className="headerLogo">
                                    LOGO
                                </span>
                            </Link>
                            <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#headerNavbarDropdown" aria-controls="headerNavbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-menu-icon">
                                    <i class="fas fa-bars"></i>
                                </span>
                            </button>  
                            <div class="collapse navbar-collapse " id="headerNavbarDropdown">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <Link className={activeLink === 'Home' ? 'active nav-link' : 'nav-link'}  onClick={scrollToTop}>
                                        Home
                                    </Link> 
                                </li>
                                <li class="nav-item">
                                    <Link className={activeLink === 'Skills' ? 'active nav-link' : 'nav-link'} onClick={() => handleSetActive('Skills')} to="Skills" smooth={true} duration={200} offset={-270}>
                                        Skills
                                    </Link> 
                                </li>
                                <li class="nav-item">
                                    <Link className={activeLink === 'Products' ? 'active nav-link' : 'nav-link'} onClick={() => handleSetActive('Products')} to="Projects" smooth={true} duration={200} offset={-250}>
                                        Projects
                                    </Link>
                                </li>
                            </ul>  
                            <div class="header-buttons d-flex justify-content-between align-items-center">
                                <div className="links-social-midea me-4">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <a href="#" class="connect">Let's Connect</a>
                            </div>  
                        </div>
                        </div> 
                    </nav>  
               </div> 
            </div>
        </header>
    );
};
export default Header