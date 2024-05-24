/* empty css                             */
import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_DsCilHv5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as db, U as User, $ as $$Layout } from './_city__CQmQ0kLy.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';

function UserLoginModal({ user, openModal, closeModal }) {
  const modalRef = useRef(null);
  useEffect(() => {
    if (openModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [openModal]);
  return /* @__PURE__ */ jsx("dialog", { ref: modalRef, className: "rounded-md backdrop:bg-black/75", onCancel: closeModal, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 bg-white p-2 md:p-4 rounded-lg", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl text-center font-bold", children: "Porfavor introduce la contraseña" }),
    /* @__PURE__ */ jsxs("form", { className: "flex flex-col justify-center gap-4", method: "POST", action: "/api/auth/verify", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex flex-row justify-between gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-lg", htmlFor: "password", children: "Usuario: " }),
        /* @__PURE__ */ jsx("input", { className: "w-52 md:w-60 border text-black/50 border-gray-300 rounded-md px-2", type: "text", name: "password", value: user.name, disabled: true })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "flex flex-row justify-between gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-lg", htmlFor: "password", children: "Contraseña: " }),
        /* @__PURE__ */ jsx("input", { className: "w-52 md:w-60 border border-gray-300 rounded-md px-2", type: "text", name: "password" })
      ] }),
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "id", value: user.id }),
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "name", value: user.name }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-around font-bold", children: [
        /* @__PURE__ */ jsx("button", { type: "submit", className: "px-3 py-1 rounded-lg border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:shadow-lg transition-all", children: "Verificar" }),
        /* @__PURE__ */ jsx("span", { onClick: closeModal, className: "px-3 py-1 rounded-lg border border-red-500 text-red-500 cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg transition-all", children: "Cerrar" })
      ] })
    ] })
  ] }) });
}

function UserCard({ user }) {
  const [modal, setModal] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("form", { className: "w-full p-6", children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "id", value: user.id }),
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "username", value: user.name }),
      /* @__PURE__ */ jsx("span", { className: "w-full h-full flex flex-row justify-center bg-white py-12 rounded-lg shadow-lg uppercase font-extrabold border border-blue-300 cursor-pointer hover:shadow-xl hover:scale-105", onClick: () => setModal(true), children: user.name })
    ] }),
    /* @__PURE__ */ jsx(UserLoginModal, { user, openModal: modal, closeModal: () => setModal(false) })
  ] });
}

const $$ChooseUser = createComponent(async ($$result, $$props, $$slots) => {
  const users = await db.select().from(User);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Planificador De Viajes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full min-h-screen flex flex-col md:grid md:grid-cols-2 items-center justify-center"> ${users.map((user) => renderTemplate`${renderComponent($$result2, "UserCard", UserCard, { "user": user, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/UserCard.tsx", "client:component-export": "default" })}`)} ${renderComponent($$result2, "ShowErrorToast", null, { "message": "Error al autenticar", "paramError": "verified", "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/ShowErrorToast", "client:component-export": "default" })} </main> ` })}`;
}, "/home/alexos/Projects/personal-projects/travel-passport/src/pages/choose-user.astro", void 0);

const $$file = "/home/alexos/Projects/personal-projects/travel-passport/src/pages/choose-user.astro";
const $$url = "/choose-user";

export { $$ChooseUser as default, $$file as file, $$url as url };
