import React, { useState, useRef } from "react";
import "./MenuItem.css";
import { useSelector, connect, useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { showNotification } from "../../store/ui-slice";
import { addItem, changeItemQuantity } from "../../store/eventStore";
function MenuItem(props) {
  const dispatch = useDispatch();
  const itemsListLength = useSelector(
    (state) => state.eventStoreReducer.items
  ).length;
  // const addItem = dispatch(addItem);
  const [itemQuantity, itemQuantityHandler] = useState(props.quantity);

  const addButton = props.addButton ? (
    <Button
      size="large"
      color="success"
      variant="contained"
      onClick={() => {
        let tempQuantity = parseInt(itemQuantity);
        dispatch(
          addItem({
            id: itemsListLength,
            nameEn: props.enName,
            nameHe: props.heName,
            type: props.type,
            quantity: tempQuantity,
          })
        );
        dispatch(
          showNotification({
            type: "success",
            notification: tempQuantity+" " + props.enName + " added to order",
          })
        );
      }}
    >
      {props.language ? "הוסף" : "Add"}
    </Button>
  ) : (
    ""
  );

  const deleteButton = props.deleteButton ? (
    <IconButton
      aria-label="delete"
      size="large"
      onClick={() => props.deleteFunction(props.id)}
    >
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  ) : (
    ""
  );

  const commentBox = props.addButton ? (
    ""
  ) : (
    <Box className="comments-holder">
      <Typography variant="h6">
        0 : {props.language ? "הערות" : "Comments"}
      </Typography>
      <TextField sx={{ margin: "5px" }} type={"textarea"}></TextField>
      <Button onClick={() => props.deleteFunction(props.id)}>
        {props.language ? "הוסף" : "Add"}
      </Button>
    </Box>
  );

  const itemColor =
    props.type === "drinks"
      ? "aqua"
      : props.type === "kitchen"
      ? "rgb(140, 95, 185)"
      : props.type === "bakery"
      ? "rgb(255, 226, 179)"
      : "";

  const itemTextColor = 

  props.type === "drinks"
  ? "black"
  : props.type === "kitchen"
  ? "white"
  : props.type === "bakery"
  ? "black"
  : "";

  return (
    <Box className="menu-item" sx={{ backgroundColor: itemColor }}>
      {deleteButton}
      {addButton}
      <CardActionArea className="main">
        <CardContent className="content">
          {/* {commentBox} */}
          <Typography variant="body2" color="text.secondary">
            {props.price}
          </Typography>
          <Typography
            sx={{ fontWeight: "600", fontSize: "17px", color: itemTextColor }}
            color="black"
            gutterBottom
            align="center"
          >
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.addButton ? (
          <TextField
            className="input"
            id="standard-number"
            label=" כמות"
            type="number"
            variant="outlined"
            value={itemQuantity}
            onChange={(event) => {
              itemQuantityHandler(event.target.value);
            }}
          />
        ) : (
          ""
        )}
        {props.addButton ? (
          ""
        ) : (
          <Box className="quantity-box">{props.quantity}</Box>
        )}
      </CardActions>
    </Box>
  );
}

export default MenuItem;
