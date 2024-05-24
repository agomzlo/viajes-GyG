import { d as db, M as Monuments } from './_city__CQmQ0kLy.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const POST = async ({ request }) => {
  const data = await request.json();
  const monumentId = data.monumentId;
  if (monumentId) {
    await db.update(Monuments).set({ visited: true, visitedAt: /* @__PURE__ */ new Date() }).where(eq(Monuments.id, monumentId));
    return new Response(null, { status: 200 });
  }
  return new Response(null, { status: 400 });
};
const GET = async () => {
  return new Response(
    JSON.stringify({
      message: "Update Monument Visited OK"
    })
  );
};

export { GET, POST };
