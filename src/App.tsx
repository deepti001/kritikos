import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import styled from "styled-components";
import logo from "./assets/images/logo.png";

const App: React.FC = () => {
  return (
    <Router>
      <div>
      <HeaderCustom>
        <nav className="header__nav" aria-label="Main Navigation">
          <ul className="header__navlist">
            <li><Link to="/" aria-label="Navigate to Home Page"><img className="header__logo" src={logo} alt="PS-Pulse Logo"/></Link></li>
            <li><Link to="/login" aria-label="Navigate to Login Page" className={"header__link"}>Login</Link></li>
          </ul>
        </nav>
        </HeaderCustom>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const HeaderCustom = styled.header`
  max-height: 5.5rem;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  display: block;
  z-index: 2;
  background-color: transparent;

  .header__navlist {
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    list-style-type: none;
    margin-block-start: 0;
  }
 
  .header__item {
    display: flex;
  }
  .header__link {
    padding: .375rem;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem; 
  }

  .header__logo {
    height: 5.5rem;
    width: auto;
  }
  
  @media (min-width: 577px) {
    
  }
`;

export default App;
