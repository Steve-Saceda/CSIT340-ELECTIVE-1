import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { isNotEmittedStatement } from "typescript";

export interface BingoCard{
    B: number[],
    I: number[],
    N: number[],
    G: number[],
    O: number[]
}

export interface player{
    playcard_token: string,
    card: BingoCard
    
}

export interface playerCard{
    card: player
}

export const useRest = ():[(config: AxiosRequestConfig<any>)=>void, player| undefined, (bcode: string)=>void, (data: player)=>void, number] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data,setData] = useState<player>();
    const [win,setWin] = useState<number>(0);
    
    
    function getCard(config: AxiosRequestConfig<any>){
        setLoading(true);

        axios(config)
        .then((response) => {
            setError('');
            setData(response.data);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=>setLoading(false))
    }
    
    function Card(bcode: string){
        // do a REST...
        setLoading(true)
        axios.post(
            "http://www.hyeumine.com/getcard.php",
            new URLSearchParams({
              bcode: bcode
            })
            )
            .then((response)=>{
                setData(response.data);
            })
            .catch((error)=>{
                setError(error.message);
            })
            .finally(()=>{
                setLoading(false)
            })
            console.log(bcode)
    }
    //console.log(data)

    function checkCard(data: player){
        setLoading(true)
        console.log(data.playcard_token)
            axios.post(
                "http://www.hyeumine.com/checkwin.php",
                new URLSearchParams({
                    playcard_token: data.playcard_token,
                
                })
                )
                .then((response)=>{
                    console.log("Response data: " + response.data)
                    setWin(response.data)
                })
                .catch((error)=>{
                    setError(error.message);
                })
                .finally(()=>{
                    setLoading(false)
                })
                
    }
    console.log("useRest: "+ win)
    
    return [getCard,  data, Card, checkCard, win]
}
