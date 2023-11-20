import React, {useState} from "react";
import Footer from '../Footer';
import Header from "../Header";
import { Link }from 'react-router-dom';

function Main() {
  const [inner,changeInner] = useState(['React']);
  const [thumb,thumbPlus] = useState(0);
  function changeTitle(){
    let newArray = [...inner];
    newArray[0] = ['HYESU'];
    changeInner( newArray );
  }

  return (
    <div id="wrap">
      <Header/>
      <section id="main">
        <header id="header-main">
          <section id="h_section">
          <i className="bg-home2 animated slideInUp ani-duration05 ani-delay015"></i>
          <i className="bg-home3 animated slideInUp"></i>
          <i className="bg-home4"></i>
          <i className="bg-home1 animated slideInRight ani-delay025"></i>
          <i className="bg-home5 paperplane"></i>
          <i className="bg-home6"></i>
          <i className="bg-home7"></i>
          <i className="bg-home8 d-none d-sm-block"></i>
          <i className="bg-home9"></i>
          <i className="bg-home10 d-none d-lg-block"></i>
          <i className="bg-home11 d-none d-lg-block"></i>
          <div className="title_box">
            <span className="title_b animated jackInTheBox ani-delay04">리액트 포트폴리오</span>

            <div className="main_box">
              <p className="block_ani_box"><h3>This site is</h3></p>
              <p className="block_ani_box2"><h3>Created with</h3></p>
              <p className="block_ani_box3"><h3>{inner}</h3></p>
            </div>
            <p>
              #프론트엔드개발자 #노란엄지를 눌러주세요!
              <span>
                <span onClick={ ()=>{ thumbPlus(thumb+1)  } }>👍</span> {thumb}
              <span onClick={ changeTitle }>
               </span>
              </span>
            </p>

            
            
          </div>
        </section>
        </header>
          <section id="section1">
            <div className="section1_bg"></div>
            <div className="container">
              <div className="sec1">
                <div className="profile_img">
                <img src='https://mongsukim.github.io/port3/img/profile_img.png' alt="" />
                </div>
                <div className="profile_info">
                  <span>HELLO!</span>
                  <h3>김혜수 입니다</h3>
                  <p className="profile_desc">
                    항상 사용자의 입장에서 개발하자! <br/>
                    저는 될 때까지 포기하지 않고 계속하자는 마인드를 가지고 있습니다.
                    심미적으로 뛰어나면서도 사용자 경험도 좋고, 성능도 뛰어난 웹사이트를 만드는 것이 저의 꿈입니다!
                  </p>
                  <a className="btn" target="_blank" href="https://github.com/mongsukim">Github</a>
                </div>
              </div>
            </div>
          </section>
          <section id="section2">
            <div className="section2_bg"></div>
            <span className="sec2_ani">WHAT I DO</span>
            <div className="sec2">
              <span>What I Do</span>
              <h3 className="title">MY SKILL</h3>
              <div className="skill_box">
                <div><img className="m1" src='https://mongsukim.github.io/port3/img/8_1.gif' alt="" /></div>
                <div><img className="m2" src='https://mongsukim.github.io/port3/img/8_2.gif' alt="" /></div>
                <div><img className="m3" src='https://mongsukim.github.io/port3/img/8_3.gif' alt="" /></div>
                <div><img className="m4" src='https://mongsukim.github.io/port3/img/8_4.gif' alt="" /></div>
              </div>
            </div>
          </section>
          <section id="section3">
      <div className="container">
        <div className="section3_left">
          <div className="left_box">
            <span className="works_tag">What I do</span>
            <div className="block_ani_box">
              <h4>MY WORKS</h4>
            </div>
            <div className="block_ani_box2">
              <p>
                프론트엔드 개발자가 알아야 할<br />
                필수 지식을 익혔습니다.
              </p>
            </div>
            <Link to="/works" className="btn">Go</Link>
          </div>
        </div>
        <div className="section3_right">
          <div className="one_loop">
            <span>WEBSITE</span>
            <img src='https://mongsukim.github.io/port3/img/one_loop.svg' alt="" />
          </div>
          <div className="c1">
            <div className="box">
            <img src="https://mongsukim.github.io/port3/img/main_1.jpg" alt="" />
            </div>
            <div className="box">
            <img src="https://mongsukim.github.io/port3/img/main_2.jpg" alt="" />
            </div>
          </div>
          <div className="c2">
            <div className="box">
            <img src='https://mongsukim.github.io/port3/img/main_5.jpg' alt="" />
            </div>
            <div className="box">
            <img src='https://mongsukim.github.io/port3/img/main_3.jpg' alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
      </section>
      <Footer/>
    </div>
  );
}
export default Main;