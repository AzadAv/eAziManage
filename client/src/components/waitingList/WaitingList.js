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
let isInitial = true;
function WaitingList(props) {
  const printRef = React.useRef();

  const dispatch = useDispatch();
  const waitingList = useSelector(
    (state) => state.waitingListStoreReducer.events
  );

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [pdfEvent, pdfEventHandler] = useState();
  const [backdropState, backdropStateHandler] = useState();

  console.log(pdfEvent);

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

    // for (var i=0; i <= 2;i++){

    //   pdf.addPage(pdfWidth.toString(), pdfHeight.toString());

    // }
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
              <Typography className="event-main-data-item">
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
                          {item.id+1}
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

  // console.log(tempArray);
  return (
    <Paper className="waiting-list" elevation={5}>
      <Typography className="waiting-list-header" align="center" variant="h4">
        {props.language ? "רשימת ההמתנה" : "Waiting List"}
      </Typography>
      <Box className={backdropState ? "backdropW" : "none"}>
        {printEvent}</Box>
      {waitingList.map((event) => (
        <Accordion
          expanded={expanded === "panel" + event._id}
          onChange={handleChange("panel" + event._id)}
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
              onClick={() => removeEventFromList(event._id)}
            >
              <HighlightOffOutlinedIcon
                color="error"
                fontSize="large"
              ></HighlightOffOutlinedIcon>
            </Button>

            <Typography className="event-header-data-item">
              {event.date}
            </Typography>
            <Typography className="event-header-data-item">
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
            <Box className="event-details-main">
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
            >
              {props.language ? "שלח להכנה" : "Send to production"}
            </Button>

            <Button
              className="footer-button"
              size="large"
              color="primary"
              variant="contained"
              onClick={() => backdropStateHandler(true)}
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
        </Accordion>
      ))}
    </Paper>
  );
}

export default WaitingList;
