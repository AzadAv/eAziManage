import React, { useState } from "react";
import "./OrdersList.css";
import { useSelector, connect, useDispatch } from "react-redux";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Timer from "./Timer";
import { Box, Paper } from "@mui/material";
import { updateItemStatus, updateOrder } from "../../store/ordersListStore";
function OrdersList(props) {

  const dispatch = useDispatch();
  const ordersList = useSelector(
    (state) => state.ordersListStoreReducer.orders
  );


  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <Paper elevation={3} className="orders-list-container">
      {ordersList.map((order) => (
        <Accordion
          className="Accordion"
          expanded={expanded === order.id}
          onChange={handleChange(order.id)}
        >
          <AccordionSummary
            sx={{ width: "100%" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Button
            className="ready-button"
              color={order.ready ? "success" : "error"}
              variant="contained"
              onClick = {()=>dispatch(updateOrder({id:order.id}))}
            >
              {order.ready ? (props.language ?"מוכן":"ready"):(props.language ?"בהכנה":"working on")}
            </Button>

            <Box className="accordion-summary">
           
              <span className="order-date">{order.orderDate}</span>
              <span className="order-name">{order.orderName}</span>
            </Box>
          </AccordionSummary>

          <AccordionDetails className="accordion-details">
            <span className="time-left">
                <span>{props.language ? ": נשאר זמן ":"Time Left :"}</span>
                <Timer language={props.language} deadlineDate={order.orderDate} deadlineTime={order.orderTime}/>
            </span>
            
            <Paper className="order-info">
              <Box className="box">
               {props.language ? ": מספר האורחים  " : "Number of guests : "}
                <Typography>{order.guestsNum}</Typography>
              </Box>
              <Box className="box">
                {props.language ? ": סוג האורחים  " : "Type of guests : "}
                <Typography>{order.guestsType}</Typography>
              </Box>
              <Box className="box">
                {props.language ? ": זמן האירוע  " : " Time of Event : "}
                <Typography>{order.orderTime}</Typography>
              </Box>
            </Paper>
            <Paper
            className="comment-box">
             
              <Box className="row">
                <span
                  sx={{ padding: "1vw"}}
                >
                  {props.language ? "נושא" : "Topic"}
                </span>
                <span
                  sx={{ padding: "1vw"}}
                 
                >
                  {props.language ? "הערה" : "Comment"}
                </span>
                <span
                  sx={{ padding: "1vw" }}
                
                >
                  {props.language ? "מחלקה" : "Department"}
                </span>
              </Box>
              {order.comments.map((comment) => (
                <Box className="row">
                  <span>
                    {comment.topic}
                  </span>
                  <span>
                    {comment.description}
                  </span>
                  <span>
                    {comment.department}
                  </span>
                </Box>
              ))}
            </Paper>
            <Paper className="items-box">
              <Typography className="head">
                {props.language ? "פריטים" : "Items"}</Typography>
              {order.items
                .filter((item) => item.type === props.itemsType)
                .map((orderItem) => (
                  <Box
                    align="center"
                    className={"order " + (orderItem.ready ? "green" : "red")}
                  >
                    <span className="amount">{orderItem.quantity} </span>
                    <Button color="success" variant="contained" size="medium">
                      {props.language ? "איך":"How"}
                    </Button>
                    <Box
                    className="item-name"
                    >
                      <Typography variant="h6">
                      {props.language ? orderItem.nameHe : orderItem.nameEn}
                      </Typography>
                    </Box>
                    <Button variant="contained"
                    onClick={()=>dispatch(updateItemStatus(
                    {
                    name:orderItem.nameEn,
                    id:order.id}
                    ))}>
                      {orderItem.ready ? "להכנה" : " מוכן "}
                    </Button>
                  </Box>
                ))}
            </Paper>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
}

export default OrdersList;
