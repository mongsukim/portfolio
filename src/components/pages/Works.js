import React from "react";
import Footer from '../Footer';
import Header from "../Header";


function WorksText({tag,title,desc,image}){
  return(
    <div className="site">
      <div className="left">
        <span className="works_tag">{tag}</span>
        <h3 className="works_title">{title}</h3>
        <p className="works_desc">{desc}</p>
      </div>
      <div className="right">
        <div className="imgbox">
          <img src={image} alt={title}/>
        </div>
      </div>
    </div>
  )
}
const workInner = [
  {
    id:"1",
    tag:"HTML/CSS",
    title:"Web Standard",
    desc:"웹표준 지침서를 준수한 사이트입니다. 대체 텍스트를 사용하여, 모든 사용자의 접근성을 고려했습니다. 아코디언메뉴, 탭메뉴 등을 jQuery로 코딩하여 만들었습니다.slick, light box 제이쿼리 플러그인을 사용하여 배너와 이미지에 동적 효과를 주었습니다.",
    image:"https://mongsukim.github.io/port3/img/main_1.jpg",
  },
  {
    id: "2",
    tag:"HTML/CSS",
    title:"RESPONSIVE WEB",
    desc:"미디어쿼리를 이용하여 반응형 웹사이트를 코딩했습니다",
    image:"https://mongsukim.github.io/port3/img/main_4.jpg",
  },
  {
    id:"3",
    tag:"HTML/CSS/JAVASCRIPT/JQUERY",
    title:"SAMYANG WEB / MOBILE",
    desc:"삼양식품 웹사이트 / 모바일 앱을 코딩했습니다. slick.js 사용으로 슬라이드 배너, tab메뉴를 구현했습니다.모달창으로 Youtube Play를 구현했습니다.",
    image:"https://mongsukim.github.io/port3/img/main_3.jpg",
  },
  {
    id:"4",
    tag:"HTML/CSS/JAVASCRIPT/JQUERY",
    title:"MEGABOX",
    desc:"영화 사이트를 코딩했습니다. 반응형 사이트 작업을 하였습니다",
    image:"https://mongsukim.github.io/port3/img/main_5.jpg"
  },
  {
    id:"5",
    tag:"HTML/CSS/JAVASCRIPT/JQUERY",
    title:"SUBWAY MOBILE",
    desc:" 서브웨이 모바일웹을 코딩했습니다. 슬라이드 배너, 탭메뉴를 구현했습니다.",
    image:"https://mongsukim.github.io/port3/img/main_2.jpg"
  },
]



function Works(){
  return(
    <div id="wrap">
    
      <Header/>
      <div id="loading1" className="active"></div>
      <div id="loading2" className="active"></div>
      <div id="loading3" className="active"></div>
      <div id="loading4" className="active"></div>
      <div id="loading5" className="active"></div>

      <section id="main">
        <div className="header_container">
          <span className="sub_title">Only my works</span>
          <h2>WORKS</h2>
          <p class="header_desc">
          HTML, CSS, JAVASCRIPT로 만든 웹사이트 입니다.
          </p>
          <div className="animal">
            <img src="https://mongsukim.github.io/port3/img/g2.svg" alt="" />
          </div>
          <i className="bg-item2 paperplane2"></i>
          <i className="bg-item3"></i>
          <i className="bg-item4"></i>
        </div>
        <div class="container">
        {workInner.map((txt)=> (
          <WorksText
          title={txt.title}
          desc={txt.desc}
          image={txt.image}
          key={txt.id}/>
        ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}
export default Works;