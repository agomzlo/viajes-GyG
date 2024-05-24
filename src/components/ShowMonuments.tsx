import type { City, Monument, User } from "@/lib/types";
import MonumentCard from '@/components/MonumentCard.tsx';
import { useEffect, useState } from "react";
import { BeachIcon, MonumentIcon, MuseumIcon, OtherMonumentsIcon, SquareIcon } from "@/icons/react/BadgeIcons";

function ShowMonuments({user, monuments, currentCity, country}: {user: User ,monuments: Monument[], currentCity: City, country: string}){
    const [filter, setFilter] = useState<string | null>(null);
    const [filteredMonuments, setFilteredMonuments] = useState<Monument[]>(monuments);

    const changeFilter = (newFilter: string) => {
        const selectedFilter = newFilter === filter ? null : newFilter;
        if (filter !== null){
            const badge = document.getElementById(`${filter.toLowerCase()}Badge`) as HTMLElement;
            badge.ariaSelected = 'false';
        }
        setFilter(selectedFilter);
    }

    useEffect(() => {
        if (filter !== null){
            setFilteredMonuments(monuments.filter((monument) => monument.type === filter));
            const badge = document.getElementById(`${filter.toLowerCase()}Badge`) as HTMLElement;
            badge.ariaSelected = 'true';
        }else{
            setFilteredMonuments(monuments);
        }
    }, [filter])

    return (
        <section className="flex flex-col gap-1 mt-4">
            <span className="flex flex-row justify-between items-center">
                <h2 className="font-bold text-2xl md:text-3xl">Puntos:</h2>
                <span className="flex flex-row gap-2">
                    <span 
                        id="monumentBadge"
                        className="flex flex-row gap-1 justify-center items-center bg-red-200 text-red-600 border border-red-300 rounded-full px-1.5 md:px-3 cursor-pointer 
                            hover:bg-red-300 hover:scale-105 hover:shadow-lg aria-selected:bg-red-300"
                        onClick={() => changeFilter('Monument')}
                        aria-selected="false"
                    >
                        <MonumentIcon /> 
                        <p className="hidden md:block">
                            Monumentos
                        </p>
                    </span>
                    <span 
                        id="museumBadge"
                        className="flex flex-row gap-1 justify-center items-center bg-green-200 text-green-600 border border-green-300 rounded-full px-1.5 md:px-3 cursor-pointer 
                            hover:bg-green-300 hover:scale-105 hover:shadow-lg aria-selected:bg-green-300"
                        onClick={() => changeFilter('Museum')}
                        aria-selected="false"
                    >
                        <MuseumIcon /> 
                        <p className="hidden md:block">
                            Museos
                        </p>
                    </span>
                    <span 
                        id="beachBadge"
                        className="flex flex-row gap-1 justify-center items-center bg-orange-200 text-orange-600 border border-orange-300 rounded-full px-1.5 md:px-3 cursor-pointer 
                            hover:bg-orange-300 hover:scale-105 hover:shadow-lg aria-selected:bg-orange-300"
                        onClick={() => changeFilter('Beach')}
                        aria-selected="false"
                    >
                        <BeachIcon /> 
                        <p className="hidden md:block">
                            Playas
                        </p>
                    </span>
                    <span 
                        id="squareBadge"
                        className="flex flex-row gap-1 justify-center items-center bg-blue-200 text-blue-600 border border-blue-300 rounded-full px-1.5 md:px-3 cursor-pointer 
                            hover:bg-blue-300 hover:scale-105 hover:shadow-lg aria-selected:bg-blue-300"
                        onClick={() => changeFilter('Square')}
                        aria-selected="false"
                    >
                        <SquareIcon /> 
                        <p className="hidden md:block">
                            Plazas
                        </p>
                    </span>
                    <span 
                        id="otherBadge"
                        className="flex flex-row gap-1 justify-center items-center bg-purple-200 text-purple-600 border border-purple-300 rounded-full px-1.5 md:px-3 cursor-pointer 
                            hover:bg-purple-300 hover:scale-105 hover:shadow-lg aria-selected:bg-purple-300"
                        onClick={() => changeFilter('Other')}
                        aria-selected="false"
                    >
                        <OtherMonumentsIcon /> 
                        <p className="hidden md:block">
                            Otros
                        </p>
                    </span>
                </span>
            </span>
            <span className="flex flex-col mx-2 sm:grid sm:grid-cols-4 font-bold text-lg md:text-xl gap-2">
                {
                    filteredMonuments.map((monument) => (
                        <MonumentCard key={monument.id} monument={monument} city={currentCity} country={country} user={user} />
                    ))
                }
            </span>
            <span className="flex flex-row justify-center mt-4">
                <a
                    className={
                        `text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg border transition-all uppercase hover:scale-105 hover:shadow-lg 
                        ${ user.name === 'Alejandro' ? 'text-alejandro-primary bg-alejandro-secondary border-alejandro-primary hover:text-alejandro-secondary hover:bg-alejandro-primary' : ''}
                        ${ user.name === 'Gema' ? 'text-gema-primary bg-gema-secondary border-gema-primary hover:text-gema-secondary hover:bg-gema-primary' : ''}`
                    }
                    href={`/country/${country}/city/${currentCity.name}/add`}
                >
                    Agregar punto de interés
                </a>
            </span>
        </section>
    )
}

export default ShowMonuments;