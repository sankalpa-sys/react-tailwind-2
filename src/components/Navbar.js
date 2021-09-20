import React from 'react'
import {MenuIcon} from '@heroicons/react/solid'

function Navbar({Logo}) {
    return (
        <div class="sticky z-50 top-0 flex h-16 border-md pt-2 items-center justify-between border-2 max-w-[100vh] bg-gray-200">
            <div className="flex items-center pl-2">
                {/*left side  */}
                <MenuIcon class="h-8 cursor-pointer"/>
               <div className="flex items-center ml-4 cursor-pointer">
               <img src={Logo} alt="" className="h-10 bg-gray-200 border rounded-full" />
                <h1 className="font-bold text-xl pl-2 font-sans">DOKAN</h1>
               </div>

            </div>
            

            <div className="mr-10">
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
