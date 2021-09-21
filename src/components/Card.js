import React from "react";

import ReactStars from "react-rating-stars-component";

function Card(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className=" max-w-sm border rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-out">
      <div className="">
        <img src={props.image} alt=""/>
      </div>

      <div className="flex justify-between mx-4 my-4 pl-4">
        <p className="font-extrabold mt-4 font-serif">{props.title}</p>
        <p className="font-semibold text-red-600 mt-4 pl-4">${props.price}</p>
      </div>
      <div className="px-4 py-4">{props.desc}</div>
      <div className=" flex justify-center">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#E9C90D"
        />
      </div>
      <div className="flex justify-around mt-4 mb-4">
        <button className="h-10 shadow-2xl border-md rounded-full bg-blue-400 px-4 hover:bg-blue-500 hover:text-black hover:shadow-2xl font-semibold">
          Add to Cart
        </button>
        <button className="h-10 shadow-2xl border-md rounded-full bg-green-400 px-4 hover:bg-green-500 hover:text-black hover:shadow-2xl font-semibold">
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default Card;
