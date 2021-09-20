import React from "react";
import Social from "./Social";

function Footer() {
  return (
    <div className="border bg-gray-300">
      <div className="mt-6 space-y-4 grid cols-1 sm:grid-cols-3 px-8 items-center pt-6 pb-4 ">
        <div>
          <p className="font-bold mb-2">Services</p>
          <ul className="text-gray-600 cursor-pointer space-y-2">
            <li>Web design</li>
            <li>Development </li>
            <li>Hosting</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2">About</p>
          <ul className="text-gray-600 cursor-pointer space-y-2">
            <li>Comapany</li>
            <li>Teams </li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2">Dokan</p>
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
