import type { APIRoute } from "astro";
import { db, Countries } from "astro:db";
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
    const country = formData.get("country") as string;
    const image = formData.get("image") as File;

    if (!country || image.size === 0) {
        return redirect(`/country/add?empty=true`);
    }

    const countryLowerName = country.toLowerCase();
  
    const arrayBuffer = await image.arrayBuffer();
    const uit8Array = new Uint8Array(arrayBuffer);
  
    const response: any = await uploadStream(uit8Array, {
      public_id: countryLowerName,
      fetch_format: 'webp',
      quality: '75',
      folder: "Country",
      width: 1280,
      height: 720,
      transformation: [
        { effect: "cartoonify" },
      ]
    });

    if (typeof country === 'string' && country.length > 0) {
        await db.insert(Countries).values({ name: country, image: response.secure_url});
    }

    return redirect("/");
};

export const GET: APIRoute = async () => {
    return new Response(
        JSON.stringify({
            message: "Add Country OK",
        })
    )
}