import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRest } from "../restcalls/restapi";
import Getallpost from "./getAllpost";
import Register from "./register";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




export default function Login() {
    const [getPosts, loginUser, registerUser, user, success, data, ReplyPost, CreatePost] = useRest();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState<boolean>(false);
    const [post, setPost] = useState("");
    const [reply, setReply] = useState("");
    const [check, setCheck] = useState<boolean>(false)

    useEffect(() => {
        if (user !== undefined) {
            getPosts(
                {
                    method: 'GET',
                    url: "http://hyeumine.com/forumGetPosts.php"
                }
            )
            if(post !== "" || reply !== "")
                setCheck(false)
        }
    }, [user, check, data])

    const clickHandler = () => {
        loginUser({ username: username, password: password });
    }

    const clickHandler2 = () => {
        setRegister(true);
    }

    const eventOnchange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        var value = event.target.value
        setUsername(value)

    }

    const eventOnchange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        var value = event.target.value
        setPassword(value)

    }


    const eventOnchange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        var value = event.target.value
        setPost(value)

    }

    const clickHandler3 = () => {
        CreatePost(user?.user.id + "", post)
        setCheck(true)
    }

    const eventOnchange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        var value = event.target.value
        setReply(value)
        setCheck(true)

    }
    const clickHandler4 = (index: number) => {
        ReplyPost(user?.user.id + "", index + "", reply + "")
        setCheck(true)
       // console.log(reply)
      //  console.log(index+1)
      //  console.log(user?.user.id)
    }

    if (register == true) return <><Register /></>

    if (user?.success == success && data !== undefined) return <>
        <TextField onChange={eventOnchange3} variant="outlined"></TextField>
        <Button onClick={clickHandler3} variant="contained" size="small" color="primary"> Create Post</Button>
        <center> {
            data.map((item, i) => 
                <>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.id}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.post}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.user}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.date}
                            </Typography>
                        </CardContent>
                        <Typography>
                            {item.reply?.map((items, j) =>
                                <>
                                    <p>{items.reply}</p>
                                    <p>{items.user}</p>
                                    <p>{items.date}</p>
                                    
                                </>
                            )}
                        </Typography>
                        <div><TextField onChange={eventOnchange4} variant="outlined"></TextField></div>
                        <div><Button key={i} onClick={() => clickHandler4(i+1)} variant="contained" size="small" color="primary"> Reply</Button></div>
                    </Card></>
            )
        }</center>
    </>


    return <div className="loginContainer">

        <h2>Sign in</h2>
        <div className="username">
            <TextField sx={{ width: "700px" }} onChange={eventOnchange1} id="outlined-basic" label="Username" variant="outlined" />
        </div>
        <div className="password">
            <TextField sx={{ width: "700px" }} onChange={eventOnchange2} id="outlined-basic" label="Password" type="password" variant="outlined" />
        </div>
        <div>
            <Button variant="contained" onClick={clickHandler}>Sign in</Button>
        </div>
        <div className="signinbtn"></div>
        <div>
            <Button variant="text" onClick={clickHandler2}>Register Here</Button>
        </div>

    </div>
}


