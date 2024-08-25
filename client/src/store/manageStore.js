import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      // id: 0,
      orderName: "Test",
      guestsNum: 50,
      guestsType: "students",
      orderDate: "2023-05-10",
      orderTime: "08:00",
      menuName: "Afternoon Ashir",
      eventType: true,
      price: 0,
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
  menus: [
    {
      menuNameEn: "Classic Morning",
      menuNameHe: "בוקר קלאסי",
      pricePerPerson: 60,
      items: [
        {
          id: 0,
          nameEn: "Water with cucumbers",
          nameHe: "מים עם מלפפון",
          type: "drinks",
          quantity: 1,
        },
        {
          id: 1,
          nameEn: "Lemonade",
          nameHe: "לימונדה",
          type: "drinks",
          quantity: 1,
        },
        {
          id: 2,
          nameEn: "Stand of hot drinks",
          nameHe: "עמדת שתייה חמה",
          type: "drinks",
          quantity: 1,
        },
        {
          id: 3,
          nameEn: "Morning bakery",
          nameHe: "מאפי בוקר",
          type: "bakery",
          quantity: 1,
        },
        {
          id: 4,
          nameEn: "Rogalach mountain",
          nameHe: "מגדל רוגלך",
          type: "bakery",
          quantity: 1,
        },
        {
          id: 5,
          nameEn: "Cruncie pies",
          nameHe: "עוגות קראנץ",
          type: "bakery",
          quantity: 1,
        },
        {
          id: 6,
          nameEn: "Pies mountain",
          nameHe: "מגדל עוגיות צד",
          type: "bakery",
          quantity: 1,
        },
        {
          id: 7,
          nameEn: "Breads basket",
          nameHe: "סלסלת לחמים",
          type: "bakery",
          quantity: 1,
        },
        {
          id: 8,
          nameEn: "Crackers and salty bakery",
          nameHe: "קרקרים ועוגיות מלוחות",
          type: "bakery",
          quantity: 1,
        },
        {
          id: 9,
          nameEn: "Plate of vegetables",
          nameHe: "פלטת ירקות",
          type: "kitchen",
          quantity: 1,
        },
        {
          id: 10,
          nameEn: "Muzlie",
          nameHe: "מוזלי",
          type: "kitchen",
          quantity: 1,
        },
        {
          id: 11,
          nameEn: "Addings",
          nameHe: "תוספות",
          type: "kitchen",
          quantity: 1,
        },
      ],
    },
  ],
  menuItems: [
    {
      id: 0,
      nameEn: "Water with cucumbers",
      nameHe: "מים עם מלפפון",
      type: "drinks",
    },
    {
      id: 1,
      nameEn: "Lemonade",
      nameHe: "לימונדה",
      type: "drinks",
    },
    {
      id: 2,
      nameEn: "Stand of hot drinks",
      nameHe: "עמדת שתייה חמה",
      type: "drinks",
    },
    {
      id: 3,
      nameEn: "Red Wine",
      nameHe: "יין אדום",
      type: "drinks",
    },
    {
      id: 4,
      nameEn: "White Wine",
      nameHe: "יין לבן",
      type: "drinks",
    },
    {
      id: 5,
      nameEn: "Beer",
      nameHe: "בירה",
      type: "drinks",
      quantity: 1,
    },
    {
      id: 6,
      nameEn: "Orange juice",
      nameHe: "מיץ תפוזים",
      type: "drinks",
      quantity: 1,
    },
    {
      id: 7,
      nameEn: "Espresso Bar",
      nameHe: "עמדת אספרסו בר",
      type: "drinks",
      quantity: 1,
    },
    {
      id: 8,
      nameEn: "Tray of half sandwiches",
      nameHe: "מגש של חצי כריכים",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 9,
      nameEn: "Tray of mini sandwiches",
      nameHe: "מגש של מיני סנדוויצ'ים",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 10,
      nameEn: "Plate of vegetables",
      nameHe: "פלטת ירקות",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 11,
      nameEn: "Muzlie",
      nameHe: "מוזלי",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 12,
      nameEn: "Addings",
      nameHe: "תוספות",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 13,
      nameEn: "Cheeses plate",
      nameHe: "פלטת גבינות",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 14,
      nameEn: "Plate of smoked salmon",
      nameHe: "מגש סלמון מעושן",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 15,
      nameEn: "Red Shakshouka",
      nameHe: "שקשוקה אדומה",
      type: "kitchen",
      quantity: 1,
    },

    {
      id: 16,
      nameEn: "Capresa salad",
      nameHe: "סלט קפרזה",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 17,
      nameEn: "Carpachio with eggplants",
      nameHe: "קרפצ'יו וחציל",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 18,
      nameEn: "Israeli vegetable salad",
      nameHe: "סלט ירקות ישראלי",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 19,
      nameEn: "Plate of season fruits",
      nameHe: "פלטת פירות העונה",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 20,
      nameEn: "Kinoa salad",
      nameHe: "סלט קינואה",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 21,
      nameEn: "Greek salad",
      nameHe: "סלט יווני",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 22,
      nameEn: "Lettuce salad",
      nameHe: "סלט חסות",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 23,
      nameEn: "Pasta with cream cheese and mushrooms",
      nameHe: "פסטה ברוטב שמנת ופטריות",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 24,
      nameEn: "Mini Italian Lasagna",
      nameHe: "מיני לזניה איטלקית",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 25,
      nameEn: "Potatoes",
      nameHe: "פלחי תפוחי אדמה ",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 26,
      nameEn: "Noodles prepared with vegetables and tofu",
      nameHe: "איטריות מוקפצות עם ירקות וטופו",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 27,
      nameEn: "Tortillas",
      nameHe: "טורטיות",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 28,
      nameEn: "Green Salad",
      nameHe: "סלט ירוק",
      type: "kitchen",
      quantity: 1,
    },

    {
      id: 29,
      nameEn: "Grape leaves",
      nameHe: "עלי גפן",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 30,
      nameEn: "Salmon on fire",
      nameHe: "שיפודי סלמון",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 31,
      nameEn: "Knafsim",
      nameHe: "קנאפסים במבחר טעמים",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 32,
      nameEn: "Olives in olive oil,kornishons and artishok",
      nameHe: "זיטים בשמן זית, קורנישונים וארטישוק",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 33,
      nameEn: "Tortalini in souce",
      nameHe: "טורטליני ברוטב",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 34,
      nameEn: "Potatoes and Zukini",
      nameHe: "לביבות תפוח אדמה וזוקיני",
      type: "kitchen",
      quantity: 1,
    },
    //ctrl + shift + L
    {
      id: 35,
      nameEn: "Cheese plate",
      nameHe: "פלטת גבינות",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 36,
      nameEn: "Pickled Onion",
      nameHe: "בצל כבוש",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 37,
      nameEn: "Roasted Pepper",
      nameHe: "פלפל קלוי",
      type: "kitchen",
      quantity: 1,
    },
    {
      id: 38,
      nameEn: "Morning bakery",
      nameHe: "מאפי בוקר",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 39,
      nameEn: "Rogalach mountain",
      nameHe: "מגדל רוגלך",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 40,
      nameEn: "Cruncie pies",
      nameHe: "עוגות קראנץ",
      type: "bakery",
      tags: ["bakery", "ready"],
    },
    {
      id: 41,
      nameEn: "Pies mountain",
      nameHe: "מגדל עוגיות צד",
      type: "bakery",
      tags: ["bakery", "ready"],
    },
    {
      id: 42,
      nameEn: "Breads basket",
      nameHe: "סלסלת לחמים",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 43,
      nameEn: "Brownie pieces",
      nameHe: "חיתוכיות בראוני",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 44,
      nameEn: "Puffs",
      nameHe: "פחזניות",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 45,
      nameEn: "Cheesecake with different flawors",
      nameHe: "עוגות פס גבינה בטעמים",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 46,
      nameEn: "Tray of salty bakeries",
      nameHe: "מגש מאפים מלוחים",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 47,
      nameEn: "Tray of sweet bakeries",
      nameHe: "מגש מאפים מתוקים",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 48,
      nameEn: "Salty puffs",
      nameHe: "פחזניות מלוחות",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 49,
      nameEn: "Mini eclairs, truffles with chocolate",
      nameHe: "מיני אקלרים, טראפלס שוקולד",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 50,
      nameEn: "Tartalet cakes",
      nameHe: "עוגיות טארטלט",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 51,
      nameEn: "Crackers and salty bakery",
      nameHe: "קרקרים ועוגיות מלוחות",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 52,
      nameEn: "Pashtidot",
      nameHe: "מיני פשטידות",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 53,
      nameEn: "Zucchini balls",
      nameHe: "לביבות זוקיני",
      type: "bakery",
      quantity: 1,
    },
    {
      id: 54,
      nameEn: "Kishes",
      nameHe: "קישים",
      type: "bakery",
      quantity: 1,
    },
  ],
};

