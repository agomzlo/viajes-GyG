import { MonumentIcon, MuseumIcon, BeachIcon, SquareIcon, OtherMonumentsIcon } from "@/icons/react/BadgeIcons";
import type { City, Monument, User } from "@/lib/types";

function MonumentCard({monument, city, country, user}: {monument: Monument, city: City, country: string, user: User}){
    type PointType = {
        [key: string]: JSX.Element;
    }

    const pointType:PointType = {
        'Monument': <div className="absolute -top-1.5 -right-1.5 text-red-600 bg-red-200 border border-red-300 rounded-full p-0.5"><MonumentIcon /></div>,
        'Museum': <div className="absolute -top-1.5 -right-1.5 text-green-600 bg-green-200 border border-green-300 rounded-full p-0.5"><MuseumIcon /></div>,
        'Beach': <div className="absolute -top-1.5 -right-1.5 text-orange-600 bg-orange-200 border border-orange-300 rounded-full p-0.5"><BeachIcon /></div>,
        'Square': <div className="absolute -top-1.5 -right-1.5 text-blue-600 bg-blue-200 border border-blue-300 rounded-full p-0.5"><SquareIcon /></div>,
        'Other': <div className="absolute -top-1.5 -right-1.5 text-purple-600 bg-purple-200 border border-purple-300 rounded-full p-0.5"><OtherMonumentsIcon /></div>,
    }

    return (
        <a
            className={`relative group flex flex-col justify-start w-full max-w-[570px] border bg-white p-2 rounded-md cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-black/25 ${user.name === 'Alejandro' ? 'border-alejandro-primary' : ''} ${user.name === 'Gema' ? 'border-gema-primary' : ''}`}
            href={`/country/${encodeURI(country)}/city/${encodeURI(city.name)}/monument/${encodeURI(monument.name)}`}
        >
            <picture className="relative w-auto h-auto">
                <img 
                    className="w-full h-full aspect-video brightness-75 rounded-md" 
                    src={monument.image} 
                    alt={`${monument.name} image`}
                />
                <h2 className="absolute inset-0 w-full h-full grid place-content-center text-4xl md:text-3xl text-center text-white capitalize [text-shadow:2px_2px_black] group-hover:scale-105">{ monument.name }</h2>
                {
                    pointType[monument.type]
                }
                {
                    monument.optional && (
                        <div className="absolute -top-1.5 right-7 text-gray-600 bg-gray-200 border border-gray-300 rounded-full px-2">?</div>
                    )
                }
            </picture>
            {
                monument.visited && (
                    <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-2 py-1 rounded-md uppercase">
                        Visitado
                    </div>
                )
            }
        </a>
    )
}

export default MonumentCard;