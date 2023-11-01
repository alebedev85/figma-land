import React from 'react';
import './Header.scss';
import logo from '../../images/logo.png'

function Header() {

  return (
    <header className='header'>
      <a className='link' href='#'>
        <img src={logo} className='header__logo' alt='Логотип сайта' />
      </a>
      <ul className='header__navbar'>
        <li>
        <a className='header__link link' href='#'>Home</a>
        </li>
        <li>
        <a className='header__link link' href='#'>Product</a>
        </li>
        <li>
        <a className='header__link link' href='#'>About</a>
        </li>
        <li>
        <a className='header__link link' href='#'>Contact</a>
        </li>
      </ul>
      <button className='header__button button'>Login</button>
    </header >
  )
}

export default Header;
