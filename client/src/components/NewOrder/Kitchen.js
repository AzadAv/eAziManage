import React from 'react'
import './Kitchen.css'

import MenuItem from './MenuItem'
function Kitchen(props) {

  const data = [
    {id:1,
      enName: 'Plate of vegetables',
      heName: 'פלטת ירקות',
      type: 'kitchen',
      quantity : 1},
    {id:2,
      enName: 'Muzlie',
      heName: 'מוזלי',
      type: 'kitchen',
      quantity : 1},
    {id:3,
      enName: 'Addings',
      heName: 'תוספות',
      type: 'kitchen',
      quantity : 1},
    {id:4,
      enName: 'Cheeses plate',
      heName: 'פלטת גבינות',
      type: 'kitchen',
      quantity : 1},
    {id:5,
      enName: 'Plate of smoked salmon',
      heName: 'מגש סלמון מעושן',
      type: 'kitchen',
      quantity : 1},
    {id:6,
      enName: 'Red Shakshouka',
      heName: 'שקשוקה אדומה',
      type: 'kitchen',
      quantity : 1},
    {id:7,
      enName: 'Capresa salad',
      heName: 'סלט קפרזה',
      type: 'kitchen',
      quantity : 1},
    {id:8 ,
      enName: 'Carpachio with eggplants',
      heName: "קרפצ'יו וחציל",
      type: 'kitchen',
      quantity : 1},
    {id: 9,
      enName: 'Israeli vegetable salad',
      heName: "סלט ירקות ישראלי",
      type: 'kitchen',
      quantity : 1},
    {id: 10,
      enName: 'Plate of season fruits',
      heName: "פלטת פירות העונה",
      type: 'kitchen',
      quantity : 1},
    {id: 11,
      enName: 'Kinoa salad',
      heName: "סלט קינואה",
      type: 'kitchen',
      quantity : 1},
    {id: 12,
      enName: 'Greek salad',
      heName: "סלט יווני",
      type: 'kitchen',
      quantity : 1},
    {id: 13,
      enName: 'Lettuce salad',
      heName: "סלט חסות",
      type: 'kitchen',
      quantity : 1},
    {id: 14,
      enName: 'Pasta with cream cheese and mushrooms',
      heName: "פסטה ברוטב שמנת ופטריות",
      type: 'kitchen',
      quantity : 1},
    {id: 15,
      enName: 'Mini Italian Lasagna',
      heName: "מיני לזניה איטלקית",
      type: 'kitchen',
      quantity : 1},
    {id: 16,
      enName: 'Potatoes',
      heName: "פלחי תפוחי אדמה ",
      type: 'kitchen',
      quantity : 1},
    {id: 17,
      enName: 'Noodles prepared with vegetables and tofu',
      heName: "איטריות מוקפצות עם ירקות וטופו",
      type: 'kitchen',
      quantity : 1},
    {id: 18,
      enName: 'Tortillas',
      heName: "טורטיות",
      type: 'kitchen',
      quantity : 1},
    {id: 19,
      enName: 'Green Salad',
      heName: "סלט ירוק",
      type: 'kitchen',
      quantity : 1},
    
    {id: 20,
      enName: 'Grape leaves',
      heName: "עלי גפן",
      type: 'kitchen',
      quantity : 1},
    {id: 21,
      enName: 'Salmon on fire',
      heName: "שיפודי סלמון",
      type: 'kitchen',
      quantity : 1},
    {id: 22,
      enName: 'Knafsim',
      heName: "קנאפסים במבחר טעמים",
      type: 'kitchen',
      quantity : 1},  
    {
      id: 23,
      enName: 'Olives in olive oil,kornishons and artishok',
      heName: 'זיטים בשמן זית, קורנישונים וארטישוק',
      type: 'kitchen',
      quantity : 1
    },
    {
      id: 24,
      enName: 'Tortalini in souce',
      heName : 'טורטליני ברוטב',
      type: 'kitchen',
      quantity : 1
    },
    {
      id: 25,
      enName: 'Potatoes and Zukini',
      heName : 'לביבות תפוח אדמה וזוקיני',
      type: 'kitchen',
      quantity : 1
    },
    {
      id: 26,
      enName: 'Cheese plate',
      heName : 'פלטת גבינות',
      type: 'kitchen',
      quantity : 1
    },
    {
      id: 27,
      enName: 'Pickled Onion',
      heName : 'בצל כבוש',
      type: 'kitchen',
      quantity : 1
    },
    {
      id: 28, 
      enName : 'Roasted Pepper',
      heName : 'פלפל קלוי',
      type: 'kitchen',
      quantity : 1
    }
  ]
  return (
    <div className='kitchen'>

      {data.map((item) => (
        <div >
        <MenuItem
          
          name={props.language ? item.heName : item.enName}
          heName = {item.heName}
          enName = {item.enName}
          type = {item.type}
          addButton={true}
          deleteButton={false}
          language={props.language}
          quantity={1}
          color={'rgb(140, 95, 185)'}
        />
        </div>
      ))}
    </div>
  )
}

export default Kitchen