import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {

    events : [
        {
         id: 0,   
         eventName:"יום הראשון שלי בארומה",
         guestsNum: 50,
         guestsType: "students",
         orderDate: "2017-01-12",
         orderTime: "13:00",
         menuName: "Afternoon Ashir",
         eventType:true,
         price:10000,
         items:[
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
        }]}
    ]
}

export const waitingListSlice = createSlice({

    name: "Waiting List",
    initialState,
    reducers : {

        addEvent : (state,action ) => {

            // console.log(action.payload);
            state.events = [...state.events,action.payload];
        },
        updateEvent : (state,action ) =>{},
        removeEvent: (state,action) => {

            console.log(action.payload);
            state.events = state.events.filter((event) => event.id !== action.payload);
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