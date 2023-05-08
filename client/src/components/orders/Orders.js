import React, { useState } from "react";
import "./Orders.css";
import OrdersList from "./OrdersList";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


function Orders(props) {

  const [itemsType, itemsTypeHandler] = useState('drinks');
  const [value, setValue] = React.useState(0);
  const tabs = [
    { en: 'drinks', he: "שתייה" },
    // { en: "Trays", he: "מגשי אירוח" },
    { en: 'kitchen', he: "מטבח" },
    { en: 'bakery', he: "מאפים" },

  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    };


  return (
    <div className="ordersContainer">
      <div className="ordersHeader">הזמנות להיום</div>
      
      <Box
            sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: { xs: 400, sm: 600 },
            bgcolor: "background.paper",
            // border: 1,
            }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          
        >
        {  tabs.map((tab)=>(
    
          <Tab
            label={props.language ? tab.he : tab.en}
            style={{ fontSize: "23px", fontWeight: "700", color: "#000000" }}
            onClick={()=>itemsTypeHandler(tab.en)}
          />))}
        </Tabs>
      </Box>
      <OrdersList language={props.language} itemsType={itemsType} />
    </div>
  );
}

export default Orders;
