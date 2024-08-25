import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { editProductionListEvent } from "./orders-list-actions";

// parseInt(event.target.value.start.split("-")[0]);
const initialState = {
  orders: [
    {
      // id: 0,
      orderName: "Test",
      guestsNum: 50,
      guestsType: "students",
      orderDate: "2023-05-10",
      orderTime: "08:00",
      menuName: "Afternoon Ashir",
      eventType: true,
      price : 0,
      items: [
        {
          id: 0,
          nameEn: "Lemonade",
          nameHe: "לימונדה",
          type: "drinks",
          quantity: 1,
          ready: false,
        },
        {
          id: 1,
          nameEn: "Cheese kishes",
          nameHe: "קיש גבינות",
          type: "bakery",
          quantity: 1,
          ready: false,
        },
        {
          id: 2,
          nameEn: "Pashtidot",
          nameHe: "מיני פשטידות",
          type: "bakery",
          quantity: 1,
          ready: false,
        },
      ],
      comments: [
        {
          id: 0,
          topic: "Test",
          department: "Test",
          description: "Test",
        },
      ],
      ready: false,
    },
  ],
};

export const ordersListSlice = createSlice({
  name: "Orders List",
  initialState,
  reducers: {

    replaceProductionListOrders : (state,action) => {

      state.orders = action.payload;
    },
    addOrder: (state, action) => {
      const tempItems = action.payload.items.map((item) => ({
        ...item,
        ready: false,
      }));

      const tempOrder = {
        id: action.payload.id,
        orderName: action.payload.orderName,
        guestsNum: action.payload.guestsNum,
        guestsType: action.payload.guestsType,
        orderDate: action.payload.orderDate,
        orderTime: action.payload.orderTime,
        menuName: action.payload.menuName,
        eventType: action.payload.eventType,
        price : action.payload.price,
        items: tempItems,
        comments: action.payload.comments,
        ready: false,
      };

      console.log(tempOrder);

      state.orders = [...state.orders, tempOrder];
    },
    updateOrder: (state, action) => {

      // state.orders[action.payload.orderName].ready = !state.orders[action.payload.name].ready;
  
      const tempEvent = state.orders.find((order)=> 
      
      order._id === action.payload.id);

      // console.log(tempEvent.orderName);

      if (tempEvent) {

       state.orders =  state.orders.map((order) => 
        
        order.orderName === tempEvent.orderName ?
        {...order,ready : true} : order
        )

        // const dbEvent = state.orders

        // dispatch(editProductionListEvent())
  
      }

    },
    closeOrder: (state, action) => {},
    removeOrder: (state, action) => {},
    updateItemStatus: (state, action) => {

    const TempItems = state.orders.find((order) =>
    
        // order._id === action.payload.orderName
        order._id === action.payload.id
    );

    console.log(TempItems.orderName);

    const tempItem = TempItems.items.find((item) => item.nameEn === action.payload.name);
    console.log(tempItem.nameEn);
    // console.log(action.payload.id);

      if (tempItem) {

        state.orders.map((order) =>
        order.items =  order.items.map((item) =>
            item.nameEn === tempItem.nameEn
              ? {
                  ...item,
                  ready: !item.ready,
                }
              : item
          )
        );
        console.log(
                  state.orders.map((order) => order.items.map((item) => item))
                );
      } else {
        console.log("Error");
      }
      
    },
    countOrdersByDate : (state,action) => {

      let ordersNum = 0;

      // console.log(action.payload.day);
      state.orders.map((order)=>{

          console.log(order.orderDate);
      if(order.orderDate === action.payload.day){

        console.log('found');
        ordersNum = ordersNum+1;
      }
      })

      console.log(ordersNum);
      return ordersNum;
    },
  }
});

export const { addOrder, updateOrder, removeOrder, updateItemStatus, countOrdersByDate } =
  ordersListSlice.actions;

export default ordersListSlice.reducer;
