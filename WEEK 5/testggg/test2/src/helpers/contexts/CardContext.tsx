import React, { createContext, useState } from "react";
import TheCard, { CardDetails } from "../../components/TheCard";

interface CardListContextDoer{
    cards: CardDetails[],
    addCard : (card:CardDetails) => void
}

export const CardListContext = createContext<CardListContextDoer | null>(null);

export default function CardListProvider(props:{children:React.ReactNode}){
    const [cards, setCards] = useState<CardDetails[]>([
        { title: 'Lizardo', description: 'Halo', image: '/images/contemplative-reptile.jpg' },
        { title: 'Iguanaa', description: 'Lizard of Oz', image: '/images/contemplative-reptile.jpg' },
        { title: 'Tiki', description: 'Hi There', image: '/images/contemplative-reptile.jpg' }
      ]);
      
      const addCard = (card:CardDetails) => {
        setCards([...cards,card]);
      }

    return (
        <CardListContext.Provider value={{cards,addCard}}>
            {props.children}
        </CardListContext.Provider>
    )
}