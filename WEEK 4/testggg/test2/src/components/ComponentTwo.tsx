import { Button } from "@mui/material";

type CompTwoProps = {
    daysoftheweek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
    children: string;
    clickEvent : () => void;
}

const clickHandler = () => {
    alert('Hello');
}

export default function CompTwo(props: CompTwoProps) {
    return (
        <div style={{ 
            border: "solid 1px #f00", 
            margin: '1rem', 
            borderRadius: '.75rem' 
        }}>
            <h2>{props.daysoftheweek}</h2>
            <h3>{props.children}</h3>
            <Button variant="contained" onClick={props.clickEvent}>See More</Button>
        </div>
    )

}