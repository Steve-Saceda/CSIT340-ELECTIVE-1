import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, TextField } from '@mui/material';
import { useState } from 'react';
import { useRest } from '../restcalls/restapi';

export interface Reply {
    reply: string,
    user: string,
    date: string;
}
export interface posts {
    id: number,
    post: string,
    user: string,
    date: string,
    reply?: Reply[]

}

export default function Getallpost(props: posts) {
    const [getPosts, loginUser, registerUser, user, success, data, ReplyPost] = useRest();
    const [reply, setReply] = useState("");
    const eventOnchange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        var value = event.target.value
        setReply(value)

    }
    const clickHandler = (index: number) => {
        ReplyPost("827", reply, index + "")
        console.log(reply)
        console.log(index)
        console.log(user?.user.id)
     }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.post}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.user}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.date}
                </Typography>
            </CardContent>
            <Typography>
                {props.reply?.map((item, i) =>
                    <>
                        <p>{item.reply}</p>
                        <p>{item.user}</p>
                        <p>{item.date}</p>
                       <div><TextField onChange={eventOnchange1} variant="outlined"></TextField></div> 
                        <div><Button onClick={() => clickHandler(i)} variant="contained" size="small" color="primary"> Reply</Button></div>
                    </>
                )}
            </Typography>
        </Card>
    );
}