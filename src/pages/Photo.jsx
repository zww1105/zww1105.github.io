import { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import IMG0 from "../assets/photos/IMG_0.jpg";
import IMG1 from "../assets/photos/IMG_1.jpg";
import IMG2 from "../assets/photos/IMG_2.jpg";
import IMG3 from "../assets/photos/IMG_3.jpg";
import IMG4 from "../assets/photos/IMG_4.jpg";
import IMG5 from "../assets/photos/IMG_5.jpg";
import IMG6 from "../assets/photos/IMG_6.jpg";
import IMG7 from "../assets/photos/IMG_7.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #1a1721;
    color: white;
    overscroll-behavior: none;
    padding: 0;
    overflow-x: hidden;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Content = styled.div`
  overflow: visible;
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  position: fixed;
  top: 50vh;
  font-weight: 900;
  font-style: normal;
  font-size: 8vw;
  text-align: center;
  width: 100%;
  transform: translateY(-100%);
  z-index: 2;
  color: white;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: white;
  z-index: -2;

  &.outline {
    position: fixed;
    color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: white;
    z-index: 2;
  }

  &.filter {
    position: fixed;
    mix-blend-mode: screen;
    color: #804691;
    z-index: 2;
    cursor: pointer;
  }
`;

const ImagesContainer = styled.div`
  padding-top: 60vh;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 150vh;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(20, 2%);
  grid-template-rows: repeat(30, 3%);
  justify-content: center;
  justify-items: center;
  align-items: center;
  z-index: 1;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:nth-child(1) {
      grid-area: 1/1/6/8;
    }
    &:nth-child(2) {
      grid-area: 3/12/8/20;
    }
    &:nth-child(3) {
      grid-area: 9/5/13/15;
    }
    &:nth-child(4) {
      grid-area: 14/1/18/8;
    }
    &:nth-child(5) {
      grid-area: 16/12/20/19;
    }
    &:nth-child(6) {
      grid-area: 20/2/25/9;
    }
    &:nth-child(7) {
      grid-area: 22/11/26/20;
    }
    &:nth-child(8) {
      grid-area: 27/5/31/15;
    }
  }
`;

const Photo = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const images = [IMG0, IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7];

  return (
    <>
      <GlobalStyle />
      <Title className="text">Wann&apos;s Blog</Title>
      <Title className="outline" aria-hidden="true">
        Wann&apos;s Blog
      </Title>
      <Title
        className="filter"
        aria-hidden="true"
        onClick={() => navigate("/home")}
      >
        Wann&apos;s Blog
      </Title>

      <Wrapper ref={wrapperRef}>
        <Content ref={contentRef}>
          <ImagesContainer>
            {images.map((image, index) => (
              <img key={index} src={image} alt="" />
            ))}
          </ImagesContainer>
        </Content>
      </Wrapper>
    </>
  );
};

export default Photo;
