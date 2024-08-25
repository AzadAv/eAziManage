import { FormControl, Box, MenuItem, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import "./ProductCost.css";

import { useSelector } from "react-redux";
function ProductCost(props) {
  const events = useSelector((state) => state.manageStoreReducer.events);
  const [chosenEvent,chosenEventHandler] = useState();


  function setEvent(event){

    chosenEventHandler(
    events.find((Arrayevent)=>{
        return Arrayevent.orderName === event.target.value;
    }))
    // console.log(eee);
  }
  console.log(chosenEvent);
  //Event name, event date, event items, event price,
  return (
    <div className="productCost">
      <Box className="event">
        <FormControl>
          <TextField
            select
            sx={{ width: "50vw" }}
            id="outlined-basic"
            label={props.language ? "בחר אירוע" : "Choose Event"}
            variant="outlined"
            value={chosenEvent}
            onChange={(event)=>(setEvent(event))}
          >
            {events.map((event) => (
              <MenuItem value={event.orderName}
                sx={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}
                >
                <div style={{width:'50%',textAlign:'center',overflow:'hidden'}}>{event.orderName}</div>
                <div style={{width:'50%',textAlign:'center'}}>{event.orderDate}</div>
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </Box>
      <Box className="main-cntiner"
        sx={{flexDirection:props.language ? 'row-reverse':'row'}}>
        <Box className="left-cntiner">
            <Paper className="event-item" elevation={1}
            sx={{flexDirection:props.language ? 'row-reverse':'row'}}>
            <div className="box">{props.language ? 'מוצר': 'Product'}</div>
            <div className="box">{props.language ? 'כמות': 'Quantity'}</div>
            <div className="box">{props.language ? 'מחיר פר יחיד': 'Price per item'}</div>
            <div className="box">{props.language ? 'מחיר כללי': 'Total Price'}</div>
            </Paper>
            {chosenEvent && chosenEvent.items.map((item)=>(
            <Paper className="event-item" elevation={1}
            sx={{flexDirection:props.language ? 'row-reverse':'row'}}>
                <div className='box'>{props.language ? item.nameHe: item.nameEn}</div>
                <div className='box'>{item.quantity}</div>   
                <div className="box">245</div>
                <div className="box">{}</div>
            </Paper>
            ))}
        </Box>
        <Paper elevation={1} className="nums-box">
          <Paper elevation={2} className="num">
            <div>{props.language ? 'מחיר בש"ח': 'Event Cost in ILS'}</div>
            <div>2000</div>
          </Paper>
          <Paper elevation={2} className="num">
            <div>{props.language ? '': 'Employee Price in ILS'}</div>
            <div>2500</div>
          </Paper>
          <Paper elevation={2} className="num">
            <div>Additional Cost</div>
            <div>ILS</div>
          </Paper>
          <Paper
          elevation={2}
            style={{
            //   width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
                <Box className="num">
                <div>Profit in ILS</div>
                <div>500</div>
                </Box>
                <Box className="num">
                <div>Profit in %</div>
                <div>24</div>
                </Box>
          </Paper>
        </Paper>
      </Box>
    </div>
  );
}

export default ProductCost;
