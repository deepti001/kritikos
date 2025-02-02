import React, { useState } from 'react';
import styled from "styled-components";
import logoSymbol from "../../../assets/images/logoSymbol.png";
import { useLocation } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  role: String;
}

interface HeaderProps {
  user: User;
}

const UserHeader: React.FC<HeaderProps> = ({user}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  const isDashboard = location.pathname === '/dashboard';

  return (
    <HeaderCustom className={'bg-white shadow-md flex justify-between items-center ' + (isDashboard ? 'mx-6' : '')}>
      <div className="flex items-center pl-4">
        <Logo className="mr-2" src={logoSymbol} alt="PS-Pulse Logo"/>
        <h1 className="text-xl font-bold">pulse</h1>
      </div>
      <div className="flex items-center">
        <p className="mr-5">Today I am</p>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-white border text-black py-2 px-2 b-0 inline-flex items-center"
          >
            <span>Working from Gurgaon Office</span>
            <i className="ml-2 fas fa-chevron-down"></i>
          </button>
          <ul className={`absolute ${dropdownOpen ? 'block' : 'hidden'} text-gray-700 mt-1 border`}>
            <li>
              <a
                className="rounded-t bg-white hover:bg-gray-200 px-2 py-2 block whitespace-no-wrap border-custom-bottom"
                href="#"
              >
                Working from Gurgaon Office
              </a>
            </li>
            <li>
              <a
                className="bg-white hover:bg-gray-200 px-2 py-2 block whitespace-no-wrap"
                href="#"
              >
                Working from Home
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex space-x-4 pr-4">
        <i className="fas fa-bell"></i>
        <i className="fas fa-th"></i>
      </div>
    </HeaderCustom>
  );
};

const HeaderCustom = styled.header`

  .border-custom-bottom {
    border-bottom: 1px solid #e5e7eb;
  }
`;

const Logo = styled.img`
  width: 3.5rem;
  /* Add your styles here */
`;

export default UserHeader;
