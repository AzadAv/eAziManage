import { Box, Button, Paper } from '@mui/material'
import React from 'react'
import './EatAnu.css'
function eatAnu() {

  const eatAnuItems = [
    {
      name:'Pizza',
      description:'MyPizza',
      price : '100',
      ingredients : ['tomato','pepper','meat'],
      img : "image-link"
  },
  {
    name:'Pizza',
    description:'MyPizza',
    price : '100',
    ingredients : ['tomato','pepper','meat'],
    img : "image-link"
},
{
  name:'Pizza',
  description:'MyPizza',
  price : '100',
  ingredients : ['tomato','pepper','meat'],
  img : "image-link"
},
{
  name:'Pizza',
  description:'MyPizza',
  price : '100',
  ingredients : ['tomato','pepper','meat'],
  img : "image-link"
},
{
  name:'Pizza',
  description:'MyPizza',
  price : '100',
  ingredients : ['tomato','pepper','meat'],
  img : "image-link"
},
{
  name:'Pizza',
  description:'MyPizza',
  price : '100',
  ingredients : ['tomato','pepper','meat'],
  img : "image-link"
},
  {
      name:'Pizza',
      description:'MyPizza',
      price : '100',
      ingredients : ['tomato','pepper','meat'],
      img : "image-link"
  }]
  return (
    <Box  className='eatAnu' elevation={3}>
        
        <div className='eatAnu-items'>
          {eatAnuItems.map((item)=>(
            <Box className='eatAnu-item'>
               <Box style={{height:'20vh'}}>{item.img}</Box>
               <Box className='dataHolder'>
                  <Box>{item.name}</Box>  
                  <Box>{item.description}</Box>
               </Box>
              
              <Button>Add</Button>
              {/* <Paper>{item.ingredients}</Paper> */}
         
            </Box>
))}
          
        </div>
        <Box className='eatAnu-checkout'>
          checkout
        </Box>
        <Box>
          
        </Box>
    </Box>
  )
}

export default eatAnu