import React from 'react'
import { SearchIcon} from '@heroicons/react/solid'
import {
    
    NavLink
  } from "react-router-dom";

function Navbar({Logo}) {
    const myStyle = {
        color: "red"
    }
    return (
        <div className="sticky z-50 top-0 flex h-16  pt-2 items-center justify-between border-2  bg-gray-300">
            <div className="flex items-center  md:pl-2 ">
                {/*left side  */}
               <NavLink to="/" className="flex items-center md:ml-4 cursor-pointer">
               <img src={Logo} alt="" className="h-8 border rounded-full" />
                <h1 className="font-bold text-xl pl-1 font-sans">DOKAN</h1>
               </NavLink>

            </div>
            <div className="mr-0 md:flex items-center border-2 border-gray-500 rounded-full pl-3 flex-auto justify-between cursor-text mx-4">
                <input type="text" className="flex-auto  outline-none bg-transparent" placeholder="Search Products" />
                <SearchIcon className="hidden md:flex h-8 cursor-pointer  bg-red-400 rounded-full p-2 text-white ml-3 shadow-sm hover:bg-green-600 "/>
            </div>
            
            

            <div className="mx-4 flex items-center">
                {/* right */}

                <ul className="hidden md:flex justify-between space-x-6 font-semibold cursor-pointer ml-4 items-center">
                    <NavLink className="link" to="/" activeClassName="selected"
                  activeStyle={myStyle}
                  exact={true}>Electronics</NavLink>
                    <NavLink className="link" to="/jewelery" activeClassName="selected"
                  activeStyle={myStyle}
                  >Jewelery</NavLink>
                    
                </ul>
               
            </div>
        </div>
    )
}

export default Navbar
