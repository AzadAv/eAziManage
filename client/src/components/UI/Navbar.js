import React from 'react'
import './Navbar.css'

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Navbar(props) {

    const [value, setValue] = React.useState(0);
    const [expanded, setExpanded] = React.useState(false);

    const tabs = [
      { en: "Drinks", he: "שתייה" },
      // { en: "Trays", he: "מגשי אירוח" },
      { en: "Kitchen", he: "מטבח" },
      { en: "Bakery", he: "מאפים" },

    ];
  
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    const setNavbarState = (event)=>{

            console.log(event.en);
            props.navbarState(event.en);
    }
   
    const tabsList = tabs.map((tab)=>(
    
        <Tab
                label={props.language ? tab.he : tab.en}
                style={{ fontSize: "15px", fontWeight: "700", color: "#000000" }}
                onClick={()=>setNavbarState(tab)}
              />))
  return (
    <div className='navbar-container'>
        
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
          {tabsList}
        </Tabs>
      </Box>
    </div>
  )
}

export default Navbar