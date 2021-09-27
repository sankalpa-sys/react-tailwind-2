import React from "react";
import PiggyBank from "../piggybank.jpeg";
import Arrow from "../Dart.jpeg";
import Rocket from "../rocket.jpeg";

function Service(props) {
  return (
    <div className={`text-${props.textColor}`}>
      <div className="flex flex-col items-center justify-center  space-y-2 my-4">
        <h1 className="text-2xl md:text-4xl font-semibold font-mono text-gray-900">
          Why People Believe in Us
        </h1>
        <p className="font-semibold text-gray-900 mx-10 mt-4 font-sans">
          Always render more and better services than is expected to you, no
          matter what you ask
        </p>
      </div>
      <div className="inline-block md:flex justify-between md:space-x-4 space-y-4 mx-4 md:mx-8 my-4 items-center">
        <div className={`service_card bg-${props.cardBg}`}>
          <img src={PiggyBank} className="service_image" alt="" />
          <h1 className="text-xl font-semibold mx-20 mt-4">We're Free</h1>
          <p className="mx-10 my-4 ">
            We spent thousands of hours creating an algorithm that does this for
            you in seconds. We collect a small fee from the professional after
            they meet your qualification{" "}
          </p>
        </div>
        <div className={`service_card bg-${props.cardBg}`}>
          <img src={Arrow} className="service_image" alt="" />
          <h1 className="text-xl font-semibold mx-20 mt-4">We're Unbiased</h1>
          <p className="mx-10 my-4 ">
            We don't accept ads from anyone. We use actual data to match you who
            the best person for each job will be.{" "}
          </p>
        </div>
        <div className={`service_card bg-${props.cardBg}`}>
          <img src={Rocket} className="service_image" alt="" />
          <h1 className="text-xl font-semibold mx-20 mt-4">We Guide You</h1>
          <p className="mx-20 my-4">
            Buying and selling the house is often the largest transaction that
            anyone does in their life. We guide you through the process so that
            you can be confident in reaching your dream outcome.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-8 space-y-2 mt-4">
          <p className="font-thin">Still not sure?</p>
          <button className="bg-red-400 text-white px-3 py-2 rounded-full border border-green-500 hover:bg-green-400 active:scale-90 transform transition duration-300 ease-out">Read all Testimonials</button>
      </div>
    </div>
  );
}

export default Service;
