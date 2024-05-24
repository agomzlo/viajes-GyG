import{j as e}from"./jsx-runtime.7faW4zRM.js";import"./index.DhYZZe0J.js";function x({country:c,city:l,currentMonument:a,user:s,postcards:o}){const r=o.find(d=>d.from===Number(s.id)),t=o.find(d=>d.to===Number(s.id));return e.jsxs("section",{children:[e.jsxs("h2",{className:"font-bold text-2xl md:text-3xl mt-4",children:["Postales de ",a.name,":"]}),e.jsxs("span",{className:"flex flex-col mt-1 sm:grid sm:grid-cols-2 font-bold text-lg md:text-xl gap-2",children:[e.jsx("span",{className:"flex flex-col justify-center items-center border-2 border-black/25 mx-2 mt-1 rounded-lg aspect-video p-2",children:r?e.jsx("a",{href:`/${encodeURI(c)}/${encodeURI(l)}/${encodeURI(a.name)}/${encodeURI(String(r.from))}/${encodeURI(String(r.to))}/postcard`,className:"transition-all hover:scale-105",children:e.jsxs("picture",{className:"relative w-full h-full aspect-video",children:[e.jsx("img",{src:r.image,alt:"Postal enviada",className:"w-full h-full object-cover rounded-lg"}),e.jsx("div",{className:"absolute inset-0 grid place-content-center border border-black m-5 uppercase",children:e.jsxs("span",{className:"flex flex-col items-end scale-75",children:[e.jsx("p",{className:"text-black text-6xl sm:text-8xl [text-shadow:1px_1px_white]",children:a.name}),e.jsx("p",{className:"text-black text-3xl sm:text-5xl [text-shadow:1px_1px_white]",children:l})]})})]})}):e.jsx("a",{href:`/country/${c}/city/${l}/monument/${a.name}/send-postcard`,className:`font-bold px-3 py-1 rounded-lg border transition-all uppercase hover:scale-105 hover:shadow-lg ${s.name==="Alejandro"?"text-alejandro-primary bg-alejandro-secondary border-alejandro-primary hover:text-alejandro-secondary hover:bg-alejandro-primary":""} ${s.name==="Gema"?"text-gema-primary bg-gema-secondary border-gema-primary hover:text-gema-secondary hover:bg-gema-primary":""}`,children:"Enviar postal"})}),e.jsx("span",{className:"flex flex-col justify-center items-center border-2 border-black/25 mx-2 mt-1 rounded-lg aspect-video p-2",children:t?e.jsx("a",{href:`/${encodeURI(c)}/${encodeURI(l)}/${encodeURI(a.name)}/${encodeURI(String(t.from))}/${encodeURI(String(t.to))}/postcard`,className:"transition-all hover:scale-105",children:e.jsxs("picture",{className:"relative w-full h-full aspect-video transition-all hover:scale-105",children:[e.jsx("img",{src:t.stampImage,alt:"Postal enviada",className:"w-full h-full object-cover rounded-lg"}),e.jsx("div",{className:"absolute inset-0 grid place-content-center border border-black m-5 uppercase",children:e.jsxs("span",{className:"flex flex-col items-end scale-75",children:[e.jsx("p",{className:"text-black/50 text-6xl sm:text-8xl",children:a.name}),e.jsx("p",{className:"text-black/75 text-3xl sm:text-5xl",children:l})]})})]})}):e.jsx("p",{children:"Aquí irá la postal recibida"})})]})]})}export{x as default};