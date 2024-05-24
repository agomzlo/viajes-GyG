import type { Monument, User } from "@/lib/types";
import MonumentVisited from "@/components/MonumentVisited";
import { useEffect, useState } from "react";

function MonumentInformation({currentMonument, user}: {currentMonument: Monument, user: User}) {
    const [monumentVisited, setMonumentVisited] = useState<boolean>(currentMonument.visited);
    const [monumentVisitedAt, setMonumentVisitedAt] = useState<Date | null>(currentMonument.visitedAt);

    useEffect(() => {
        setMonumentVisitedAt(new Date())
    }, [monumentVisited]);

    return (
        <section>
            <h2 className="font-bold text-2xl md:text-3xl mt-4">Información:</h2>
            <span className="relative flex flex-col mx-2 mt-1 sm:grid sm:grid-cols-2 font-bold text-lg md:text-xl">
                {
                    monumentVisited ? (
                        <>
                            <span>Estado: Visitado</span>
                            <p className="capitalize">Fecha: {monumentVisitedAt?.toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit',
                            })}</p>
                        </>
                    ) : (
                        <span>Estado: Sin Visitar</span>
                    )
                }
                <MonumentVisited 
                    id={currentMonument.id}
                    visited={monumentVisited}
                    setVisited={setMonumentVisited}
                    user={user} 
                />
            </span>
            {
                monumentVisited && (
                    <div className="absolute -top-3 -right-3 bg-green-500 text-white px-2 py-1 rounded-md uppercase animate-fade-in-down">
                        Visitado
                    </div>
                )
            }
        </section>
    );
}

export default MonumentInformation;