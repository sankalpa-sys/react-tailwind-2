import React from "react";
import { SearchIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import { NavLink} from "react-router-dom";

function Navbar(props) {
  const myStyle = {
    color: "red",
  };


  return (
    <div
      className={`sticky z-50 top-0 flex h-16 text-${props.textcolor} pt-2 items-center justify-between border-b border-${props.border}  bg-${props.bgcolor}`}
    >
      <div className="flex items-center  md:pl-2 hover:scale-105 transform transition duration-300 ease-out hover:text-black ">
        {/*left side  */}
        <NavLink to="/" className="flex items-center md:ml-4 cursor-pointer">
          <img src={props.Logo} alt="" className="h-8 border rounded-full" />
          <h1 className="font-bold text-xl pl-1 font-sans">DOKAN</h1>
        </NavLink>
      </div>
      <div className="mr-0 md:flex items-center border-2 border-gray-500 rounded-full pl-3 flex-auto justify-between cursor-text mx-4">
        <input
          type="text"
          className="flex-auto  outline-none bg-transparent"
          placeholder="Search Products"
        />
        <SearchIcon className="hidden md:flex h-8 cursor-pointer  bg-red-400 rounded-full p-2 text-white ml-3 shadow-sm hover:bg-green-600 " />
      </div>

      <div className="mx-4 flex items-center">
        {/* right */}

        <ul className="hidden md:flex justify-between space-x-6 font-semibold cursor-pointer ml-4 items-center">
          <NavLink
            className="link"
            to="/"
            activeClassName="selected"
            activeStyle={myStyle}
            exact={true}
          >
            Electronics
          </NavLink>
          <NavLink
            className="link"
            to="/jewelery"
            activeClassName="selected"
            activeStyle={myStyle}
          >
            Jewelery
          </NavLink>

          {/* Switch */}
          <div className="hidden md:flex items-center space-x-2 form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.handleClick}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode==="light"? <SunIcon className="h-6 animate-spin"/>: <MoonIcon className="h-6 animate-pulse"/>}
            </label>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
