import type { User } from "@/lib/types";
import confetti from "canvas-confetti";

function MonumentVisited({id, visited, setVisited, user}: {id: number, visited: boolean, setVisited: Function, user: User}) {
    const updateMonumentVisited = async () => {
        const response = await fetch(`/api/update-monument-visited`, {
            method: 'POST',
            body: JSON.stringify({
                monumentId: id,
            }),
        });

        if (response.ok) {
            setVisited(true);
            confetti({
                particleCount: 200,
                spread: 200,
            });
        }
    };

    return (
        !visited && (
            <button
                onClick={updateMonumentVisited}
                className={`absolute right-0 text-sm my-1 px-2 font-bold rounded-full border transition-all uppercase hover:scale-105 hover:shadow-lg ${user.name === 'Alejandro' && 'text-alejandro-primary bg-alejandro-secondary border-alejandro-primary hover:text-alejandro-secondary hover:bg-alejandro-primary'} ${user.name === 'Gema' && 'text-gema-primary bg-gema-secondary border-gema-primary hover:text-gema-secondary hover:bg-gema-primary'}`}
            >
                Visitado
            </button>
        )
    );
}

export default MonumentVisited;