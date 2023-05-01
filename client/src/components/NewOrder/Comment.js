import { Box, Paper,Button } from '@mui/material'
import React from 'react'
import "./Comment.css"
import { useSelector, connect, useDispatch } from "react-redux";
import { removeComment } from '../../store/eventStore';

function Comment(props) {

  const dispatch = useDispatch();
  return (
    <Paper className='comment-box' elevation={3}>

        <Box className='item'>{props.description}</Box>
        
        <Box className='item'>{props.department}</Box>
        <Box className='item'>{props.topic}</Box>
        <Box className='item'>
           {props.button ? (
           <Button variant="outlined" color="warning"
           onClick={()=>dispatch(removeComment({id:props.id}))}>
            Delete</Button>):""} 
        </Box>
    </Paper>
  )
}

export default Comment