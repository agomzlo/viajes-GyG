import { d as db, a as Countries } from './_city__CQmQ0kLy.mjs';
import { v2 } from 'cloudinary';

v2.config({
  cloud_name: "dcqtsmffw",
  api_key: "467623976119352",
  api_secret: "ExgZNuqmzlWveqdUsr8g0_nx7XI"
});
const uploadStream = async (buffer, options) => {
  return new Promise((resolve, reject) => {
    v2.uploader.upload_stream(options, (error, result) => {
      if (error)
        return reject(error);
      resolve(result);
    }).end(buffer);
  });
};
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const country = formData.get("country");
  const image = formData.get("image");
  if (!country || image.size === 0) {
    return redirect(`/country/add?empty=true`);
  }
  const countryLowerName = country.toLowerCase();
  const arrayBuffer = await image.arrayBuffer();
  const uit8Array = new Uint8Array(arrayBuffer);
  const response = await uploadStream(uit8Array, {
    public_id: countryLowerName,
    fetch_format: "webp",
    quality: "75",
    folder: "Country",
    width: 1280,
    height: 720,
    transformation: [
      { effect: "cartoonify" }
    ]
  });
  if (typeof country === "string" && country.length > 0) {
    await db.insert(Countries).values({ name: country, image: response.secure_url });
  }
  return redirect("/");
};
const GET = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "Add Country OK"
    })
  );
};

export { GET, POST };
