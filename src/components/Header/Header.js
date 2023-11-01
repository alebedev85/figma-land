import React from 'react';
import './Header.scss';
import logo from '../../images/logo.png'

function Header() {

  return (
    <header className='header'>
      <a className='link' href='#'>
        <img src={logo} className='logo' alt='Логотип сайта' />
      </a>
      <ul className='header__navbar'>
        <li className='link'></li>
        <li className='link'></li>
        <li className='link'></li>
        <li className='link'></li>
      </ul>
      <button className='header__button button'></button>
    </header >
  )
}

export default Header;
