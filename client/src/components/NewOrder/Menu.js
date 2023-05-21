import React, {useState} from 'react'
import "./Menu.css"
import MenuItem from './MenuItem'
import { useSelector, connect, useDispatch } from "react-redux";
import { Box } from '@mui/material';

function Menu(props) {

    const Menu = useSelector((state)=> state.menuStoreReducer.menuItems);

    const [items,itemsHandler] = useState();


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
          name={props.language ? item.nameHe : item.nameEn}
          heName = {item.nameHe}
          enName = {item.nameEn}
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