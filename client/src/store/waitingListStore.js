import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { sendWaitingListData } from "./waiting-list-actions";



const initialState = {

    
// name
// "Test"
// guestsNum
// "Test num"
// guestsType
// "Test guests type"
// date
// "Test date"
// time
// "Test time"
// menu
// "Test menu"
// eventType
// "Test type"
// price
// "Test price"

// menuItems
// Array
    events : [
        {
         name:"יום הראשון שלי בארומה",
         guestsNum: 50,
         guestsType: "students",
         date: "2017-01-12",
         time: "13:00",
         menu: "Afternoon Ashir",
         eventType:true,
         price:10000,
         menuItems:[
            {
                id : 0,
                nameEn: "Lemonade",
                nameHe: "לימונדה",
                type: 'drinks',
                quantity: 1
            },
            {
                id : 1,
                nameEn: 'Cheese kishes',
                nameHe: 'קיש גבינות',
                type: 'bakery',
                quantity: 1
            },
            {
                id:2,
                nameEn: 'Pashtidot',
               nameHe: 'מיני פשטידות',
               type: 'bakery',
               quantity: 1
            }, 
         ],
        comments : [{
            id: 0,
            topic: "Test",
            department: "Test Department",
            description: "Test Description"
        },
        {   id: 1,
            topic: "Test 2",
            department: "Test Department 2",
            description: "Test Description 2"
        }
    ]}
    ],
}

export const waitingListSlice = createSlice({

    name: "Waiting List",
    initialState,
    reducers : {

        replaceWaitingListEvents : (state,action) => {

            state.events = action.payload;
            // console.log(state.events);

        },
        addEvent : (state,action) => {

          
            state.events = [...state.events,action.payload];
            // console.log(state.events);
        },
        updateEvent : (state,action ) =>{},
        removeEvent: (state,action) => {

            console.log(action.payload);
            state.events = state.events.filter((event) => event._id !== action.payload);
        },
        sendEventByEmail: (state,action) => {},
        cleanEventList : (state,action) => {}
    }
})

export const {

    addEvent,
    updateEvent,
    removeEvent,
    sendEventByEmail,
    cleanEventList
} = waitingListSlice.actions;

export default waitingListSlice.reducer;