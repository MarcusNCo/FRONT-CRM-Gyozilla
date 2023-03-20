import React from 'react'
import './Header.css'
import Logo from './../../assets/images/gyozillalog.ico'

const Header = () => {
  return (
    <div class="header">
      {/* <a href="#default" class="logo">
        CompanyLogo
      </a> */}
      <div class="header-left">
        <img src={Logo} />
        <a href="#home">La carte</a>
        <a href="#contact">Nos engagements</a>
        <a href="#about">Contactez nous</a>
      </div>
    </div>
  )
}

export default Header
