import type { APIRoute } from "astro";
import { db, Cities, eq, Monuments, and, Countries, User, PostCard } from "astro:db";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

const uploadStream = async (buffer: Uint8Array, options: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(options, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      })
      .end(buffer);
  });
};
// TODO: Implementar control de errores como en add-city
export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const city = formData.get("city") as string;
    const country = formData.get("country") as string;
    const point = formData.get("point") as string;
    const userFrom = formData.get("userFrom") as string;
    const userTo = formData.get("userTo") as string;
    const message = formData.get("message") as string;
    const image = formData.get("image") as File;
    
    if (!city || !country || !point || !userFrom || !userTo || !message || image.size === 0) {
        return redirect(`/country/${encodeURI(country)}/city/${encodeURI(city)}/monument/${encodeURI(point)}/send-postcard?empty=true`);
    }

    const pointLowerName = point.toLowerCase().trim();
    const cityLowerName = city.toLowerCase().trim();
    const userFromLowerName = userFrom.toLowerCase().trim();
    const userToLowerName = userTo.toLowerCase().trim();

    const imageName = `${userFromLowerName}-${cityLowerName}-${pointLowerName}-${userToLowerName}`;
  
    const arrayBuffer = await image.arrayBuffer();
    const uit8Array = new Uint8Array(arrayBuffer);
  
    const response: any = await uploadStream(uit8Array, {
      public_id: imageName,
      fetch_format: 'webp',
      quality: '75',
      folder: "Postcards",
      width: 1280,
      height: 720,
    });

    const currentCountry = await db.select().from(Countries).where(eq(Countries.name, country));
    const currentCity = await db.select().from(Cities).where(and(eq(Cities.name, city), eq(Cities.countryId, currentCountry[0].id)));
    const currentMonument = await db.select().from(Monuments).where(and(eq(Monuments.name, point), eq(Monuments.cityId, currentCity[0].id)));
    const currentUserFrom = await db.select().from(User).where(eq(User.name, userFrom));
    const currentUserTo = await db.select().from(User).where(eq(User.name, userTo));

    if (typeof point === 'string' && point.length > 0) {
        await db.insert(PostCard).values({cityId: currentCity[0].id, monumentId: currentMonument[0].id, message:message, from: currentUserFrom[0].id, to: currentUserTo[0].id, date: new Date(), image: response.secure_url, stampImage: currentMonument[0].image});
    }

    return redirect(`/country/${encodeURI(country)}/city/${encodeURI(city)}/monument/${encodeURI(point)}`);
};

export const GET: APIRoute = async ({ params, request }) => {
    return new Response(
        JSON.stringify({
            message: "Add Interest Point OK",
        })
    )
}