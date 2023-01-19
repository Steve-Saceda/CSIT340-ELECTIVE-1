import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { isNotEmittedStatement } from "typescript";


export interface INotes{
    notes: notebody[]
}

export interface notebody{
    id: number,
    title: string,
    body: string
    
}


export interface IUser{
    id:number,
    firstname:string,
    lastname:string
}

export const useRest = ():[(config: AxiosRequestConfig<any>)=>void, (title: string, body: string)=>void, notebody[] | undefined, (key: number)=>void, (config: AxiosRequestConfig<any>)=>void, (id: number, title: string, body: string)=>void, notebody | undefined] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data,setData] = useState<notebody[]>([]);
    const [edata,setEdata] = useState<notebody>();
    const [user,setUser] = useState<IUser>();
    
    function getNotes(config: AxiosRequestConfig<any>){
        setLoading(true);

        axios(config)
        .then((response) => {
            setData(response.data);
            console.log(response.data)
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=>setLoading(false))
    }
    function edNotes(config: AxiosRequestConfig<any>){
        setLoading(true);

        axios(config)
        .then((response) => {
            setEdata(response.data);
            console.log(response.data)
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=>setLoading(false))
    }
   /* function newUser(iuser:IUser){
        // do a REST...
        setLoading(true)
        axios.post(
            "http://hyeumine.com/newuser.php",
            new URLSearchParams({
              firstname : iuser.firstname,
              lastname :  iuser.lastname 
            })
            )
            .then((response)=>{
                setUser(response.data);
            })
            .catch((error)=>{
                setError(error.message);
            })
            .finally(()=>{
                setLoading(false)
            })
    }*/

    function newNote(title: string, note:string){
        // Expected 'user' is set already... user.id....
        // Param: string note
       
            setLoading(true)
            axios.post(
                'http://localhost:8080/notes',
                new URLSearchParams({
                    title : title,
                    body: note
                    
                })
                )
                .then((response)=>{
                    setData(response.data)
                    console.log(response.data)
                    //data?.notes.push(response.data)
                })
                .catch((error)=>{
                    setError(error.message);
                })
                .finally(()=>{
                    setLoading(false)
                })
    }

    function editNote(id: number, title: string, note:string){
        // Expected 'user' is set already... user.id....
        // Param: string note
       
            setLoading(true)
            axios.patch(
                `http://localhost:8080/notes/${id}`,
                new URLSearchParams({
                    title : title,
                    body: note
                })
                )
                .then((response)=>{
                    setData(response.data)
                    console.log(response.data)
                    //data?.notes.push(response.data)
                })
                .catch((error)=>{
                    setError(error.message);
                })
                .finally(()=>{
                    setLoading(false)
                })
    }

    function deleteNote(key: number){
        // Expected 'user' is set already... user.id....
        // Param: string note
       
            setLoading(true)
            axios.delete(
                `http://localhost:8080/notes/${key}`
                
                )
                .then((response)=>{
                    setData(response.data)
                    //data?.notes.push(response.data)
                })
                .catch((error)=>{
                    setError(error.message);
                })
                .finally(()=>{
                    setLoading(false)
                })
    }
    
    return [getNotes, newNote, data, deleteNote, edNotes, editNote, edata]
}
