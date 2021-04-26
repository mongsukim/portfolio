import React from "react";
import AboutFooter from '../About_Footer';
import Header from "../Header";

function About(){
  return(
    <div id="wrap">
      <Header/>
      <section id="about_main">
      <div className="header_container">
        <span className="sub_title">Only my works</span>
        <h2>ABOUT ME</h2>
        <p class="header_desc">
        저의 이야기를 소개합니다
        </p>
        <div className="animal">
        <img src='https://mongsukim.github.io/port3/img/g2.svg' alt="" />

        </div>
        <i className="bg-item2 paperplane2"></i>
        <i className="bg-item3"></i>
        <i className="bg-item4"></i>
      </div>
        <i className="character"></i>
        <div className="container">
          <div className="about_desc">
            <div className="star">
            </div>
            <p className="about_p">Effort is the</p>
            <svg id="redline">
              <path stroke-width='8' fill='none' stroke="#c01b1b" 
                    d="M 0,0 C 0,10 200,10 300,1 " />
            </svg>
            <p className="about_p">best way to</p>
            <p className="about_p">realizing your</p>
            <p className="about_p">
              Dreams. <span className="about_p_span"> “노력은 꿈을 실현하는 최고의 방법이다.” </span>
            </p>
          </div>
        </div>
        <div className="menu">
          <div className="menu--item">
            <div className="menu--word">
              <span>Everything will be done if you try hard.</span>
              <span>Everything will be done if you try hard.</span>
              <span>Everything will be done if you try hard.</span>
              <span>Everything will be done if you try hard.</span>
            </div>
          </div>
        </div>
        <div className="about_site">
          <div className="about_left">
              “노력은 꿈을 실현하는 최고의 방법이다.”, “열심히 노력한다면, 모든 것은 성취될 것이다.”
              항상 가슴 속에 새기고 되짚어보는 말입니다. 프론트엔드 개발자가 되기 위한 공부를
              계속하면서 낯선 개념들과 새로 알아가야 할 개발지식들이 걷잡을 수 없이 많다는 생각에
              막막한 느낌이 든 적이 많습니다. 꾸준히 개발공부하는 환경을 위해 대학 앞의 스터디카페에서
              몇 달간 아침 10시 - 밤 9시까지의 패턴을 지키며 살아보니
            </div>
          <div className="about_right">
              세상에 결코 쉽게 얻어지는 것은 없구나 느낍니다. 그럼에도 계속 공부하는 것은 웹사이트를
              구현하고, 코드가 실현될때 느껴지는 성취감과 기쁨 때문입니다. 매일의 노력이 쌓이면
              개발자라는 꿈이 어느새 이루어질 것이라 믿습니다. 지치지 않고 매일 꾸준히 묵묵히,
              어렵더라도 포기하지 않고 방법을 찾아나가는 것이 진정한 개발자의 자세라고 생각합니다.
              저의 진심이 닿았으면 좋겠습니다.
            </div>
        </div>
        <div className="about_site clearfix">
          <div className="about_left">
              <div className="about_imgbox1">
                <img src='https://mongsukim.github.io/port3/img/me_1.png' alt="" />
              </div>
              <div className="about_imgbox2">
                <img src='https://mongsukim.github.io/port3/img/me_2.png' alt="" />
              </div>
            </div>
          <div className="about_right">
              <span className="starbox1">
                <img className="star1 animate__animated animate__tada animate__infinite" 
                src='https://mongsukim.github.io/port3/img/3_2.png' alt="" />

               </span>
              <span className="starbox2">
              <img className="star1 animate__animated animate__tada animate__infinite" 
                src='https://mongsukim.github.io/port3/img/3_2.png' alt="" /></span>
              <p className="about_right_desc">I WANT TO WORK FRONT_END DEV</p>
            </div>
        </div>
      </section>
      <AboutFooter/>
    </div>
  );
}
export default About;