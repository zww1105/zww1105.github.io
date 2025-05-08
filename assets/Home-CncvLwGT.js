import{r as s,j as e,N as g,P as a,L as k}from"./index-6rPm27hv.js";import{a as f}from"./request-DRXHMyPK.js";import{I as q}from"./IMG_0-C9Y4bmeC.js";const l=s.memo(({post:t})=>e.jsx("li",{className:"gap-8 border-b",children:e.jsx("div",{className:"py-8 space-y-5",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"text-zinc-400 text-sm w-24",children:new Date(t.published).toLocaleDateString()}),e.jsx("h3",{className:"text-2xl",children:e.jsx(g,{to:`/detail/${t.slug}`,className:"text-zinc-800 hover:text-pink-500 transition-colors duration-300",children:t.title})})]})})}));l.displayName="PostItem";l.propTypes={post:a.shape({published:a.string.isRequired,slug:a.string.isRequired,title:a.string.isRequired}).isRequired};const c=s.memo(({isHovered:t,setIsHovered:o,avatarRef:i})=>e.jsxs(g,{to:"/about",className:"group relative",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[e.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"}),e.jsxs("div",{className:"relative",children:[e.jsx("img",{ref:i,src:q,className:`
          inline-block size-32 rounded-full
          transition-all duration-500 ease-in-out
          transform
          ${t?"scale-95 rotate-3":"scale-100 rotate-0"}
          hover:shadow-lg
          border-2 border-transparent
          group-hover:border-pink-500
        `,alt:"用户头像"}),e.jsx("div",{className:`
          absolute inset-0 rounded-full
          bg-gradient-to-r from-pink-400/10 to-purple-400/10
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          mix-blend-overlay
        `})]})]}));c.displayName="AvatarComponent";c.propTypes={isHovered:a.bool.isRequired,setIsHovered:a.func.isRequired,avatarRef:a.object.isRequired};const w=()=>{const[t,o]=s.useState([]),[i,d]=s.useState(!1),[u,h]=s.useState(null),[v,j]=s.useState(!1),[m,p]=s.useState(null),b=s.useRef(null),n=s.useRef(!1),x=s.useCallback(async()=>{if(!n.current){d(!0),p(null),n.current=!0;try{const[r,y]=await Promise.all([f.get("/posts"),f.get("/content/slogan")]),{data:N}=r.data;o(N);const R=y.data.data.slogan.find(S=>S.show);h(R)}catch(r){console.error("Error fetching data:",r),p("加载数据失败，请稍后重试")}finally{d(!1),n.current=!1}}},[]);return s.useEffect(()=>{x()},[x]),m?e.jsx("div",{className:"max-w-screen-md m-auto text-center text-red-500 py-8",children:m}):e.jsxs("div",{className:"max-w-screen-md m-auto",children:[e.jsxs("div",{className:"flex flex-col gap-8 items-center justify-center mb-8",children:[e.jsx(c,{isHovered:v,setIsHovered:j,avatarRef:b}),u&&e.jsx("div",{className:"mb-20",children:u.title})]}),i&&!t.length?e.jsx("div",{className:"flex justify-center items-center h-40",children:e.jsx(k,{})}):e.jsx("ul",{children:t.map(r=>e.jsx(l,{post:r},r.slug))})]})},H=s.memo(w);export{H as default};
