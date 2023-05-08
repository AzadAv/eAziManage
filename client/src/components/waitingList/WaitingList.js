import React from "react";
import "./WaitingList.css";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useSelector, connect, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { removeEvent } from "../../store/waitingListStore";
import Comment from "../NewOrder/Comment";
function WaitingList(props) {

  const printRef = React.useRef();
  const dispatch = useDispatch();
  const waitingList = useSelector((state) => state.waitingListStoreReducer.events);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const createPDF = async () =>{

    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');


    const pdf = new jsPDF("landscape","pt","a2");
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      ((imgProperties.height) * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
    // const data = await document.querySelector("#pdf");
    
    
    // pdf.html(data).then(() => {

    //  pdf.save("order_label.pdf");
    // })
 };

  return (
    <Paper className="waiting-list" elevation={5}>
      <Typography className="waiting-list-header" align="center" variant="h4">
        {props.language ? "רשימת ההמתנה":"Waiting List"}</Typography>
    {waitingList.map((event)=>(

      <Accordion
        expanded={expanded === "panel"+event.id}
        onChange={handleChange("panel"+event.id)}
        id="pdf"
        ref={printRef}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Button className="close-button-box" onClick={()=>dispatch(removeEvent(event.id))}>
            <HighlightOffOutlinedIcon color="error" fontSize="large"
            ></HighlightOffOutlinedIcon>
          </Button>
          
          <Typography
            className="event-header-data-item">
            {event.orderDate}
          </Typography>
          <Typography 
          className="event-header-data-item">
           {event.eventName}
          </Typography>

          <Typography
          className="event-header-data-item">
            {event.eventType ? (props.language? "לשבת":'To Sit'):"TA"}
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Box className="event-details-header">
            <Typography 
            variant="subtitle1" 
            className="event-main-data-item">
              <span>
                {props.language ? "מספר האורחים ":"Guests number"}
              </span>
              <span>{event.guestsNum}</span> 
            </Typography>
            <Typography variant="subtitle1" className="event-main-data-item">
              <span
               >{props.language ? "סוג האורחים" : "Guests type"}</span>
              {event.guestsType}
            </Typography>
            <Typography variant="subtitle1" className="event-main-data-item">
              <span
              >{props.language ? "זמן האירוע" : "Event time"}</span>
              {event.orderTime}
            </Typography>
            <Typography variant="subtitle1" className="event-main-data-item">
              <span 
              >{props.language ? "תפריט האירוע" : "Event menu"}</span>
              {event.menuName}
            </Typography>
          </Box>
          <Box className="event-details-main">
          
          <TableContainer component={Paper}>
          <Typography variant="h5"
          sx={{fontWeight:'600',textAlign:'center'}}>{props.language? "פריטים":"Items"}</Typography>  
          <Table 
          size="small"
           aria-label="a dense table">
          <TableHead>
            <TableRow>
            <TableCell align="center">
                <h3>{props.language ? 'כמות': 'Amount'}</h3>
              </TableCell>
            <TableCell align="center">
                <h3>{props.language? 'מוצר' : 'Product'}</h3>
              </TableCell>
            </TableRow>
          </TableHead>
        <TableBody >
            
            {event.items.map((item)=>(
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{item.quantity}</TableCell>
              <TableCell align="center" component="th" scope="row">{props.language ? item.nameHe : item.nameEn}</TableCell>
            </TableRow>
            ))}
        </TableBody>
          </Table>
          </TableContainer>
          <Paper elevation={3} className="comments">
              <Typography variant="h5"
              sx={{fontWeight:'600'}}>{props.language? "הערות":"Comments"}</Typography>
            <Box className="comments-row">
              <Box className="comments-row-item top">{props.language ? "מחלקה": "Department"}</Box>
              <Box className="comments-row-item top">{props.language ? "הערה": "Comment"}</Box>
              <Box className="comments-row-item top">{props.language ? "נושא": "Topic"}</Box>
            </Box>  
            {event.comments.map((comment)=>(
              <Box className="comments-row">
              <Box className="comments-row-item">{comment.department}</Box>  
              <Box className="comments-row-item">{comment.description}</Box>
              <Box className="comments-row-item">{comment.topic}</Box>
            </Box>  
            ))}
          </Paper>
          <Paper elevation={3} className="price-container">
            <Typography variant="h5"
              sx={{fontWeight:'600'}}>{props.language? "מחיר":"Price"}</Typography>
              <Typography variant="h5">
              {event.price} ILS
              </Typography>
          </Paper>
          
          </Box>
          <Box className="event-details-footer">
            <Button
              className="footer-button"
              size="large"
              color="primary"
              variant="contained"
            >
              {props.language ? 'שלח להכנה':'Send to production'}
            </Button>
            
            <Button
              className="footer-button"
              size="large"
              color="primary"
              variant="contained"
              onClick={createPDF}
            >
              {props.language ? "הוריד PDF" : "Download pdf"}
            </Button>
            <Button
              className="footer-button"
              size="large"
              color="primary"
              variant="contained"
            >
              {props.language ? "שלח למוזיאון" : "Send to museum"}
            </Button>
            <Button
              className="footer-button"
              size="large"
              color="primary"
              variant="contained"
            >
              {props.language ? "שנה" : "Edit"}
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
      ))}
    </Paper>
  );
}

export default WaitingList;
