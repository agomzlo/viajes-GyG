import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r}from"./index.DhYZZe0J.js";function c(){const s=r.useRef(null),[t,a]=r.useState(1);return r.useEffect(()=>{const l=setInterval(()=>{a(t===14?1:t+1)},3500);return s.current?.style.setProperty("background-image",`url(/heroImages/${t}.webp)`),()=>clearInterval(l)},[t]),e.jsxs("section",{ref:s,className:"bg-fixed bg-center bg-cover w-screen h-[200dvh] bg-black transition-all duration-1000",children:[e.jsx("div",{className:"relative flex flex-col h-full",children:e.jsxs("div",{className:"absolute inset-0 w-full h-full bg-black/50",children:[e.jsx("p",{className:"text-5xl text-white text-center px-4 z-[1] mt-[50dvh]",children:"Aqui empieza tu viaje..."}),e.jsx("p",{className:"text-5xl text-white text-center px-4 z-[1] mt-[75dvh]",children:"Selecciona un destino para comenzar..."})]})}),e.jsx("svg",{id:"Vector",width:"281",height:"1260",viewBox:"0 0 281 1260",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"absolute top-0 right-0 h-[200dvh] opacity-50",children:e.jsx("path",{d:"M467.593 0.71931C370.519 31.6173 -176.407 133.219 71.5929 232.719C319.593 332.219 307.093 310.219 140.093 408.219C-26.9071 506.219 167.093 560.219 167.093 560.219C167.093 560.219 393.592 641.219 196.593 735.219C-0.407082 829.219 180.574 937.719 180.574 937.719C224.604 976.281 306.857 1014.72 214.725 1073.22C122.593 1131.72 206.856 1169.13 214.725 1189.72C222.593 1210.31 214.725 1248.68 214.725 1248.68M214.725 1248.68L180.574 1219.18M214.725 1248.68L247.074 1219.18",stroke:"white",strokeWidth:"15",strokeLinecap:"round",strokeDasharray:"0,0,0,2223.829833984375",children:e.jsx("animate",{attributeType:"XML",attributeName:"stroke-dasharray",repeatCount:"1",dur:"5s",values:`0,0,0,2223.829833984375; 
          0,1111.9149169921875,1111.9149169921875,0; 
          2223.829833984375,0,0,0`,keyTimes:"0; 0.5; 1",fill:"freeze"})})})]})}export{c as default};