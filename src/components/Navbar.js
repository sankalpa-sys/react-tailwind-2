import React from 'react'
import { SearchIcon, MenuIcon} from '@heroicons/react/solid'
import {
    
    Link
  } from "react-router-dom";

function Navbar({Logo}) {
    return (
        <div class="sticky z-50 top-0 flex h-16  pt-2 items-center justify-between border-2  bg-gray-300">
            <div className="flex items-center  md:pl-2 ">
                {/*left side  */}
               <div className="flex items-center md:ml-4 cursor-pointer">
               <img src={Logo} alt="" className="h-8 bg-gray-200 border rounded-full" />
                <h1 className="font-bold text-xl pl-1 font-sans">DOKAN</h1>
               </div>

            </div>
            <div className="mr-0 md:flex items-center border-2 border-gray-400 rounded-full pl-3 flex-auto justify-between cursor-text mx-4">
                <input type="text" className="flex-auto  outline-none bg-transparent" placeholder="Search Products" />
                <SearchIcon className="hidden md:flex h-8 cursor-pointer  bg-red-400 rounded-full p-2 text-white ml-3 shadow-sm hover:bg-green-600 "/>
            </div>
            
            

            <div className=" mx-4 flex items-center">
                {/* right */}

                <ul className="hidden md:flex justify-between space-x-10 font-semibold cursor-pointer ml-4">
                    <Link className="hover:text-red-500 " to="/">Electronics</Link>
                    <Link className="hover:text-red-500 " to="/jewelery">Jewelery</Link>
                </ul>
                <MenuIcon className="h-8 flex-auto md:hidden sm:hidden lg:hidden xl:hidden 2xl:hidden"/>

            </div>
        </div>
    )
}

export default Navbar
