/* empty css                             */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, m as maybeRenderHead, f as renderTransition, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_DsCilHv5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
/* empty css                              */
import { useState, useEffect } from 'react';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const User = asDrizzleTable("User", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "User", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const PostCard = asDrizzleTable("PostCard", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "PostCard", "primaryKey": true } }, "cityId": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "cityId", "collection": "PostCard", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Cities", "primaryKey": true } } } }, "monumentId": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "monumentId", "collection": "PostCard", "primaryKey": false, "optional": true, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Monuments", "primaryKey": true } } } }, "message": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "message", "collection": "PostCard", "primaryKey": false, "optional": false } }, "from": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "from", "collection": "PostCard", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } } } }, "to": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "to", "collection": "PostCard", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true } } } }, "date": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "date", "collection": "PostCard" } }, "image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "image", "collection": "PostCard", "primaryKey": false, "optional": false } }, "stampImage": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "stampImage", "collection": "PostCard", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Cities = asDrizzleTable("Cities", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Cities", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Cities", "primaryKey": false, "optional": false } }, "image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "image", "collection": "Cities", "primaryKey": false, "optional": false } }, "completed": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "completed", "collection": "Cities", "default": false } }, "countryId": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "countryId", "collection": "Cities", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Countries", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);
const Monuments = asDrizzleTable("Monuments", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Monuments", "primaryKey": true } }, "cityId": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "cityId", "collection": "Monuments", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Cities", "primaryKey": true } } } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Monuments", "primaryKey": false, "optional": false } }, "type": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "type", "collection": "Monuments", "primaryKey": false, "optional": false } }, "image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "image", "collection": "Monuments", "primaryKey": false, "optional": false } }, "optional": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "optional", "collection": "Monuments" } }, "visited": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "visited", "collection": "Monuments", "default": false } }, "visitedAt": { "type": "date", "schema": { "optional": true, "unique": false, "deprecated": false, "name": "visitedAt", "collection": "Monuments" } }, "stamped": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "stamped", "collection": "Monuments", "default": false } } }, "deprecated": false, "indexes": {} }, false);
const Countries = asDrizzleTable("Countries", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Countries", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Countries", "primaryKey": false, "optional": false } }, "image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "image", "collection": "Countries", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro$7 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/node_modules/astro/components/ViewTransitions.astro", void 0);

function HamburgerIcon(props) {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
    /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx("path", { d: "M4 6l16 0" }),
    /* @__PURE__ */ jsx("path", { d: "M4 12l16 0" }),
    /* @__PURE__ */ jsx("path", { d: "M4 18l16 0" })
  ] });
}
function CloseIcon(props) {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
    /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx("path", { d: "M18 6l-12 12" }),
    /* @__PURE__ */ jsx("path", { d: "M6 6l12 12" })
  ] });
}

