import{j as e}from"./jsx-runtime.7faW4zRM.js";import{L as g}from"./Loading.CCuUmMil.js";import n from"./ShowErrorToast._m0pOSlH.js";import"./index.DhYZZe0J.js";function b({user:r,country:t}){const i=new URLSearchParams(location.search).get("empty"),d=new URLSearchParams(location.search).get("error"),c=a=>{const m=document.getElementById("imageChoose"),s=document.getElementById("image"),l=a.target?.files?.[0];if(l){const o=new FileReader;o.onload=x=>{m.style.display="none",s.classList.remove("hidden"),s.src=x.target?.result},o.readAsDataURL(l)}};return onsubmit=()=>{const a=document.getElementById("loadingContainer");a.classList.remove("hidden"),a.classList.add("flex","flex-col","items-center","justify-center")},e.jsxs("div",{className:"relative w-full h-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg px-4",children:[e.jsx("h2",{className:"text-4xl font-bold my-6 text-black uppercase text-center",children:"Agregar Ciudad"}),e.jsxs("form",{method:"POST",action:"/api/add-city",className:"flex flex-col w-full gap-4 p-4",children:[e.jsxs("span",{className:"flex flex-row justify-center items-center w-full gap-4",children:[e.jsxs("label",{className:"w-full h-auto aspect-video flex flex-col justify-center items-center text-black border border-black rounded-lg cursor-pointer hover:bg-gray-100",htmlFor:"imageFile",children:[e.jsx("span",{id:"imageChoose",children:"Elige una imagen"}),e.jsx("img",{id:"image",src:"",alt:"",className:"max-w-[300px] h-auto aspect-video rounded-lg hidden"})]}),e.jsx("input",{className:"p-2 rounded-md border hidden",type:"file",id:"imageFile",name:"image",onChange:a=>c(a)})]}),e.jsxs("span",{className:"flex flex-row justify-between items-center w-full gap-4",children:[e.jsx("label",{className:"text-black",htmlFor:"country",children:"Pais"}),e.jsx("input",{className:"p-2 rounded-md border bg-gray-100 text-gray-600",type:"text",id:"country",name:"country",value:t,readOnly:!0})]}),e.jsxs("span",{className:"flex flex-row justify-between items-center w-full gap-4",children:[e.jsx("label",{className:"text-black",htmlFor:"city",children:"Nombre"}),e.jsx("input",{className:"p-2 rounded-md border capitalize",type:"text",id:"city",name:"city",placeholder:"Madrid, Barcelona ..."})]}),e.jsxs("span",{className:"flex flex-col",children:[i&&e.jsx("span",{className:"text-red-500 text-xs",children:"Debes rellenar todos los campos"}),d&&e.jsx("span",{className:"text-red-500 text-xs",children:"Ha habido un error, intenta de nuevo"}),e.jsxs("span",{className:"flex flex-row justify-around",children:[e.jsx("a",{href:`/country/${t}`,className:"w-32 text-red-500 text-center text-xl font-semibold border border-red-500 px-2 py-1 mt-4 rounded-lg transition-all hover:text-white hover:bg-red-500 hover:scale-105",children:"Atrás"}),e.jsx("button",{type:"submit",className:"w-32 text-black text-xl font-semibold border border-black px-2 py-1 mt-4 rounded-lg transition-all hover:text-white hover:bg-black hover:scale-105",children:"Agregar"})]})]})]}),e.jsx("div",{id:"loadingContainer",className:"absolute inset-0 bg-gray-500/25 rounded-lg hidden",children:e.jsx(g,{className:`w-24 h-24 ${r.name==="Alejandro"?"text-alejandro-primary":""} ${r.name==="Gema"?"text-gema-primary":""}`})}),e.jsx(n,{message:"Error al agregar la ciudad",paramError:"empty"}),e.jsx(n,{message:"Ha habido un error",paramError:"error"})]})}export{b as default};
