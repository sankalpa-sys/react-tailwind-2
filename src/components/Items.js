import React,{useEffect, useState} from 'react'
import Card from './Card'
import ProgressBar from "@badrap/bar-of-progress";


function Items(props) {
    const progress = new ProgressBar({
        size: 2,
        color: "red",
        className: "bar-of-progress",
    });
    const [results, setresults] = useState([])
    useEffect(() => {
        getProducts()
    }, [])
    

    const  getProducts = async() => {
        progress.start()
        const resposne = await fetch(`https://fakestoreapi.com/products/category/${props.category}`)
        const data = await resposne.json()
        setresults(data)
        progress.finish()


    }
    return (
        <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 space-x-4 space-y-4 my-6 items-center mx-4">
            {results.map((element)=> (
                <Card key = {element.image} image={element.image} title={element.title} price ={element.price} desc={element.description}/>
            ))}
        </div>
    )
}

export default Items
