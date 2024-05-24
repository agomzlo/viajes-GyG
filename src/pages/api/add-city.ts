import type { APIRoute } from "astro";
import { db, Countries, Cities, eq } from "astro:db";
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

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const city = formData.get("city") as string;
    const country = formData.get("country") as string;
    const image = formData.get("image") as File;

    if (!city || !country || image.size === 0) {
        return redirect(`/country/${encodeURI(country)}/add?empty=true`);
    }

    const cityLowerName = city.toLowerCase().trim();
  
    const arrayBuffer = await image.arrayBuffer();
    const uit8Array = new Uint8Array(arrayBuffer);
    
    try{
        const response: any = await uploadStream(uit8Array, {
          public_id: cityLowerName,
          fetch_format: 'webp',
          quality: '75',
          folder: "City",
          width: 1280,
          height: 720,
          transformation: [
            { effect: "cartoonify" },
          ]
        });

        const currentCountry = await db.select().from(Countries).where(eq(Countries.name, country));

        await db.insert(Cities).values({ name:city, image: response.secure_url, completed: false, countryId: currentCountry[0].id });
    } catch (error) {
        return redirect(`/country/${encodeURI(country)}/add?error=true`);
    }

    return redirect(`/country/${encodeURI(country)}`);
};

export const GET: APIRoute = async ({ params, request }) => {
    return new Response(
        JSON.stringify({
            message: "Add Country OK",
        })
    )
}