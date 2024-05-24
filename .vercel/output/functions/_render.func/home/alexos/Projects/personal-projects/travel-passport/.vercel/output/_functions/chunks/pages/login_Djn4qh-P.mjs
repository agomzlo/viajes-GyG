const POST = async ({ request, cookies, redirect }) => {
  const data = await request.formData();
  const id = data.get("id");
  const name = data.get("username");
  cookies.set("user", JSON.stringify({ id, name }), { path: "/" });
  return redirect("/");
};
const GET = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "Login OK"
    })
  );
};

export { GET, POST };
