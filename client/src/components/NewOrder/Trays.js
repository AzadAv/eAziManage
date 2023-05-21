import React from 'react'
import './Trays.css'
import OrderItem from './OrderItem';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Paper from '@mui/material/Paper';

import SandwichesImg from '../../pics/Sandwiches.png'

function Trays(props) {

  const trays = [
    {
      enName:'Tray of sandwiches',
      heName: 'מגש של חצאי סנדוויצים',
      enDesc: 'Tray of half sandwiches',
      heDesc: 'מגש של חצאי סנדוויצים עם כמה סוגים לבחירה',
      src : SandwichesImg,
      price: 50
    },
    { 
      enName:'Tray of sandwiches',
      heName: 'מגש של חצאי סנדוויצים',
      enDesc: 'Tray of half sandwiches',
      heDesc: 'מגש של חצאי סנדוויצים עם כמה סוגים לבחירה',
      src : SandwichesImg,
      price: 68
    },
    { 
      enName:'Tray of sandwiches',
      heName: 'מגש של חצאי סנדוויצים',
      enDesc: 'Tray of half sandwiches',
      heDesc: 'מגש של חצאי סנדוויצים עם כמה סוגים לבחירה',
      src : SandwichesImg,
      price: 68
    },
    { 
      enName:'Tray of sandwiches',
      heName: 'מגש של חצאי סנדוויצים',
      enDesc: 'Tray of half sandwiches',
      heDesc: 'מגש של חצאי סנדוויצים עם כמה סוגים לבחירה',
      src : SandwichesImg,
      price: 68
    },
    
  ]

  return (
    <div className='trays-container'>
      
      {trays.map((tray)=>(
         <OrderItem
         language={props.language}
         price={tray.price}
         src={tray.src}
         enName={tray.enName}
         heName={tray.heName}
         enDesc={tray.enDesc}
         heDesc={tray.heDesc}
         ></OrderItem>
      ))}   
      
    </div>
  )
}

export default Trays