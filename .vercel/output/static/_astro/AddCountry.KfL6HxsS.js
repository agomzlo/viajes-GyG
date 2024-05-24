import{j as e}from"./jsx-runtime.7faW4zRM.js";import{L as c}from"./Loading.CCuUmMil.js";import m from"./ShowErrorToast._m0pOSlH.js";import"./index.DhYZZe0J.js";function u({user:t}){const o=new URLSearchParams(location.search).get("empty"),n=a=>{const i=document.getElementById("imageChoose"),r=document.getElementById("image"),s=a.target?.files?.[0];if(s){const l=new FileReader;l.onload=d=>{i.style.display="none",r.classList.remove("hidden"),r.src=d.target?.result},l.readAsDataURL(s)}};return onsubmit=()=>{const a=document.getElementById("loadingContainer");a.classList.remove("hidden"),a.classList.add("flex","flex-col","items-center","justify-center")},e.jsxs("div",{className:"relative flex flex-col items-center justify-center bg-white shadow-lg rounded-lg px-4",children:[e.jsx("h2",{className:"text-4xl font-bold my-6 text-black uppercase text-center",children:"Agregar Pais"}),e.jsxs("form",{method:"POST",action:"/api/add-country",className:"flex flex-col w-full gap-4 p-4",children:[e.jsxs("span",{className:"flex flex-row justify-center items-center w-full gap-4",children:[e.jsxs("label",{className:"w-full h-auto aspect-video flex flex-col justify-center items-center text-black border border-black rounded-lg cursor-pointer hover:bg-gray-100",htmlFor:"imageFile",children:[e.jsx("span",{id:"imageChoose",children:"Elige una imagen"}),e.jsx("img",{id:"image",src:"",alt:"",className:"max-w-[300px] h-auto aspect-video rounded-lg hidden"})]}),e.jsx("input",{className:"p-2 rounded-md border hidden",type:"file",id:"imageFile",name:"image",onChange:a=>n(a)})]}),e.jsxs("span",{className:"flex flex-row justify-between items-center w-full gap-4",children:[e.jsx("label",{className:"text-black",htmlFor:"country",children:"Nombre"}),e.jsx("input",{className:"p-2 rounded-md border capitalize",type:"text",id:"country",name:"country",placeholder:"España, Francia, ..."})]}),e.jsxs("span",{className:"flex flex-col",children:[o&&e.jsx("span",{className:"text-red-500 text-xs",children:"Debes rellenar todos los campos"}),e.jsxs("span",{className:"flex flex-row justify-around",children:[e.jsx("a",{href:"/",className:"w-32 text-red-500 text-center text-xl font-semibold border border-red-500 px-2 py-1 mt-4 rounded-lg transition-all hover:text-white hover:bg-red-500 hover:scale-105",children:"Atrás"}),e.jsx("button",{type:"submit",className:"w-32 text-black text-xl font-semibold border border-black px-2 py-1 mt-4 rounded-lg transition-all hover:text-white hover:bg-black hover:scale-105",children:"Agregar"})]})]})]}),e.jsx("div",{id:"loadingContainer",className:"absolute inset-0 bg-gray-500/25 rounded-lg hidden",children:e.jsx(c,{className:`w-24 h-24 ${t.name==="Alejandro"?"text-alejandro-primary":""} ${t.name==="Gema"?"text-gema-primary":""}`})}),e.jsx(m,{message:"Error al agregar el pais",paramError:"empty"})]})}export{u as default};
