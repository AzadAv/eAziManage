import React from "react";
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
import { Paper, Box, Button, Typography } from "@mui/material";

function Landing(props) {
  return (
    <Box className="landing-box">
      <Box className="icons-box">
            
            <Box className="icon "
            // sx ={{borderColor:'#b2102f'}}
            >
               <CupFour />
            </Box>
            <Box className="icon "
            // sx ={{borderColor:'#af52bf'}}
            >
                <Glass />
            </Box>
            <Box className="icon"
            // sx ={{borderColor:'#1c54b2'}}
            >
                <Balloons />
            </Box>
            <Box className="icon"
            //  sx ={{borderColor:' #618833'}}
             >
               <FoodMeal />
            </Box>
            <Box className="icon"
            // sx ={{borderColor:'#ffcd38'}}
            >
               <Croissant />
            </Box>
           
        </Box>
      <Box className="landing-secondary">
      <NavLink to={"/new-order"} style={{textDecoration:'none',width: "40%",}}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontSize: "25px",
              fontWeight: "700",
              width: "100%",
              borderRadius: "50px",
              margin: '2vw'
            }}
          >
            Try It !
          </Button>
      </NavLink>
        
        <Button
          variant="outlined"
          color="error"
          sx={{
            fontSize: "25px",
            fontWeight: "600",
            width: "40%",
            borderRadius: "50px",
            margin: '2vw'
          }}
        >
          Sign In
        </Button>
      </Box>
      <Box className="icons-box">
          
            <Box className="icon"
            // sx ={{borderColor:'#ffcd38'}}
            >
               <FaceStraight />
            </Box>

            <Box className="icon"
            //  sx ={{borderColor:'#1c54b2'}}
             >
                <Server />
            </Box>

           <Box className="icon"
          //  sx ={{borderColor:'#b2102f'}}
           >
               <Heart />
            </Box>

            
            <Box className="icon"
            // sx ={{borderColor:'#618833'}}
            >
               <EditPen />
            </Box>
            
            
            <Box className="icon"
            // sx ={{borderColor:'#af52bf'}}
            >
               <Calender />
            </Box>
      </Box>
      <Box className="landing-header">
        <Typography variant="h4"
         sx = {{ fontFamily:'Comic Sans MS', fontWeight:'700'}}
         >
            {/* <span style={{color:'#1976D2'}}>EatAnu</span> Events Management System */}
            Alliance of Food and Tech
        </Typography>
      </Box>
    </Box>
  );
}

export default Landing;