function UserInfo({ country, city, monument, user }) {
  const showDropdown = () => {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu?.classList.toggle("hidden");
  };
  const showMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu?.classList.toggle("hidden");
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    hamburgerIcon?.classList.toggle("hidden");
    const closeIcon = document.getElementById("closeIcon");
    closeIcon?.classList.toggle("hidden");
  };
  return /* @__PURE__ */ jsxs("div", { id: "dropdown", className: "relative md:flex md:flex-row justify-end py-1", children: [
    /* @__PURE__ */ jsxs("button", { type: "button", className: "hidden md:flex md:flex-row items-center text-black cursor-pointer transition-all hover:scale-110", id: "menu-button", "aria-expanded": "true", "aria-haspopup": "true", onClick: showDropdown, children: [
      user.name,
      /* @__PURE__ */ jsx("span", { className: "h-full flex flex-row items-end", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5 text-gray-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z", clipRule: "evenodd" }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { id: "dropdownMenu", className: "absolute right-0 z-10 mt-7 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "menu-button", tabIndex: -1, children: /* @__PURE__ */ jsx("div", { className: "py-1", role: "none", children: /* @__PURE__ */ jsx("form", { method: "POST", action: "/api/auth/logout", children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        className: `text-gray-700 block w-full px-4 py-2 text-left text-sm transition-all hover:scale-105 ${user.name === "Alejandro" && "hover:text-alejandro-primary"} ${user.name === "Gema" && "hover:text-gema-primary"}`,
        id: "signOutButton",
        children: "Sign Out"
      }
    ) }) }) }),
    /* @__PURE__ */ jsxs("button", { type: "button", className: "flex flex-row md:hidden items-center text-black cursor-pointer", id: "menu-button", "aria-expanded": "true", "aria-haspopup": "true", onClick: showMobileMenu, children: [
      /* @__PURE__ */ jsx(HamburgerIcon, { id: "hamburgerIcon", className: "w-6 h-6 text-black" }),
      /* @__PURE__ */ jsx(CloseIcon, { id: "closeIcon", className: "w-6 h-6 text-black hidden" })
    ] }),
    /* @__PURE__ */ jsx("div", { id: "mobileMenu", className: "absolute right-0 z-10 mt-1 w-44 origin-top-right rounded-md bg-white shadow-xl hidden", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "menu-button", tabIndex: -1, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 p-2", role: "none", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: `text-black cursor-pointer ${!country && "block"}`,
          children: "Paises"
        }
      ),
      country && city && /* @__PURE__ */ jsx("a", { href: `/country/${country}`, className: "text-black cursor-pointer", children: country }),
      city && monument && /* @__PURE__ */ jsx("a", { href: `/country/${country}/city/${city}`, className: "text-black cursor-pointer", children: city }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-end", children: [
        user.name,
        /* @__PURE__ */ jsx("span", { className: "h-full flex flex-row items-end", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5 text-gray-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z", clipRule: "evenodd" }) }) })
      ] }),
      /* @__PURE__ */ jsx("form", { method: "POST", action: "/api/auth/logout", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: `text-gray-700 block w-full px-4 py-2 text-left text-sm transition-all hover:scale-105 ${user.name === "Alejandro" && "hover:text-alejandro-primary"} ${user.name === "Gema" && "hover:text-gema-primary"}`,
          id: "signOutButton",
          children: "Sign Out"
        }
      ) })
    ] }) })
  ] });
}

const $$Astro$6 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const { user } = Astro2.locals;
  const { country, city, monument } = Astro2.params;
  const hiddeUserInfo = Astro2.url.pathname.includes("choose-user");
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 w-full flex justify-center p-4 md:p-6 bg-white z-[1] shadow-xl"${addAttribute(renderTransition($$result, "l7r54iwe", "", "sticky header"), "data-astro-transition-scope")}> <div class="grid grid-cols-2 md:grid-cols-3 w-full items-center justify-center max-w-[1120px]"> <a href="/" class="w-fit text-2xl font-bold text-black text-start">Viajes G&G</a> <span class="flex flex-row justify-end items-center md:col-span-2 gap-4"> <nav id="headerNav" class="flex flex-row gap-4"> <a href="/"${addAttribute([
    "text-black cursor-pointer transition-all hover:scale-110 hidden",
    {
      "md:block": country
    }
  ], "class:list")}>Paises</a> ${country && city && renderTemplate`<a${addAttribute(`/country/${country}`, "href")} class="text-black cursor-pointer hidden md:block transition-all hover:scale-110">${country}</a>`} ${city && monument && renderTemplate`<a${addAttribute(`/country/${country}/city/${city}`, "href")} class="text-black cursor-pointer hidden md:block transition-all hover:scale-110">${city}</a>`} </nav> ${!hiddeUserInfo && renderTemplate`${renderComponent($$result, "UserInfo", UserInfo, { "country": country, "city": city, "monument": monument, "user": user, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/alexos/Projects/personal-projects/travel-passport/src/components/UserInfo.tsx", "client:component-export": "default" })}`} </span> </div> </header>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/components/Header.astro", "self");

