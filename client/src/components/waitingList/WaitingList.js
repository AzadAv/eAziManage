  import React, { useEffect, useState } from "react";
import "./WaitingList.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx/xlsx";
import * as ReactDOM from "react-dom";

import { useSelector, connect, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { removeEvent } from "../../store/waitingListStore";
import Comment from "../NewOrder/Comment";
import { deleteEventFromWaitingList, sendWaitingListData } from "../../store/waiting-list-actions";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import { sendProductionListData } from "../../store/orders-list-actions";
import { showNotification } from "../../store/ui-slice";
import { addOrder } from "../../store/ordersListStore";
let isInitial = true;
function WaitingList(props) {

  const printRef = React.useRef();
  const dispatch = useDispatch();

  const waitingList = useSelector(
    (state) => state.waitingListStoreReducer.events
  );

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    if(localStorage.getItem('isAuth')==='true'){

      setExpanded(isExpanded ? panel : false);
    }
    else {

      dispatch(
        showNotification({
          type: "error",
          notification: "You need to Sign Up",
        })
      );
    }
    
  };

  const [pdfEvent, pdfEventHandler] = useState();
  const [backdropState, backdropStateHandler] = useState();
  const [verify,verifyHandler] = useState(false);
  const [idNum,idNumHandler]=useState(0);

  const createPDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    // const pdf = new jsPDF("portrait","pt","a1");
    const pdf = new jsPDF("p", "in", [14, 8]);
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("print.pdf");
  };

  const printEvent = waitingList
    .filter((event) => event._id === pdfEvent)
    .map((event) => (
      <div
        style={{
          // border:'10px solid black',
          height: "29.7cm",
          width: "21cm",
          backgroundColor:'white'
        }}
      >
        <Accordion
          expanded={true}
          onClick={() => generateMenu(event)}
          // sx={{border:'10px solid black'}}
          ref={printRef}
          id="pdf"
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
             <Typography variant="P" className="event-main-data-item">
                
                <span>{event.guestsNum}</span>
                <span>
                  {props.language ? "איש" : "People"}
                </span>
              </Typography>
              <Typography variant="subtitle1" className="event-main-data-item">
                <span>{props.language ? "אורחים" : "Guests type"}</span>
                {event.guestsType}
              </Typography>
              <Typography variant="subtitle1" className="event-main-data-item">
                <span>{props.language ? "זמן" : "time"}</span>
                {event.time}
              </Typography>
              <Typography
               className="event-main-data-item"
              sx={{fontSize:'25px',fontWeight:'600'}}
              >
              {event.name}
            </Typography>
            <Typography className="event-main-data-item">
              {event.date}
            </Typography>
            <Typography variant="p" className="event-main-data-item">
                {event.menu}
              </Typography>
            <Typography className="event-main-data-item">
              {event.eventType ? (props.language ? "לשבת" : "To Sit") : "TA"}
            </Typography>
            
          </AccordionSummary>
          <AccordionDetails>
            <Box className="event-details-header">
             
            </Box>
            <Box className="event-details-main">
              <TableContainer component={Paper}><Table size="small" aria-label="a dense table">
                  {/* <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        <h3>{props.language ? "כמות" : "Amount"}</h3>
                      </TableCell>
                      <TableCell align="center">
                        <h3>{props.language ? "מוצר" : "Product"}</h3>
                      </TableCell>
                    </TableRow>
                  </TableHead> */}
                  <TableBody>
                    {event.menuItems.map((item) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell className="list-item" align="center">
                          {item.quantity}
                        </TableCell>
                        <TableCell
                          className="list-item"
                          align="center"
                          component="th"
                          scope="row"
                        >
                          {props.language ? item.nameHe : item.nameEn}
                        </TableCell>
                        <TableCell className="list-item" align="center">
                          {/* {item.id+1} */}
                          {/* {idNum+1} */}
                          {/* {idNumHandler(idNum+1)} */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Paper elevation={3} className="comments">
                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                  {props.language ? "הערות" : "Comments"}
                </Typography>
                <Box className="comments-row">
                  <Box className="comments-row-item top">
                    {props.language ? "מחלקה" : "Department"}
                  </Box>
                  <Box className="comments-row-item top">
                    {props.language ? "הערה" : "Comment"}
                  </Box>
                  <Box className="comments-row-item top">
                    {props.language ? "נושא" : "Topic"}
                  </Box>
                </Box>
                {event.comments.map((comment) => (
                  <Box className="comments-row">
                    <Box className="comments-row-item">
                      {comment.department}
                    </Box>
                    <Box className="comments-row-item">
                      {comment.description}
                    </Box>
                    <Box className="comments-row-item">{comment.topic}</Box>
                  </Box>
                ))}
              </Paper>
              
            </Box>
          </AccordionDetails>
        </Accordion>
        <Fab
          size="small"
          color="info"
          aria-label="add"
          onClick={() => {
            backdropStateHandler(!backdropState);
          }}
        >
          <CloseIcon />
        </Fab>
        <Button
          className="footer-button"
          size="large"
          color="primary"
          variant="contained"
          onClick={createPDF}
          style={{float:'right'}}
        >
          {props.language ? "הוריד PDF" : "Download pdf"}
        </Button>
      </div>
    ));

  const [tempArray, tempArrayHandler] = useState([]);
  function generateMenu(event) {
    event.menuItems.map((item) => {
      tempArrayHandler((tempArray) => [
        ...tempArray,
        {
          id: item.id + 1,
          item: item.nameHe,
          quantity: item.quantity,
        },
      ]);
    });
  }
  function generateExcel(items) {
    // const worksheet = XLSX.utils.aoa_to_sheet([sheet]);
    // const workbook = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(tempArray);
    const workbook = { Sheets: { data: ws }, SheetNames: ["data"] };
    // XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "output.xlsx";
    link.click();
  }

  function removeEventFromList(id) {

    if(dispatch(removeEvent(id))) {

      dispatch(deleteEventFromWaitingList(id));
    }
  }

  function sendToProductionList(event) {

    console.log(event);

      const tempEvent = {
      
        orderName: event.name,
        guestsNum: event.guestsNum,
        guestsType: event.guestsType,
        orderDate: event.date,
        orderTime: event.time,
        menuName: event.menu,
        eventType: event.eventType,
        price : event.price,
        items: event.menuItems,
        comments: event.comments,
        ready: false,
      }
      if(
        dispatch(sendProductionListData(tempEvent)) &&
        dispatch(addOrder(tempEvent))
      ){

        dispatch(
          showNotification({
            type: "success",
            notification: "Event added to Production list",
          })
        );
      }
      else {

        dispatch(
          showNotification({
            type: "error",
            notification: "You have empty fields",
          })
        );
      }
}

  return (
    <Paper className="waiting-list" elevation={5}>
      <div 
      className="waiting-list-header">
        {props.language ? "רשימת ההמתנה" : "Waiting List"}
      </div>
      
      {waitingList.map((event) => (
        <Accordion
          expanded={expanded === "panel" + event.name}
          onChange={handleChange("panel" + event.name)}
          id="pdf"
          // ref={printRef}
          onClick={() => {
           
              generateMenu(event);
            pdfEventHandler(event._id);
            
            
          }}
        >

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Button
              className="close-button-box"
              disabled = {localStorage.getItem('isAuth')===null || localStorage.getItem('isAuth')==='false'}
              variant="outlined"
              onClick={() => removeEventFromList(event._id)}
            >
              <HighlightOffOutlinedIcon
                color={localStorage.getItem('isAuth')===true ?"error":"inherit"}
                fontSize="large"
              ></HighlightOffOutlinedIcon>
            </Button>

            <Typography className="event-header-data-item">
              {event.date}
            </Typography>
            <Typography 
            className="event-header-data-item"
            sx ={{fontWeight:'600'}}
            >
              {event.name}
            </Typography>
            <Typography className="event-header-data-item">
              {event.eventType ? (props.language ? "לשבת" : "To Sit") : "TA"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box className="event-details-header">
              <Typography variant="subtitle1" className="event-main-data-item">
                <span>
                  {props.language ? "מספר האורחים " : "Guests number"}
                </span>
                <span>{event.guestsNum}</span>
              </Typography>
              <Typography variant="subtitle1" className="event-main-data-item">
                <span>{props.language ? "סוג האורחים" : "Guests type"}</span>
                {event.guestsType}
              </Typography>
              <Typography variant="subtitle1" className="event-main-data-item">
                <span>{props.language ? "זמן האירוע" : "Event time"}</span>
                {event.time}
              </Typography>
              <Typography variant="subtitle1" className="event-main-data-item">
                <span>{props.language ? "תפריט האירוע" : "Event menu"}</span>
                {event.menu}
              </Typography>
            </Box>
            <Box className="event-details-main"
            
            >
              <TableContainer component={Paper}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "600", textAlign: "center" }}
                >
                  {props.language ? "פריטים" : "Items"}
                </Typography>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        <h3>{props.language ? "כמות" : "Amount"}</h3>
                      </TableCell>
                      <TableCell align="center">
                        <h3>{props.language ? "מוצר" : "Product"}</h3>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {event.menuItems.map((item) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          align="center"
                          sx={{fontWeight:'600'}}>
                          {item.quantity}
                        </TableCell>
                        <TableCell
                          // className="list-itemW"
                          align="center"
                          component="th"
                          scope="row"
                          sx={{fontWeight:'700',fontSize:'22px'}}
                        >
                          {props.language ? item.nameHe : item.nameEn}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Paper elevation={3} className="comments">
                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                  {props.language ? "הערות" : "Comments"}
                </Typography>
                <Box className="comments-row">
                  <Box className="comments-row-item top">
                    {props.language ? "מחלקה" : "Department"}
                  </Box>
                  <Box className="comments-row-item top">
                    {props.language ? "הערה" : "Comment"}
                  </Box>
                  <Box className="comments-row-item top">
                    {props.language ? "נושא" : "Topic"}
                  </Box>
                </Box>
                {event.comments.map((comment) => (
                  <Box className="comments-row">
                    <Box className="comments-row-item">
                      {comment.department}
                    </Box>
                    <Box className="comments-row-item">
                      {comment.description}
                    </Box>
                    <Box className="comments-row-item">{comment.topic}</Box>
                  </Box>
                ))}
              </Paper>
              <Paper elevation={3} className="price-container">
                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                  {props.language ? "מחיר" : "Price"}
                </Typography>
                <Typography variant="h5">{event.price} ILS</Typography>
              </Paper>
            </Box>
          </AccordionDetails>
          <Box className="event-details-footer">
            <Button
              className="footer-button"
              size="large"
              color="primary"
              variant="contained"
              onClick = {()=> 
                (backdropStateHandler(true),verifyHandler(true))
              }
            >
              {props.language ? "שלח להכנה" : "Send to production"}
            </Button>

            <Button
              className="footer-button"
              size="large"
              color="primary"
              variant="contained"
              onClick={() =>
                ( backdropStateHandler(true),verifyHandler(false))
                }
            >
              {props.language ? "הוריד PDF" : "Download pdf"}
            </Button>

            <Button
              className="footer-button"
              size="large"
              color="primary"
              variant="contained"
              disabled={true}
            >
              {props.language ? "שלח למוזיאון" : "Send to museum"}
            </Button>

            <Button
              className="footer-button"
              size="large"
              color="primary"
              variant="contained"
              onClick={() => generateExcel(event.menuItems)}
            >
              {props.language ? "הוריד אקסל" : "Download Excel"}
            </Button>
          </Box>
        <Box className={backdropState ? "backdropW" : "none"}>
        {verify ? "": printEvent}
        {verify ? 
        (
        <Box className="verify-box" sx={{marginTop:'20vh'}}>
    <Typography variant="h5">
      {props.language
        ? " אתה בטוח שרוצה לשלוח את האירוע  לרשימת ההכנה ? "
        : "Are you sure that you want to send Event to Production List"}
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      <Button variant="outlined" color="success"
       onClick={()=>(sendToProductionList(event),backdropStateHandler(false))}
       >
        {props.language ? "כן" : "Yes"}
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={() => backdropStateHandler(false)}
      >
        {props.language ? "לא" : "No"}
      </Button>
    </Box>
        </Box>
        ) : ""}
      </Box>  
        </Accordion>
      ))}
    </Paper>
  );
}

export default WaitingList;
