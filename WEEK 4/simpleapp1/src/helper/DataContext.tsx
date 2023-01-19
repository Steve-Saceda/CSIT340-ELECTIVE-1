import React, { createContext, useState } from "react";
import { Data } from "../components/MyData";

interface DataListContextDoer{
    datas: Data[],
    addData: (theData: Data) => void
    delData: (index: number) => void
}

export const DataListContext = createContext<DataListContextDoer | null>(null);

export default function DataListProvider(props:{children: React.ReactNode}){
    const [datas, setDatas] = useState<Data[]>([
        {datetime: "Welcome Notes", notes: "This is your first Notes"}
    ])

    const addData = (theData: Data) => {
        setDatas([...datas, theData]);
    }
    const delData = (theindex: number) => {
        setDatas((Data) => Data.filter((_, index) => theindex !==index))
    }
    
    return(
        <DataListContext.Provider value ={{datas, addData, delData}}>
            {props.children}
        </DataListContext.Provider>
    )
}