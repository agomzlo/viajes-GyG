import { d as db, a as Countries, C as Cities, M as Monuments } from './_city__CQmQ0kLy.mjs';
import { v2 } from 'cloudinary';
import { eq, and } from '@astrojs/db/dist/runtime/virtual.js';

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
  const city = formData.get("city");
  const country = formData.get("country");
  const point = formData.get("point");
  const type = formData.get("type");
  const optional = formData.get("optional");
  const image = formData.get("image");
  if (!city || !country || !point || !type || !optional || image.size === 0) {
    return redirect(`/country/${encodeURI(country)}/city/${encodeURI(city)}/add?empty=true`);
  }
  const pointLowerName = point.toLowerCase().trim();
  const arrayBuffer = await image.arrayBuffer();
  const uit8Array = new Uint8Array(arrayBuffer);
  const response = await uploadStream(uit8Array, {
    public_id: pointLowerName,
    fetch_format: "webp",
    quality: "75",
    folder: "Monuments",
    width: 1280,
    height: 720,
    transformation: [
      { effect: "cartoonify" }
    ]
  });
  const currentCountry = await db.select().from(Countries).where(eq(Countries.name, country));
  const currentCity = await db.select().from(Cities).where(and(eq(Cities.name, city), eq(Cities.countryId, currentCountry[0].id)));
  if (typeof point === "string" && point.length > 0) {
    const isOptional = optional === "true";
    await db.insert(Monuments).values({ name: point, type, optional: isOptional, image: response.secure_url, cityId: currentCity[0].id });
  }
  return redirect(`/country/${encodeURI(country)}/city/${encodeURI(city)}`);
};
const GET = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "Add Interest Point OK"
    })
  );
};

export { GET, POST };
