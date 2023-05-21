import React, { useState, useRef } from "react";
import "./NewOrderForm.css";
import CloseIcon from "@mui/icons-material/Close";
import Fab from "@mui/material/Fab";
import { Button, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { FormControl } from "@mui/material";
import Paper from "@mui/material/Paper";
import {InputLabel,Select,MenuItem} from "@mui/material";

function NewOrderForm(props) {
  const nameRef = useRef();
  const guestsNumRef = useRef();
  const guestsTypeRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  
  let inputsOk = (nameRef.current != '') &&
                 (guestsNumRef.current != 0) &&
                 (guestsTypeRef.current != undefined) &&
                 (dateRef.current != '') &&
                 (timeRef.current != '');

  // console.log(inputsOk);
  function setInputs() {
    console.log(nameRef.current.value);
    props.orderName(nameRef.current.value);

    console.log(guestsNumRef.current.value);
    props.guestsNumber(guestsNumRef.current.value);

    console.log(guestsTypeRef.current.value);
    props.guestsType(guestsTypeRef.current.value);

    console.log(dateRef.current.value);
    props.orderDate(dateRef.current.value);

    console.log(timeRef.current.value);
    props.orderTime(timeRef.current.value);

  }
  return (
    <div>
      <form>
        <Paper className="new-order-info">
          <Fab
            className="fab"
            size="small"
            color="info"
            aria-label="add"
            onClick={() => {
              props.backdropHandler(!props.backdropState);
            }}
          >
            <CloseIcon />
          </Fab>
          <TextField
            className="input"
            label={props.language ? "שם האירוע" : "Name of Order"}
            inputRef={nameRef}
            variant="outlined"
            required={true}
            onChange={setInputs}
          />
          <TextField
          className="input"
          id="standard-number"
          inputRef={guestsNumRef}
          label=" מספר האורחים"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={setInputs}
          />
          <FormControl className="input">
          {/* <InputLabel id="demo-simple-select-label">סוג הקהל</InputLabel> */}
          <TextField
            select
            // labelId="demo-simple-select-label"
            id="demo-simple-select"
            inputRef={guestsTypeRef}
            label="סוג הקהל"
            onChange={setInputs}
          >
            <MenuItem value={'שגררות'}>שגררות</MenuItem>
            <MenuItem value={'חיילים'}>חיילים</MenuItem>
          </TextField>
          </FormControl>
          <InputLabel id="demo">
          {props.language ? "תאריך" : "Date"}
          </InputLabel>
          <TextField
            className="input"
            type="date"
            variant="outlined"
            inputRef={dateRef}
            onChange={setInputs}
          />
          <InputLabel id="demo">
          {props.language ? "זמן" : "Time"}
          </InputLabel>
          <TextField
            select
            className="input"
            variant="outlined"
            inputRef={timeRef}
            onChange={setInputs}
          >
            <MenuItem value={'morning'}>בוקר</MenuItem>
            <MenuItem value={'afternoon'}>צהריים</MenuItem>
            <MenuItem value={'evening'}>ערב</MenuItem>
          </TextField>
          <InputLabel id="demo">
          {props.language ? "סוג האירוע" : "Event type"}
          </InputLabel>
          <TextField
            select
            className="input"
            variant="outlined"
            onChange={setInputs}
          >
            <MenuItem value={'classic'}>קלאסי</MenuItem>
            <MenuItem value={'mefanek'}>מפנק</MenuItem>
            <MenuItem value={'wealthy'}>עשיר</MenuItem>
          </TextField>
          <Button
              variant="contained"
              color="success"
              size="large"
              type="submit"
              disabled={!inputsOk}
              >
              {props.language ? "פתח" : "Open"}
          </Button>
        </Paper>
      </form>
    </div>
  );
}

export default NewOrderForm;
