import React from 'react'
import Shop1 from "../shop1.jpg";
import Shop2 from "../shop2.jpg";
import Shop3 from "../shop3.jpg";

function About(props) {
   
    return (
        <div className="items-center space-y-10 md:my-10 md:pr-10 mb-10">
           <div className="inline-block max-w-full md:flex justify-around items-center px-auto md:space-x-20 space-y-4">
                <img src={Shop1} alt="" className=" h-96  md:ml-20"  />
                <p className={`mx-4 text-${props.textColor} `}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore fugiat animi, officia soluta numquam. Quibusdam, nisi deleniti. Mollitia debitis perferendis porro totam velit sit nihil libero cum minima tempora?</p>
           </div>
           <hr />
           <div className="inline-block max-w-full md:flex md:flex-row-reverse justify-around items-center px-auto md:space-x-20 space-y-4">
                <img src={Shop2} alt="" className=" h-96 w-full md:ml-20"  />
                <p className={`mx-4 text-${props.textColor} `}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore fugiat animi, officia soluta numquam. Quibusdam, nisi deleniti. Mollitia debitis perferendis porro totam velit sit nihil libero cum minima tempora?</p>
           </div>
           <hr />
           
                
                
           <div className="inline-block max-w-full md:flex justify-around items-center px-auto ,md:space-x-20 space-y-4">
                <img src={Shop3} alt="" className=" h-96 w-full md:ml-20"  />
                <p className={`mx-4 text-${props.textColor} `}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore fugiat animi, officia soluta numquam. Quibusdam, nisi deleniti. Mollitia debitis perferendis porro totam velit sit nihil libero cum minima tempora?</p>
           </div>
        </div>
    )
}

export default About
