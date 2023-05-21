import waitingListStore, { waitingListSlice } from "./waitingListStore";

export const fetchWaitingListData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("/waiting-list/events");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(waitingListSlice.actions.replaceWaitingListEvents(cartData));
    } catch (error) {
      console.log(error);

      //dispatch ui.Actions.showNotification({})
    }
  };
};

export const sendWaitingListData = (tempEvent) => {

  return async (dispatch) => {

    const sendRequest = async () => {
      const response = await fetch(
        "/waiting-list/add-event",
        // http://localhost:7777/
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tempEvent)
        }
      );

      if (!response.ok) {
        throw new Error("Sending Waiting List failed");
      }
    };

    try {
      await sendRequest();
        console.log('success');
      //dispatch.showNotification(success)
    } catch (error) {
      //dispatch.showNotificaton(error)
      console.log('New Error ' + error);
    }
  };
};

export const deleteEventFromWaitingList = (id) => {

  return async (dispatch) => {

    const sendRequest = async () => {
      const response = await fetch(
        "waiting-list/delete-event",
        // http://localhost:7777/
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({eventId:id})
        }
      );

      if (!response.ok) {
        throw new Error("Sending Waiting List failed");
      }
    };

    try {
      await sendRequest();
        console.log('success');
      //dispatch.showNotification(success)
    } catch (error) {
      //dispatch.showNotificaton(error)
      console.log('New Error ' + error);
    }
  };
}
// {  
//     name : "Event at gallery",
//     guestsNum : "60",
//     guestsType : "Good people",
//     date : "2017-01-12",
//     time : "18:00",
//     menu : "Evening Mefanek",
//     eventType : true,
//     price : "6000",
//     menuItems : [
  
//         {
//          id : 0,
//           nameEn: "Water with cucumbers",
//           nameHe: "מים עם מלפפון",
//           type: "drinks",
//           quantity: 1
//         },
//         {
//           id : 1,
//           nameEn: "Lemonade",
//           nameHe: "לימונדה",
//           type: "drinks",
//           quantity: 1
//          },
//           {
//             id: 2,
//             nameEn: "Carpachio with eggplants",
//             nameHe: "קרפצ'יו וחציל",
//             type: "kitchen",
//             quantity: 1
//         }

// ],
//     comments : [{
//             id: 0,
//             topic: "Test",
//             department: "Test Department",
//             description: "Test Description"
//         },
//         {   id: 1,
//             topic: "Test 2",
//             department: "Test Department 2",
//             description: "Test Description 2"
//         }]
//     }