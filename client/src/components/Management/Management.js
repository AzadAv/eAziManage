import React,{useState} from 'react'
import './Management.css'
import Events from './Events';
import Menus from './Menus';
import Products from './Products';
import Reports from './Reports/Reports';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Navbar from '../UI/Navbar';

import Box from "@mui/material/Box";
import { TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { fetchEventsList } from '../../store/manage-store-actions';
function Management(props) {

  const dispatch = useDispatch();
  // const events = useSelector((state) => state.manageStoreReducer.events);

  const [itemsType, itemsTypeHandler] = useState({
    events : true,
    menus : false,
    products : false,
    reports : false
  });
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    switch(newValue) {
      case 0:
        // console.log()
        itemsTypeHandler(
          {events : true,
          menus : false,
          products : false,
          reports : false})
        return;
      case 1:
        itemsTypeHandler(
          {events : false,
          menus : true,
          products : false,
          reports : false})
        return;
      case 2:
        itemsTypeHandler(
          {events : false,
          menus : false,
          products : true,
          reports : false})
        return;
      case 3:
        itemsTypeHandler(
          {events : false,
          menus : false,
          products : false,
          reports : true})
        return;
      default:
        return 'foo';
    }
    };


    const tabs = [
      {en: 'Events', he: "אירועים" },
      {en: 'Menus', he: "תפריטים" },
      {en: 'Products', he: "מוצרים" },
      {en: 'Reports', he: "דוחות" },
    ];

    const navbar = <Box
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
        // onClick={()=>itemsTypeHandler(tab.en)}
      />))}
    </Tabs>
    </Box>

  return ( 
    <Box className='Management'>
      <div className='manage-header'>
          {props.language ? "הנהלה" : "Management"}
      </div>
        {navbar}
        <Box className='manage-main'>
          {itemsType.events ? (<Events language={props.language}/>): ('')}
          {itemsType.menus ? (<Menus language={props.language}/>): ('')}
          {itemsType.products ? (<Products language={props.language}/>): ('')}
          {itemsType.reports ? (<Reports language={props.language}/>): ('')}
        </Box>       
    </Box>
  )
}

export default Management