"use client";
import { useState } from 'react';
import Image from 'next/image';
import './Navbar.css';
import SideMenu from '../SideMenu/SideMenu';
import logo from '../../assets/logo (1).svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <nav className="containeer nav d-flex justify-content-between align-items-center mt-4">  
        <div className="logo ms-2">
          <Image src={logo} alt="Logo" width={70} height={70} />
        </div>
        <div className="menu-icon" id="menuIcon" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}