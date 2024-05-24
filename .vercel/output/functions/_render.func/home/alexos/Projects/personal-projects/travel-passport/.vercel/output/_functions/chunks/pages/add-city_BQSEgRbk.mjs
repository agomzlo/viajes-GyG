import { d as db, a as Countries, C as Cities } from './_city__CQmQ0kLy.mjs';
import { v2 } from 'cloudinary';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

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
  const image = formData.get("image");
  if (!city || !country || image.size === 0) {
    return redirect(`/country/${encodeURI(country)}/add?empty=true`);
  }
  const cityLowerName = city.toLowerCase().trim();
  const arrayBuffer = await image.arrayBuffer();
  const uit8Array = new Uint8Array(arrayBuffer);
  try {
    const response = await uploadStream(uit8Array, {
      public_id: cityLowerName,
      fetch_format: "webp",
      quality: "75",
      folder: "City",
      width: 1280,
      height: 720,
      transformation: [
        { effect: "cartoonify" }
      ]
    });
    const currentCountry = await db.select().from(Countries).where(eq(Countries.name, country));
    await db.insert(Cities).values({ name: city, image: response.secure_url, completed: false, countryId: currentCountry[0].id });
  } catch (error) {
    return redirect(`/country/${encodeURI(country)}/add?error=true`);
  }
  return redirect(`/country/${encodeURI(country)}`);
};
const GET = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "Add Country OK"
    })
  );
};

export { GET, POST };
