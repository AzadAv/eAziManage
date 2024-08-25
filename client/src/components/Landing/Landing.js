import React, { useState,useEffect } from "react";
import "./Landing.css";
import Balloons from "./Icons/Balloons";
import Glass from "./Icons/Glass";
import Server from "./Icons/Server";
import ClockTime from "./Icons/ClockTime";
import CupFour from "./Icons/CupFour";
import FoodMeal from "./Icons/FoodMeal";
import Croissant from "./Icons/Croissant";
import FaceStraight from "./Icons/FaceStraight";
import EditPen from "./Icons/EditPen";
import EventManager from "./Icons/EventManager";
import Heart from "./Icons/Heart";
import Calender from "./Icons/Calender";

import { NavLink } from "react-router-dom";
import { Paper, Box, Button, Typography, TextField } from "@mui/material";
import { showNotification } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

function Landing(props) {

  const dispatch = useDispatch();
  const [backdrop, backdropHandler] = useState(false);
  const [username, userNameHandler] = useState("");
  const [password, passwordHandler] = useState("");

  const buttons = [
    
    {
      link : "/dashboard",
      color : "secondary",
      enText : "Dashboard",
      heText : "לוח האירועים"
    },
    {
      link : "/new-order",
      color : "primary",
      enText : "New Order",
      heText : "אירוע חדש",
    },
    {
      link : "/waiting-list",
      color : "warning",
      enText : "Waiting List",
      heText : "רשימת ההמתנה"
    },
    {
      link : "/production",
      color : "success",
      enText : "Production List",
      heText : "רשימת ההכנה"
    }];


  const [usersList,usersListHandler] = useState([
    {
      id : 0,
      username: 'Azad_Akhundov',
      password : 'Aydin_aqil1995',
      role : 'admin',

    },
    {
      id : 1,
      username: "Alon_Per",
      password : "1111111",
      role : 'landlord'
    },
    {
      id : 2,
      username : 'Idan_Ifargan',
      password : "2222222",
      role : 'landlord'
    },
    {
      id : 3,
      username : 'Maor_Elimelech',
      password : "33333333",
      role : 'manager'
    },
    {
      id : 4,
      username : 'Niran_Algerabli',
      password : '4444444',
      role : 'shef'
    }
  ])

  localStorage.setItem('isAuth',true);
  localStorage.setItem('Azad_Akhundov','Aydin_aqil1995');
  localStorage.setItem('Idan_Ifargan','2222222');
  localStorage.setItem('Maor_Elimelech','3333333');

  function logInFunction(user){

        if(localStorage.getItem(user.name)===user.password){

          localStorage.setItem('isAuth',true);
          dispatch(
            showNotification({
              type: "success",
              notification: "Hi there!",
            })
          );
          backdropHandler(false);
        } else {

          localStorage.setItem('isAuth',false);
          dispatch(
            showNotification({
              type: "error",
              notification: "You need to Sign Up!",
            })
          );
        }

        console.log(localStorage.getItem('isAuth'));
  }
  const logIn = (
    <Box className="login-box">
      <Typography variant="h3">{props.language ? "התחבר" : "Sign In"}</Typography>
      <TextField
        name="username"
        type="text"
        value={username}
        label={props.language ? "שם משתמש" : "Username"}
        onChange={(event) => userNameHandler(event.target.value)}
        sx={{ width: "50%" }}
      ></TextField>
      <TextField
        name="password"
        type="password"
        value={password}
        label={props.language ? "סיסמא" : "Password"}
        onChange={(event) => passwordHandler(event.target.value)}
        sx={{ width: "50%" }}
      ></TextField>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Button variant="contained" color="success"
        onClick={()=>logInFunction({name : username,password:password})}>
          {props.language ? "התחבר" : "Sign In"}
        </Button>
        <Button variant="contained" color="error"
        onClick={()=>backdropHandler(false)}>
          {props.language ? "בטל" : "Cancel"}
        </Button>
      </Box>
    </Box>
  );

  useEffect(()=>{

    setTimeout(()=> {

      localStorage.setItem('isAuth',false);
      // 1*60*60*
    },  1*60*60*1000);
  }, []);

  return (
    <Box className="landing-box">
      <Box className={backdrop ? "backdrop" : "none"}>{logIn}</Box>
      <Box className="icons-box">
        <Box
          className="icon "
          // sx ={{borderColor:'#b2102f'}}
        >
          <CupFour />
        </Box>
        <Box
          className="icon "
          // sx ={{borderColor:'#af52bf'}}
        >
          <Glass />
        </Box>
        <Box
          className="icon"
          // sx ={{borderColor:'#1c54b2'}}
        >
          <Balloons />
        </Box>
        <Box
          className="icon"
          //  sx ={{borderColor:' #618833'}}
        >
          <FoodMeal />
        </Box>
        <Box
          className="icon"
          // sx ={{borderColor:'#ffcd38'}}
        >
          <Croissant />
        </Box>
      </Box>
      <Box className="landing-secondary">
        
        {localStorage.getItem('isAuth')==='true'? 
        <Box sx={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>

        {buttons.map((button)=>(

         <NavLink
        to={button.link}
        style={{ textDecoration: "none", width: "15%" }}
        
        >
        <Button
          variant="outlined"
          color={button.color}
          sx={{
            width: "100%",
            // height : "50%",
            borderRadius: "70px",
            margin: "2vw",
          }}
        >
          <span className="landing-button-text">
             {props.language ? button.heText : button.enText} 
          </span>
          
        </Button>
      </NavLink> 
      ))}

      </Box>
        :""}
        

        {localStorage.getItem('isAuth')=== 'true' ? "" :
         <Button
          className="landing-button"
          variant="outlined"
          color="error"
          sx={{
            // width: "100%",
            // height : "50%",
            borderRadius: "70px",
            margin: "2vw",
          }}
          onClick={()=>backdropHandler(true)}
        >
          <span className="landing-button-text">
          {props.language ? "התחבר":"Sign In"}
          </span>
          
        </Button> }
        
      </Box>
      <Box className="icons-box">
        <Box
          className="icon"
          // sx ={{borderColor:'#ffcd38'}}
        >
          <FaceStraight />
        </Box>

        <Box
          className="icon"
          //  sx ={{borderColor:'#1c54b2'}}
        >
          <Server />
        </Box>

        <Box
          className="icon"
          //  sx ={{borderColor:'#b2102f'}}
        >
          <Heart />
        </Box>

        <Box
          className="icon"
          // sx ={{borderColor:'#618833'}}
        >
          <EditPen />
        </Box>

        <Box
          className="icon"
          // sx ={{borderColor:'#af52bf'}}
        >
          <Calender />
        </Box>
      </Box>
      <Box className="landing-header">
        <Typography
          variant="h4"
          sx={{ fontFamily: "Comic Sans MS", fontWeight: "700" }}
        >
          {/* <span style={{color:'#1976D2'}}>EatAnu</span> Events Management System */}
          Alliance of Food and Tech
        </Typography>
      </Box>
    </Box>
  );
}

export default Landing;
