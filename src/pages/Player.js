import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import YoutubeVideo from "../components/youtube";

const Player = () => {
  const navigate = useNavigate();
  return (
    <PlayContainer>
      <div className="player">
        <div className="backArrow">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <YoutubeVideo />
      </div>
    </PlayContainer>
  );
};

const PlayContainer = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .backArrow {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
        color: white;
      }
    }
  }
`;

export default Player;
