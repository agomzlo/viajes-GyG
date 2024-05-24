/* empty css                             */
import { c as createComponent, r as renderTemplate, g as renderComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, f as renderTransition } from '../astro_DsCilHv5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, d as db, C as Cities } from './_city__CQmQ0kLy.mjs';
/* empty css                              */

const $$Astro$2 = createAstro();
const $$Add$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Add$2;
  const { user } = Astro2.locals;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Agregar Pais" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full h-full flex flex-col justify-center items-center md:grid md:place-content-center px-4"> ${renderComponent($$result2, "AddCountry", null, { "user": user, "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/AddCountry", "client:component-export": "default" })} </section> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/add.astro", void 0);

const $$file$2 = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/add.astro";
const $$url$2 = "/country/add";

const add$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Add$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Add$1;
  const { country } = Astro2.params;
  const { user } = Astro2.locals;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Agregar Ciudad" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full h-full flex flex-col justify-center items-center md:grid md:place-content-center px-4"> ${renderComponent($$result2, "AddCity", null, { "country": country, "user": user, "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/AddCity", "client:component-export": "default" })} </section> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/add.astro", void 0);

const $$file$1 = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/add.astro";
const $$url$1 = "/country/[country]/add";

const add$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  const { user } = Astro2.locals;
  const { city, country } = Astro2.params;
  const cities = await db.select().from(Cities);
  const currentCity = cities.find((c) => c.name === city);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Agregar punto de interes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full h-full flex flex-col justify-center items-center md:grid md:place-content-center px-4"> ${renderComponent($$result2, "AddInterestPoint", null, { "user": user, "city": currentCity, "country": country, "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/AddInterestPoint.tsx", "client:component-export": "default" })} </section> <img class="fixed inset-0 w-full h-full object-center -z-[2] brightness-75"${addAttribute(currentCity.image, "src")} alt=""${addAttribute(renderTransition($$result2, "64ykg2cx", "", `${city} image`), "data-astro-transition-scope")}> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/city/[city]/add.astro", "self");

const $$file = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/city/[city]/add.astro";
const $$url = "/country/[country]/city/[city]/add";

const add = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { add$2 as a, add$1 as b, add as c };
