import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  eventName: "",
  guestsNum: 50,
  guestsType: "",
  orderDate: "2023-12-31",
  orderTime: "13:00",
  menuName: "",
  eventType: null,
  price: 0,
  items: [],
  kitchenItemsAmount: 0,
  bakeriesAmount: 0,
  drinksAmount: 0,
  comments : [],
  
};

export const eventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.eventName = action.payload;
      //    console.log(action.payload);
    },
    setGuestsNumber: (state, action) => {
      // console.log(action.payload);
      state.guestsNum = action.payload;
    },
    changePrice: (state, action) => {
      // console.log(action.payload);
      state.price = action.payload;
    },
    setGuestsType: (state, action) => {
      // console.log(action.payload);
      state.guestsType = action.payload;
    },
    setDate: (state, action) => {
      //   console.log();
      state.orderDate = action.payload;
      //   console.log(state.orderDate);
    },
    setTime: (state, action) => {
      console.log(action.payload);
      state.orderTime = action.payload;
    },
    setMenuName: (state, action) => {
      // console.log(action.payload);
      state.menuName = action.payload;
    },
    setMenuItems: (state, action) => {

    let existingArray = state.items;

    let newArray = action.payload;
    // console.log(newArray);

    state.items = newArray;
    // console.log(state.items);

    // action.payload.map((item)=>{

    //     existingArray.push(item);
  
    // })

    // state.items = existingArray;
    // console.log(state.items);

    },
    setEventType: (state, action) => {
      // console.log(action.payload);
      state.eventType = action.payload;
    },
    addItem: (state, action) => {

        const menuItem = state.items.find((item) => item.nameEn === action.payload.nameEn);
        console.log(menuItem);
        if(menuItem) {

            state.items = state.items.map((item) =>
            item.nameEn === action.payload.nameEn 
            ?{
                ...item,
                quantity: item.quantity+action.payload.quantity,
    
            }
            : item,
            );
            console.log(state.items)

        } else {

            state.items = [...state.items, action.payload];
        }
        
        // console.log(state.items);

      // console.log(action.payload.nameEn);
      // if(state.items.filter((item)=>item.nameEn === action.payload.nameEn)){

      //     state.items.filter((item))
      // }
    //   const tempItem = state.items.find((item) => {
    //    ( item.nameEn === action.payload.nameEn)
    //       ? item.quantity += action.payload.quantity
    //       : "";
    //   });
    //   console.log(tempItem);
    
    },
    changeItemQuantity : (state,action) =>{

      const item = state.items.find((item) => item.nameEn === action.payload.nameEn);
      console.log(item);
      if(item){
      state.items = state.items.map((item) =>
            item.nameEn === action.payload.nameEn 
            ?{
                ...item,
                quantity: action.payload.quantity,
    
            }
            : item,
            );
      
            console.log(state.items);
          }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.price = state.price - action.payload.price;
    },
  
    addComment : (state, action) => {

      console.log(action.payload);
      state.comments = [...state.comments,action.payload];
      console.log(state.comments);
    },

    removeComment : (state,action) => {

      console.log(action.payload.id);
      state.comments = state.comments.filter((comment) => comment.id!==action.payload.id);
    },

    cleanEvent: (state, action) => {
      state.items = [];
      state.price = 0;
    },

  },
});

export const {
  setName,
  setGuestsNumber,
  changePrice,
  setGuestsType,
  setDate,
  setTime,
  setMenuName,
  setMenuItems,
  setEventType,
  addItem,
  changeItemQuantity,
  removeItem,
  cleanStore,
  addComment,
  removeComment
} = eventSlice.actions;
export default eventSlice.reducer;
