const POST = async ({ cookies, redirect }) => {
  cookies.delete("user", { path: "/" });
  return redirect("/");
};

export { POST };
