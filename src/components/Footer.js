import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
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
                            <li><Link to="/about">ABOUT</Link></li>
                            <Link to="/works">WORKS</Link>
                        </div>
                        {/*<div className="li_right">*/}
                        {/*    <li><Link to="/contact">CONTACT</Link></li>*/}
                        {/*    <li><Link to="/contact">HOME</Link></li>*/}
                        {/*</div>*/}
                    </ul>
                    <ul className="ul_social">
                        {/*<div className="li_left">*/}
                        {/*    <span> SOCIAL </span>*/}
                        {/*    <li><Link>BLOG</Link></li>*/}
                        {/*    <li><Link>BEHANCE</Link></li>*/}
                        {/*</div>*/}
                        {/*<div className="li_right">*/}
                        {/*    <li><Link>LINKDIN</Link></li>*/}
                        {/*    <li><Link>GITHUB</Link></li>*/}
                        {/*    <li><Link>GITBOOK</Link></li>*/}
                        {/*</div>*/}
                    </ul>
                </div>
            </div>
            <div className="footer_right">
                <div className="footer_right_box">
                    <img src="https://mongsukim.github.io/port3/img/footer_loop.gif" alt="footerimg"></img>
                </div>
            </div>
        </div>
        <div className="menu">
            <div className="menu--item">
                <div className="footer-menu--word">
                    <span>Everything will be done if you try hard.</span>
                    <span>Everything will be done if you try hard.</span>
                    <span>Everything will be done if you try hard.</span>
                    <span>Everything will be done if you try hard.</span>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;