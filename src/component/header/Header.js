import React from 'react';
import './Header.css';
import logo from '../../image/Screenshot1.png';

function Header() {
  return (
    <header className="container">
      <div className="left">
        <img className='logo' src={logo} alt="logo" />
        <h1 className="title">StarCoders</h1>
      </div>
      <div className='labeling'>
        <h1>Tokenization with C & C++</h1>
      </div>
      <div className="right">
        <a href="#Home" className="link">Home</a>
        <a href="#About" className="link">About</a>
      </div>
    </header>
  );
}
export default Header;