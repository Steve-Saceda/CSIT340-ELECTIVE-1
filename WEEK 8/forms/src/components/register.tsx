import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useRest } from "../restcalls/restapi";
import Login from "./login";


export default function Register() {
    const [getPosts,loginUser,registerUser, user, success, data] = useRest();
    const [register, setRegister] = useState<boolean>(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const clickHandler1 = () => {
        registerUser({ username: username, password: password });
    }

    const clickHandler2 = () => {
        setRegister(false);
    }

    const eventOnchange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        var value = event.target.value
        setUsername(value)
        
    }

    const eventOnchange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        var value = event.target.value
        setPassword(value)
       
    }

    if(register == false) return <><Login/></>

    if(success !== false)  return <><Login/></>

    return <div className="loginContainer">
        <h2>Register</h2>
        <div className="username">
            <TextField sx={{width: "700px"}} onChange={eventOnchange1} id="outlined-basic" label="Username" variant="outlined" />
        </div>
        <div className="password">
            <TextField sx={{width: "700px"}} onChange={eventOnchange2} id="outlined-basic" label="Password" type="password" variant="outlined" />
        </div>
        <div>
            <Button onClick={clickHandler1} variant="contained">Register</Button>
        </div>
        <div className="signinbtn"></div>
        <div>
            <Button variant="text" onClick={clickHandler2}>Login Here</Button>
        </div>
    </div>
}


