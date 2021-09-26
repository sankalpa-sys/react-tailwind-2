import React from 'react'
import Contactt from '../contact.jpg'
import { PhoneIcon, ChatAltIcon } from '@heroicons/react/solid'


function Contact(props) {
    return (
        <div className="">
           <div className="flex h-96 bg-gray-900 justify-between  items-center ">
                <div className=" ml-4 md:ml-20 text-white">
                    <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-base">Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
                </div>
                <div className="">
                    <img src={Contactt} alt="" className="h-96 rounded-l-full flex-grow overflow-hidden" />
                </div>
           </div>
           {/* cards */}
           <div className=" inline-block space-y-2 mt-4 mb-4 md:flex justify-around items-center md:my-4">
                <div className="bg-red-900 h-96 text-white rounded-r-full shadow-lg hover:scale-105 transform transition duration-300 ease-in  ">
                    <div className="flex flex-col items-center pt-5 px-5">
                        <PhoneIcon className="h-8  text-blue-600"/>
                        <h1 className="mt-5 text-xl font-bold mb-5">Talk To Sales</h1>
                        <p className="my-2">Interested in Dokan? Just pick up the phone to chat with the member of our sales team. </p>
                        <p>+977-9846062386</p>
                    </div>
                </div>
                <div className="bg-green-900 h-96 text-white   rounded-l-full shadow-lg hover:scale-105 transform transition duration-300 ease-in">
                    <div className="flex flex-col items-center pt-5 px-5">
                        <ChatAltIcon className="h-8 text-red-600 "/>
                        <h1 className="mt-5 text-xl font-bold mb-5">Contact Customer Support</h1>
                        <p className="my-2">Buy and sell anything you want from the Dokan website. Its easy and secure.</p>
                        
                    </div>
                </div>
           </div>
           <hr />
           <div className="flex flex-col items-center py-4 mx-2  mb-4 ">
               <h1 className={`text-4xl my-4 animate-pulse text-${props.textColor}`}>Message Us</h1>
               <div class="flex space-x-8 justify-center">
                   <input type="text" placeholder="First Name" className={`contact_form bg-${props.fieldBg} `} />
                   <input type="text" placeholder="Last Name" className={`contact_form bg-${props.fieldBg} `}/>
               </div>

               <div className="my-10 flex flex-col space-y-8 justify-center items-center">
                   <input type="email" placeholder="Email" className={`contact_form bg-${props.fieldBg}`} />
                   <textarea name="message" id="" cols="40" rows="10" placeholder="Enter you message here" className={`contact_form bg-${props.fieldBg} `}></textarea>
               </div>
               <button className="border-2 border-purple-500 bg-purple-500 text-white rounded-full px-2 py-2 hover:scale-105 transform transition duration-300 ease-in shadow-xl">Submit</button>
           </div>
        </div>
    )
}

export default Contact
