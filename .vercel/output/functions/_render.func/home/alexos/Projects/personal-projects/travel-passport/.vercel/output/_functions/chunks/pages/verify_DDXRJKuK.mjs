const POST = async ({ cookies, request, redirect }) => {
  const password = "Santorini";
  const data = await request.formData();
  const userPassword = data.get("password");
  const id = data.get("id");
  const name = data.get("name");
  if (password === userPassword) {
    cookies.set("user", JSON.stringify({ id, name }), { path: "/" });
    return redirect("/");
  }
  return redirect("/choose-user?verified=false");
};
const GET = async () => {
  return new Response(
    JSON.stringify({
      message: "Verify OK"
    })
  );
};

export { GET, POST };
