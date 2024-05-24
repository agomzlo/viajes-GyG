/* empty css                             */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderTransition, e as createAstro, g as renderComponent } from '../astro_DsCilHv5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as db, a as Countries, $ as $$Layout } from './_city__CQmQ0kLy.mjs';
import 'clsx';
/* empty css                              */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';

const $$Astro$1 = createAstro();
const $$CountryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CountryCard;
  const { country } = Astro2.props;
  const { user } = Astro2.locals;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "relative group flex flex-col justify-start w-full max-w-[570px] border bg-white p-2 rounded-md cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-black/25",
    {
      "border-alejandro-primary": user.name === "Alejandro",
      "border-gema-primary": user.name === "Gema"
    }
  ], "class:list")}${addAttribute(`/country/${country.name}`, "href")}> <picture class="relative w-auto h-auto"> <img class="w-full h-full aspect-video brightness-75 rounded-md"${addAttribute(country.image, "src")}${addAttribute(`${country.name} image`, "alt")}${addAttribute(renderTransition($$result, "rpnzg5pm", "", `${country.name} image`), "data-astro-transition-scope")}> <h2 class="absolute inset-0 w-full h-full grid place-content-center capitalize text-5xl text-white [text-shadow:2px_2px_black] group-hover:scale-110">${country.name}</h2> </picture> </a>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/components/CountryCard.astro", "self");

const $$Astro = createAstro();
const $$AllCountries = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AllCountries;
  const { user } = Astro2.locals;
  const countries = await db.select().from(Countries);
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-full min-h-screen flex flex-col items-center justify-center py-36"> <div class="flex flex-col w-full md:grid md:grid-cols-2 items-center md:justify-items-center gap-4 p-4"> ${countries.map((country) => renderTemplate`${renderComponent($$result, "CountryCard", $$CountryCard, { "country": country })}`)} </div> <a${addAttribute([
    "text-sm md:text-xl font-bold px-3 py-1.5 mt-8 rounded-lg border transition-all cursor-pointer bg-white uppercase hover:text-white hover:scale-105 hover:shadow-lg",
    {
      "text-alejandro-primary border-alejandro-primary hover:bg-alejandro-primary": user.name === "Alejandro",
      "text-gema-primary border-gema-primary hover:bg-gema-primary": user.name === "Gema"
    }
  ], "class:list")} href="/country/add">
Agregar pais
</a> </section>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/sections/country/AllCountries.astro", void 0);

function TitleHero() {
  const totalImages = 14;
  const heroRef = useRef(null);
  const [heroImage, setHeroImage] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (heroImage === totalImages) {
        setHeroImage(1);
      } else {
        setHeroImage(heroImage + 1);
      }
    }, 3500);
    heroRef.current?.style.setProperty(
      "background-image",
      `url(/heroImages/${heroImage}.webp)`
    );
    return () => clearInterval(interval);
  }, [heroImage]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: heroRef,
      className: `bg-fixed bg-center bg-cover w-screen h-[200dvh] bg-black transition-all duration-1000`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative flex flex-col h-full", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 w-full h-full bg-black/50", children: [
          /* @__PURE__ */ jsx("p", { className: "text-5xl text-white text-center px-4 z-[1] mt-[50dvh]", children: "Aqui empieza tu viaje..." }),
          /* @__PURE__ */ jsx("p", { className: "text-5xl text-white text-center px-4 z-[1] mt-[75dvh]", children: "Selecciona un destino para comenzar..." })
        ] }) }),
        /* @__PURE__ */ jsx(
          "svg",
          {
            id: "Vector",
            width: "281",
            height: "1260",
            viewBox: "0 0 281 1260",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "absolute top-0 right-0 h-[200dvh] opacity-50",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M467.593 0.71931C370.519 31.6173 -176.407 133.219 71.5929 232.719C319.593 332.219 307.093 310.219 140.093 408.219C-26.9071 506.219 167.093 560.219 167.093 560.219C167.093 560.219 393.592 641.219 196.593 735.219C-0.407082 829.219 180.574 937.719 180.574 937.719C224.604 976.281 306.857 1014.72 214.725 1073.22C122.593 1131.72 206.856 1169.13 214.725 1189.72C222.593 1210.31 214.725 1248.68 214.725 1248.68M214.725 1248.68L180.574 1219.18M214.725 1248.68L247.074 1219.18",
                stroke: "white",
                strokeWidth: "15",
                strokeLinecap: "round",
                strokeDasharray: "0,0,0,2223.829833984375",
                children: /* @__PURE__ */ jsx(
                  "animate",
                  {
                    attributeType: "XML",
                    attributeName: "stroke-dasharray",
                    repeatCount: "1",
                    dur: "5s",
                    values: "0,0,0,2223.829833984375; \n          0,1111.9149169921875,1111.9149169921875,0; \n          2223.829833984375,0,0,0",
                    keyTimes: "0; 0.5; 1",
                    fill: "freeze"
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Viajes G&G" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> ${renderComponent($$result2, "TitleHero", TitleHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/sections/TitleHero", "client:component-export": "default" })} ${renderComponent($$result2, "AllCountries", $$AllCountries, {})} </main> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/index.astro", void 0);

const $$file = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
