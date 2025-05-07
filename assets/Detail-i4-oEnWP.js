import{d as m,j as t,u as x,a as f,r as e,L as h,P as s}from"./index-l25q8P5u.js";import{a as y}from"./request-DRXHMyPK.js";import{P as w}from"./PostContent-DaxBqWOh.js";const v=()=>t.jsx(g,{children:t.jsx("div",{className:"styled-wrapper",children:t.jsx("button",{className:"button",children:t.jsxs("div",{className:"button-box",children:[t.jsx("span",{className:"button-elem",children:t.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"arrow-icon",children:t.jsx("path",{fill:"black",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})}),t.jsx("span",{className:"button-elem",children:t.jsx("svg",{fill:"black",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"arrow-icon",children:t.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})})]})})})}),g=m.div`
  .styled-wrapper .button {
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
    margin: 0;
    overflow: hidden;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    border: 0;
  }

  .styled-wrapper .button:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 7px;
    border: 2px solid black; /* Update dynamically for light/dark mode */
    transition: opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
      transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
  }

  .styled-wrapper .button:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 7px;
    border: 4px solid #ec4899;
    transform: scale(1.3);
    transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
      transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
  }

  .styled-wrapper .button:hover:before,
  .styled-wrapper .button:focus:before {
    opacity: 0;
    transform: scale(0.7);
    transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
      transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .styled-wrapper .button:hover:after,
  .styled-wrapper .button:focus:after {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
      transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
  }

  .styled-wrapper .button-box {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
  }

  .styled-wrapper .button-elem {
    display: block;
    width: 16px;
    height: 16px;
    margin: 12px 12px 0 12px;
    transform: rotate(360deg);
    fill: #f0eeef;
  }

  .styled-wrapper .button:hover .button-box,
  .styled-wrapper .button:focus .button-box {
    transition: 0.4s;
    transform: translateX(-40px);
  }
`,j=()=>{const n=x(),{id:r}=f(),[i,u]=e.useState(null),[b,l]=e.useState(!0),[c,a]=e.useState(null),p=e.useCallback(async()=>{if(!r){a("文章ID不能为空");return}l(!0),a(null);try{const o=await y.get(`/posts/${r}`);u(o.data.data)}catch(o){console.error("Error fetching data:",o),a("加载文章失败，请稍后重试")}finally{l(!1)}},[r]);e.useEffect(()=>{p()},[p]);const d=e.useCallback(()=>{n(-1)},[n]);return c?t.jsxs("div",{className:"max-w-screen-md m-auto text-center py-8",children:[t.jsx("div",{className:"text-red-500 mb-4",children:c}),t.jsx("button",{onClick:d,className:"text-pink-500 hover:text-pink-600 transition-colors",children:"返回"})]}):t.jsxs("div",{className:"max-w-screen-md m-auto relative",children:[t.jsx("div",{className:"absolute -top-16 left-0 sm:-top-2 sm:-left-32 cursor-pointer",onClick:d,children:t.jsx(v,{})}),b?t.jsx("div",{className:"flex justify-center items-center h-40",children:t.jsx(h,{})}):i?t.jsx(w,{post:i}):t.jsx("div",{className:"text-center py-8 text-gray-500",children:"未找到文章内容"})]})};j.propTypes={post:s.shape({title:s.string,content:s.string,published:s.string})};export{j as default};
