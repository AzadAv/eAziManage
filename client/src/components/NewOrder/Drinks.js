import React from "react";
import "./Drinks.css";

import MenuItem from "./MenuItem";


function Drinks(props) {
  
  const data = [
    {
      id : 0,
      enName: "Water with cucumbers",
      heName: "מים עם מלפפון",
      type: 'drinks',
    },
    {
      id : 1,
      enName: "Lemonade",
      heName: "לימונדה",
      type: 'drinks',
    },
    {
      id : 2,
      enName: "Stand of hot drinks",
      heName: "עמדת שתייה חמה",
      type: 'drinks',
    },
    {
      id : 3,
      enName: "Red Wine",
      heName: "יין אדום",
      type: 'drinks',
    },
    {
      id : 4,
      enName: "White Wine",
      heName: "יין לבן",
      type: 'drinks', 
    },
  ];
  return (
    <div className="drinks-container">
      {data.map((item) => (
        <MenuItem
        name={props.language ? item.heName : item.enName}
        heName = {item.heName}
        enName = {item.enName}
        type = {item.type}
        addButton={true}
        deleteButton={false}
        language={props.language}
        quantity={1}
        color={'rgb(73, 156, 156)'}
        />
      ))}
    </div>
  );
}

export default Drinks;
