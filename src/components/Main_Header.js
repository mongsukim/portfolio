import React from "react";
import { Link } from "react-router-dom";

function MainHeader({ info }) {
  return (
    <header id="main_header">
      <div className="header__inner">
        <div className="header__inner__port">
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="header__inner__logo">
          <Link to="/">REACT PORT</Link>
        </div>
        <div className="header__inner__menu">
          <Link to="#">
            <span className="sr-only">menu</span>
          </Link>
        </div>
      </div>
      <div className="header__nav demo">
        <ul>
          <li>
            <Link to="/works">SITE</Link>
          </li>
          <li>
            <Link to="/cssani">CSS/ANI</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">회원가입</Link>
          </li>
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/">게시판</Link>
          </li>
        </ul>
      </div>
    
    </header>
  );
}
export default MainHeader;