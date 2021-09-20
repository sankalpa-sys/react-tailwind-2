import React from 'react'
import { SearchIcon} from '@heroicons/react/solid'

function Navbar({Logo}) {
    return (
        <div class="sticky z-50 top-0 flex h-16 border-md pt-2 items-center justify-between border-2 max-w-[100vh] bg-gray-300">
            <div className="flex items-center  md:pl-2">
                {/*left side  */}
               <div className="flex items-center md:ml-4 cursor-pointer">
               <img src={Logo} alt="" className="h-8 bg-gray-200 border rounded-full" />
                <h1 className="font-bold text-xl pl-1 font-sans">DOKAN</h1>
               </div>

            </div>
            <div className="mr-0 md:flex items-center border-2 rounded-full pl-3">
                <input type="text" className="flex- grow bg-transparent outline-none" placeholder="Search Products" />
                <SearchIcon className="hidden md:flex h-8 cursor-pointer bg-green-400 rounded-full p-2 text-white ml-3"/>
            </div>
            
            

            <div className="mr-10 flex">
                {/* right */}

                <ul className="hidden md:flex justify-around space-x-10 font-semibold cursor-pointer">
                    <li className="link hover:text-red-400">Electronics</li>
                    <li className="link hover:text-red-400">Jewelery</li>
                    <li className="link hover:text-red-400">clothes</li>
                    <li className="link hover:text-red-400">Foods</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
