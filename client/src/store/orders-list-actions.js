import { manageStoreSlice } from "./manageStore";
import { ordersListSlice } from "./ordersListStore";

export const fetchProductionListData = () => {

    return async (dispatch) => {

        const fetchData = async () => {

        const response = await fetch("/production-list/events");

        if (!response.ok) {

            throw new Error("Colud not fetch production list data");
        }

        const data = await response.json();

        return data;
        };

        try {

            const cartData = await fetchData();
            dispatch(ordersListSlice.actions.replaceProductionListOrders(cartData));
            // dispatch(manageStoreSlice.actions.fetchEvents(cartData));

        } catch (error) {

            console.log(error);
        }
    };
};

export const sendProductionListData = (tempEvent) => {

    return async (dispatch) => {

        const sendRequest = async () => {

            const response = await fetch(
                "/production-list/add-event",
                {
                    method : "POST",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(tempEvent)
                });

                if(!response.ok) {

                    throw new Error("Sending to production list failed");
                }
        };

        try {

            await sendRequest();
                console.log('success with production list');
        } catch (error) {

            console.log(error);
        }
    }
}

export const editProductionListEvent = (tempEvent) => {

    return async (dispatch) => {

        const editRequest = async () => {

            const response = await fetch(
                "production-list/edit-event",
                {
                    method : "POST",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(tempEvent)
                }
            );
            if(!response.ok){

                throw new Error("Updating event on production list failed");
            }

        };

        try {

            await editRequest();
            console.log("Successfully updated event on production list");
        } catch (error) {

            console.log(error);
        }
    }
}

export const countOrders = (datas)=> {



    return async (dispatch) => {

        const sendRequest = async () => {

            const response = await fetch(
                "/production-list/count-orders",
                {
                    method : "POST",
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({orderDate:datas.day})
                });

                if(!response.ok) {

                    throw new Error("Sending request for counting orders failed");
                }
            
            var data = await response.json();

            return data;
        };

        try {

           var ordersNum =  await sendRequest();
           console.log('success with counting orders ' + ordersNum);

        // return ordersNum;



                
        } catch (error) {

            console.log(error);
        }
    }
    
}