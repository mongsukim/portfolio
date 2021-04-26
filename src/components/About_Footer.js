import React from 'react';
import { Link } from 'react-router-dom';

function AboutFooter() {
  return (   
  <footer id="footer">
    <div className="container1">
      <div className="footer_left">
        <span className="s_title">Now, I'm Ready to Work!</span>
        <p className="big_title">Get in Touch</p>
        <div className="underline"></div>
        <div className="ul_box">
        <ul className="ul_sitemap">
            <div className="li_left">
            <span> SITEMAP </span>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/works">WORKS1</Link></li>
            <Link to="/cssani">WORKS2</Link>
            </div>
            <div className="li_right">
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            </div>
        </ul>
        <ul className="ul_social">
            <div className="li_left">
            <span> SOCIAL </span>
            <li><Link to="">BLOG</Link></li>
            <li><Link to="">BEHANCE</Link></li>
            </div>
            <div className="li_right">
            <li>LINKDIN</li>
            <li>GITHUB</li>
            <li>GITBOOK</li>
            </div>
        </ul>
        </div>
        <p>Copyright 2021 ⓒ Kim Hye Su. All rights reserved.</p>
        </div>
      <div className="footer_right">
        <div className="profile_box">
          <img src='https://mongsukim.github.io/port3/img/profile.jpg' alt="" />
        </div>
      </div>
    </div>
  </footer>
  );
}

export default AboutFooter;