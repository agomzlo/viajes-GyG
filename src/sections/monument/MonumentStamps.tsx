import type { Monument, PostCard, User } from "@/lib/types";

function MonumentStamps({country, city, currentMonument, user, postcards}: {country: string, city: string, currentMonument: Monument, user: User, postcards: PostCard[]}){
    const sendedPostcard = postcards.find(postcard => postcard.from === Number(user.id));
    const receivedPostcard = postcards.find(postcard => postcard.to === Number(user.id));

    return (
        <section>
            <h2 className="font-bold text-2xl md:text-3xl mt-4">Postales de {currentMonument.name}:</h2>
            <span className="flex flex-col mt-1 sm:grid sm:grid-cols-2 font-bold text-lg md:text-xl gap-2">
                <span className="flex flex-col justify-center items-center border-2 border-black/25 mx-2 mt-1 rounded-lg aspect-video p-2">
                    {
                        sendedPostcard ? (
                            <a 
                                href={`/${encodeURI(country)}/${encodeURI(city)}/${encodeURI(currentMonument.name)}/${encodeURI(String(sendedPostcard.from))}/${encodeURI(String(sendedPostcard.to))}/postcard`}
                                className="transition-all hover:scale-105"
                            >
                                <picture className="relative w-full h-full aspect-video">
                                    <img src={sendedPostcard.image} alt="Postal enviada" className="w-full h-full object-cover rounded-lg" />
                                    <div className="absolute inset-0 grid place-content-center border border-black m-5 uppercase">
                                        <span className="flex flex-col items-end scale-75">
                                            <p className="text-black text-6xl sm:text-8xl [text-shadow:1px_1px_white]">{ currentMonument.name }</p>
                                            <p className="text-black text-3xl sm:text-5xl [text-shadow:1px_1px_white]">{ city }</p>
                                        </span>
                                    </div>
                                </picture>
                            </a>
                        ) : (
                            <a 
                                href={`/country/${country}/city/${city}/monument/${currentMonument.name}/send-postcard`}
                                className={`font-bold px-3 py-1 rounded-lg border transition-all uppercase hover:scale-105 hover:shadow-lg ${user.name === 'Alejandro' ? 'text-alejandro-primary bg-alejandro-secondary border-alejandro-primary hover:text-alejandro-secondary hover:bg-alejandro-primary' : ''} ${user.name === 'Gema' ? 'text-gema-primary bg-gema-secondary border-gema-primary hover:text-gema-secondary hover:bg-gema-primary' : ''}`}
                            >
                                Enviar postal
                            </a>
                        )
                    }
                </span>
                <span className="flex flex-col justify-center items-center border-2 border-black/25 mx-2 mt-1 rounded-lg aspect-video p-2">
                    {
                        receivedPostcard ? (
                            <a 
                                href={`/${encodeURI(country)}/${encodeURI(city)}/${encodeURI(currentMonument.name)}/${encodeURI(String(receivedPostcard.from))}/${encodeURI(String(receivedPostcard.to))}/postcard`}
                                className="transition-all hover:scale-105"
                            >
                                <picture className="relative w-full h-full aspect-video transition-all hover:scale-105">
                                    <img src={receivedPostcard.stampImage} alt="Postal enviada" className="w-full h-full object-cover rounded-lg" />
                                    <div className="absolute inset-0 grid place-content-center border border-black m-5 uppercase">
                                        <span className="flex flex-col items-end scale-75">
                                            <p className="text-black/50 text-6xl sm:text-8xl">{ currentMonument.name }</p>
                                            <p className="text-black/75 text-3xl sm:text-5xl">{ city }</p>
                                        </span>
                                    </div>
                                </picture>
                            </a>
                        ) : (
                            <p>Aquí irá la postal recibida</p>
                        )
                    }
                </span>
            </span>
        </section>
    )
}

export default MonumentStamps;