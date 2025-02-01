import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <HeaderCustom>
        {/* <a href="#main-content" className="skip-link">Skip to main content</a> */}
        <nav className="header__nav" aria-label="Main Navigation">
          <div className="header__item">
            <a href="#" className="header__link" aria-label="Home">
              <span className="header__logo--fallback">PS-Pulse</span>
              <img className="header__logo" src={logo} alt="PS-Pulse Logo"/>
            </a>
          </div>
          <div className="header__item">
            <a href="#" className="header__link" aria-label="Login">Login</a>
          </div>
        </nav>
    </HeaderCustom>
  );
};

const HeaderCustom = styled.header`
  max-height: 40px;
  width: 100%;
  left: 0;
  top: 150px;
  position: absolute;
  display: block;
  z-index: 2;
  background-color: transparent;

  .header__nav {
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .header__item {
    display: flex;
  }
  .header__link {
    padding: .375rem;
    color: #fff;
    text-decoration: none;
    
  }
  .header__logo--fallback {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .header__logo {
    height: 5.5rem;
    width: auto;
  }
  
  @media (min-width: 577px) {
    
  }
`;


export default Header;
