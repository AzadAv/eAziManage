import React, { useState } from "react";
import "./Orders.css";
import OrdersList from "./OrdersList";
import Navbar from "../UI/Navbar";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Orders(props) {

  const tabs = [
    { en: "Kitchen", he: "מטבח" },
    { en: "Bakery", he: "מאפים" },
    { en: "All", he: "הכל" },
  ];
  
  
  return (
    <div className="ordersContainer">
      <div className="ordersHeader">הזמנות להיום</div>
      <Navbar language={props.language} data={tabs}/>
      {/* <div className="main"> */}
        <OrdersList />
      {/* </div> */}
    </div>
  );
}

export default Orders;
