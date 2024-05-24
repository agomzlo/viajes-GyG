import type { Monument, User } from '@/lib/types';

function TotalMonuments({monuments, user}: {monuments: Monument[], user: User}) {
    const totalMonuments = monuments.length;
    const visitedMonuments = monuments.filter((monument) => monument.visited === true).length;
    const toVisitMonuments = totalMonuments - visitedMonuments;
    const totalRequiredMonuments = monuments.filter((monument) => monument.optional === false).length;
    const requiredVisitedMonuments = monuments.filter((monument) => monument.visited === true).length;
    const toVisitRequiredMonuments = totalRequiredMonuments - requiredVisitedMonuments;
    const optionalMonuments = monuments.filter((monument) => monument.optional === true);
    const totalOptionalMonuments = optionalMonuments.length;
    const visitedOptionalMonuments = optionalMonuments.filter((monument) => monument.visited === true).length;
    const toVisitOptionalMonuments = totalOptionalMonuments - visitedOptionalMonuments;

    const showMoreInfo = () => {
        const showMoreInfo = document.getElementById('showMoreInfo') as HTMLButtonElement;
        const moreInfo = document.getElementById('moreInfo') as HTMLDivElement;
        const isHidden = moreInfo.getAttribute('aria-hidden') === 'true';
    
        moreInfo.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
        showMoreInfo.textContent = isHidden ? '- Info' : '+ Info';
    }

    return (
        <section className="flex flex-col gap-1 mt-4">
            <h2 className="flex flex-row justify-between font-bold text-2xl md:text-3xl">
                Puntos de interés:
                <button
                    id="showMoreInfo"
                    onClick={showMoreInfo}
                    className={`w-16 text-xs my-1 px-2 font-bold rounded-full border transition-all uppercase hover:scale-105 hover:shadow-lg ${user.name === 'Alejandro' && 'text-alejandro-primary bg-alejandro-secondary border-alejandro-primary hover:text-alejandro-secondary hover:bg-alejandro-primary'} ${user.name === 'Gema' && 'text-gema-primary bg-gema-secondary border-gema-primary hover:text-gema-secondary hover:bg-gema-primary'}`}
                >
                    + Info
                </button>
            </h2>
            <span className="flex flex-col mx-2 sm:grid sm:grid-cols-3 font-bold text-lg md:text-xl">
                <p>Total: {totalMonuments}</p>
                <p>Visitados: {visitedMonuments}</p>
                <p>Por visitar: {toVisitMonuments}</p>
            </span>
            <div 
                aria-hidden="true" 
                className="flex flex-col px-4 aria-hidden:hidden animate-fade-in-down duration-300" 
                id="moreInfo"
            >
                <h2 className="font-bold md:text-xl mt-1.5">Obligatorios:</h2>
                <span className="flex flex-col mx-2 sm:grid sm:grid-cols-3 font-bold text-sm md:text-base">
                    <p>Total: {totalRequiredMonuments}</p>
                    <p>Visitados: {requiredVisitedMonuments}</p>
                    <p>Por visitar: {toVisitRequiredMonuments}</p>
                </span>
                <h2 className="font-bold md:text-xl mt-1.5">Opcionales:</h2>
                <span className="flex flex-col mx-2 sm:grid sm:grid-cols-3 font-bold text-sm md:text-base">
                    <p>Total: {totalOptionalMonuments}</p>
                    <p>Visitados: {visitedOptionalMonuments}</p>
                    <p>Por visitar: {toVisitOptionalMonuments}</p>
                </span>
            </div>
        </section>
    )
}

export default TotalMonuments;