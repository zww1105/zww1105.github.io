import{f as c,d as e,r as s,u as h,j as t}from"./index-6rPm27hv.js";import{I as g}from"./IMG_0-C9Y4bmeC.js";const p="/assets/IMG_1-CCjF_kcP.jpg",x="/assets/IMG_2-B35RN0E4.jpg",m="/assets/IMG_3-BBHjNZ60.jpg",f="/assets/IMG_4-DuWjgP94.jpg",j="/assets/IMG_5-DBtbsl0J.jpg",w="/assets/IMG_6-LhcBh9us.jpg",u="/assets/IMG_7-BNrSl0Qm.jpg",v=c`
  body {
    margin: 0;
    background-color: #1a1721;
    color: white;
    overscroll-behavior: none;
    padding: 0;
    overflow-x: hidden;
  }
`,I=e.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`,G=e.div`
  overflow: visible;
  width: 100%;
  position: relative;
`,i=e.h1`
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
`,M=e.div`
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
`,B=()=>{const o=s.useRef(null),n=s.useRef(null),r=h(),a=[g,p,x,m,f,j,w,u];return t.jsxs(t.Fragment,{children:[t.jsx(v,{}),t.jsx(i,{className:"text",children:"Wann's Blog"}),t.jsx(i,{className:"outline","aria-hidden":"true",children:"Wann's Blog"}),t.jsx(i,{className:"filter","aria-hidden":"true",onClick:()=>r("/home"),children:"Wann's Blog"}),t.jsx(I,{ref:o,children:t.jsx(G,{ref:n,children:t.jsx(M,{children:a.map((d,l)=>t.jsx("img",{src:d,alt:""},l))})})})]})};export{B as default};
