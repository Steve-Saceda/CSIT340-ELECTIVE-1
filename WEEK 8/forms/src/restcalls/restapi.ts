import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { isNotEmittedStatement } from "typescript";

export interface RUser{
    username: string,
    password: string
}

export interface LUser{
    username: string,
    password: string
}

export interface User{
    id: number,
    username: string
}

export interface Login{
    success: boolean,
    user: User
}

export interface Reply{
    reply: string,
    user: string,
    date: string;
}
export interface Theposts{
    id: number,
    post: string,
    user: string, 
    date: string,
    reply: Reply[]
}

export interface Allposts{
    post: Theposts[]
}

export interface Replyboolean{
    success: boolean
}



export const useRest = ():[ (config: AxiosRequestConfig<any>)=>void, (luser: LUser)=>void, (ruser: RUser)=>void, Login|undefined, boolean, Theposts[] | undefined, (theuser: string, message: string, postId: string)=>void, (userid: string, post: string)=>void] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data,setData] = useState<Theposts[]>();
    const [user,setUser] = useState<Login>();
    const [reguser,setReguser] = useState<User>();
    const [reply, setReply] = useState<Replyboolean>()
    const [success, setSuccess] = useState<boolean>(false)
    
    function getPosts(config: AxiosRequestConfig<any>){
        setLoading(true);

        axios(config)
        .then((response) => {
            setError('');
            setData(response.data);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=>setLoading(false))
    }
    function loginUser(luser:LUser){
        // do a REST...
        setLoading(true)
        axios.post(
            "http://hyeumine.com/forumLogin.php",
            new URLSearchParams({
              username: luser.username,
              password:  luser.password 
            })
            )
            .then((response)=>{
                setUser(response.data);
            })
            .catch((error)=>{
                setError(error.message);
            })
            .finally(()=>{
                setSuccess(true)
            })
    }
    function RegisterUser(ruser:RUser){
        // do a REST...
        setLoading(true)
        axios.post(
            "http://hyeumine.com/forumCreateUser.php",
            new URLSearchParams({
              username: ruser.username,
              password: ruser.password 
            })
            )
            .then((response)=>{
                setReguser(response.data);
            })
            .catch((error)=>{
                setError(error.message);
            })
            .finally(()=>{
                setSuccess(true)
            })
    }
    function CreatePost(userid: string, post: string){
        // do a REST...
        setLoading(true)
        axios.post(
            "http://hyeumine.com/forumNewPost.php",
            new URLSearchParams({
              id: userid,
              post:  post
            })
            )
            .then((response)=>{
                setReply(response.data);
            })
            .catch((error)=>{
                setError(error.message);
            })
            .finally(()=>{
                setSuccess(true)
            })
        }

    function ReplyPost(theuser: string, postId: string, message: string){
        // do a REST...
        setLoading(true)
        axios.post(
            "http://hyeumine.com/forumReplyPost.php",
            new URLSearchParams({
              user_id: theuser + "",
              post_id: postId + "",
              reply: message
            })
            )
            .then((response)=>{
                setReply(response.data);
            })
            .catch((error)=>{
                setError(error.message);
            })
            .finally(()=>{
                setSuccess(true)
            })
            console.log(theuser)
            console.log(message)
            console.log(postId)
    }
   // console.log(reply)
    
    return [getPosts, loginUser, RegisterUser, user, success, data, ReplyPost, CreatePost]
}