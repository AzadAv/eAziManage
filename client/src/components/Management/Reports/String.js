import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import "./String.css"
function String(props) {

    const [amount,amountHandler] = useState(props.rate*props.hours);
  return (
    <Box className='string'>
        {/* <Paper className='column'
         style={{backgroundColor : props.type ? 'green' : 'red'}}>Type</Paper> */}
        <Paper className='column'>{props.name}</Paper>
        <Paper className='column'>{props.hours}</Paper>
        <Paper className='column'>{props.rate}</Paper>
        <Paper className='column'>{amount.toFixed(2)}</Paper>
    </Box>
  )
}

export default String