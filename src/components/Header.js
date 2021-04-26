import React from "react";
import { Link } from "react-router-dom";

function Header({ info }) {
  return (
    <header id="header">
      <div className="header__inner">
        <div className="header__inner__port">
          <Link to="/">Publishing</Link>
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
            <Link to="/">MAIN</Link>
          </li>
          <li>
            <Link to="/works">SITE</Link>
          </li>
          <li>
            <Link to="/cssani">CSS/ANI</Link>
          </li>
          
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
        {/* <ul>
          <li>
            <Link to="/port3">회원가입</Link>
          </li>
          <li>
            <Link to="/port3">로그인</Link>
          </li>
          <li>
            <Link to="/port3">게시판</Link>
          </li>
        </ul> */}
      </div>
      
    
    </header>
  );
}
export default Header;