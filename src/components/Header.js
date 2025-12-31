import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsSectorsOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Services list
  const servicesList = [
    { name: 'Digital Marketing', path: '/services/digital-marketing', icon: 'fas fa-chart-line' },
    { name: 'Web Development', path: '/services/web-development', icon: 'fas fa-laptop-code' },
    { name: 'Mobile App Development', path: '/services/mobile-app', icon: 'fas fa-mobile-alt' },
    { name: 'AI & Automation', path: '/services/ai-automation', icon: 'fas fa-robot' },
    { name: 'SEO Services', path: '/services/seo', icon: 'fas fa-search' },
    { name: 'Shopify Solutions', path: '/services/shopify', icon: 'fas fa-shopping-cart' }
  ];

  const allSectors = [
    { name: 'Healthcare', path: '/sectors/healthcare', icon: 'fas fa-heartbeat' },
    { name: 'Finance', path: '/sectors/finance', icon: 'fas fa-chart-line' },
    { name: 'E-commerce', path: '/sectors/ecommerce', icon: 'fas fa-shopping-bag' },
    { name: 'Education', path: '/sectors/education', icon: 'fas fa-graduation-cap' },
    { name: 'Manufacturing', path: '/sectors/manufacturing', icon: 'fas fa-industry' },
    { name: 'Real Estate', path: '/sectors/real-estate', icon: 'fas fa-building' },
    { name: 'Retail', path: '/sectors/retail', icon: 'fas fa-store' },
    { name: 'Technology', path: '/sectors/technology', icon: 'fas fa-microchip' }
  ];

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <i className="fas fa-code"></i>
          Soft<span>nexa</span>
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
        
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul id="mainMenu">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li 
              className={`dropdown ${isServicesOpen ? 'open' : ''}`}
              onMouseEnter={() => {
                if (window.innerWidth > 768) {
                  setIsServicesOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) {
                  setIsServicesOpen(false);
                }
              }}
            >
              <Link 
                to="/services" 
                className={location.pathname.startsWith('/services') ? 'active' : ''}
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  }
                }}
              >
                Services <i className="fas fa-chevron-down"></i>
              </Link>
              <ul 
                className="dropdown-menu"
                onMouseEnter={() => {
                  if (window.innerWidth > 768) {
                    setIsServicesOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 768) {
                    setIsServicesOpen(false);
                  }
                }}
              >
                <li>
                  <Link to="/services" onClick={closeMenu} className="dropdown-main-link">
                    <i className="fas fa-th-large"></i>
                    View All Services
                  </Link>
                </li>
                <li className="dropdown-divider"></li>
                {servicesList.map((service, index) => (
                  <li key={index}>
                    <Link to={service.path} onClick={closeMenu}>
                      <i className={service.icon}></i>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li 
              className={`dropdown ${isSectorsOpen ? 'open' : ''}`}
              onMouseEnter={() => {
                if (window.innerWidth > 768) {
                  setIsSectorsOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) {
                  setIsSectorsOpen(false);
                }
              }}
            >
              <Link 
                to="/sectors/healthcare" 
                className={location.pathname.startsWith('/sectors') ? 'active' : ''}
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    setIsSectorsOpen(!isSectorsOpen);
                  }
                }}
              >
                Industries <i className="fas fa-chevron-down"></i>
              </Link>
              <ul 
                className="dropdown-menu sectors-dropdown"
                onMouseEnter={() => {
                  if (window.innerWidth > 768) {
                    setIsSectorsOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 768) {
                    setIsSectorsOpen(false);
                  }
                }}
              >
                {allSectors.map((sector, index) => (
                  <li key={index}>
                    <Link to={sector.path} onClick={closeMenu}>
                      <i className={sector.icon}></i>
                      {sector.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={isActive('/projects') ? 'active' : ''}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
