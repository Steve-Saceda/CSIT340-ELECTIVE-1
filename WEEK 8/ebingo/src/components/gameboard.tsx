import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from "react"
import { player, useRest } from "../REST/useRest"
import BingoCard from './bingocard';

export default function GameBoard() {
    const [gameboardReq, data, Card, checkCard, win] = useRest();
    const [check, setCheck] = useState<boolean>(false);

    const clickHandler = () => {
        gameboardReq(
            {
                method: 'GET',
                url: "http://www.hyeumine.com/getcard.php?bcode=HEelhJos",
            }
        )
    }

    const clickHandler2 = (data: player) => {
        checkCard(data);
       
        if (win == 1)
            //console.log(checkwin)
            alert("Winning Card!")
    }
    console.log("gameboard: " + win)
   
    if (data !== undefined) return <>
            <button onClick={clickHandler} type="button" className="btn btn-primary">Get New Card</button>
            <BingoCard playcard_token={data.playcard_token} card={data.card} />
            <button onClick={()=>clickHandler2(data)} type="button" className="btn btn-primary">Check Card</button>
            {
           console.log(data)
            
            }
        
        
        {/* <div className="container">
            <button onClick={clickHandler} type="button" className="btn btn-primary">Get New Card</button>
            <div className="container" style={{ padding: "10px" }}>
                <h1> Player Token: {data.playcard_token}</h1>
                <button style={{ margin: "2px" }} type="button" className="btn btn-info">B </button>
                {
                    <>
                    {data.card.B.map((items, i)=>
                    <>
                        <button style={{ margin: "2px" }} type="button" className="btn btn-success">{items}</button>
                    </>
                    )}
                    
                    </>
                       }
            </div>
            <div className="container" style={{padding: "10px"}}>
            <button style={{ margin: "2px" }} type="button" className="btn btn-info">I</button>
            {
                    <>
                    {data.card.I.map((items, i)=>
                    <>
                        <button style={{ margin: "2px" }} type="button" className="btn btn-success">{items}</button>
                    </>
                    )}
                    
                    </>
                       }
            </div>
            <div className="container" style={{padding: "10px"}}>
            <button style={{ margin: "2px" }} type="button" className="btn btn-info">N</button>
            {
                    <>
                    {data.card.N.map((items, i)=>
                    <>
                        <button style={{ margin: "2px" }} type="button" className="btn btn-success">{items}</button>
                    </>
                    )}
                    
                    </>
                       }
            </div>
            <div className="container" style={{padding: "10px"}}>
            <button style={{ margin: "2px" }} type="button" className="btn btn-info">G</button>
            {
                    <>
                    {data.card.G.map((items, i)=>
                    <>
                        <button style={{ margin: "2px" }} type="button" className="btn btn-success">{items}</button>
                    </>
                    )}
                    
                    </>
                       }
            </div>
            <div className="container" style={{padding: "10px"}}>
            <button style={{ margin: "2px" }} type="button" className="btn btn-info">O</button>
            {
                    <>
                    {data.card.O.map((items, i)=>
                    <>
                        <button style={{ margin: "2px" }} type="button" className="btn btn-success">{items}</button>
                    </>
                    )}
                    
                    </>
                       }
            </div>
            <button onClick={()=>clickHandler2(data.playcard_token)} type="button" className="btn btn-primary">Check Card</button>
        </div>
                    */}
    </>

    return <>
        <div className="container">
            <button onClick={clickHandler} type="button" className="btn btn-primary">Get New Card</button>
            <div className="container" style={{ padding: "10px" }}>
                <h1> Game Code: HEelhJos</h1>
                <button style={{ margin: "2px" }} type="button" className="btn btn-info">B</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">01</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">02</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">03</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">04</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">05</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">06</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">07</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">08</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">09</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">10</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">11</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">12</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">13</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">14</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">15</button>
            </div>
            <div className="container" style={{ padding: "10px" }}>
                <button style={{ margin: "2px" }} type="button" className="btn btn-info">I</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">16</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-secondary">17</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">18</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">19</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">20</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-secondary">21</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">22</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">23</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">24</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">25</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">26</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-secondary">27</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">28</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">29</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-secondary">30</button>
            </div>
            <div className="container" style={{ padding: "10px" }}>
                <button style={{ margin: "2px" }} type="button" className="btn btn-info">N</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">31</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">32</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">33</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">34</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">35</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">36</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">37</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">38</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">39</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">40</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">41</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">42</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">43</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">44</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">45</button>
            </div>
            <div className="container" style={{ padding: "10px" }}>
                <button style={{ margin: "2px" }} type="button" className="btn btn-info">G</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-secondary">46</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">47</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">48</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">49</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">50</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">51</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">52</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">53</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">54</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">55</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">56</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">57</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">58</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">59</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">60</button>
            </div>
            <div className="container" style={{ padding: "10px" }}>
                <button style={{ margin: "2px" }} type="button" className="btn btn-info">O</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">61</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">62</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">63</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">64</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">65</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">66</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">67</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">68</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">69</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">70</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">71</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">72</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">73</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">74</button>
                <button style={{ margin: "2px" }} type="button" className="btn btn-success">75</button>
            </div>

            <a href='?bcode=HEelhJos&dr=1'><button type="button" className="btn btn-primary">Next Ball</button></a>

        </div>

    </>



}