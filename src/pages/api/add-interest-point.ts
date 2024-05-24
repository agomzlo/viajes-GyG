import type { APIRoute } from "astro";
import { db, Cities, eq, Monuments, and, Countries } from "astro:db";
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
    const type = formData.get("type") as string;
    const optional = formData.get("optional") as string;
    const image = formData.get("image") as File;

    if (!city || !country || !point || !type || !optional || image.size === 0) {
        return redirect(`/country/${encodeURI(country)}/city/${encodeURI(city)}/add?empty=true`);
    }

    const pointLowerName = point.toLowerCase().trim();
  
    const arrayBuffer = await image.arrayBuffer();
    const uit8Array = new Uint8Array(arrayBuffer);
  
    const response: any = await uploadStream(uit8Array, {
      public_id: pointLowerName,
      fetch_format: 'webp',
      quality: '75',
      folder: "Monuments",
      width: 1280,
      height: 720,
      transformation: [
        { effect: "cartoonify" },
      ]
    });

    const currentCountry = await db.select().from(Countries).where(eq(Countries.name, country));
    const currentCity = await db.select().from(Cities).where(and(eq(Cities.name, city), eq(Cities.countryId, currentCountry[0].id)));

    if (typeof point === 'string' && point.length > 0) {
        const isOptional = optional === 'true';
        await db.insert(Monuments).values({ name:point, type:type, optional:isOptional, image: response.secure_url, cityId: currentCity[0].id });
    }

    return redirect(`/country/${encodeURI(country)}/city/${encodeURI(city)}`);
};

export const GET: APIRoute = async ({ params, request }) => {
    return new Response(
        JSON.stringify({
            message: "Add Interest Point OK",
        })
    )
}