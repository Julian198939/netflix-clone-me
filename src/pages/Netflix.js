import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TopNav from "../components/TopNav";
import Card from "../components/Card";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const movies = useSelector((state) => state.netflix.movies);
  const generesLoaded = useSelector((state) => state.netflix.generesLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (generesLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(movies)

  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E8%8A%B1%E6%9D%9F%E8%88%AC%E7%9A%84%E6%88%80%E6%84%9B-%E6%96%B0%E8%81%9E%E7%A8%BF%E5%8A%87%E7%85%A701-%E8%8A%B1%E6%9D%9F%E8%88%AC%E7%9A%84%E6%88%80%E6%84%9B-%E6%98%AF%E8%8F%85%E7%94%B0%E5%B0%87%E6%9A%89%E8%88%87%E6%9C%89%E6%9D%91%E6%9E%B6%E7%B4%94%E6%99%82%E9%A6%96%E6%AC%A1%E6%AD%A3%E5%BC%8F%E5%90%88%E4%BD%9C%E7%9A%84%E9%9B%BB%E5%BD%B1-1626763906.jpg"
          alt="hero image"
        />
        <div className="container">
          <div className="title">
            <h1>一場花束般的戀愛</h1>
            <p>
              在東京京王線明大前車站，因錯過末班車而偶然相遇的山音麥與八谷絹（有村架純
              ，因對音樂和電影等喜好太過相似，讓兩人瞬間墜入情網，在大學畢業後一邊打工一邊展開同居生活。不管生活中發生什麼事，兩人都以維持現狀為目標，同時努力尋找正式的工作，就這樣不知不覺過了5年……。
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/player")} className="playBtn">
              Play
            </button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies} />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 70vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 75px;
          background: -webkit-linear-gradient(#ddd, rgb(256, 256, 256));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }

      .playBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
        cursor: pointer;
      }
    }
  }
`;

export default Netflix;
