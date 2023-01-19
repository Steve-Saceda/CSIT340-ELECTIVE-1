import { useContext } from "react"
import { CardListContext } from "../helpers/contexts/CardContext"

export default function TheCardSummary() {
    const cards = useContext(CardListContext);
    return (
        <>
            <button onClick={()=>{
                cards?.addCard( { title: 'Tukuku', description: 'Hal2x', image: '/images/contemplative-reptile.jpg' })
            }}>Click to Add</button>
            
            <h1 style={{color:'red'}}>
                The Total: {cards?.cards.length}
            </h1>
        </>
    )
}