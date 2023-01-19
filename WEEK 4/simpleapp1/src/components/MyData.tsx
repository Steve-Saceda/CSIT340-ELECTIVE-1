import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button, { ButtonProps } from '@mui/material/Button';
import { ButtonBaseClassKey, TableBody, TableBodyProps } from '@mui/material';
import { DataListContext } from '../helper/DataContext';
import { useContext, useRef, useState } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export interface Data {
    datetime: string;
    notes: string;
    index?: number
}

export default function Mydata(props: Data) {
    const datas = useContext(DataListContext)
    const btnRef = useRef<ButtonProps>(null)
    const [index, setIndex] = useState<String>("")
    function delNote(index: number){
        datas?.delData(index)
     }
     function clickDelete() {
        

    }
    return (

        <>
            <StyledTableCell component="th" scope="row" >{props.datetime}</StyledTableCell>
            <StyledTableCell align="center">{props.notes}</StyledTableCell>
           
        </>


    )


}