import { Box, Paper, TextField } from '@mui/material'
import React from 'react'
import "./Salary.css"

import String from '../String'
function Salary() {

    const BrutoStrings = [
        {
            type : true,
            name : 'Salary',
            rate : 45,
            hours : 106.22
        },
        {
            type : true,
            name : '125%',
            rate : 0,
            hours : 0
        },
        {
            type : true,
            name : '150%',
            rate : 0,
            hours : 0
        },
        {
            type : true,
            name : 'Transport',
            rate : 225,
            hours : 1
        },
        {
            type : true,
            name : 'Bonus',
            rate : 106.22,
            hours : 3
        },
        {
            type : true,
            name : 'Hefreshim',
            rate : 0.5,
            hours : 45
        }]

        let salary = 0;
        const brutoSalary = BrutoStrings.map((string)=>{

            
           return salary += string.hours*string.rate;
        })
  return (
    <Box className='reports-salary'>
        <Box className='top'>
            <Paper className='top-box'>
                
                <TextField id="outlined-basic" 
                label="Work shifts" variant="outlined" />
            </Paper>
            <Paper className='top-box'>
                
                <TextField id="outlined-basic" label="Shfits more than 7 hours" variant="outlined" />
            </Paper>
            <Paper className='top-box'>
               
                <TextField id="outlined-basic" label=" 125 % hours" variant="outlined" />
            </Paper>
            <Paper className='top-box'>
               
               <TextField id="outlined-basic" label="150 % hours" variant="outlined" />
            </Paper>
            <Paper className='top-box'>
                
                <TextField id="outlined-basic" label="Normal hours" variant="outlined" />
            </Paper>    
        </Box>
        <Box className='center'>
            <Paper className='bruto'>
                <String type={true} name={"Name"} hours={'Hours'} rate={"Rate"} temp={'Amount'}/>
                {BrutoStrings.map((string)=>(
                    <String type={string.type} name={string.name} hours={string.hours} rate={string.rate} temp={'Amount'}/>
                ))}
                <Paper sx={{width:'100%'}}>{salary.toFixed(2)}</Paper>
            </Paper>
            <Paper className='taxes'>
                taxes
            </Paper>
            
        </Box>
        <Box className='bottom'>
            <Paper className='neto'>
                neto
            </Paper>
        </Box>
        
    </Box>
  )
}

export default Salary