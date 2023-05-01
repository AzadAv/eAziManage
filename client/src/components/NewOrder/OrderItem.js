import React from 'react'
import './OrderItem.css'

import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
function OrderItem(props) {
  return (
    <Paper 
        elevation={1}
        className={'order-item'}>
      <div className='picture-container'>
        <div className='picture'>
        </div>
      </div>
      <div className='data-container'>
          <div className='Name'>{props.language? props.heName : props.enName}</div>
          <div className='desc'>{props.language? props.heDesc : props.enDesc}</div>
          <div className='price'>{props.price} ILS</div>
          
      </div>
      <Button style={{fontSize:'22px',fontWeight:'600'}} size="large" color="primary">
          {props.language ? "הוסף" : "Add"}
      </Button>
    </Paper>
  )
}

export default OrderItem