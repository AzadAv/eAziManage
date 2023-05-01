import React from "react";
import "./WaitingList.css";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper";
function WaitingList(props) {

  const printRef = React.useRef();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const dummyEvent = {
    name: "חגיגות פסח",
    date: "04/04/2023",
    eventType: true ,
    guestsNum: "100",
    guestsType: "שגררות",
    time: "20:00",
    menuType: "ערב מפנק",
    menu :[
      {itemName : "Example",
       itemAmount : "0"},
      {itemName : "Example1",
       itemAmount : "1"}
    ]
  };

  const createPDF = async () =>{

    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');


    const pdf = new jsPDF("landscape","pt","a2");
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
    // const data = await document.querySelector("#pdf");
    
    
    // pdf.html(data).then(() => {

    //  pdf.save("order_label.pdf");
    // })
 };
  return (
    <Box className="waiting-list">
      <Typography align="center" variant="body1">רשימת ההמתנה</Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        id="pdf"
        ref={printRef}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" className="event-header-data-item">
            {dummyEvent.date}
          </Typography>
          <Typography variant="h5" className="event-header-data-item">
           <p style={{fontFamily:'Vujahday Script'}}> {dummyEvent.name} </p>
          </Typography>

          <Typography variant="h6" className="event-header-data-item">
            {dummyEvent.eventType ? (props.language? "לשבת":'To Sit'):"TA"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="event-details-header">
            <Typography variant="subtitle1" className="event-main-data-item">
              <span style={{fontWeight:'600',fontSize:'20px'}}>{props.language ? "מספר האורחים ":"Guests number"}</span>
              <span>{dummyEvent.guestsNum}</span> 
            </Typography>
            <Typography variant="subtitle1" className="event-main-data-item">
              <span style={{fontWeight:'600',fontSize:'20px'}}>{props.language ? "סוג האורחים" : "Guests type"}</span>
              {dummyEvent.guestsType}
            </Typography>
            <Typography variant="subtitle1" className="event-main-data-item">
              <span style={{fontWeight:'600',fontSize:'20px'}}>{props.language ? "זמן האירוע" : "Event time"}</span>
              {dummyEvent.time}
            </Typography>
            <Typography variant="subtitle1" className="event-main-data-item">
              <span style={{fontWeight:'600',fontSize:'20px'}}>{props.language ? "תפריט האירוע" : "Event menu"}</span>
              {dummyEvent.menuType}
            </Typography>
          </Box>
          <Box className="event-details-main">
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
            <TableCell align="center">
                <h3>{props.language? 'מוצר' : 'Product'}</h3>
              </TableCell>
              <TableCell align="center">
                <h3>{props.language ? 'כמות': 'Amount'}</h3>
              </TableCell>
              
            </TableRow>
          </TableHead>
        <TableBody >
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">Drink Name</TableCell>
              <TableCell align="center">Drink Amount</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">Food Name</TableCell>
              <TableCell align="center">Food Amount</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">Bakery Name</TableCell>
              <TableCell align="center">Bakery Amount</TableCell>
            </TableRow>
        </TableBody>
          </Table>
          </TableContainer>
          <h1>5000 ILS</h1>
          </Box>
          <Box className="event-details-footer">
            <Button
              className="footer-button"
              size="large"
              color="primary"
              variant="contained"
            >
              {props.language ? 'שלח לרשימת ההכנה':'Send to preparing List'}
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
              שינוי
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default WaitingList;
