import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const location = useLocation();
  const servicesTimeoutRef = useRef(null);
  const sectorsTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
      if (sectorsTimeoutRef.current) {
        clearTimeout(sectorsTimeoutRef.current);
      }
    };
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
          <img src="/svg.png" alt="Softnexa Logo" className="logo-img" />
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
                  if (servicesTimeoutRef.current) {
                    clearTimeout(servicesTimeoutRef.current);
                    servicesTimeoutRef.current = null;
                  }
                  setIsServicesOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) {
                  servicesTimeoutRef.current = setTimeout(() => {
                    setIsServicesOpen(false);
                  }, 150);
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
                    if (servicesTimeoutRef.current) {
                      clearTimeout(servicesTimeoutRef.current);
                      servicesTimeoutRef.current = null;
                    }
                    setIsServicesOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 768) {
                    servicesTimeoutRef.current = setTimeout(() => {
                      setIsServicesOpen(false);
                    }, 150);
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
                  if (sectorsTimeoutRef.current) {
                    clearTimeout(sectorsTimeoutRef.current);
                    sectorsTimeoutRef.current = null;
                  }
                  setIsSectorsOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) {
                  sectorsTimeoutRef.current = setTimeout(() => {
                    setIsSectorsOpen(false);
                  }, 150);
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
                    if (sectorsTimeoutRef.current) {
                      clearTimeout(sectorsTimeoutRef.current);
                      sectorsTimeoutRef.current = null;
                    }
                    setIsSectorsOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 768) {
                    sectorsTimeoutRef.current = setTimeout(() => {
                      setIsSectorsOpen(false);
                    }, 150);
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
                className={`contact-btn ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <i className="fas fa-envelope"></i>
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
