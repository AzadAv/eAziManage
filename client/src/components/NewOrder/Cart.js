import React, { useState, useRef } from "react";
import "./Cart.css";
import { useSelector, connect, useDispatch } from "react-redux";
import ClassicMorning from "./Menus/MorningClassic";
import MorningMefanek from "./Menus/MorningMefanek";
import MorningWealthy from "./Menus/MorningWealthy";
import AfternoonClassic from "./Menus/AfternoonClassic";
import AfternoonMefanek from "./Menus/AfternoonMefanek";
import AfternoonWealthy from "./Menus/AfternoonWealthy";
import EveningClassic from "./Menus/EveningClassic";
import EveningMefanek from "./Menus/EveningMefanek";
import EveningWealthy from "./Menus/EveningWealthy";
import Empty from "./Menus/Empty";

import Item from "./MenuItem";
import Comment from "./Comment";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InputLabel, Select, MenuItem } from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps";
import {
  addItem,
  changePrice,
  setDate,
  setEventType,
  setGuestsNumber,
  setGuestsType,
  setName,
  setTime,
  setMenuName,
  setMenuItems,
} from "../../store/eventStore";
import { addEvent } from "../../store/waitingListStore";
import { addOrder } from "../../store/ordersListStore";

function Cart(props) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [menuType, menuTypeHandler] = useState(null);
  const [emptyField, emptyFieldHandler] = useState({
    name: false,
    guestsType: false,
    menuName: false,
    eventType: false,
  });

  const eventName = useSelector((state) => state.eventStoreReducer.eventName);
  const guestsNum = useSelector((state) => state.eventStoreReducer.guestsNum);
  const guestsType = useSelector((state) => state.eventStoreReducer.guestsType);
  const price = useSelector((state) => state.eventStoreReducer.price);
  const orderDate = useSelector((state) => state.eventStoreReducer.orderDate);
  const orderTime = useSelector((state) => state.eventStoreReducer.orderTime);
  const menuName = useSelector((state) => state.eventStoreReducer.menuName);
  const eventType = useSelector((state) => state.eventStoreReducer.eventType);
  const menuItems = useSelector((state) => state.eventStoreReducer.items);
  const comments = useSelector((state) => state.eventStoreReducer.comments);

  const eventId = useSelector(
    (state) => state.waitingListStoreReducer.events.length
  );

  const ordersListId = useSelector(
    (state) => state.ordersListStoreReducer.orders.length
  );

  const drinkItems = menuItems.filter((item) => item.type === "drinks").length;
  const kitchenItems = menuItems.filter(
    (item) => item.type === "kitchen"
  ).length;
  const bakeryItems = menuItems.filter((item) => item.type === "bakery").length;

  const menuTypes = [
    {
      menuName: "Without Menu",
      menu: Empty,
      listValue: "ללא תפריט",
      price: 0,
    },
    {
      menuName: "classic morning",
      menu: ClassicMorning,
      listValue: "בוקר קלאסי",
      price: 60,
    },
    {
      menuName: "mefanek morning",
      menu: MorningMefanek,
      listValue: "בוקר מפנק",
      price: 75,
    },
    {
      menuName: "wealthy morning",
      menu: MorningWealthy,
      listValue: "בוקר עשיר",
      price: 120,
    },
    {
      menuName: "classic lunch",
      menu: AfternoonClassic,
      listValue: "צהריים קלאסי",
      price: 80,
    },
    {
      menuName: "mefanek lunch",
      menu: AfternoonMefanek,
      listValue: "צהריים מפנק",
      price: 110,
    },
    {
      menuName: "wealthy lunch",
      menu: AfternoonWealthy,
      listValue: "צהריים עשיר",
      price: 130,
    },
    {
      menuName: "classic evening",
      menu: EveningClassic,
      listValue: "ערב קלאסי",
      price: 60,
    },
    {
      menuName: "mefanek evening",
      menu: EveningMefanek,
      listValue: "ערב מפנק",
      price: 85,
    },
    {
      menuName: "wealthy evening",
      menu: EveningWealthy,
      listValue: "ערב עשיר",
      price: 130,
    },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function setMenuType(event) {
    menuTypes.filter((menu) => {
      if (menu.listValue === event.target.value) {
        menuTypeHandler(menu);
        // emptyFieldHandler({menuName :false});
        dispatch(setMenuName(menu.listValue));
        dispatch(changePrice(guestsNum * menu.menu.pricePerPerson));
        dispatch(setMenuItems(menu.menu.items));
      }
    });
  }

  function setPrice(event) {
    dispatch(setGuestsNumber(event.target.value));
    if (menuType != null) {
      dispatch(changePrice(event.target.value * menuType.menu.pricePerPerson));
    } else {
      dispatch(changePrice(0));
    }
  }

  function deleteItem(itemId) {
    const temp = menuItems.filter((item) => item.id !== itemId);
    dispatch(setMenuItems(temp));
  }

  function checkInputs() {
    let emptyName = eventName === "";
    let emptyGuestsType = guestsType === "";
    let emptyMenuName = menuName === "";
    let emptyEventType = eventType === null;
    let rightFormat = !(
      emptyName ||
      emptyGuestsType ||
      emptyMenuName ||
      emptyEventType
    );

    if (rightFormat) {
      return true;
    } else {
      emptyFieldHandler({
        name: eventName === "",
        guestsType: guestsType === "",
        menuName: menuName === "",
        eventType: eventType === null,
      });

      console.log(eventName === "");
      console.log(guestsType === "");
      console.log(menuName === "");
      console.log(eventType === null);

      return false;
    }
  }

  function sendToWaitingList() {
    if (checkInputs()) {
      dispatch(
        addEvent({
          id: eventId,
          eventName: eventName,
          guestsNum: guestsNum,
          guestsType: guestsType,
          orderDate: orderDate,
          orderTime: orderTime,
          menuName: menuName,
          eventType: eventType,
          price: price,
          items: menuItems,
          comments: comments,
        })
      );
      console.log("Successully added to waiting list");
    } else {
      console.log("Something went wrong with adding to waiting list");
    }
  }

  function sendToOrdersList() {
    if (checkInputs()) {
      console.log("Successully added to production list");
      dispatch(
        addOrder({
          id: ordersListId,
          orderName: eventName,
          guestsNum: guestsNum,
          guestsType: guestsType,
          orderDate: orderDate,
          orderTime: orderTime,
          menuName: menuName,
          eventType: eventType,
          items: menuItems,
          comments: comments,
          ready: false,
        })
      );
    } else {
      console.log("Something went wrong with adding to production list");
    }
  }

  const current = new Date();
  const currentYear = new Date().getFullYear();
  const currentMonth = (new Date().getMonth() + 1).toLocaleString();
  const currentDay = new Date().getDate().toLocaleString();

  const currentDate =
    currentYear +
    (currentMonth > 9 ? "-" : "-0") +
    currentMonth +
    (currentDay > 9 ? "-" : "-0") +
    currentDay;

  return (
    <Box className="order-cart">
      <Box className="cart-header" elevation={3}>
        <TextField
          className="input"
          error={emptyField.name}
          label={props.language ? "שם" : "Name"}
          // inputRef={nameRef}
          variant="outlined"
          required={true}
          defaultValue={eventName}
          onChange={(event) =>
            dispatch(
              setName(event.target.value),
              emptyFieldHandler({ name: false })
            )
          }
        />
        <TextField
          className="input"
          id="standard-number"
          label={props.language ? "מספר האורחים" : "Number of Guests"}
          type="number"
          min="50"
          InputProps={{
            inputProps: {
              max: 200,
              min: guestsNum,
            },
          }}
          variant="outlined"
          onChange={setPrice}
          defaultValue={guestsNum}
        />
        <FormControl className="input">
          <TextField
            select
            error={emptyField.guestsType}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={props.language ? "סוג הקהל" : "Type of Guests"}
            SelectProps={{
              renderValue: (value) => value,
            }}
            onChange={(event) =>
              dispatch(
                setGuestsType(event.target.value),
                emptyFieldHandler({ guestsType: false })
              )
            }
          >
            <MenuItem value={"שגררות"}>שגררות</MenuItem>
            <MenuItem value={"חיילים"}>חיילים</MenuItem>
          </TextField>
        </FormControl>
        <InputLabel id="demo"></InputLabel>
        <TextField
          className="input"
          type="date"
          label={props.language ? "תאריך" : "Date"}
          variant="outlined"
          inputProps={{
            min: currentDate,
            // max: "2020-08-20",
          }}
          defaultValue={orderDate}
          onChange={(event) => dispatch(setDate(event.target.value))}
        />
        <TextField
          type="time"
          className="input"
          variant="outlined"
          defaultValue={orderTime}
          label={props.language ? "זמן" : "Time"}
          onChange={(event) => dispatch(setTime(event.target.value))}
        ></TextField>
        <TextField
          select
          error={emptyField.menuName}
          className="input"
          variant="outlined"
          label={props.language ? "תפריט" : "Menu"}
          value={menuType ? menuType.listValue : ""}
          onChange={setMenuType}
        >
          {menuTypes.map((type) => (
            <MenuItem value={type.listValue}>{type.listValue}</MenuItem>
          ))}
        </TextField>
        <TextField
          select
          className="input"
          error={emptyField.eventType}
          variant="outlined"
          label="To Sit / TA?"
          onChange={(event) =>
            dispatch(setEventType(event.target.value), emptyFieldHandler(false))
          }
        >
          <MenuItem value={true}>לשבת</MenuItem>
          <MenuItem value={false}>TA</MenuItem>
        </TextField>
      </Box>
      <Box className="cart-main">
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              className="accordion-text"
              sx={{ color: "text.secondary", width: "33%" }}
            >
              {props.language
                ? kitchenItems + " פריטים "
                : kitchenItems + " items"}
            </Typography>
            <Typography
              className="accordion-text"
              sx={{ flexShrink: 0, fontWeight: "600" }}
            >
              {props.language ? "מטבח" : "Kitchen"}
            </Typography>
            {/* <Button
              onClick={() => {
                props.backdropHandler(true);
                props.menuState(true);
                props.orderInputState(false);
              }}
              color="success"
              variant="outlined"
              sx={{ fontSize: "20px", fontWeight: "800" }}
            >
              {props.language ? "הוסף פריט" : "Add item"}
            </Button> */}
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            {menuItems
              .filter((item) => item.type === "kitchen")
              .map((item) => (
                <Item
                  id={item.id}
                  name={props.language ? item.nameHe : item.nameEn}
                  price={item.price}
                  addButton={false}
                  deleteButton={true}
                  language={props.language}
                  deleteFunction={deleteItem}
                  quantity={item.quantity}
                />
              ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              className="accordion-text"
              sx={{ color: "text.secondary", width: "33%" }}
            >
              {props.language
                ? bakeryItems + " פריטים "
                : bakeryItems + " items"}
            </Typography>
            <Typography
              className="accordion-text"
              sx={{ flexShrink: 0, fontWeight: "600", fontSize: "25px" }}
            >
              {props.language ? "מאפים" : "Bakery"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            {menuItems
              .filter((item) => item.type === "bakery")
              .map((item) => (
                <Item
                  id={item.id}
                  name={props.language ? item.nameHe : item.nameEn}
                  price={item.price}
                  quantity={item.quantity}
                  addButton={false}
                  deleteButton={true}
                  language={props.language}
                  deleteFunction={deleteItem}
                />
              ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              className="accordion-text"
              sx={{ color: "text.secondary"}}
            >
              {props.language ? drinkItems + " פריטים " : drinkItems + " items"}
            </Typography>
            <Typography
              className="accordion-text"
              sx={{ flexShrink: 0, fontWeight: "600", fontSize: "25px" }}
            >
              {props.language ? "שתייה" : "Drinks"}
            </Typography>
            {/* <Button
              onClick={() => {
                props.backdropHandler(true);
                props.menuState(true);
                props.orderInputState(false);
              }}
              color="success"
              variant="outlined"
              sx={{ fontSize: "20px", fontWeight: "800" }}
            >
              {props.language ? "הוסף פריט" : "Add item"}
            </Button> */}
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            {menuItems
              .filter((item) => item.type === "drinks")
              .map((item) => (
                <Item
                  id={item.id}
                  name={props.language ? item.nameHe : item.nameEn}
                  price={item.price}
                  addButton={false}
                  deleteButton={true}
                  language={props.language}
                  deleteFunction={deleteItem}
                  quantity={item.quantity}
                />
              ))}
          </AccordionDetails>
        </Accordion>
        {/* <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              className="accordion-text"
              sx={{ color: "text.secondary", width: "33%", fontWeight: "600" }}
            >
              {props.language ? 0 + " פריטים " : 0 + " items"}
            </Typography>
             <Typography
              className="accordion-text"
              sx={{ color: "text.secondary", fontWeight: "600" }}
            >
            {props.language ? ("") : ("")}
            </Typography> 
            <Typography
              className="accordion-text"
              sx={{ flexShrink: 0, fontWeight: "600", fontSize: "25px" }}
            >
              {props.language ? "תוספות" : "Addings"}
            </Typography>
            
          </AccordionSummary>
          <AccordionDetails className="accordion-details"></AccordionDetails>
        </Accordion> */}

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              className="accordion-text"
              sx={{ color: "text.secondary", fontWeight: "600" }}
            >
              {props.language ? "" : ""}
            </Typography>
            <Typography
              className="accordion-text"
              sx={{ flexShrink: 0, fontWeight: "600", fontSize: "25px" }}
            >
              {props.language ? "הערות" : "Comments"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Comment
              topic={"Topic"}
              department={"Department"}
              description={"Description"}
              button={false}
            />
            {comments.map((comment) => (
              <Comment
                id={comment.id}
                topic={comment.topic}
                department={comment.department}
                description={comment.description}
                button={true}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className="cart-footer">
        <Button
          className="footer-button"
          color="error"
          // disabled
          variant="outlined"
          onClick={sendToOrdersList}
        >
          {props.language ? "להכנה" : "To Production List"}
        </Button>

        <Button
          className="footer-button"
          color="warning"
          variant="outlined"
          onClick={sendToWaitingList}
        >
          {props.language ? "לרשימת ההמתנה" : "To Waiting list"}
        </Button>

        <Button
          onClick={() => {
            props.backdropHandler(true);
            props.menuState(true);
            props.orderInputState(false);
            props.priceState(false);
            props.commentState(false);
          }}
          color="success"
          variant="outlined"
          className="footer-button"
        >
          {props.language ? "הוסף פריט" : "Add item"}
        </Button>
        <Button
          onClick={() => {
            props.backdropHandler(true);
            props.menuState(false);
            props.orderInputState(false);
            props.commentState(true);
            props.priceState(false);
          }}
          color="primary"
          variant="outlined"
          className="footer-button"
        >
          {props.language ? " הוסף הערה " : "Add Comment"}
        </Button>
        <Box className="price-box">
          {/* <Typography
           style={{ margin: "3px" }}>
            {props.language ? ": מחיר" : "Price :"}
          </Typography> */}
          <Typography 
          style={{ margin: "3px" }}>
            {price} ILS
          </Typography>
          {/* <h3 style={{margin:'3px'}}> ILS </h3> */}
          <Button
            variant="outlined"
            onClick={() => {
              props.priceState(true);
              props.backdropHandler(true);
              props.menuState(false);
              props.commentState(false);
            }}
            className="footer-button"
          >
            {props.language ? "שינוי מחיר" : "Change Price"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
