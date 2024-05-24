import { d as db, a as Countries, C as Cities, U as User, P as PostCard } from './_city__CQmQ0kLy.mjs';
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
  const userFrom = formData.get("userFrom");
  const userTo = formData.get("userTo");
  const message = formData.get("message");
  const image = formData.get("image");
  if (!city || !country || !userFrom || !userTo || !message || image.size === 0) {
    return redirect(`/country/${encodeURI(country)}/city/${encodeURI(city)}/send-postcard?empty=true`);
  }
  const cityLowerName = city.toLowerCase().trim();
  const userFromLowerName = userFrom.toLowerCase().trim();
  const userToLowerName = userTo.toLowerCase().trim();
  const imageName = `${userFromLowerName}-${cityLowerName}-${userToLowerName}`;
  const arrayBuffer = await image.arrayBuffer();
  const uit8Array = new Uint8Array(arrayBuffer);
  const response = await uploadStream(uit8Array, {
    public_id: imageName,
    fetch_format: "webp",
    quality: "75",
    folder: "Postcards",
    width: 1280,
    height: 720
  });
  const currentCountry = await db.select().from(Countries).where(eq(Countries.name, country));
  const currentCity = await db.select().from(Cities).where(and(eq(Cities.name, city), eq(Cities.countryId, currentCountry[0].id)));
  const currentUserFrom = await db.select().from(User).where(eq(User.name, userFrom));
  const currentUserTo = await db.select().from(User).where(eq(User.name, userTo));
  if (typeof city === "string" && city.length > 0) {
    await db.insert(PostCard).values({ cityId: currentCity[0].id, message, from: currentUserFrom[0].id, to: currentUserTo[0].id, date: /* @__PURE__ */ new Date(), image: response.secure_url, stampImage: currentCity[0].image });
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
