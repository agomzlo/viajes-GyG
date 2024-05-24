import { useState } from 'react';

function FilterBadge({monumentType}: {monumentType: string}) {
    const [filter, setFilter] = useState<string | null>(null);

    const changeFilter = (newFilter: string) => {
        setFilter(newFilter === filter ? null : newFilter)
    }
    return (
        <p 
            className="bg-red-200 text-red-600 border border-red-300 rounded-full px-3 cursor-pointer 
                hover:bg-red-300 hover:scale-105 hover:shadow-lg"
            onClick={() => changeFilter('Monument')}
        >
            {monumentType}
        </p>
    );
}

export default FilterBadge;