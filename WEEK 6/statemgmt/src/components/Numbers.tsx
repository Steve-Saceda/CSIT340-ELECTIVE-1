import { Button } from '@mui/material';
import * as React from 'react';
import { useRef } from 'react';


export interface NumbersDetails {
    num_value: number;
    color?: string;

}

export default function Numbers(props: NumbersDetails) {
    return (
        <div className='numberlist' style={{color: props.color}}><span>{props.num_value}</span></div>

        //<div style={{width: "10px", height: "10px"}}>{props.num_value}</div>
    )
}