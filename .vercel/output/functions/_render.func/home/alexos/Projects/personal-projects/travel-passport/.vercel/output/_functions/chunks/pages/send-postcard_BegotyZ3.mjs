/* empty css                             */
import { c as createComponent, r as renderTemplate, g as renderComponent, e as createAstro, m as maybeRenderHead, d as addAttribute } from '../astro_DsCilHv5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as db, U as User, C as Cities, M as Monuments, $ as $$Layout, a as Countries } from './_city__CQmQ0kLy.mjs';
import { eq, and } from '@astrojs/db/dist/runtime/virtual.js';

const $$Astro$1 = createAstro();
const $$SendPostcard$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SendPostcard$1;
  const { user } = Astro2.locals;
  const { monument, city, country } = Astro2.params;
  const allUsers = await db.select().from(User);
  const currentCityMonument = await db.select().from(Cities).where(eq(Cities.name, city));
  const currentMonument = await db.select().from(Monuments).where(and(eq(Monuments.name, monument), eq(Monuments.cityId, currentCityMonument[0].id)));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Enviar postal de ${currentMonument[0].name}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full h-full flex flex-col justify-center items-center md:grid md:place-content-center px-4 my-12"> ${renderComponent($$result2, "SendMonumentPostcard", null, { "user": user, "users": allUsers, "city": currentCityMonument[0], "country": country, "monument": currentMonument[0], "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/SendMonumentPostcard.tsx", "client:component-export": "default" })} </section> <img class="fixed inset-0 w-full h-full object-cover object-center -z-[2] brightness-75"${addAttribute(currentMonument[0].image, "src")} alt=""> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/city/[city]/monument/[monument]/send-postcard.astro", void 0);

const $$file$1 = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/city/[city]/monument/[monument]/send-postcard.astro";
const $$url$1 = "/country/[country]/city/[city]/monument/[monument]/send-postcard";

const sendPostcard$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SendPostcard$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$SendPostcard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SendPostcard;
  const { user } = Astro2.locals;
  const { city, country } = Astro2.params;
  const allUsers = await db.select().from(User);
  const currentCountry = await db.select().from(Countries).where(eq(Countries.name, country));
  const currentCity = await db.select().from(Cities).where(and(eq(Cities.name, city), eq(Cities.countryId, currentCountry[0].id)));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Enviar postal de ${currentCity[0].name}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full h-full flex flex-col justify-center items-center md:grid md:place-content-center px-4 my-12"> ${renderComponent($$result2, "SendCityPostcard", null, { "user": user, "users": allUsers, "city": currentCity[0], "country": country, "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/SendCityPostcard.tsx", "client:component-export": "default" })} </section> <img class="fixed inset-0 w-full h-full object-cover object-center -z-[2] brightness-75"${addAttribute(currentCity[0].image, "src")} alt=""> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/city/[city]/send-postcard.astro", void 0);

const $$file = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/country/[country]/city/[city]/send-postcard.astro";
const $$url = "/country/[country]/city/[city]/send-postcard";

const sendPostcard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SendPostcard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { sendPostcard as a, sendPostcard$1 as s };