const $$Astro$5 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { user } = Astro2.locals;
  return renderTemplate`<html lang="es"${addAttribute([{
    "bg-alejandro-mobile md:bg-alejandro": user?.name === "Alejandro" || user === null,
    "bg-gema-mobile md:bg-gema": user?.name === "Gema"
  }], "class:list")}> <head><meta charset="UTF-8"><meta name="description" content="Planea tu viaje con Viajes GyG"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="relative flex flex-col justify-center items-center min-h-screen overflow-x-hidden"> ${renderComponent($$result, "wc-toast", "wc-toast", { "position": "top-right" })} ${renderComponent($$result, "Header", $$Header, {})} <div class="flex flex-col w-full max-w-[1120px] h-full my-auto"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$LeftIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LeftIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(Astro2.props.class, "class")}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 6l-6 6l6 6"></path></svg>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/icons/astro/LeftIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$RightIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RightIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(Astro2.props.class, "class")}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path></svg>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/icons/astro/RightIcon.astro", void 0);

function TotalMonuments({ monuments, user }) {
  const totalMonuments = monuments.length;
  const visitedMonuments = monuments.filter((monument) => monument.visited === true).length;
  const toVisitMonuments = totalMonuments - visitedMonuments;
  const totalRequiredMonuments = monuments.filter((monument) => monument.optional === false).length;
  const requiredVisitedMonuments = monuments.filter((monument) => monument.visited === true).length;
  const toVisitRequiredMonuments = totalRequiredMonuments - requiredVisitedMonuments;
  const optionalMonuments = monuments.filter((monument) => monument.optional === true);
  const totalOptionalMonuments = optionalMonuments.length;
  const visitedOptionalMonuments = optionalMonuments.filter((monument) => monument.visited === true).length;
  const toVisitOptionalMonuments = totalOptionalMonuments - visitedOptionalMonuments;
  const showMoreInfo = () => {
    const showMoreInfo2 = document.getElementById("showMoreInfo");
    const moreInfo = document.getElementById("moreInfo");
    const isHidden = moreInfo.getAttribute("aria-hidden") === "true";
    moreInfo.setAttribute("aria-hidden", isHidden ? "false" : "true");
    showMoreInfo2.textContent = isHidden ? "- Info" : "+ Info";
  };
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-1 mt-4", children: [
    /* @__PURE__ */ jsxs("h2", { className: "flex flex-row justify-between font-bold text-2xl md:text-3xl", children: [
      "Puntos de interés:",
      /* @__PURE__ */ jsx(
        "button",
        {
          id: "showMoreInfo",
          onClick: showMoreInfo,
          className: `w-16 text-xs my-1 px-2 font-bold rounded-full border transition-all uppercase hover:scale-105 hover:shadow-lg ${user.name === "Alejandro" && "text-alejandro-primary bg-alejandro-secondary border-alejandro-primary hover:text-alejandro-secondary hover:bg-alejandro-primary"} ${user.name === "Gema" && "text-gema-primary bg-gema-secondary border-gema-primary hover:text-gema-secondary hover:bg-gema-primary"}`,
          children: "+ Info"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "flex flex-col mx-2 sm:grid sm:grid-cols-3 font-bold text-lg md:text-xl", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "Total: ",
        totalMonuments
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Visitados: ",
        visitedMonuments
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Por visitar: ",
        toVisitMonuments
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        "aria-hidden": "true",
        className: "flex flex-col px-4 aria-hidden:hidden animate-fade-in-down duration-300",
        id: "moreInfo",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold md:text-xl mt-1.5", children: "Obligatorios:" }),
          /* @__PURE__ */ jsxs("span", { className: "flex flex-col mx-2 sm:grid sm:grid-cols-3 font-bold text-sm md:text-base", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Total: ",
              totalRequiredMonuments
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Visitados: ",
              requiredVisitedMonuments
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Por visitar: ",
              toVisitRequiredMonuments
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-bold md:text-xl mt-1.5", children: "Opcionales:" }),
          /* @__PURE__ */ jsxs("span", { className: "flex flex-col mx-2 sm:grid sm:grid-cols-3 font-bold text-sm md:text-base", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Total: ",
              totalOptionalMonuments
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Visitados: ",
              visitedOptionalMonuments
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Por visitar: ",
              toVisitOptionalMonuments
            ] })
          ] })
        ]
      }
    )
  ] });
}

const $$Astro$2 = createAstro();
const $$LastMonumentVisited = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LastMonumentVisited;
  const { monuments } = Astro2.props;
  let lastMonumentVisited = monuments[0];
  monuments.forEach((monument) => {
    if (monument.visitedAt) {
      const visitedDate = new Date(monument.visitedAt);
      if (visitedDate > lastMonumentVisited.visitedAt) {
        lastMonumentVisited = monument;
      }
    }
  });
  const hasVisitedMonuments = monuments.some((monument) => monument.visitedAt);
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-1 mt-4"> <h2 class="font-bold text-2xl md:text-3xl">Ultimo punto visitado:</h2> ${hasVisitedMonuments ? renderTemplate`<span class="flex flex-col mx-2 sm:grid sm:grid-cols-3 font-bold text-lg md:text-xl"> <p class="col-span-2">Nombre: ${lastMonumentVisited.name}</p> <p class="capitalize">Fecha: ${lastMonumentVisited.visitedAt?.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  })}</p> </span>` : renderTemplate`<p class="font-bold text-lg md:text-xl text-center">Actualmente no se ha visitado ningun punto de interes</p>`} </section>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/sections/city/LastMonumentVisited.astro", void 0);

const $$Astro$1 = createAstro();
const $$Stamps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Stamps;
  const { user } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-1 mt-4"> <!-- TODO: Agregar logica para mostrar los sellos de cada usuario --> <h2 class="font-bold text-2xl md:text-3xl">Sellos:</h2> <span${addAttribute([
    "relative flex flex-col justify-center items-center text-center border-2 border-black/25 mx-2 rounded-lg aspect-square md:min-h-60 md:aspect-auto",
    {
      "bg-alejandro-secondary/75 text-alejandro-primary": user.name === "Alejandro",
      "bg-gema-secondary/75 text-gema-primary": user.name === "Gema"
    }
  ], "class:list")}>
Cada punto visitado representa un sello
</span> </section>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/sections/city/Stamps.astro", void 0);

function MonumentIcon() {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-6 h-6 icon icon-tabler icons-tabler-outline icon-tabler-building-castle", children: [
    /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx("path", { d: "M15 19v-2a3 3 0 0 0 -6 0v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14h4v3h3v-3h4v3h3v-3h4v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" }),
    /* @__PURE__ */ jsx("path", { d: "M3 11l18 0" })
  ] });
}
function MuseumIcon() {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-6 h-6 icon icon-tabler icons-tabler-outline icon-tabler-building-bank", children: [
    /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx("path", { d: "M3 21l18 0" }),
    /* @__PURE__ */ jsx("path", { d: "M3 10l18 0" }),
    /* @__PURE__ */ jsx("path", { d: "M5 6l7 -3l7 3" }),
    /* @__PURE__ */ jsx("path", { d: "M4 10l0 11" }),
    /* @__PURE__ */ jsx("path", { d: "M20 10l0 11" }),
    /* @__PURE__ */ jsx("path", { d: "M8 14l0 3" }),
    /* @__PURE__ */ jsx("path", { d: "M12 14l0 3" }),
    /* @__PURE__ */ jsx("path", { d: "M16 14l0 3" })
  ] });
}
function BeachIcon() {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-6 h-6 icon icon-tabler icons-tabler-outline icon-tabler-beach", children: [
    /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx("path", { d: "M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" }),
    /* @__PURE__ */ jsx("path", { d: "M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" }),
    /* @__PURE__ */ jsx("path", { d: "M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" }),
    /* @__PURE__ */ jsx("path", { d: "M15 9l-3 5.196" }),
    /* @__PURE__ */ jsx("path", { d: "M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" })
  ] });
}
function SquareIcon() {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-6 h-6 icon icon-tabler icons-tabler-outline icon-tabler-building-community", children: [
    /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx("path", { d: "M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" }),
    /* @__PURE__ */ jsx("path", { d: "M13 7l0 .01" }),
    /* @__PURE__ */ jsx("path", { d: "M17 7l0 .01" }),
    /* @__PURE__ */ jsx("path", { d: "M17 11l0 .01" }),
    /* @__PURE__ */ jsx("path", { d: "M17 15l0 .01" })
  ] });
}
function OtherMonumentsIcon() {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-6 h-6 icon icon-tabler icons-tabler-outline icon-tabler-map", children: [
    /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ jsx("path", { d: "M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" }),
    /* @__PURE__ */ jsx("path", { d: "M9 4v13" }),
    /* @__PURE__ */ jsx("path", { d: "M15 7v13" })
  ] });
}

function MonumentCard({ monument, city, country, user }) {
  const pointType = {
    "Monument": /* @__PURE__ */ jsx("div", { className: "absolute -top-1.5 -right-1.5 text-red-600 bg-red-200 border border-red-300 rounded-full p-0.5", children: /* @__PURE__ */ jsx(MonumentIcon, {}) }),
    "Museum": /* @__PURE__ */ jsx("div", { className: "absolute -top-1.5 -right-1.5 text-green-600 bg-green-200 border border-green-300 rounded-full p-0.5", children: /* @__PURE__ */ jsx(MuseumIcon, {}) }),
    "Beach": /* @__PURE__ */ jsx("div", { className: "absolute -top-1.5 -right-1.5 text-orange-600 bg-orange-200 border border-orange-300 rounded-full p-0.5", children: /* @__PURE__ */ jsx(BeachIcon, {}) }),
    "Square": /* @__PURE__ */ jsx("div", { className: "absolute -top-1.5 -right-1.5 text-blue-600 bg-blue-200 border border-blue-300 rounded-full p-0.5", children: /* @__PURE__ */ jsx(SquareIcon, {}) }),
    "Other": /* @__PURE__ */ jsx("div", { className: "absolute -top-1.5 -right-1.5 text-purple-600 bg-purple-200 border border-purple-300 rounded-full p-0.5", children: /* @__PURE__ */ jsx(OtherMonumentsIcon, {}) })
  };
  return /* @__PURE__ */ jsxs(
    "a",
    {
      className: `relative group flex flex-col justify-start w-full max-w-[570px] border bg-white p-2 rounded-md cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-black/25 ${user.name === "Alejandro" ? "border-alejandro-primary" : ""} ${user.name === "Gema" ? "border-gema-primary" : ""}`,
      href: `/country/${encodeURI(country)}/city/${encodeURI(city.name)}/monument/${encodeURI(monument.name)}`,
      children: [
        /* @__PURE__ */ jsxs("picture", { className: "relative w-auto h-auto", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-full h-full aspect-video brightness-75 rounded-md",
              src: monument.image,
              alt: `${monument.name} image`
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "absolute inset-0 w-full h-full grid place-content-center text-4xl md:text-3xl text-center text-white capitalize [text-shadow:2px_2px_black] group-hover:scale-105", children: monument.name }),
          pointType[monument.type],
          monument.optional && /* @__PURE__ */ jsx("div", { className: "absolute -top-1.5 right-7 text-gray-600 bg-gray-200 border border-gray-300 rounded-full px-2", children: "?" })
        ] }),
        monument.visited && /* @__PURE__ */ jsx("div", { className: "absolute top-1 left-1 bg-green-500 text-white text-xs px-2 py-1 rounded-md uppercase", children: "Visitado" })
      ]
    }
  );
}

function ShowMonuments({ user, monuments, currentCity, country }) {
  const [filter, setFilter] = useState(null);
  const [filteredMonuments, setFilteredMonuments] = useState(monuments);
  const changeFilter = (newFilter) => {
    const selectedFilter = newFilter === filter ? null : newFilter;
    if (filter !== null) {
      const badge = document.getElementById(`${filter.toLowerCase()}Badge`);
      badge.ariaSelected = "false";
    }
    setFilter(selectedFilter);
  };
  useEffect(() => {
    if (filter !== null) {
      setFilteredMonuments(monuments.filter((monument) => monument.type === filter));
      const badge = document.getElementById(`${filter.toLowerCase()}Badge`);
      badge.ariaSelected = "true";
    } else {
      setFilteredMonuments(monuments);
    }
  }, [filter]);
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-1 mt-4", children: [
    /* @__PURE__ */ jsxs("span", { className: "flex flex-row justify-between items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-bold text-2xl md:text-3xl", children: "Puntos:" }),
      /* @__PURE__ */ jsxs("span", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ jsxs(
          "span",
          {
            id: "monumentBadge",
            className: "flex flex-row gap-1 justify-center items-center bg-red-200 text-red-600 border border-red-300 rounded-full px-1.5 md:px-3 cursor-pointer \n                            hover:bg-red-300 hover:scale-105 hover:shadow-lg aria-selected:bg-red-300",
            onClick: () => changeFilter("Monument"),
            "aria-selected": "false",
            children: [
              /* @__PURE__ */ jsx(MonumentIcon, {}),
              /* @__PURE__ */ jsx("p", { className: "hidden md:block", children: "Monumentos" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "span",
          {
            id: "museumBadge",
            className: "flex flex-row gap-1 justify-center items-center bg-green-200 text-green-600 border border-green-300 rounded-full px-1.5 md:px-3 cursor-pointer \n                            hover:bg-green-300 hover:scale-105 hover:shadow-lg aria-selected:bg-green-300",
            onClick: () => changeFilter("Museum"),
            "aria-selected": "false",
            children: [
              /* @__PURE__ */ jsx(MuseumIcon, {}),
              /* @__PURE__ */ jsx("p", { className: "hidden md:block", children: "Museos" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "span",
          {
            id: "beachBadge",
            className: "flex flex-row gap-1 justify-center items-center bg-orange-200 text-orange-600 border border-orange-300 rounded-full px-1.5 md:px-3 cursor-pointer \n                            hover:bg-orange-300 hover:scale-105 hover:shadow-lg aria-selected:bg-orange-300",
            onClick: () => changeFilter("Beach"),
            "aria-selected": "false",
            children: [
              /* @__PURE__ */ jsx(BeachIcon, {}),
              /* @__PURE__ */ jsx("p", { className: "hidden md:block", children: "Playas" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "span",
          {
            id: "squareBadge",
            className: "flex flex-row gap-1 justify-center items-center bg-blue-200 text-blue-600 border border-blue-300 rounded-full px-1.5 md:px-3 cursor-pointer \n                            hover:bg-blue-300 hover:scale-105 hover:shadow-lg aria-selected:bg-blue-300",
            onClick: () => changeFilter("Square"),
            "aria-selected": "false",
            children: [
              /* @__PURE__ */ jsx(SquareIcon, {}),
              /* @__PURE__ */ jsx("p", { className: "hidden md:block", children: "Plazas" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "span",
          {
            id: "otherBadge",
            className: "flex flex-row gap-1 justify-center items-center bg-purple-200 text-purple-600 border border-purple-300 rounded-full px-1.5 md:px-3 cursor-pointer \n                            hover:bg-purple-300 hover:scale-105 hover:shadow-lg aria-selected:bg-purple-300",
            onClick: () => changeFilter("Other"),
            "aria-selected": "false",
            children: [
              /* @__PURE__ */ jsx(OtherMonumentsIcon, {}),
              /* @__PURE__ */ jsx("p", { className: "hidden md:block", children: "Otros" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "flex flex-col mx-2 sm:grid sm:grid-cols-4 font-bold text-lg md:text-xl gap-2", children: filteredMonuments.map((monument) => /* @__PURE__ */ jsx(MonumentCard, { monument, city: currentCity, country, user }, monument.id)) }),
    /* @__PURE__ */ jsx("span", { className: "flex flex-row justify-center mt-4", children: /* @__PURE__ */ jsx(
      "a",
      {
        className: `text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg border transition-all uppercase hover:scale-105 hover:shadow-lg 
                        ${user.name === "Alejandro" ? "text-alejandro-primary bg-alejandro-secondary border-alejandro-primary hover:text-alejandro-secondary hover:bg-alejandro-primary" : ""}
                        ${user.name === "Gema" ? "text-gema-primary bg-gema-secondary border-gema-primary hover:text-gema-secondary hover:bg-gema-primary" : ""}`,
        href: `/country/${country}/city/${currentCity.name}/add`,
        children: "Agregar punto de interés"
      }
    ) })
  ] });
}

function CityPostCards({ country, currentCity, user, postcards }) {
  const sendedPostcard = postcards.find((postcard) => postcard.from === Number(user.id));
  const receivedPostcard = postcards.find((postcard) => postcard.to === Number(user.id));
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("h2", { className: "font-bold text-2xl md:text-3xl mt-4", children: [
      "Postales de ",
      currentCity.name,
      ":"
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "flex flex-col mt-1 sm:grid sm:grid-cols-2 font-bold text-lg md:text-xl gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "flex flex-col justify-center items-center border-2 border-black/25 mx-2 mt-1 rounded-lg aspect-video p-2", children: sendedPostcard ? /* @__PURE__ */ jsx(
        "a",
        {
          href: `/${encodeURI(country)}/${encodeURI(currentCity.name)}/${encodeURI(String(sendedPostcard.from))}/${encodeURI(String(sendedPostcard.to))}/postcard`,
          className: "transition-all hover:scale-105",
          children: /* @__PURE__ */ jsxs("picture", { className: "relative w-full h-full aspect-video", children: [
            /* @__PURE__ */ jsx("img", { src: sendedPostcard.image, alt: "Postal enviada", className: "w-full h-full object-cover rounded-lg" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid place-content-center border border-black m-5 uppercase", children: /* @__PURE__ */ jsx("span", { className: "flex flex-col items-end scale-75", children: /* @__PURE__ */ jsx("p", { className: "text-black text-6xl sm:text-8xl [text-shadow:1px_1px_white]", children: currentCity.name }) }) })
          ] })
        }
      ) : /* @__PURE__ */ jsx(
        "a",
        {
          href: `/country/${country}/city/${currentCity.name}/send-postcard`,
          className: `font-bold px-3 py-1 rounded-lg border transition-all uppercase hover:scale-105 hover:shadow-lg ${user.name === "Alejandro" ? "text-alejandro-primary bg-alejandro-secondary border-alejandro-primary hover:text-alejandro-secondary hover:bg-alejandro-primary" : ""} ${user.name === "Gema" ? "text-gema-primary bg-gema-secondary border-gema-primary hover:text-gema-secondary hover:bg-gema-primary" : ""}`,
          children: "Enviar postal"
        }
      ) }),
      /* @__PURE__ */ jsx("span", { className: "flex flex-col justify-center items-center border-2 border-black/25 mx-2 mt-1 rounded-lg aspect-video p-2", children: receivedPostcard ? /* @__PURE__ */ jsx(
        "a",
        {
          href: `/${encodeURI(country)}/${encodeURI(currentCity.name)}/${encodeURI(String(receivedPostcard.from))}/${encodeURI(String(receivedPostcard.to))}/postcard`,
          className: "transition-all hover:scale-105",
          children: /* @__PURE__ */ jsxs("picture", { className: "relative w-full h-full aspect-video transition-all hover:scale-105", children: [
            /* @__PURE__ */ jsx("img", { src: receivedPostcard.stampImage, alt: "Postal enviada", className: "w-full h-full object-cover rounded-lg" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid place-content-center border border-black m-5 uppercase", children: /* @__PURE__ */ jsx("span", { className: "flex flex-col items-end scale-75", children: /* @__PURE__ */ jsx("p", { className: "text-black/50 text-6xl sm:text-8xl", children: currentCity.name }) }) })
          ] })
        }
      ) : /* @__PURE__ */ jsx("p", { children: "Aquí irá la postal recibida" }) })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$city = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$city;
  const { country, city } = Astro2.params;
  const { user } = Astro2.locals;
  const currentCountry = await db.select().from(Countries).where(eq(Countries.name, country));
  const cities = await db.select().from(Cities).where(eq(Cities.countryId, currentCountry[0].id));
  const totalCities = cities.length;
  const currentCity = cities.filter((actualCity) => actualCity.name === city)[0];
  const currentCityIndex = cities.findIndex((actualCity) => actualCity.id === currentCity.id);
  const prevCityIndex = currentCityIndex === 0 ? totalCities - 1 : currentCityIndex - 1;
  const prevCityName = cities[prevCityIndex].name;
  const prevCityUrl = `/country/${country}/city/${prevCityName}`;
  const nextCityIndex = currentCityIndex === totalCities - 1 ? 0 : currentCityIndex + 1;
  const nextCityName = cities[nextCityIndex].name;
  const nextCityUrl = `/country/${country}/city/${nextCityName}`;
  const monuments = await db.select().from(Monuments).where(eq(Monuments.cityId, currentCity.id)).orderBy(Monuments.optional, Monuments.name);
  const postCards = await db.select().from(PostCard).where(eq(PostCard.cityId, currentCity.id));
  const currentPostCard = postCards.filter((postCard) => postCard.monumentId === null);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Planificador De Viajes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col min-h-screen p-4"> <div class="relative flex flex-col w-full h-full bg-white mt-[75vh] mb-[25vh] rounded-lg px-4 py-8 shadow-xl shadow-black/25"> <!-- TODO: Agregar opcion de poder cambiar el nombre de la ciudad --> <h1 class="text-4xl md:text-6xl font-bold text-center">${currentCity.name}</h1> ${renderComponent($$result2, "TotalMonuments", TotalMonuments, { "monuments": monuments, "user": user, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/sections/city/TotalMonuments.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "LastMonumentVisited", $$LastMonumentVisited, { "monuments": monuments })} ${renderComponent($$result2, "Stamps", $$Stamps, { "user": user })} ${renderComponent($$result2, "ShowMonuments", ShowMonuments, { "user": user, "monuments": monuments, "currentCity": currentCity, "country": country, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ShowMonuments", "client:component-export": "default" })} ${renderComponent($$result2, "CityPostCards", CityPostCards, { "country": country, "currentCity": currentCity, "user": user, "postcards": currentPostCard })} ${currentCity.completed && renderTemplate`<div class="absolute -top-3 -right-3 bg-green-500 text-white px-2 py-1 rounded-md uppercase">
