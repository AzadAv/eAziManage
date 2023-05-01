import React from "react";
import "./Drinks.css";

import MenuItem from "./MenuItem";


function Drinks(props) {
  const data = [
    {
      enName: "Water with cucumbers",
      heName: "מים עם מלפפון",
      type: 'drinks',
    },
    {
      enName: "Lemonade",
      heName: "לימונדה",
      type: 'drinks',
    },
    {
      enName: "Stand of hot drinks",
      heName: "עמדת שתייה חמה",
      type: 'drinks',
    },
    {
      enName: "Red Wine",
      heName: "יין אדום",
      type: 'drinks',
    },
    {
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
        />
      ))}
    </div>
  );
}

export default Drinks;
