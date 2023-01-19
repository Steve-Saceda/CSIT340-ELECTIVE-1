import CardMedia from "@mui/material/CardMedia/CardMedia";
import { maxWidth } from "@mui/system";

type MyProfile = {
    image: string;
    name: string;
    course_and_year: string;
    email: string;
    school: string;
}

export default function CustomComp(props:MyProfile){
    return (
        <>
        <div>
        <CardMedia sx={{borderRadius: "50%", maxWidth: "400px"}}
        component="img"
        height="350"
        width="350px"
        image={props.image}
        alt="Profile Picture"/>
        </div>
        <div style={{marginLeft: "-40rem", textAlign: "left"}}>
        <p>{props.name}</p>
        <p>{props.school}</p>
        <p>{props.course_and_year}</p>
        <p>{props.email}</p>
        </div>
        </>
    )
}