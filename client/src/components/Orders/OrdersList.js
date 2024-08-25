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
import { editProductionListEvent } from "../../store/orders-list-actions";
import { showNotification } from "../../store/ui-slice";
function OrdersList(props) {
  const dispatch = useDispatch();
  const ordersList = useSelector(
    (state) => state.ordersListStoreReducer.orders
  );
  const [backdropState, backdropStateHandler] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const handleChange = (panel) => (event, isExpanded) => {
    if (localStorage.getItem("isAuth") === "true") {
      setExpanded(isExpanded ? panel : false);
    } else {
      dispatch(
        showNotification({
          type: "error",
          notification: "You need to Sign Up",
        })
      );
    }
  };
  const [list, listHandler] = useState(
    ordersList
      .filter((order) => order.ready === false)
      .sort(
        (a, b) =>
          parseInt(a.orderDate.split("-")[2]) -
          parseInt(b.orderDate.split("-")[2])
      )
  );

  function editStatus(order) {
    if (dispatch(updateOrder({ id: order._id }))) {
      const tempEvent = {
        eventId: order._id,
        orderName: order.orderName,
        guestsNum: order.guestsNum,
        guestsType: order.guestsType,
        orderDate: order.orderDate,
        orderTime: order.orderTime,
        menuName: order.menuName,
        eventType: order.eventType,
        price: order.price,
        items: order.items,
        comments: order.comments,
        ready: true,
      };
      dispatch(editProductionListEvent(tempEvent));
    }
  }

  // console.log(ordersList);
  return (
    <Paper elevation={3} className="orders-list-container">
      {list
        .filter((order) => order.ready === false)
        .sort(
          (a, b) =>
            parseInt(a.orderDate.split("-")[2]) -
            parseInt(b.orderDate.split("-")[2])
        )
        .map((order) => (
          <Accordion
            className="Accordion"
            expanded={expanded === order.orderName}
            onChange={handleChange(order.orderName)}
          >
            <AccordionSummary
              sx={{ width: "100%" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Box className="accordion-summary">
                <span className="order-date">{order.orderDate}</span>
                <span className="order-name">{order.orderName}</span>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              {/* <span className="time-left">
                <span>{props.language ? ": נשאר זמן ":"Time Left :"}</span>
                <Timer language={props.language} deadlineDate={order.orderDate} deadlineTime={order.orderTime}/>
            </span> */}
              <Button
                className="ready-button"
                color={order.ready ? "success" : "error"}
                variant="contained"
                onClick={() =>
                  //  editStatus(order)
                  backdropStateHandler(true)
                }
              >
                {order.ready
                  ? props.language
                    ? "מוכן"
                    : "ready"
                  : props.language
                  ? "בהכנה"
                  : "working on"}
              </Button>

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
              <Paper className="ordersList-comment-box">
                <Box className="row">
                  <span sx={{ padding: "1vw" }}>
                    {props.language ? "נושא" : "Topic"}
                  </span>
                  <span sx={{ padding: "1vw" }}>
                    {props.language ? "הערה" : "Comment"}
                  </span>
                  <span sx={{ padding: "1vw" }}>
                    {props.language ? "מחלקה" : "Department"}
                  </span>
                </Box>
                {order.comments.map((comment) => (
                  <Box className="row">
                    <span>{comment.topic}</span>
                    <span>{comment.description}</span>
                    <span>{comment.department}</span>
                  </Box>
                ))}
              </Paper>
              <Paper className="items-box">
                <Typography className="head">
                  {props.language ? "פריטים" : "Items"}
                </Typography>
                {order.items
                  .filter((item) => item.type === props.itemsType)
                  .map((orderItem) => (
                    <Box
                      align="center"
                      className={"order " + (orderItem.ready ? "green" : "red")}
                    >
                      <span className="amount">{orderItem.quantity} </span>
                      <Button color="success" variant="contained" size="medium">
                        {props.language ? "איך" : "How"}
                      </Button>
                      <Box className="item-name">
                        <Typography variant="h6">
                          {props.language ? orderItem.nameHe : orderItem.nameEn}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        onClick={() =>
                          dispatch(
                            updateItemStatus({
                              name: orderItem.nameEn,
                              orderName: order.orderName,
                            })
                          )
                        }
                      >
                        {orderItem.ready ? "להכנה" : " מוכן "}
                      </Button>
                    </Box>
                  ))}
              </Paper>
            </AccordionDetails>
            <Box className={backdropState ? "backdrop" : "none"}>
              <Box
                className="verify-box"
                //  sx={{marginTop:'20vh'}}
              >
                <Typography variant="h5">
                  {props.language
                    ? "אתה בטוח שאתה רוצה לסיים את האירוע ? "
                    : "Are you sure that you want to Finish with Event"}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => (
                      editStatus(order), backdropStateHandler(false)
                    )}
                  >
                    {props.language ? "כן" : "Yes"}
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => backdropStateHandler(false)}
                  >
                    {props.language ? "לא" : "No"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Accordion>
        ))}
    </Paper>
  );
}

export default OrdersList;
