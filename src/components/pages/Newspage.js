import React from "react";
import Footer from '../Footer';
import Header from "../Header";
import Categories from '../Categories';
import NewsList from '../NewsList';

const NewsPage = ({match}) => {
  //카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = match.params.category || 'all';

  return (
    <div id="wrap">
      <Header/>
      <section id="main">
        <div className="header_container">
          <span className="sub_title">Today's News</span>
          <h2>NEWS</h2>
          <p className="header_desc">
          AXIOS 로 NEWS API 가져오기
          </p>
          <div className="animal">
            <img src="img/g2.svg" alt="" />
          </div>
          <i className="bg-item2 paperplane2"></i>
          <i className="bg-item3"></i>
          <i className="bg-item4"></i>
        </div>
        <>
        <Categories/>
        <NewsList category={category}/>
        </>
      </section>
      
    </div>
  );
};
export default NewsPage;