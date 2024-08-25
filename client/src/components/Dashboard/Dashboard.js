import React, { useCallback, useEffect, useState } from "react";
import "./Dashboard.css";
import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { countOrdersByDate } from "../../store/ordersListStore";
import { countOrders } from "../../store/orders-list-actions";
import { NavLink } from "react-router-dom";
function DashboardBox(props) {
  const [backgroundColor, backgroundHandler] = useState();

  useEffect(() => {
    if (props.eventsNum === 0) {
      backgroundHandler("white");
    } else if (props.eventsNum > 0 && props.eventsNum <= 3) {
      backgroundHandler(" rgb(159, 255, 159) ");
    } else if (props.eventsNum > 3) {
      backgroundHandler("rgb(83, 228, 83)");
    } else {
      backgroundHandler("black");
    }
  }, [props]);
  return (
    <Paper
      className="day"
      key={props.id}
      elevation={4}
      sx={{ backgroundColor: backgroundColor }}
    >
      <Typography sx={{ fontWeight: "600" }} variant="h5">
        {props.language ? props.nameHe : props.nameEn}
      </Typography>
      <Typography sx={{ fontWeight: "500" }} variant="h6">
        {props.date}
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography sx={{ fontWeight: "600" }}>
          {props.language ? ": מספר האירועים" : "Number of Events :"}
        </Typography>
        <Typography variant="h5">{props.eventsNum}</Typography>
      </Box>
    </Paper>
  );
}
function Dashboard(props) {
  const dispatch = useDispatch();

  const [allSundays, allSundaysHandler] = useState([]);
  const [chosenWeek, chosenWeekHandler] = useState();
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = today.getMonth().toString();
  const nextMonth = (today.getMonth() + 1).toString();
  const currentDay = today.getDate();

  const dayDigit = today.getDay();
  const lessDays = dayDigit == 0 ? 5 : dayDigit - 1;
  const firstDayOfWeek = new Date(
    new Date(today).setDate(today.getDate() - lessDays - 1)
  );
  const secondDay = new Date(
    new Date(firstDayOfWeek).setDate(firstDayOfWeek.getDate() + 1)
  );
  const thirdDay = new Date(
    new Date(firstDayOfWeek).setDate(firstDayOfWeek.getDate() + 2)
  );
  const forthDay = new Date(
    new Date(firstDayOfWeek).setDate(firstDayOfWeek.getDate() + 3)
  );
  const fifthDay = new Date(
    new Date(firstDayOfWeek).setDate(firstDayOfWeek.getDate() + 4)
  );
  const lastDayOfWeek = new Date(
    new Date(firstDayOfWeek).setDate(firstDayOfWeek.getDate() + 5)
  );
  //All sundays for current and next month
  if (allSundays.length === 0) {
    for (let day = 1; day <= 31; day++) {
      const currentMonthDate = new Date(year, month, day);
      const currentMonthDateEnd = new Date(year, nextMonth, day + 5);
      // console.log("Today's date "+currentDay);

      //For running from today's date
      if (day >= currentDay) {
        // Check if the current day is a Sunday
        if (currentMonthDate.getDay() === 0) {
          allSundays.push({
            start:
              currentMonthDate.getFullYear().toString() +
              "-" +
              (currentMonthDate.getMonth().toString() < 10 ? '0' : '')+
              (currentMonthDate.getMonth() + 1).toString() +
              "-" +
              (currentMonthDate.getDate().toString() < 10 ? '0' : '')+
              currentMonthDate.getDate().toString(),
            end:
              currentMonthDateEnd.getFullYear().toString() +
              "-" +
              (currentMonthDateEnd.getMonth().toString() < 10 ? '0' : '')+
              (currentMonthDateEnd.getMonth() + 1).toString() +
              "-" +
              (currentMonthDateEnd.getDate().toString() < 10 ? '0' : '')+
              currentMonthDateEnd.getDate().toLocaleString(),
          });
        }
      }

      const nextMonthDate = new Date(year, nextMonth, day);
      const nextMonthDateEnd = new Date(year, nextMonth, day + 5);
      // console.log(nextMonthDateEnd.getDate());
      // Check if the current day is a Sunday
      if (nextMonthDate.getDay() === 0) {
        allSundays.push({
          start:
            nextMonthDate.getFullYear().toString() +
            "-" +
            (nextMonthDate.getMonth().toString() < 10 ? '0' : '')+
            (nextMonthDate.getMonth() + 1).toString() +
            "-" +
            (nextMonthDate.getDate().toString() < 10 ? '0' : '')+
            nextMonthDate.getDate().toString(),
          end:
            nextMonthDateEnd.getFullYear().toString() +
            "-" +
            (nextMonthDateEnd.getMonth().toString() < 10 ? '0' : '')+
            (nextMonthDateEnd.getMonth() + 1).toString() +
            "-" +
            (nextMonthDateEnd.getDate().toString() < 10 ? '0' : '')+
            nextMonthDateEnd.getDate().toLocaleString(),
        });
      }
    }
  }

  const [weekDates, weekDatesHandler] = useState({
    sunday:
      firstDayOfWeek.getFullYear().toString() +
      "-" + 
      (firstDayOfWeek.getMonth().toString() < 10 ? '0' : '')+
      (firstDayOfWeek.getMonth() + 1).toString() +
      "-" +
      (firstDayOfWeek.getDate().toString() < 10 ? '0' : '')+
      firstDayOfWeek.getDate().toString(),
    monday:
      secondDay.getFullYear().toString() +
      "-" +
      (secondDay.getMonth().toString() < 10 ? '0' : '')+
      (secondDay.getMonth() + 1).toString() +
      "-" +
      (secondDay.getDate().toString() < 10 ? '0' : '')+
      secondDay.getDate().toString(),
    tuesday:
      thirdDay.getFullYear().toString() +
      "-" +
      (thirdDay.getMonth().toString() < 10 ? '0' : '')+
      (thirdDay.getMonth() + 1).toString() +
      "-" +
      (thirdDay.getDate().toString() < 10 ? '0' : '')+
      thirdDay.getDate().toString(),
    wendesday:
      forthDay.getFullYear().toString() +
      "-" +
      (forthDay.getMonth().toString() < 10 ? '0' : '')+
      (forthDay.getMonth() + 1).toString() +
      "-" +
      (forthDay.getDate().toString() < 10 ? '0' : '')+
      forthDay.getDate().toString(),
    thursday:
      fifthDay.getFullYear().toString() +
      "-" +
      (fifthDay.getMonth().toString() < 10 ? '0' : '')+
      (fifthDay.getMonth() + 1).toString() + "-" +
      (fifthDay.getDate().toString() < 10 ? '0' : '')+
      fifthDay.getDate().toString(),
    friday:
      lastDayOfWeek.getFullYear().toString() +
      "-" +
      (lastDayOfWeek.getMonth().toString() < 10 ? '0' : '')+
      (lastDayOfWeek.getMonth() + 1).toString() +
      "-" +
      (lastDayOfWeek.getDate().toString() < 10 ? '0' : '')+
      lastDayOfWeek.getDate().toString(),
  });
  const [events,eventsHandler]=useState(useSelector(
      (state) => state.ordersListStoreReducer.orders
    ));


  // weekDatesHandler()
  const [week, weekHandler] = useState([
    {
      id: 0,
      nameHe: "יום ראשון",
      nameEn: "Sunday",
      date: weekDates.sunday,
      eventsNum: countEvents(weekDates.sunday),
    },
    {
      id: 1,
      nameHe: "יום שני",
      nameEn: "Monday",
      date: weekDates.monday,
      eventsNum: countEvents(weekDates.monday),
    },
    {
      id: 2,
      nameHe: "יום שלישי",
      nameEn: "Tuesday",
      date: weekDates.tuesday,
      eventsNum: countEvents(weekDates.tuesday),
    },
    {
      id: 3,
      nameHe: "יום רביעי",
      nameEn: "Wendesday",
      date: weekDates.wendesday,
      eventsNum: countEvents(weekDates.wendesday),
    },
    {
      id: 4,
      nameHe: "יום חמישי",
      nameEn: "Thursday",
      date: weekDates.thursday,
      eventsNum: countEvents(weekDates.thursday),
    },
    {
      id: 5,
      nameHe: "יום שישי",
      nameEn: "Friday",
      date: weekDates.friday,
      eventsNum: countEvents(weekDates.friday),
    },
  ]);

  function setWeek(event) {
    chosenWeekHandler(event.target.value);
    const year = parseInt(event.target.value.start.split("-")[0]);
    var month = parseInt(event.target.value.start.split("-")[1]);
    var day = parseInt(event.target.value.start.split("-")[2]);

    const endYear = parseInt(event.target.value.end.split("-")[0]);
    const endMonth = parseInt(event.target.value.end.split("-")[1]);
    const endDay = parseInt(event.target.value.end.split("-")[2]);

    console.log("Year " + year);
    console.log("Month " + month);
    console.log("Day " + day);
    var sunday = new Date(year,month ,day);
    var sundayString = sunday.getFullYear().toString() +
    "-" +
    (sunday.getMonth().toString() < 10 ? '0' : '')+
    sunday.getMonth().toString() +
    "-" +
    (sunday.getDate().toString() < 10 ? '0' : '')+
    sunday.getDate().toLocaleString();

    var monday = new Date(year, month, day + 1);
    var mondayString = monday.getFullYear().toString() +
    "-" +
    (monday.getMonth().toString() < 10 ? '0' : '')+
    monday.getMonth().toString() +
    "-" +
    (monday.getDate().toString() < 10 ? '0' : '')+
    monday.getDate().toLocaleString();


    var tuesday = new Date(year, month, day + 2);
    var tuesdayString = tuesday.getFullYear().toString() +
    "-" +
    (tuesday.getMonth().toString() < 10 ? '0' : '')+
    tuesday.getMonth().toString() +
    "-" +
    (tuesday.getDate().toString() < 10 ? '0' : '')+
    tuesday.getDate().toLocaleString();
    var wendesday = new Date(year, month, day + 3);
    var wendesdayString = wendesday.getFullYear().toString() +
    "-" +
    (wendesday.getMonth().toString() < 10 ? '0' : '')+
    wendesday.getMonth().toString() +
    "-" +
    (wendesday.getDate().toString() < 10 ? '0' : '')+
    wendesday.getDate().toLocaleString()
    var thursday = new Date(year, month, day + 4);
    var thursdayString = thursday.getFullYear().toString() +
    "-" +
    (thursday.getMonth().toString() < 10 ? '0' : '')+
    thursday.getMonth().toString() +
    "-" +
    (thursday.getDate().toString() < 10 ? '0' : '')+
    thursday.getDate().toLocaleString();
    var friday = new Date(endYear, endMonth, endDay);
    var fridayString = 
    friday.getFullYear().toString() +
    "-" +
    (friday.getMonth().toString() < 10 ? '0' : '')+
    friday.getMonth().toString() +
    "-" +
    (friday.getDate().toString() < 10 ? '0' : '')+
    friday.getDate().toLocaleString()

    weekHandler([
      {
        id: 0,
        nameHe: "יום ראשון",
        nameEn: "Sunday",
        date:  sundayString,
        eventsNum: countEvents(sundayString),
      },
      {
        id: 1,
        nameHe: "יום שני",
        nameEn: "Monday",
        date: mondayString,
        eventsNum: countEvents(mondayString),
      },
      {
        id: 2,
        nameHe: "יום שלישי",
        nameEn: "Tuesday",
        date: tuesdayString,
        eventsNum: countEvents(tuesdayString),
      },
      {
        id: 3,
        nameHe: "יום רביעי",
        nameEn: "Wendesday",
        date: wendesdayString,
        eventsNum: countEvents(wendesdayString),
      },
      {
        id: 4,
        nameHe: "יום חמישי",
        nameEn: "Thursday",
        date: thursdayString,
        eventsNum: countEvents(thursdayString),
      },
      {
        id: 5,
        nameHe: "יום שישי",
        nameEn: "Friday",
        date: fridayString,
        eventsNum: countEvents(fridayString),
      },
    ]);
  }

  // .getMonth().toString() < 10 ? '0' : ''


  function countEvents(date){

    let counter= 0;
    console.log(date);
    events.map((event)=>{

      // console.log(event.orderDate ===date);
      if(event.orderDate === date && event.ready ===false){

        counter = counter +1;
        console.log(counter);
      }

    console.log("Counted "+counter);
    
    })

   return counter; 
  }

  console.log(week);
  return (
    <Box className="dashboard">
      <Paper className="dashboard-head">
        <Typography variant="h5">
          {props.language ? " אירועים" : "Events "}
        </Typography>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: props.language ? "row-reverse" : "row",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6">
            {props.language ? "בין" : "from"}
          </Typography>
          <TextField
            select
            sx={{ width: "14vw" }}
            onChange={setWeek}
            value={
              chosenWeek
                ? chosenWeek.start
                : props.language
                ? "בחר שבוע"
                : "Choose the Week"
            }
            SelectProps={{
              renderValue: (value) => value,
            }}
          >
            {allSundays.map((renderWeek) => (
              <MenuItem value={renderWeek}>{renderWeek.start}</MenuItem>
            ))}
          </TextField>
          <Typography variant="h6">
            {props.language ? " לבין" : " until "}
          </Typography>
          <Paper className="until-date" elevation={3}>
            {chosenWeek ? chosenWeek.end : ""}
          </Paper>
        </Box>
      </Paper>
      <Paper
        className="dashboard-main"
        // sx={{ flexDirection: props.language ? "row-reverse" : "row" }}
      >
        {week.map((weekDay) => (
          <DashboardBox
            id={weekDay.id}
            date={weekDay.date}
            nameEn={weekDay.nameEn}
            nameHe={weekDay.nameHe}
            eventsNum={weekDay.eventsNum}
            language={props.language}
          />
        ))}
      </Paper>
      <Box className="dashboard-footer">

      
      <NavLink
        to={"/production"}
        style={{ textDecoration: "none", width: "15%" }}
        
        >
        <Button
          variant="outlined"
          color="primary"
          sx={{
            width: "20vw",
            height : "50%",
            borderRadius: "70px",
            margin: "2vw",
          }}
        >
          <span className="dashboard-button-text">
             {props.language ? "לרשימת ההכנה": "To Production List"} 
          </span>
          
        </Button>
      </NavLink> 
      </Box>
    </Box>
  );
}

export default Dashboard;
