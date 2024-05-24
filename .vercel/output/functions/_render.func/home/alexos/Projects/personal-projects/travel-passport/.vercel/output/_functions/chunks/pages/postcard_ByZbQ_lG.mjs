/* empty css                             */
import { c as createComponent, r as renderTemplate, g as renderComponent, e as createAstro, m as maybeRenderHead, d as addAttribute } from '../astro_DsCilHv5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as db, a as Countries, C as Cities, M as Monuments, U as User, P as PostCard, $ as $$Layout } from './_city__CQmQ0kLy.mjs';
import { eq, and } from '@astrojs/db/dist/runtime/virtual.js';

const $$Astro$1 = createAstro();
const $$MonumentPostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MonumentPostCard;
  const { city, monument, message, from, to, date, image, postageStamp } = Astro2.props;
  const monumentId = monument.split(" ").join("").toLowerCase();
  return renderTemplate`${renderComponent($$result, "monument-postcard", "monument-postcard", { "data-monument": monumentId, "class": "flex aspect-video w-screen sm:w-[639px] h-auto flex-col justify-center px-2 cursor-pointer" }, { "default": () => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`${monumentId}PostcardContainer`, "id")} class="h-full w-full [perspective:500px]"> <div${addAttribute(`${monumentId}Postcard`, "id")} class="relative h-full w-full rounded-lg shadow-xl transition-all duration-200 [transform-style:preserve-3d]"> <section class="absolute inset-0 bg-stone-400 rounded-lg"> <img${addAttribute(image, "src")} alt="" class="w-full h-full rounded-lg object-cover opacity-75"> <div class="absolute inset-0 grid place-content-center border border-black m-5 uppercase"> <span class="flex flex-col items-end"> <p class="text-black text-6xl sm:text-8xl [text-shadow:1px_1px_white]">${monument}</p> <p class="text-black text-3xl sm:text-5xl [text-shadow:1px_1px_white]">${city}</p> </span> </div> </section> <section class="absolute inset-0 grid grid-cols-2 bg-stone-200 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-lg"> <article class="grid place-content-center w-full text-[11px] md:text-base border-r-2 p-4 my-4 border-black/25">${message}</article> <article class="relative flex flex-col p-4 justify-center items-end gap-2 sm:gap-4"> <picture class="absolute top-4 md:top-8 right-4 md:right-8 border-4 border-black"> <img class="h-8 md:h-12 w-auto aspect-video outline-dotted outline-4 outline-offset-2 outline-stone-200"${addAttribute(postageStamp, "src")} alt=""> </picture> <span class="w-full text-[11px] md:text-base border-b-2 border-black">De: ${from}</span> <span class="w-full text-[11px] md:text-base border-b-2 border-black">Para: ${to}</span> <span class="w-full text-[11px] md:text-base border-b-2 border-black capitalize">Fecha: ${date?.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  })}</span> </article> </section> </div> </div> ` })} `;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/components/MonumentPostCard.astro", void 0);

const $$Astro = createAstro();
const $$Postcard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Postcard;
  const { country, city, monument, userFrom, userTo } = Astro2.params;
  const currentCountry = await db.select().from(Countries).where(eq(Countries.name, country));
  const currentCity = await db.select().from(Cities).where(and(eq(Cities.name, city), eq(Cities.countryId, currentCountry[0].id)));
  const currentMonument = await db.select().from(Monuments).where(and(eq(Monuments.name, monument), eq(Monuments.cityId, currentCity[0].id)));
  const currentUserFrom = await db.select().from(User).where(eq(User.id, Number(userFrom)));
  const currentUserTo = await db.select().from(User).where(eq(User.id, Number(userTo)));
  const currentPostCard = await db.select().from(PostCard).where(and(eq(PostCard.monumentId, currentMonument[0].id), eq(PostCard.from, currentUserFrom[0].id), eq(PostCard.to, currentUserTo[0].id)));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Viajes G&G" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> ${renderComponent($$result2, "MonumentPostCard", $$MonumentPostCard, { "city": currentCity[0].name, ";": true, "monument": currentMonument[0].name, ";": true, "message": currentPostCard[0].message, ";": true, "from": currentUserFrom[0].name, ";": true, "to": currentUserTo[0].name, ";": true, "date": currentPostCard[0].date, ";": true, "image": currentPostCard[0].image, ";": true, "postageStamp": currentPostCard[0].stampImage, ";": true })} </main> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/[country]/[city]/[monument]/[userFrom]/[userTo]/postcard.astro", void 0);

const $$file = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/[country]/[city]/[monument]/[userFrom]/[userTo]/postcard.astro";
const $$url = "/[country]/[city]/[monument]/[userFrom]/[userTo]/postcard";

export { $$Postcard as default, $$file as file, $$url as url };
