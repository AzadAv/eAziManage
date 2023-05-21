import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({

    name : "ui",
    initialState : {
        cartIsVisible : false, 
        notification : '',
        type : null
    },

    reducers : {

        showNotification(state, action) {

            state.type = action.payload.type;
            state.notification = action.payload.notification;
            state.cartIsVisible = true;
        },

        closeNotification(state,action) {

            state.cartIsVisible = false;
            state.notification = action.payload.notification;
            state.type = action.payload.type;
        }
    }
})


export const {

    showNotification,
    closeNotification

} = uiSlice.actions;

export default uiSlice.reducer;