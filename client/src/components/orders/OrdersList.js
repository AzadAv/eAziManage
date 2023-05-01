import React, { useState } from "react";
import "./OrdersList.css";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { padding } from "@mui/system";
import { Box } from "@mui/material";
function OrdersList() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      id: 0,
      panel: 'panel1',
      orderName : 'פקולטת למכניקת זורמים',
      timeLeft : '3:22:34',
      orderItems : [
        {
          id:'bakery',
          amount : 2,
          itemName : 'מגש מתוקים',
          type: 'sweet'
        },
        {
          id:'bakery',
          amount : 5,
          itemName : 'מגש מלוחים',
          type: 'salty'
        }],
      status : false
    },
    {
      id: 1,
      panel: 'panel2',
      orderName : 'אירוע בגג',
      timeLeft : '2:25:12',
      orderItems : [
        {
          id:'bakery',
          amount : 6,
          itemName : 'מגש מתוקים',
          type: 'sweet'
        },
        {
          id:'kitchen',
          amount : 3,
          itemName : 'מגש סנדוויצים',
          type: 'salty'
        }],
      status : false

    }]

    const ordersList = data.map((order)=>(
      <div>
      <Accordion
      className="Accordion"
      expanded={expanded === order.panel}
      onChange={handleChange(order.panel)}
      >
          <AccordionSummary
            sx ={{width:'100%'}}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Button color="error" variant="outlined" >סגור</Button>
            <Box className="accordion-summary">
              
              <span className="time-left">{order.timeLeft}  נשאר זמן</span> 
              <span className="order-name">{order.orderName}</span>
              
            </Box>
          </AccordionSummary>
          {order.orderItems.map((orderItem)=>(
            <div>
            <AccordionDetails className="accordion-details">
            <Typography align="center" variant="body1">
              <div className={"order "+(orderItem.type==='sweet'?'green':'orange')}>
                <span className="amount">{orderItem.amount} : כמות</span>
                <span className="name"> {orderItem.itemName}</span>
                <Button color="success" variant="outlined">
                  הכנה
                </Button>
              </div>
            </Typography>
            </AccordionDetails>
            
            </div>
          ))}
         
      </Accordion>
      </div>))
  return (
    <div className="ordersListContainer">
      {ordersList}
    </div>
  );
}

export default OrdersList;
