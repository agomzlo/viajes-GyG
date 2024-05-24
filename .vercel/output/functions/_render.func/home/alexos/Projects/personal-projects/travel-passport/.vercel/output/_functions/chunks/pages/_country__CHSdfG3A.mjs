/* empty css                             */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderTransition, e as createAstro, g as renderComponent } from '../astro_DsCilHv5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as db, C as Cities, a as Countries, $ as $$Layout } from './_city__CQmQ0kLy.mjs';
import 'clsx';
/* empty css                              */
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const $$Astro$2 = createAstro();
const $$CityCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CityCard;
  const { city, country } = Astro2.props;
  const { user } = Astro2.locals;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "relative group flex flex-col justify-start w-full max-w-[570px] border bg-white p-2 rounded-md cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-black/25",
    {
      "border-alejandro-primary": user.name === "Alejandro",
      "border-gema-primary": user.name === "Gema"
    }
  ], "class:list")}${addAttribute(`/country/${country.name}/city/${city.name}`, "href")}> <picture class="relative w-auto h-auto"> <img class="w-full h-full aspect-video brightness-75 rounded-md"${addAttribute(city.image, "src")}${addAttribute(`${city.name} image`, "alt")}${addAttribute(renderTransition($$result, "vaealn7y", "", `${city.name} image`), "data-astro-transition-scope")}> <h2 class="absolute inset-0 w-full h-full grid place-content-center text-5xl text-white [text-shadow:2px_2px_black] group-hover:scale-110">${city.name}</h2> </picture> ${city.completed && renderTemplate`<div class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md uppercase">
Completado
</div>`} </a>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/components/CityCard.astro", "self");

const $$Astro$1 = createAstro();
const $$AllCities = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AllCities;
  const { country } = Astro2.props;
  const { user } = Astro2.locals;
  const cities = await db.select().from(Cities).where(eq(Cities.countryId, country.id)).orderBy(Cities.name);
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-full flex flex-col items-center"> <h2 class="text-7xl font-bold my-6 text-white [text-shadow:1px_1px_0_black] uppercase text-center">${country.name}</h2> <div class="flex flex-col md:grid md:grid-cols-2 items-center md:justify-items-center gap-4 p-4"> ${cities.map((city) => renderTemplate`${renderComponent($$result, "CityCard", $$CityCard, { "city": city, "country": country })}`)} </div> <a${addAttribute([
    "text-sm md:text-xl font-bold px-3 py-1.5 mt-8 rounded-lg border transition-all cursor-pointer bg-white uppercase hover:text-white hover:scale-105 hover:shadow-lg",
    {
      "text-alejandro-primary border-alejandro-primary hover:bg-alejandro-primary": user.name === "Alejandro",
      "text-gema-primary border-gema-primary hover:bg-gema-primary": user.name === "Gema"
    }
  ], "class:list")}${addAttribute(`./${country.name}/add`, "href")}>
Agregar ciudad
</a> </section>`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/sections/city/AllCities.astro", void 0);

const $$Astro = createAstro();
const $$country = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$country;
  const { country } = Astro2.params;
  const countries = await db.select().from(Countries);
  const currentCountry = countries.filter((currentCountry2) => currentCountry2.name === country)[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Viajes G&G" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-center items-center my-24"> ${renderComponent($$result2, "AllCities", $$AllCities, { "country": currentCountry })} </main> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country].astro", void 0);

const $$file = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country].astro";
const $$url = "/country/[country]";

export { $$country as default, $$file as file, $$url as url };
