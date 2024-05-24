import { CloseIcon, HamburgerIcon } from '@/icons/react/HeaderIcons';
import type { User } from '@/lib/types'

function UserInfo({country, city, monument, user}: {country: string, city: string, monument: string, user: User}){
    const showDropdown = () => {
        const dropdownMenu = document.getElementById('dropdownMenu') as HTMLElement;
        dropdownMenu?.classList.toggle('hidden');
    }

    const showMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu') as HTMLElement;
        mobileMenu?.classList.toggle('hidden');
        const hamburgerIcon = document.getElementById('hamburgerIcon') as HTMLElement;
        hamburgerIcon?.classList.toggle('hidden');
        const closeIcon = document.getElementById('closeIcon') as HTMLElement;
        closeIcon?.classList.toggle('hidden');
    }

    return(
        <div id="dropdown" className="relative md:flex md:flex-row justify-end py-1">
            <button type="button" className="hidden md:flex md:flex-row items-center text-black cursor-pointer transition-all hover:scale-110" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={showDropdown}>
                {user.name }
                <span className="h-full flex flex-row items-end">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>

            <div id="dropdownMenu" className="absolute right-0 z-10 mt-7 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className="py-1" role="none">
                    <form method="POST" action="/api/auth/logout">
                        <button 
                            type="submit" 
                            className={`text-gray-700 block w-full px-4 py-2 text-left text-sm transition-all hover:scale-105 ${user.name === 'Alejandro' && 'hover:text-alejandro-primary'} ${user.name === 'Gema' && 'hover:text-gema-primary'}`}
                            id="signOutButton"
                        >
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>

            <button type="button" className="flex flex-row md:hidden items-center text-black cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={showMobileMenu}>
                <HamburgerIcon id='hamburgerIcon' className='w-6 h-6 text-black'/>
                <CloseIcon id='closeIcon' className='w-6 h-6 text-black hidden'/>
            </button>

            <div id="mobileMenu" className="absolute right-0 z-10 mt-1 w-44 origin-top-right rounded-md bg-white shadow-xl hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className="flex flex-col gap-2 p-2" role="none">
                <a 
                    href="/"
                    className={`text-black cursor-pointer ${!country && 'block'}`}
                >Paises</a>
                {
                    country && city && (
                        <a href={`/country/${country}`} className="text-black cursor-pointer">{country}</a>
                    )
                }
                {
                    city && monument && (
                        <a href={`/country/${country}/city/${city}`} className="text-black cursor-pointer">{city}</a>
                    )
                }
                    <div className='flex flex-row items-end'>
                        {user.name }
                        <span className="h-full flex flex-row items-end">
                            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <form method="POST" action="/api/auth/logout">
                        <button 
                            type="submit" 
                            className={`text-gray-700 block w-full px-4 py-2 text-left text-sm transition-all hover:scale-105 ${user.name === 'Alejandro' && 'hover:text-alejandro-primary'} ${user.name === 'Gema' && 'hover:text-gema-primary'}`}
                            id="signOutButton"
                        >
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;