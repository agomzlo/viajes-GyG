import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ cookies, request, redirect }) => {
    const password = import.meta.env.VERIFY_PASSWORD;
    const data = await request.formData();
    const userPassword = data.get("password");
    const id= data.get("id");
    const name = data.get("name");

    if (password === userPassword){
        cookies.set("user", JSON.stringify({ id, name }), { path: "/" });
        return redirect("/");
    }

    return redirect("/choose-user?verified=false");
};

export const GET: APIRoute = async () => {
    return new Response(
        JSON.stringify({
            message: "Verify OK",
        })
    )
}