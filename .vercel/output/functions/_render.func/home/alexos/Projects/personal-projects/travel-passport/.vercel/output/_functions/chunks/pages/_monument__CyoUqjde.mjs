/* empty css                             */
import { c as createComponent, r as renderTemplate, g as renderComponent, e as createAstro, m as maybeRenderHead, d as addAttribute } from '../astro_DsCilHv5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as db, C as Cities, M as Monuments, P as PostCard, b as $$LeftIcon, c as $$RightIcon, $ as $$Layout } from './_city__CQmQ0kLy.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import confetti from 'canvas-confetti';
import { useState, useEffect } from 'react';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

function MonumentVisited({ id, visited, setVisited, user }) {
  const updateMonumentVisited = async () => {
    const response = await fetch(`/api/update-monument-visited`, {
      method: "POST",
      body: JSON.stringify({
        monumentId: id
      })
    });
    if (response.ok) {
      setVisited(true);
      confetti({
        particleCount: 200,
        spread: 200
      });
    }
  };
  return !visited && /* @__PURE__ */ jsx(
    "button",
    {
      onClick: updateMonumentVisited,
      className: `absolute right-0 text-sm my-1 px-2 font-bold rounded-full border transition-all uppercase hover:scale-105 hover:shadow-lg ${user.name === "Alejandro" && "text-alejandro-primary bg-alejandro-secondary border-alejandro-primary hover:text-alejandro-secondary hover:bg-alejandro-primary"} ${user.name === "Gema" && "text-gema-primary bg-gema-secondary border-gema-primary hover:text-gema-secondary hover:bg-gema-primary"}`,
      children: "Visitado"
    }
  );
}

function MonumentInformation({ currentMonument, user }) {
  const [monumentVisited, setMonumentVisited] = useState(currentMonument.visited);
  const [monumentVisitedAt, setMonumentVisitedAt] = useState(currentMonument.visitedAt);
  useEffect(() => {
    setMonumentVisitedAt(/* @__PURE__ */ new Date());
  }, [monumentVisited]);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "font-bold text-2xl md:text-3xl mt-4", children: "Información:" }),
    /* @__PURE__ */ jsxs("span", { className: "relative flex flex-col mx-2 mt-1 sm:grid sm:grid-cols-2 font-bold text-lg md:text-xl", children: [
      monumentVisited ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { children: "Estado: Visitado" }),
        /* @__PURE__ */ jsxs("p", { className: "capitalize", children: [
          "Fecha: ",
          monumentVisitedAt?.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "2-digit"
          })
        ] })
      ] }) : /* @__PURE__ */ jsx("span", { children: "Estado: Sin Visitar" }),
      /* @__PURE__ */ jsx(
        MonumentVisited,
        {
          id: currentMonument.id,
          visited: monumentVisited,
          setVisited: setMonumentVisited,
          user
        }
      )
    ] }),
    monumentVisited && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 -right-3 bg-green-500 text-white px-2 py-1 rounded-md uppercase animate-fade-in-down", children: "Visitado" })
  ] });
}

