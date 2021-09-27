import React from "react";
import Social from "./Social";
import {
    
  NavLink
} from "react-router-dom";

function Footer(props) {
  const myStyle = {
    color: "red",
  }
  return (
    <div className={`border-t bg-${props.bgcolor} text-${props.textColor}` }>
      <div className="mt-6 space-y-4 grid cols-1 sm:grid-cols-4 xl:grid-cols-4 px-8  pt-6 pb-4 ">
        <div>
          <p className="footer_header">Services</p>
          <ul className= "cursor-pointer space-y-2">
            <li>Web design</li>
            <li>Development </li>
            <li>Hosting</li>
          </ul>
        </div>
        <div>
          <p className="footer_header">Get to Know Us</p>
          <ul className=" cursor-pointer space-y-2">
            <li>Blog</li>
            <li><NavLink className="hover:text-red-500" activeClassName="selected" 
                  activeStyle={myStyle} to="/about">About Dokan </NavLink></li>
            <li><NavLink activeClassName="selected" className="hover:text-red-500"
                  activeStyle={myStyle} to ="/contact">Contact Us</NavLink></li>
            <li><NavLink activeClassName="selected" className="hover:text-red-500"
                  activeStyle={myStyle} to ="/service">Our Services</NavLink></li>
          </ul>
        </div>
        <div>
        <p className="footer_header">Categories</p>
        <ul className=" cursor-pointer space-y-2">
          <li><NavLink activeClassName="selected"
                  activeStyle={myStyle} to="/" exact={true} className="hover:text-red-500">Electronics</NavLink></li>
          <li><NavLink activeClassName="selected"
                  activeStyle={myStyle} to="/jewelery" exact={true} className="hover:text-red-500">Jewelery</NavLink></li>
        </ul>
      </div>
        <div className="">
          <p className="footer_header">Dokan</p>
          <p className="">
          Dokan Inc. is a global commerce leader that connects millions of buyers and sellers in more than 190 markets around the world. We exist to enable economic opportunity for individuals, entrepreneurs, businesses and organizations of all sizes.
          </p>
        </div>
      </div>
      
      <div className="justify-center items-center my-4">
          <Social className={`text-${props.textColor}`}/>
          <p className="flex justify-center font-light my-4">Dokan &copy; 2021</p>
      </div>
    </div>
  );
}

export default Footer;
