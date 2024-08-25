import React, {useState} from 'react'
import "./Menu.css"
import MenuItem from './MenuItem'
import { useSelector, connect, useDispatch } from "react-redux";
import { Box } from '@mui/material';

function Menu(props) {

    // const Menu = useSelector((state)=> state.menuStoreReducer.menuItems);
      const Menu = useSelector((state) =>state.manageStoreReducer.menuItems);
    const [items,itemsHandler] = useState();


    console.log(Menu);
  return (
    <Box className='menu-box'>
        {Menu
        .filter((item) => {
          if(props.itemType === ''){

            return item;
          }
          else {

           return item.nameHe.match(props.itemType);
          }
        })
        .map((item)=>(

            <MenuItem
          nameHe = {item.nameHe}
          nameEn = {item.nameEn}
          cost = {item.cost}
          type = {item.type}
          addButton={true}
          deleteButton={false}
          language={props.language}
          quantity={1}
        />
        ))}
        
    </Box>
  )
}

export default Menu