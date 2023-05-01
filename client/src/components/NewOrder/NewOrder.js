import React, { useState, useRef } from "react";
import "./NewOrder.css";
import { useSelector, connect, useDispatch } from "react-redux";

import Navbar from "../UI/Navbar";
import NewOrderForm from "./NewOrderForm";
import Drinks from "./Drinks";
import Trays from "./Trays";
import Kitchen from "./Kitchen";
import Bakery from "./Bakery";
import Cart from "./Cart";

import Paper from "@mui/material/Paper";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TocIcon from "@mui/icons-material/Toc";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";


import { addComment, changePrice } from "../../store/eventStore";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function NewOrder(props) {
  const dispatch = useDispatch();

  const [navbarState, navbarStateHandler] = useState("Drinks");
  const [backdropState, backdropStateHandler] = useState(true);

  const [orderInputState, orderInputStateHandler] = useState(false);
  const [menuState, menuStateHandler] = useState(false);
  const [priceState, priceStateHandler] = useState(false);

  
  const [commentState,commentStateHandler] = useState(true);
  const [commentTopic, commentTopicHandler] = useState();
  const [commentDepartment,commentDepartmentHandler] = useState();
  const [commentDescription,commentDescriptionHandler] = useState();
  const commentsListLength = (useSelector((state) => state.eventStoreReducer.comments)).length;

  const eventPrice = useSelector((state) => state.eventStoreReducer.price);
  const [newPrice,newPriceHandler] = useState();

  function setNewPrice(){


    dispatch(changePrice(newPrice));
    priceStateHandler(false);
    backdropStateHandler(false);
  }

  function addCommentLocal(){

        dispatch(addComment({
          id: commentsListLength,
          topic: commentTopic,
          department: commentDepartment,
          description: commentDescription
        }))
  }

  const newOrderForm = orderInputState ? (
    <NewOrderForm
      language={props.language}
      backdropState={backdropState}
      backdropHandler={backdropStateHandler}
    />
  ) : (
    ""
  );
  const menu = menuState ? (
    <Paper className="components-container" elevation={3}>
      <Box className="menu-header">
        {/* <Box className="search-bar">
          <TextField
            sx={{width:'100%', fontSize:'20px',input: {textAlign: "center"},label: {textAlign: "center"}}}
            id="standard-search"
            label={props.language? 'חיפוש' : "Search"}
            type="search"
            variant="filled"
          />
        </Box> */}
        {/* <Box className="item-groups">
        <Stack direction="row" spacing={1}>
          <Chip variant="outlined" label="סלטים" color="primary" />
          <Chip variant="outlined" label="ירקות" color="primary" />
          <Chip variant="outlined" label="פירות" color="primary" />
          <Chip variant="outlined" label="מוכנים" color="primary" />
      </Stack>
        </Box> */}
        <Navbar language={props.language} navbarState={navbarStateHandler} />
        <Fab
          size="small"
          color="info"
          aria-label="add"
          onClick={() => {
            backdropStateHandler(!backdropState);
          }}
        >
          <CloseIcon />
        </Fab>
      </Box>

      {navbarState === "Drinks" ? <Drinks language={props.language} /> : ""}
      {navbarState === "Trays" ? <Trays language={props.language} /> : ""}
      {navbarState === "Kitchen" ? <Kitchen language={props.language} /> : ""}
      {navbarState === "Bakery" ? <Bakery language={props.language} /> : ""}
    </Paper>
  ) : (
    ""
  );
  const price = priceState ? (
    <Paper className="price-change-container">
      <Fab
        size="small"
        color="info"
        aria-label="add"
        sx={{ marginLeft: "90%", marginTop: "1%" }}
        onClick={() => {
          backdropStateHandler(!backdropState);
        }}
      >
        <CloseIcon />
      </Fab>
      <Typography variant="h5">
        {props.language ? "שינוי מחיר" : "Price Change"}
      </Typography>
      <Typography>
        {props.language? "מחיר קיים":"Existing Price"} :
        {eventPrice}
        {props.language ? " שח ": " ILS "}
      </Typography>
      <TextField
        id="standard-number"
        label={props.language ? "מחיר חדש" : "new price"}
        type="number"
        variant="outlined"
        onChange={(event) => newPriceHandler(event.target.value)}
      
      />
      <Button variant="outlined" 
      sx={{ marginBottom: "50px" }}
      onClick={setNewPrice}>
        {props.language ? "שמור" : "Save"}
      </Button>
    </Paper>
  ) : (
    ""
  );

  const comment = commentState ? (

      <Paper className="comment-container">
        <Fab
        size="small"
        color="info"
        aria-label="add"
        sx={{ marginLeft: "90%", marginTop: "1%" }}
        onClick={() => {
          backdropStateHandler(!backdropState);
        }}
      >
        <CloseIcon />
      </Fab>
        <TextField
          id="outlined-multiline-flexible"
          label="נושא"
          multiline
          maxRows={4}
          onChange={(event)=>commentTopicHandler(event.target.value)}
        />
        <TextField
            select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            sx={{width:"60%"}}
            label={props.language ?"מחלקה":"department"}
            SelectProps={{
              renderValue: (value) => value,
            }}
            onChange={(event) => commentDepartmentHandler(event.target.value)}
          >
            <MenuItem value={"מאפים"}>מאפים</MenuItem>
            <MenuItem value={"מטבח"}>מטבח</MenuItem>
            <MenuItem value={"שתייה"}>שתייה</MenuItem>
          </TextField>

         <TextField
          id="outlined-multiline-static"
          label={props.language ? "הערה": "comment"}
          multiline
          rows={5}
          defaultValue="Type your text here"
          sx ={{width:'80%'}}
          onChange={(event) => commentDescriptionHandler(event.target.value)}
        />

        <Button
          variant="outlined"
          onClick={addCommentLocal}
          >
            {props.language ? "הוסף":"Add"}
          </Button>
      </Paper>):("");

      // console.log(commentTopic);

  return (
    <div className="newOrder">
      <Box className={backdropState ? "backdrop" : "none"}>
        {newOrderForm}
        {menu}
        {price}
        {comment}
      </Box>
      {/* <Typography>{props.language ? "הזמנה חדשה" : "New Order"  }</Typography> */}
      <Cart
        language={props.language}
        backdropState={backdropState}
        backdropHandler={backdropStateHandler}
        menuState={menuStateHandler}
        orderInputState={orderInputStateHandler}
        priceState={priceStateHandler}
        commentState={commentStateHandler}
      />
    </div>
  );
}

export default NewOrder;
