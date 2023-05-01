import React, { useReducer } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Chip } from "@mui/material";

import Header from "../Header";

function Footer(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [language,languageHandler] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLanguage = () =>{

    props.languageHandler(!props.language);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemsList = [
    { value: "אירוע חדש", link: "/new-order" },
    { value: "אירועים בהמתנה", link: "/waiting-list" },
    { value: "אירועים בהכנה", link: '/'},
    { value:"דוכן", link: '/eat-anu'},
    { value:"הנהלה", link:'/management'},
  ];

  const menuItems = menuItemsList.map((item) => (
    <div>
      <NavLink to={item.link} style={{textDecoration:'none'}}>
        <MenuItem
          onClick={handleClose}
          style={{
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}>   
            {item.value}
        </MenuItem>
      </NavLink>  
    </div>
  ));


  return (
    <div className="footerContainer">
      <div className="leftContainer" >
      <Chip label={props.language?'EN':"HE"} onClick={handleLanguage} />
      </div>
      <div style={{width:'80%'}}>
        <Header />
      </div>
      <div style={{width:'10%'}}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        {menuItems}
      </Menu>
    </div>
  );
}

export default Footer;
