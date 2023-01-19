import { Button, TextField, TextFieldProps } from "@mui/material";
import React, { useRef, useState } from "react";

export default function SessionThree() {
    const tfRef = useRef<TextFieldProps>(null)
    const divRef = useRef<HTMLDivElement>(null)

    
    let collectionOne = ["Default One"];

    const [val,setVal] = useState("Initial Too")
    const [collectionTwo, setCollectionTwo] = useState(["Default One Too"])

    let value = "Initial";
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        value = event.target.value;
        setVal(event.target.value);
        console.log(value);
    }
    const handleClick = () => {
       divRef!.current!.innerText = tfRef.current?.value+"";
       //setVal(tfRef.current?.value+"");
       //collectionOne.push(tfRef.current?.value+"");
       let d = [...collectionTwo]
       d.push(tfRef.current?.value+"");
       setCollectionTwo(d);
    }

    return (
        <>
            <TextField inputRef={tfRef}></TextField>
            <TextField onChange={handleChange}></TextField>
            <p style={{color:"#f00"}}>{value}</p>
            <p style={{color:"#f00"}}>{val}</p>
            <Button onClick={handleClick} variant="contained">Get It</Button>
            <div style={{color:"#f00"}} ref={divRef}>This is the Value</div>
            {
                collectionOne.map((item,i) => (
                    <p key={i} style={{color:"#f00", border:'solid 1px #0f0'}}>{item}</p>
                ))
            }
            {
                collectionTwo.map((item,i) => (
                    <p key={i} style={{color:"#f00", border:'solid 1px #00f'}}>{item}</p>
                ))
            }
        </>
    )
}
