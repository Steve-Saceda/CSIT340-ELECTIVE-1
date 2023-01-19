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

export const useRest = ():[(config: AxiosRequestConfig<any>)=>void, player| undefined, (bcode: string)=>void, (token: string)=>void, number | undefined] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data,setData] = useState<player>();
    const [checkwin,setCheckwin] = useState<number>();
    
    
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

    function checkCard(token: string){
            setLoading(true)
            axios.post(
                "http://www.hyeumine.com/checkwin.php",
                new URLSearchParams({
                    playcard_token: token,
                })
                )
                .then((response)=>{
                    console.log(token)
                    console.log(response.data)
                    setCheckwin(response.data)
                })
                .catch((error)=>{
                    setError(error.message);
                })
                .finally(()=>{
                    setLoading(false)
                })
                
    }
    
    return [getCard,  data, Card, checkCard, checkwin]
}
