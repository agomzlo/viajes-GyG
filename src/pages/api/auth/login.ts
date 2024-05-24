import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const data = await request.formData();
    const id = data.get("id");
    const name = data.get("username");
    cookies.set("user", JSON.stringify({ id, name }), { path: "/" });

    return redirect("/");
};

export const GET: APIRoute = async ({ params, request }) => {
    return new Response(
        JSON.stringify({
            message: "Login OK",
        })
    )
}