Completado
</div>`} </div> ${totalCities > 1 && renderTemplate`<div class="fixed left-2 md:left-4 h-screen flex flex-col justify-center"> <a${addAttribute(`${prevCityUrl}`, "href")} class="text-gray-500/50 bg-white/50 rounded-full hover:text-gray-500 hover:bg-white hover:scale-105 transition-all"> ${renderComponent($$result2, "LeftIcon", $$LeftIcon, { "class": "h-8 md:h-10 w-8 md:w-10" })} </a> </div>
                <div class="fixed right-2 md:right-4 h-screen flex flex-col justify-center"> <a${addAttribute(`${nextCityUrl}`, "href")} class="text-gray-500/50 bg-white/50 rounded-full hover:text-gray-500 hover:bg-white hover:scale-105 transition-all"> ${renderComponent($$result2, "RightIcon", $$RightIcon, { "class": "h-8 md:h-10 w-8 md:w-10" })} </a> </div>`} <img class="fixed inset-0 w-full h-full object-cover object-center -z-[2] brightness-75"${addAttribute(currentCity.image, "src")} alt=""${addAttribute(renderTransition($$result2, "vnzq2yeg", "", `${city} image`), "data-astro-transition-scope")}> </main> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/city/[city].astro", "self");

const $$file = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/city/[city].astro";
const $$url = "/country/[country]/city/[city]";

const _city_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$city,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Cities as C, Monuments as M, PostCard as P, User as U, _city_ as _, Countries as a, $$LeftIcon as b, $$RightIcon as c, db as d };