function MonumentStamps({ country, city, currentMonument, user, postcards }) {
  const sendedPostcard = postcards.find((postcard) => postcard.from === Number(user.id));
  const receivedPostcard = postcards.find((postcard) => postcard.to === Number(user.id));
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("h2", { className: "font-bold text-2xl md:text-3xl mt-4", children: [
      "Postales de ",
      currentMonument.name,
      ":"
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "flex flex-col mt-1 sm:grid sm:grid-cols-2 font-bold text-lg md:text-xl gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "flex flex-col justify-center items-center border-2 border-black/25 mx-2 mt-1 rounded-lg aspect-video p-2", children: sendedPostcard ? /* @__PURE__ */ jsx(
        "a",
        {
          href: `/${encodeURI(country)}/${encodeURI(city)}/${encodeURI(currentMonument.name)}/${encodeURI(String(sendedPostcard.from))}/${encodeURI(String(sendedPostcard.to))}/postcard`,
          className: "transition-all hover:scale-105",
          children: /* @__PURE__ */ jsxs("picture", { className: "relative w-full h-full aspect-video", children: [
            /* @__PURE__ */ jsx("img", { src: sendedPostcard.image, alt: "Postal enviada", className: "w-full h-full object-cover rounded-lg" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid place-content-center border border-black m-5 uppercase", children: /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-end scale-75", children: [
              /* @__PURE__ */ jsx("p", { className: "text-black text-6xl sm:text-8xl [text-shadow:1px_1px_white]", children: currentMonument.name }),
              /* @__PURE__ */ jsx("p", { className: "text-black text-3xl sm:text-5xl [text-shadow:1px_1px_white]", children: city })
            ] }) })
          ] })
        }
      ) : /* @__PURE__ */ jsx(
        "a",
        {
          href: `/country/${country}/city/${city}/monument/${currentMonument.name}/send-postcard`,
          className: `font-bold px-3 py-1 rounded-lg border transition-all uppercase hover:scale-105 hover:shadow-lg ${user.name === "Alejandro" ? "text-alejandro-primary bg-alejandro-secondary border-alejandro-primary hover:text-alejandro-secondary hover:bg-alejandro-primary" : ""} ${user.name === "Gema" ? "text-gema-primary bg-gema-secondary border-gema-primary hover:text-gema-secondary hover:bg-gema-primary" : ""}`,
          children: "Enviar postal"
        }
      ) }),
      /* @__PURE__ */ jsx("span", { className: "flex flex-col justify-center items-center border-2 border-black/25 mx-2 mt-1 rounded-lg aspect-video p-2", children: receivedPostcard ? /* @__PURE__ */ jsx(
        "a",
        {
          href: `/${encodeURI(country)}/${encodeURI(city)}/${encodeURI(currentMonument.name)}/${encodeURI(String(receivedPostcard.from))}/${encodeURI(String(receivedPostcard.to))}/postcard`,
          className: "transition-all hover:scale-105",
          children: /* @__PURE__ */ jsxs("picture", { className: "relative w-full h-full aspect-video transition-all hover:scale-105", children: [
            /* @__PURE__ */ jsx("img", { src: receivedPostcard.stampImage, alt: "Postal enviada", className: "w-full h-full object-cover rounded-lg" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid place-content-center border border-black m-5 uppercase", children: /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-end scale-75", children: [
              /* @__PURE__ */ jsx("p", { className: "text-black/50 text-6xl sm:text-8xl", children: currentMonument.name }),
              /* @__PURE__ */ jsx("p", { className: "text-black/75 text-3xl sm:text-5xl", children: city })
            ] }) })
          ] })
        }
      ) : /* @__PURE__ */ jsx("p", { children: "Aquí irá la postal recibida" }) })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$monument = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$monument;
  const { country, city, monument } = Astro2.params;
  const { user } = Astro2.locals;
  const currentCity = await db.select().from(Cities).where(eq(Cities.name, city));
  const monumentCity = currentCity[0];
  const monuments = await db.select().from(Monuments).where(eq(Monuments.cityId, monumentCity.id)).orderBy(Monuments.optional, Monuments.name);
  const totalMonuments = monuments.length;
  const currentMonument = monuments.filter((actualMonument) => actualMonument.name === monument)[0];
  const currentMonumentIndex = monuments.findIndex((actualMonument) => actualMonument.id === currentMonument.id);
  const prevMonumentIndex = currentMonumentIndex === 0 ? totalMonuments - 1 : currentMonumentIndex - 1;
  const prevMonumentName = monuments[prevMonumentIndex].name;
  const prevMonumentUrl = `/country/${encodeURI(country)}/city/${encodeURI(monumentCity.name)}/monument/${encodeURI(prevMonumentName)}`;
  const nextMonumentIndex = currentMonumentIndex === totalMonuments - 1 ? 0 : currentMonumentIndex + 1;
  const nextMonumentName = monuments[nextMonumentIndex].name;
  const nextMonumentUrl = `/country/${encodeURI(country)}/city/${encodeURI(monumentCity.name)}/monument/${encodeURI(nextMonumentName)}`;
  const postCards = await db.select().from(PostCard).where(eq(PostCard.monumentId, currentMonument.id));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Planificador De Viajes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-center items-center min-h-screen p-4"> <section class="relative flex flex-col w-full h-full bg-white rounded-lg p-4 shadow-xl shadow-black/25 my-12"> <!-- TODO: Agregar opcion de poder cambiar el nombre del monumento --> <h1 class="text-4xl md:text-6xl font-bold text-center">${currentMonument.name}</h1> <div class="flex flex-col"> ${renderComponent($$result2, "Information", MonumentInformation, { "currentMonument": currentMonument, "user": user, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/sections/monument/Information.tsx", "client:component-export": "default" })} <!-- TODO: Agregar mapa interactivo con la localizacion de cada monumento --> ${renderComponent($$result2, "MonumentStamps", MonumentStamps, { "country": country, "city": city, "currentMonument": currentMonument, "user": user, "postcards": postCards, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/sections/monument/MonumentStamps", "client:component-export": "default" })} </div> </section> ${totalMonuments > 1 && renderTemplate`<div class="fixed left-2 md:left-4 h-screen flex flex-col justify-center"> <a${addAttribute(prevMonumentUrl, "href")} class="text-gray-500/50 bg-white/50 rounded-full hover:text-gray-500 hover:bg-white hover:scale-105 transition-all"> ${renderComponent($$result2, "LeftIcon", $$LeftIcon, { "class": "h-8 md:h-10 w-8 md:w-10" })} </a> </div>
            <div class="fixed right-2 md:right-4 h-screen flex flex-col justify-center"> <a${addAttribute(nextMonumentUrl, "href")} class="text-gray-500/50 bg-white/50 rounded-full hover:text-gray-500 hover:bg-white hover:scale-105 transition-all"> ${renderComponent($$result2, "RightIcon", $$RightIcon, { "class": "h-8 md:h-10 w-8 md:w-10" })} </a> </div>`} <img class="fixed inset-0 w-full h-full object-cover object-center -z-[2] brightness-75"${addAttribute(currentMonument.image, "src")} alt=""> </main> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/city/[city]/monument/[monument].astro", void 0);

const $$file = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/city/[city]/monument/[monument].astro";
const $$url = "/country/[country]/city/[city]/monument/[monument]";

export { $$monument as default, $$file as file, $$url as url };
