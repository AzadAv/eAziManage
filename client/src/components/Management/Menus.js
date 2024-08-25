import { Box, Button, Paper, Typography, TextField } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import React, { useState } from "react";
import "./Menus.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deleteMenuFromRedux } from "../../store/manageStore";
import { deleteMenu } from "../../store/manage-store-actions";
function Menus(props) {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.manageStoreReducer.menus);
  const products = useSelector((state) => state.manageStoreReducer.menuItems);
  const [newMenuBox,newMenuBoxHandler] = useState(true);
  const [itemsList,itemsListHandler] = useState(false);
  const [newItemAmount,newItemAmountHandler] = useState(0);
  const [menuItems,menuItemsHandler] = useState([{
    cost: "1",
    id: 0,
    nameEn:  "Pashtidot",
    nameHe: "מיני פשטידות",
    quantity: 1,
    type: "bakery"
  },{
    cost: "1",
    id: 0,
    nameEn:  "Pashtidot",
    nameHe: "מיני פשטידות",
    quantity: 1,
    type: "bakery"
  }]);

  function showNewMenuBox() {

    newMenuBoxHandler(!newMenuBox);
  }

  function changeItemAmount(type) {

    if(type === "increase"){

        newItemAmountHandler(newItemAmount+1);
    }
    else if(type === "decrease"){

        if(newItemAmount>0){

          newItemAmountHandler(newItemAmount-1)
        } else {

          newItemAmountHandler(0);
        }
    }
  }

  console.log(menus);
  return (
    <Box className="management-menus">
      <Paper className="add-menu" 
      onClick={showNewMenuBox}
      sx={{ color: "black" }}>
        {props.language ? "הוסף תפריט" : "Add Menu"}
      </Paper>
      <Paper className={newMenuBox ? "new-menu-box" : "none"}>
        <Box className="inputs">  
            <TextField
              className="new-menu-input"
              label={props.language ? "שם באנגלית" : "Name in English"}
            ></TextField>
            <TextField
              className="new-menu-input"
              label={props.language ? "שם בעברית" : "Name in Hebrew"}
            ></TextField>
            <TextField
              className="new-menu-input"
              label={props.language ? "מחיר פר בן אדם" : "Price per Person"}
            ></TextField>
            <Box className="chosen-items">
              <Box className="chosen-items-header">
               <Typography
               typography={'h4'}>{props.language ? "מוצרים" : "Items"}</Typography>
               <Button 
              variant="contained"
              color="success"
              onClick={()=>{itemsListHandler(!itemsList)}}
              >
                {props.language ? "הוסף מוצר" : "Add Item"}
              </Button>
              </Box>
                {menuItems.map((item)=>(
                  <Paper elevation={1} square className="chosen-item">
                    <div>  
                      {props.language ? item.nameHe : item.nameEn}
                    </div>
                    <div>
                      {item.cost}
                    </div>
                    <Button
                    variant="outlined"
                    color="error">
                        x
                    </Button>
                  </Paper>
                ))}
            </Box>
        </Box>  
          <Paper elevation={6} className="products-box"
          style={{visibility:itemsList ? 'visible':'hidden'}}>
            <Button
            variant="contained"
            className="close-btn"
            onClick={()=>itemsListHandler(false)}
            >
              x
          </Button>
          <TextField
          type="text"
          placeholder={props.language ? "חפש מוצר" : "Search Item"}>

          </TextField>
            {products.map((product)=>(
            <Paper elevation={2} className="products-menu-item">
              <div >{props.language ? product.nameHe : product.nameEn}</div>
              {/* <div>{product.cost}</div> */}
              {/* <Button
                      style={{fontSize:'30px'}}
                      onClick={()=>changeItemAmount("increase")}
                      >
                        +
                      </Button> */}
                      <TextField
                      type="number"
                      className="chosen-item-textfield"
                      // value={newItemAmount}
                      >

                      </TextField>
                      {/* <Button
                      style={{fontSize:'30px'}}
                      onClick={()=>changeItemAmount("decrease")}>
                        -
                      </Button> */}
                      <Button>
                        {props.language ? "הוסף לתפריט": "Add to Menu List"}
                      </Button>
            </Paper>))}
          </Paper>
      

        <Button variant="outlined">
          <Typography variant="p">
              {props.language ? "הוסף": "Add"}
          </Typography>
        </Button>
      </Paper>
      {menus.map((menu) => (
        <Accordion>
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <Box className="main">
              <Typography variant="h5">
                {props.language ? menu.menuNameHe : menu.menuNameEn}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Paper
              className="per-person"
              sx={{ flexDirection: props.language ? "row-reverse" : "row" }}
            >
              <Box sx={{ margin: "5px" }}>
                {props.language ? " : מחיר לבן אדם" : "Price per Person : "}
              </Box>
              <Box sx={{ margin: "5px" }}>{menu.pricePerPerson}</Box>
            </Paper>

            <Paper className="menus-main">
              <Typography variant="h6">
                {props.language ? "מוצרים" : "Items"}
              </Typography>
              <Box className="menus-items-list">
                <Box className="menus-menu-item-header">
                  {props.language ? "שם המוצר" : "Item Name"}
                </Box>
                <Box
                  className="menus-menu-item-header"
                  sx={{ fontWeight: "600" }}
                >
                  {props.language ? "סוג המוצר" : "Item type"}
                </Box>
              </Box>
              {menu.items.map((item) => (
                <Box className="menus-items-list">
                  <Box className="menus-menu-item">
                    {props.language ? item.nameHe : item.nameEn}
                  </Box>
                  <Box className="menus-menu-item">{item.type}</Box>
                </Box>
              ))}
            </Paper>
          </AccordionDetails>
          <Box className="menus-footer">
            <Button variant="outlined">
              <Typography variant="h6">
                {props.language ? "שנה" : "Edit"}
              </Typography>
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                dispatch(deleteMenuFromRedux(menu._id));
                dispatch(deleteMenu(menu._id));
              }}
            >
              <Typography variant="h6">
                {props.language ? "מחק" : "Delete"}
              </Typography>
            </Button>
          </Box>
        </Accordion>
      ))}
    </Box>
  );
}

export default Menus;
