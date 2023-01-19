import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface CardDetails{
    title:string;
    image: string;
    description: string;
    linkone?: string;
    linktwo?: string;
}

export default function TheCard(props:CardDetails) {
  return (
    <Card sx={{ maxWidth: 345, textAlign: 'left', marginBottom:'1rem'}}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.linkone}>Share</Button>
        <Button size="small" href={props.linktwo}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
