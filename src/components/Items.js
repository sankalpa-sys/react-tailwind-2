import React,{useEffect, useState} from 'react'
import Card from './Card'


function Items() {
    useEffect(() => {
        getProducts()
    }, [])
    const [results, setresults] = useState([])

    const  getProducts = async() => {

        const resposne = await fetch("https://fakestoreapi.com/products/category/electronics")
        const data = await resposne.json()
        setresults(data)


    }
    return (
        <div className="grid grid-cols-1 justify-center sm:grid-cols-3 space-x-4 space-y-4 my-6 items-center mx-4">
            {results.map((element)=> (
                <Card key = {element.image} image={element.image} title={element.title} price ={element.price} desc={element.description}/>
            ))}
        </div>
    )
}

export default Items
