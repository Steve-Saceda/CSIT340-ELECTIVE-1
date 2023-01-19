import { useContext, useState } from "react"
import { CardListContext } from "../helpers/contexts/CardContext"
import TheCard, { CardDetails } from "./TheCard"


export default function TheCardList() {
    const cards = useContext(CardListContext)
    return (
        <>
        <button onClick={()=>{
            cards?.addCard( { title: 'Tikiku', description: 'Hal2x', image: '/images/contemplative-reptile.jpg' })
        }}>Click to Add</button>
        { cards?.cards.map((item,i)=>
            <TheCard key={i} title={item.title} image={item.image} description={item.description}/>
        )} 
        </>
    )

}