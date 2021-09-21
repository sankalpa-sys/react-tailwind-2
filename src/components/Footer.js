import React from "react";
import Social from "./Social";
import {
    
  NavLink
} from "react-router-dom";

function Footer() {
  const myStyle = {
    color: "red",
  }
  return (
    <div className="border-2 bg-gray-300">
      <div className="mt-6 space-y-4 grid cols-1 sm:grid-cols-4 xl:grid-cols-4 px-8  pt-6 pb-4 ">
        <div>
          <p className="footer_header">Services</p>
          <ul className="text-gray-600 cursor-pointer space-y-2">
            <li>Web design</li>
            <li>Development </li>
            <li>Hosting</li>
          </ul>
        </div>
        <div>
          <p className="footer_header">About</p>
          <ul className="text-gray-600 cursor-pointer space-y-2">
            <li>Company</li>
            <li>Teams </li>
            <li>Career</li>
          </ul>
        </div>
        <div>
        <p className="footer_header">Categories</p>
        <ul className="text-gray-600 cursor-pointer space-y-2">
          <li><NavLink activeClassName="selected"
                  activeStyle={myStyle} to="/" exact={true}>Electronics</NavLink></li>
          <li><NavLink activeClassName="selected"
                  activeStyle={myStyle} to="/jewelery" exact={true}>Jewelery</NavLink></li>
        </ul>
      </div>
        <div className="">
          <p className="footer_header">Dokan</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            nesciunt ut placeat iure ad harum rem enim exercitationem, expedita
            nihil incidunt, eius error veniam aliquam, earum quas officia
            deleniti dolorum.
          </p>
        </div>
      </div>
      
      <div className="justify-center items-center my-4">
          <Social/>
          <p className="flex justify-center font-light my-4">Dokan &copy; 2021</p>
      </div>
    </div>
  );
}

export default Footer;
