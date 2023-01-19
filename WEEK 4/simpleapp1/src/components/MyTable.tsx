import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Mydata from './MyData';
import { useContext, useEffect, useRef, useState } from 'react';
import { TextareaAutosize, TextareaAutosizeProps, TextField, TextFieldProps } from '@mui/material';
import { DataListContext } from '../helper/DataContext';
import { useRest } from '../restcalls/restApi';
import { motion } from "framer-motion"



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
  title: string;
  notes: string;
}

export default function MyTable() {
  const [getNote, newNote, data, deletNote, getednote, editmyNote, edata] = useRest();
  const datas = useContext(DataListContext)
  const [thenote, setThenote] = useState("")
  const [checker, setChecker] = useState(false)
  const [userid, setUserid] = useState("")
  const [title, setTitle] = useState("")
  const [notes, setNotes] = useState<String>()
  const tfRef = useRef<TextFieldProps>(null)
  const tfRef2 = useRef<TextareaAutosizeProps>(null)
  const constraintsRef = useRef(null);

  const clickCreate = () => {
    //divRef!.current!.innerText = tfRef.current?.value + "";
    // setTitle(tfRef.current?.value + "");
    // setNotes(tfRef2.current?.value + "");
    addNote()
    setChecker(true)

  }
  const editbtn = (id: number | undefined) => {
    //divRef!.current!.innerText = tfRef.current?.value + "";
    // setTitle(tfRef.current?.value + "");
    // setNotes(tfRef2.current?.value + "");
    if(id !== undefined)
    editmyNote(id, title, thenote)
    setChecker(true)

  }


  /* useEffect(() => {
     if(title == "" || notes == ""){ 
       alert("Please Fill Up Everything to create notes")
       delNote(1)
     }
   })*/

  console.log(data)

  useEffect(() => {
    getNote(
      {
        method: 'GET',
        url: "http://localhost:8080/notes",
      }
    )

    if (checker !== false) {
      setChecker(false)
    }

  }, [checker])

  const eventOnchange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    var value = event.target.value
    setThenote(value)
    console.log(thenote)
  }

  const eventOnchange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    var value = event.target.value
    setTitle(value)
    console.log(thenote)
  }

  const setMyid = () => {
    //datas?.addData({ title: tfRef.current?.value + "", note: tfRef2.current?.value + "" })
    setUserid(tfRef.current?.value + "");
  }

  const addNote = () => {
    //datas?.addData({ title: tfRef.current?.value + "", note: tfRef2.current?.value + "" })
    setChecker(true);
    newNote(title, thenote);

  }
  const editNotebtn = (index: number | undefined) => {
    //datas?.delData(index)
    getednote(
      {
        method: 'GET',
        url: `http://localhost:8080/notes/${index}`,
      }
    )

  }

  const delNote = (index: number) => {
    //datas?.delData(index)
    setChecker(true)
    deletNote(index)

  }

  if (!data) return <h2>Data is null!</h2>

  if (data == undefined) return <><h2>Data Undefined</h2>

    {/*if (userid == "") return <> 
  <div className='bigContainer'>
  <motion.div className="container" ref={constraintsRef} >
    <motion.div className="Container" drag dragConstraints={constraintsRef}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 2600,
        damping: 5000
      }}
    >

      <div><h1>User ID Form</h1></div>
      <div style={{ marginBottom: "20px" }}>
        <TextField
          inputRef={tfRef}
         
          id="outlined-basic"
          label="User ID"
          variant="filled"
          style={{ width: 500, backgroundColor: "white" }} />
          <Button onClick={setMyid} variant="contained">Set USER ID</Button>
      </div>
    </motion.div>
  </motion.div>
  </div>
    </>*/}</>
    console.log(edata?.title)
  return (
    <div className='bigContainer'>
      <motion.div className="container" ref={constraintsRef} >
        <motion.div className="Container" drag dragConstraints={constraintsRef}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 2600,
            damping: 5000
          }}

        >
          <div><h1>Create Notes Form</h1></div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              onChange={eventOnchange2}

              id="outlined-basic"
              label="Title"
              variant="filled"
              defaultValue={edata?.title}
              style={{ width: 500, backgroundColor: "white" }} />

          </div>
          <div>
            <TextareaAutosize
              onChange={eventOnchange}
              id="outlined-basic"
              aria-label="maximum height"
              placeholder="Type your Notes"
              defaultValue={edata?.body}
              style={{ width: 500, height: 100 }}
            />
          </div>
          <div style={{marginTop: "20px"}}>
            <Button onClick={clickCreate} variant="contained">Take Notes</Button>
            <Button sx={{marginLeft: "80px"}}onClick={()=>editbtn(edata?.id)} variant="contained" color="success">Save Edited Note</Button>
          </div>
        </motion.div>
      </motion.div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell >Title</StyledTableCell>
              <StyledTableCell align="center">Notes</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {Array.from(data).map((item, i) =>
              <StyledTableRow key={item.id}>
                <Mydata datetime={item.title} notes={item.body} index={i} />
                <StyledTableCell align='center'>
                <Button sx={{marginRight: "20px"}}onClick={() => editNotebtn(item.id)} variant='contained' color='success'>Edit</Button>
                  <Button onClick={() => delNote(item.id)} variant='contained' color='error'>Delete</Button>
                  </StyledTableCell>
              </StyledTableRow>
            )}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}