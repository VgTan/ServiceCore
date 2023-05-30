import React, { useEffect, useState, useRef } from 'react';
import './css/header.css';
import { Link, useNavigate } from 'react-router-dom';

const Heading = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const edukasiRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setIsSticky(offset > 0);

      const percentage = (offset / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuItemClick = () => {
    navigate('/');
    setTimeout(() => {
      if (edukasiRef.current) {
        const offset = edukasiRef.current.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className={isSticky ? 'sticky-header' : ''}>
      <nav className="navbar navbar-expand-lg navbar-light bg-custom container-fluid">
        <a className="navbar-brand">
          <img className="logo_web" src="./image/logo_web.jpg" />
          ServiceCore
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleMenuItemClick}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/login">
                Logout
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
      <div
        className={`progress-bar ${isSticky ? 'sticky-progress-bar' : ''}`}
        style={{ width: `${scrollPercentage}%` }}
      ></div>
      <div ref={edukasiRef}/>
    </header>
  );
};

export default Heading;
