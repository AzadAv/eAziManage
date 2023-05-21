import React, {useEffect} from 'react'
import './Notification.css'
import Alert from '@mui/material/Alert';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { useSelector, connect, useDispatch } from "react-redux";
import { closeNotification } from '../../store/ui-slice';
function Notification(props) {

    const dispatch = useDispatch();

   
    const type  = useSelector((state) => state.uiSliceReducer.type);
    const notification = useSelector((state) => state.uiSliceReducer.notification);
    const isVisible = useSelector((state) => state.uiSliceReducer.cartIsVisible);
    

    useEffect(() => {

        const timer = setTimeout(() => {
          dispatch(closeNotification({

            notification: notification,
            type: type
          }));
        }, 5000);
    
        return () => {
          clearTimeout(timer);
        };
      }, [isVisible]);
  return (
    <Box className='notification'>
        <Collapse in={isVisible}>
            <Alert
            action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    dispatch(closeNotification({

                        notification: notification,
                        type: type
                      }));
                }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={{ mb: 2 }}
             severity={type ? type : 'success'}
            >
                {notification}
            </Alert>  
        </Collapse>
    </Box>
    
  )
}

export default Notification