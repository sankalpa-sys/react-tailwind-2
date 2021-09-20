import React from 'react'

function Card(props) {
    return (
        <div class=" max-w-sm border rounded-xl shadow-lg overflow-hidden">  
        
            <div className="">
                <img src={props.image} alt="" />
            </div>

            <div className="flex justify-between mx-4 my-4">
                <p className="font-extrabold mt-4 font-serif">{props.title}</p>
                <p className="font-semibold text-red-400 mt-4">${props.price}</p>
            </div>
            <div className="px-4 py-4">
                {props.desc}
            </div>
            <div className="flex justify-around my-4">
                <button className="h-10 shadow-lg border-md rounded-full bg-yellow-300 px-4 hover:bg-yellow-400 hover:text-white hover:shadow-2xl font-semibold">Add to Cart</button>
                <button className="h-10 shadow-lg border-md rounded-full bg-green-300 px-4 hover:bg-green-400 hover:text-white hover:shadow-2xl font-semibold" >Add to Favorites</button>
            </div>
      </div>
    )
}

export default Card
