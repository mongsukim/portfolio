import React from "react";
import Footer from '../Footer';
import Header from "../Header";
import { Link }from 'react-router-dom';


function CSSani(){
  return(
    <div id="wrap">
    <Header/>
    <section id="main">
    <div className="header_container">
        <span className="sub_title">Only my works</span>
        <h2>CSS / ANI</h2>
        <p class="header_desc">
        CSS로 제작한 애니메이션과 바닐라 자바스크립트 작업입니다.
        </p>
        <div className="animal">
          <img src='https://mongsukim.github.io/port3/img/g2.svg' alt="" />
        </div>
        <i className="bg-item2 paperplane2"></i>
        <i className="bg-item3"></i>
        <i className="bg-item4"></i>
      </div>
      <div className="js_site">
        <div className="js_left">
          <div className="ani_box">
            <div className="s3_circle cir1">
              <div className="cir">
                <div className="cir_div"></div>
              </div>
              <div className="cir">
                <div className="cir_div"></div>
              </div>
              <div className="cir">
                <div className="cir_div"></div>
              </div>
              <div className="cir">
                <div className="cir_div"></div>
              </div>
              <div className="cir">
                <div className="cir_div"></div>
              </div>
            </div>
            <span className="works_tag">#ANIMATION</span>
            <h3 className="works_title">Tail Animation</h3>
            <p className="works_desc">
              애니메이션 keyframe으로 대각선으로 방향을 설정하고, 각 요소에 width, height, opacity를
              준 후 delay값으로 방향에 따라 속도를 제어 하였습니다.
            </p>
          </div>
          <div className="ani_box">
            <div class="s3_circle rainbow-container">
              <div class="color">
                <div class="red"></div>
              </div>
              <div class="color">
                <div class="orange"></div>
              </div>
              <div class="color">
                <div class="yellow"></div>
              </div>
              <div class="color">
                <div class="green"></div>
              </div>
              <div class="color">
                <div class="blue"></div>
              </div>
              <div class="color">
                <div class="purple"></div>
              </div>
            </div>
            <span className="works_tag">#ANIMATION</span>
            <h3 className="works_title">LOADING Animation</h3>
            <p className="works_desc">
            slide라는 keyframe을 만들고, 10%~ 37% 까지는 float:left, 63%~90%까지는 float:right로
              설정합니다. 각각의 박스에 slide keyframe을 지정하고 지속시간은 2.5초로 동일하게 주지만
              animation-delay값은 0.1초씩 차이를 주었습니다.
            </p>
          </div>
          <div className="ani_box">
            <div className="game">
            <a target="_blank" href="https://codepen.io/mongsukim/pen/QWGQzJE">
              <img src='https://mongsukim.github.io/port3/img/game1.jpeg' alt="" /></a>
            </div>
            <span className="works_tag">#JAVASCRIPT</span>
            <h3 className="works_title">CARD GAME</h3>
            <p className="works_desc">자바스크립트로 구현한 카드 뒤집기 게임입니다.</p>
          </div>
        </div>
        <div className="js_right">
          <div className="ani_box">
            <div className="s3_circle cir2">
              <div className="cube">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
                <div className="five"></div>
                <div className="six"></div>
              </div>
            </div>
            <span className="works_tag">#ANIMATION</span>
            <h3 className="works_title">Cube Animation</h3>
            <p className="works_desc">
              애니메이션 keyframe으로 대각선으로 방향을 설정하고, 각 요소에 width, height, opacity를
              준 후 delay값으로 방향에 따라 속도를 제어 하였습니다.
            </p>
          </div>
          <div className="ani_box">
            <div className="s3_circle cir4">
              <div className="heart"></div>
            </div>
            <span className="works_tag">#HTML #CSS</span>
            <h3 className="works_title">Heart Animation</h3>
            <p className="works_desc">
              네모 모양과 before, after 가상요소로 원을 두개 만들어 합쳐 하트를 만듭니다. keyframe
              transform: scale을 이용해 크기를 줄였다가 커지게 만들었습니다.
            </p>
          </div>
          <div className="ani_box">
            <div className="game">
            <a target="_blank" href="https://codepen.io/mongsukim/pen/Jjbpzdd">
              <img src='https://mongsukim.github.io/port3/img/game2.png' alt="" />
            </a>
            </div>
            <span className="works_tag">#JAVASCRIPT</span>
            <h3 className="works_title">Minesweeper GAME</h3>
            <p className="works_desc">자바스크립트로 구현한 지뢰찾기 게임입니다.</p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
  );
}
export default CSSani;