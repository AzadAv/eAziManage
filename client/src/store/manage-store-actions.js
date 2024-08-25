import { manageStoreSlice } from "./manageStore";
import {menuSlice} from "./menuStore";

//ORDERS
export const fetchEventsList = () => {

    return async (dispatch) => {

        const fetchEventsListData = async () => {

            const response = await fetch("/management/events");

        if (!response.ok) {

            throw new Error("Could not fetch management events list");
        }

        const data = await response.json();

            return data;
        }

        try {

            const managementEventList = await fetchEventsListData();
            // console.log("Manage store actions "+ managementEventList);
            dispatch(manageStoreSlice.actions.fetchEvents(managementEventList));
        } catch (error) {

            console.log(error);
        }
    };
};

export const sendEventsList = () => {}

//MENU ITEMS
export const fetchMenuItems = () => {

    return async (dispatch) => {

        const fetchItems = async () => {

            const response = await fetch("/management/menu-items");

            if(!response.ok) {

                throw new Error("Could not fetch menu items");
            }

            const data = await response.json();

            return data;
        };

        try {


            const menuItems = await fetchItems();
            // dispatch(menuSlice.actions.replaceMenuItems(menuItems));
            dispatch(manageStoreSlice.actions.fetchMenuItems(menuItems));
        }  catch (error) {

            console.log(error);
        }
}
}

export const sendMenuItems = (product) => {

    return async (dispatch) => {

        const sendRequest = async () => {
          const response = await fetch(
            "/management/add-item",
            // http://localhost:7777/
            {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(product)
            }
          );
    
          if (!response.ok) {
            throw new Error("Sending Product to db failed");
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

export const editMenuItemServer = (product) => {

    return async (dispatch) => {

    const sendRequest = async () => {
        const response = await fetch(
          "/management/edit-item",
          // http://localhost:7777/
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          }
        );
  
        if (!response.ok) {
          throw new Error("Editing menu item failed");
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

export const deleteMenuItem = (id) => {

    return async (dispatch) => {

        const sendRequest = async () => {
          const response = await fetch(
            "management/delete-item",
            // http://localhost:7777/
            {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({menuItemId:id})
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

//MENUS
export const fetchMenus = () => {

    return async (dispatch) => {

        const fetchMenusList = async () => {

            const response = await fetch("/management/menus");

            if(!response.ok) {

                throw new Error("Could not fetch Menus");
            }

            const data = await response.json();

            return data;
        };

        try {


            const menus = await fetchMenusList();
            // dispatch(menuSlice.actions.replaceMenuItems(menuItems));
            dispatch(manageStoreSlice.actions.fetchMenusFromDb(menus));
        }  catch (error) {

            console.log(error);
        }
    }
}

export const sendMenus = () => {}


export const deleteMenu = (id) => {

    return async (dispatch) => {

        const deleteRequest = async () => {

            const response = await fetch(

                "management/delete-menu",
                {
                    method : "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify({menuId:id})
                }
            );

            if (!response.ok) {

                throw new Error("Deleting menu failed");
            }
        };

        try {

            await deleteRequest();
            console.log("Deleted Menu successfully");
        } catch (error) {

            console.log('Error on deleting menu '+ error );
        }
    }
}
