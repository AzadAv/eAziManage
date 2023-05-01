import React from 'react'
import './Kitchen.css'

import MenuItem from './MenuItem'
function Kitchen(props) {

  const data = [
    {id:1,
      enName: 'Plate of vegetables',
      heName: 'פלטת ירקות',
      type: 'kitchen',
      tags:['kithcen']},
    {id:2,
      enName: 'Muzlie',
      heName: 'מוזלי',
      type: 'kitchen',
      tags:['kithcen']},
    {id:3,
      enName: 'Addings',
      heName: 'תוספות',
      type: 'kitchen',
      tags:['kithcen']},
    {id:4,
      enName: 'Cheeses plate',
      heName: 'פלטת גבינות',
      type: 'kitchen',
      tags:['kithcen']},
    {id:5,
      enName: 'Plate of smoked salmon',
      heName: 'מגש סלמון מעושן',
      type: 'kitchen',
      tags:['kithcen']},
    {id:6,
      enName: 'Red Shakshouka',
      heName: 'שקשוקה אדומה',
      type: 'kitchen',
      tags:['kithcen']},
    {id:7,
      enName: 'Capresa salad',
      heName: 'סלט קפרזה',
      type: 'kitchen',
      tags:['kithcen']},
    {id:8 ,
      enName: 'Carpachio with eggplants',
      heName: "קרפצ'יו וחציל",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 9,
      enName: 'Israeli vegetable salad',
      heName: "סלט ירקות ישראלי",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 10,
      enName: 'Plate of season fruits',
      heName: "פלטת פירות העונה",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 11,
      enName: 'Kinoa salad',
      heName: "סלט קינואה",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 12,
      enName: 'Greek salad',
      heName: "סלט יווני",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 13,
      enName: 'Lettuce salad',
      heName: "סלט חסות",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 14,
      enName: 'Pasta with cream cheese and mushrooms',
      heName: "פסטה ברוטב שמנת ופטריות",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 15,
      enName: 'Mini Italian Lasagna',
      heName: "מיני לזניה איטלקית",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 16,
      enName: 'Potatoes',
      heName: "פלחי תפוחי אדמה ",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 17,
      enName: 'Noodles prepared with vegetables and tofu',
      heName: "איטריות מוקפצות עם ירקות וטופו",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 18,
      enName: 'Tortillas',
      heName: "טורטיות",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 19,
      enName: 'Green Salad',
      heName: "סלט ירוק",
      type: 'kitchen',
      tags:['kithcen']},
    
    {id: 20,
      enName: 'Grape leaves',
      heName: "עלי גפן",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 21,
      enName: 'Salmon on fire',
      heName: "שיפודי סלמון",
      type: 'kitchen',
      tags:['kithcen']},
    {id: 22,
      enName: 'Knafsim',
      heName: "קנאפסים במבחר טעמים",
      type: 'kitchen',
      tags:['kithcen']},  
  ]
  return (
    <div className='kitchen'>

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

export default Kitchen