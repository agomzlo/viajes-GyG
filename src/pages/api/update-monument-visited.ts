import type { APIRoute } from "astro";
import { db, eq, Monuments } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json();
    const monumentId = data.monumentId;

    if (monumentId) {
        await db.update(Monuments).set({ visited: true, visitedAt: new Date() }).where(eq(Monuments.id, monumentId));
        return new Response(null, { status: 200 });
    }

    return new Response(null, { status: 400 });
};

export const GET: APIRoute = async () => {
    return new Response(
        JSON.stringify({
            message: "Update Monument Visited OK",
        })
    )
}