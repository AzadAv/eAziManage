import React from 'react'
import './Bakery.css'

import MenuItem from './MenuItem'
function Bakery(props) {

  const data = [
    {id:1,
     enName: 'Morning bakery',
     heName: 'מאפי בוקר',
     type: 'bakery',
     tags:['bakery']},
    {id:2,
      enName: 'Rogalach mountain',
     heName: 'מגדל רוגלך',
     type: 'bakery',
     tags:['bakery']},
    {id:3,
      enName: 'Cruncie pies',
     heName: 'עוגות קראנץ',
     type: 'bakery',
     tags:['bakery','ready']}, 
     {id:4,
      enName: 'Pies mountain',
     heName: 'מגדל עוגיות צד',
     type: 'bakery',
     tags:['bakery','ready']}, 
     {id:5,
      enName: 'Breads basket',
     heName: 'סלסלת לחמים',
     type: 'bakery',
     tags:['bakery']}, 
     {id:6,
      enName: 'Brownie pieces',
     heName: 'חיתוכיות בראוני',
     type: 'bakery',
     tags:['bakery']},
     {id:7,
      enName: 'Puffs',
     heName: 'פחזניות',
     type: 'bakery',
     tags:['bakery']},  
     {id:8,
      enName: 'Cheesecake with different flawors',
     heName: 'עוגות פס גבינה בטעמים',
     type: 'bakery',
     tags:['bakery']},
     {id:9,
      enName: 'Tray of salty bakeries',
     heName: 'מגש מאפים מלוחים',
     type: 'bakery',
     tags:['bakery']},  
     {id:10,
      enName: 'Tray of sweet bakeries',
     heName: 'מגש מאפים מתוקים',
     type: 'bakery',
     tags:['bakery']}, 
     {id:11,
      enName: 'Salty puffs',
     heName: 'פחזניות מלוחות',
     type: 'bakery',
     tags:['bakery']}, 
     {id:12,
      enName: 'Mini eclairs, truffles with chocolate',
     heName: 'מיני אקלרים, טראפלס שוקולד',
     type: 'bakery',
     tags:['bakery']},  
     {id:13,
      enName: 'Tartalet cakes',
     heName: 'עוגיות טארטלט',
     type: 'bakery',
     tags:['bakery']},  
     {id:14,
      enName: 'Crackers and salty bakery',
     heName: 'קרקרים ועוגיות מלוחות',
     type: 'bakery',
     tags:['bakery']},  
     {id:15,
      enName: 'Pashtidot',
     heName: 'מיני פשטידות',
     type: 'bakery',
     tags:['bakery']},  
  ]
  return (
    <div className='bakery'>

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
  )
}

export default Bakery