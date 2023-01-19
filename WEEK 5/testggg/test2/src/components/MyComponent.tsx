import { useContext } from "react";
import { CardListContext } from "../helpers/contexts/CardContext";

type MyCompType = {
    name: string;
    description: string;
    numericvar?: number;
}

export default function MyComp(props:MyCompType) {
    return (
        <div>
            <h2>Hi</h2>
            <p>{Math.random() * 100}</p>
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
}