export const manageStoreSlice = createSlice({
  name: "Management",
  initialState,
  reducers: {
    fetchEvents: (state, action) => {
      state.events = action.payload;
    },
    fetchMenusFromDb: (state, action) => {
      console.log(action.payload);
      state.menus = action.payload;
    },
    addMenu: (state,action) => {

        console.log(action.payload);
        state.menus = [...state.menus, action.payload];
    },
    deleteMenuFromRedux: (state, action) => {
      state.menus = state.menus.filter((menu) => menu._id !== action.payload);
    },
    fetchMenuItems: (state, action) => {
      state.menuItems = action.payload;
    },
    addMenuItem: (state, action) => {
      state.menuItems = [...state.menuItems, action.payload];
    },
    editMenuItem : (state,action) => {

      // console.log(action.payload.id)
      const item = state.menuItems.find((item) =>item._id===action.payload.menuItemId);
      console.log("Found item "+ item.nameEn);

      if(item){

        state.menuItems.map((item)=>
        item._id === action.payload.menuItemId
        ?{
          _id : action.payload.menuItemId,
          nameEn : action.payload.nameEn,
          nameHe : action.payload.nameHe,
          quantity : action.payload.quantity,
          cost : action.payload.cost,
          type : action.payload.type
        } :
        item,
        );
        console.log("Updated Item");
      }
      else {

        console.log("Cant find the item");
      }
      console.log(state.menuItems);
    },
    deleteItem: (state, action) => {
      state.menuItems = state.menuItems.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const {
  fetchEvents,
  fetchMenusFromDb,
  deleteMenuFromRedux,
  fetchMenuItems,
  addMenuItem,
  editMenuItem,
  deleteItem
} = manageStoreSlice.actions;

export default manageStoreSlice.reducer;
