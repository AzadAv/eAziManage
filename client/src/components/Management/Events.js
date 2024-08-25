import { Accordion, AccordionDetails, AccordionSummary, Box, Button, MenuItem, Paper,TextField } from '@mui/material'
import React, { useState } from 'react'
import "./Events.css"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from 'react-redux';

function Events(props) { 
  
  const events = useSelector((state)=> state.manageStoreReducer.events);
  var eventsTotalCost = 0;
  const [paymentMethod,paymentMethodHandler] = useState('');

  
  events.filter((event) => event.ready === true).
  map((event)=>{

     eventsTotalCost+= parseInt(event.price);
  })
  console.log(paymentMethod);

  console.log(events);
  return (
  <Box className='management-events'>

    <Box className='total-price-box'>  
          <span>{props.language ? ' ש"ח  ': ' ILS  '}<u>{eventsTotalCost}</u></span>
          <span>{props.language ? 'הכנסה כוללת  ': 'Total Income  '  }</span>
    </Box>

    {events.filter((event) => event.ready === true)
    .map((event)=>(
    <Accordion
    style={{width:'100%'}}>
      <AccordionSummary
      aria-controls="panel1bh-content"
      id="panel1bh-header"
      expandIcon={<ExpandMoreIcon />}
      >
        
        <Box
        className='summary'>
          <span>{event.orderName}</span>
          <span>{event.orderDate}</span>
          <span>{props.language ? ' ש"ח  ': 'ILS  '}{event.price} </span>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Paper className='add-info-box' elevation={2}>
          <TextField
          className="info-input"
          label={props.language ? "שם לקוח" : "Customer Name"}
        ></TextField>
          <TextField
          className="info-input"
            label={props.language ? "מס' כרטיס אשראי" : "Credit Card No"}
        ></TextField>
        <TextField
            select
            value={paymentMethod}
            id="outlined-basic"
            className="info-input"
            label={props.language ? "צורת התשלום" : "Payment Method"}
            variant="outlined"
            onChange={(event)=> paymentMethodHandler(event.target.value)}
          >
            <MenuItem value="cash">
              {props.language ? "מזומן":"Cash"}
            </MenuItem>
            <MenuItem value="credit">
              {props.language ? "אשראי":"Credit Card"}
            </MenuItem>
            <MenuItem value="transfer">
              {props.language ? "עברה בנקאית":"Bank Transfer"}
            </MenuItem>
          </TextField>
          <Button
          variant='outlined'
          color='primary'
          >
          {props.language ? "שמור" : "Save"}
          </Button>
        </Paper>
        
        {event.items.map((item)=>(

          <Paper className='management-event-list'>
           

            <Box className='item'>{props.language ? item.nameHe: item.nameEn}</Box>
            <Box className='item'>{item.quantity}</Box>

          </Paper>
        ))} 
      </AccordionDetails>
    </Accordion>
    ))}
    
    </Box>
  )
}

export default Events