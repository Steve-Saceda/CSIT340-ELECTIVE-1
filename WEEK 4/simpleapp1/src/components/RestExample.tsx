import { Button, Paper, TextField, TextFieldProps } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { INotes, IUser, useRest } from "../restcalls/useREST"

export default function RestExample(this: any) {
    const [newUser, sendRequest, data, loading, error, user, newNote] = useRest();
    const [thenote, setThenote] = useState("")
    const [checker, setChecker] = useState(false)

    const eventOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var value = event.target.value
        setThenote(value)
        console.log(thenote)
    }

    const clickHandler = () => {
        newUser({ id: -1, firstname: "Steve", lastname: "Saceda" });
    }

    const clickHandler2 = () => {
        setThenote("STEVE SACEDA NOTE")
        setChecker(true)
        newNote(thenote);

    }

    useEffect(() => {
        if (user !== undefined) {
            sendRequest(
                {
                    method: 'GET',
                    url: "http://hyeumine.com/mynotes.php?id=" + user.id,
                }
            )
        }
        if (thenote !== "") {
            setChecker(false)
        }

    }, [user, checker])


    if (!user) return <><h3>No user Available!</h3>
        <button onClick={clickHandler}>Create new User</button>

    </>

    if (loading) return <p>Checking for data...</p>

    if (error !== "") return <p>Error</p>

    if (!data) return <h2>Data is null!</h2>

    if (data.notes == undefined) return <h2>Data Undefined</h2>

    return <>
        <h4>{user.id} | {user.firstname} | {user.lastname}</h4>
        {
            data.notes.map((item, i) => {
                return <Paper sx={{ margin: '1rem', padding: '.5rem', fontSize: '15px', textAlign: 'right' }} elevation={12} key={i}>{item[0]} : {item[1]}</Paper>
            })
        }
        <div>
            <TextField variant="outlined" onChange={eventOnchange}></TextField>
        </div>

        <div>
            <Button sx={{mt: "10px"}}variant="contained" onClick={clickHandler2}>Create new Note</Button>
        </div>

    </>

}