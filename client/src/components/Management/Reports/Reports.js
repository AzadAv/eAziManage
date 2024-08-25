import { Box,TextField,MenuItem } from '@mui/material'
import React from 'react'
import './Reports.css'
import Salary from './Salary/Salary'
import ProductCost from './ProductCost/ProductCost'
import { useSelector } from 'react-redux'
function Reports(props) {

  return (
    <Box 
    className='management-reports'>
        <Box className='report-head'>
            {/* <TextField
                select
                // error={emptyField.guestsType}
                // labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={props.language ? "בחר אירוע" : "Choose event"}
                // value={'Event'}
                SelectProps={{
                renderValue: (value) => value,
                }}>
                <MenuItem value={"שגררות"}>Event</MenuItem>
            </TextField>
            <TextField
                select
                // error={emptyField.guestsType}
                // labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={props.language ? 'בחר דו"ח ' : "Choose Report"}
                // value={'Event'}
                SelectProps={{
                renderValue: (value) => value,
                }}>
                <MenuItem value={"שגררות"}>Event</MenuItem>
            </TextField> */}
        </Box>
        <Box className='report-main'>
                {/* <Salary /> */}
                <ProductCost language={props.language} />
        </Box>
        <Box className='report-food'>

        </Box>
        
    </Box>
  )
}

export default Reports