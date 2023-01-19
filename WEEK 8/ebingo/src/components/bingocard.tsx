import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from "react"
import { player, useRest } from "../REST/useRest"



export default function BingoCard(props: player) {
    const [gameboardReq, data, Card, checkCard,checkwin] = useRest();
    const [check, setCheck] = useState<boolean>(false);



    return <>   
    <div className="container">
           
            <div className="container" style={{ padding: "10px" }}>
                <h1> Player Token: {props.playcard_token}</h1>
                <button style={{ margin: "2px" }} type="button" className="btn btn-info">B </button>
                {
                    <>
                    {props.card.B.map((items, i)=>
                    <>
                        <button key={i} style={{ margin: "2px" }} type="button" className="btn btn-success">{items}</button>
                    </>
                    )}
                    
                    </>
                       }
            </div>
            <div className="container" style={{padding: "10px"}}>
            <button style={{ margin: "2px" }} type="button" className="btn btn-info">I</button>
            {
                    <>
                    {props.card.I.map((items, i)=>
                    <>
                        <button key={i} style={{ margin: "2px" }} type="button" className="btn btn-success">{items}</button>
                    </>
                    )}
                    
                    </>
                       }
            </div>
            <div className="container" style={{padding: "10px"}}>
            <button style={{ margin: "2px" }} type="button" className="btn btn-info">N</button>
            {
                    <>
                    {props.card.N.map((items, i)=>
                    <>
                        <button key={i} style={{ margin: "2px" }} type="button" className="btn btn-success">{items}</button>
                    </>
                    )}
                    
                    </>
                       }
            </div>
            <div className="container" style={{padding: "10px"}}>
            <button style={{ margin: "2px" }} type="button" className="btn btn-info">G</button>
            {
                    <>
                    {props.card.G.map((items, i)=>
                    <>
                        <button key={i} style={{ margin: "2px" }} type="button" className="btn btn-success">{items}</button>
                    </>
                    )}
                    
                    </>
                       }
            </div>
            <div className="container" style={{padding: "10px"}}>
            <button style={{ margin: "2px" }} type="button" className="btn btn-info">O</button>
            {
                    <>
                    {props.card.O.map((items, i)=>
                    <>
                        <button key={i} style={{ margin: "2px" }} type="button" className="btn btn-success">{items}</button>
                    </>
                    )}
                    
                    </>
                       }
            </div>
            
        </div></>
    



}