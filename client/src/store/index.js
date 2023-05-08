import {configureStore} from '@reduxjs/toolkit';
import eventStore from './eventStore';
import ordersListStore from './ordersListStore';
import waitingListStore from './waitingListStore';
const store = configureStore({

    reducer: {
        eventStoreReducer : eventStore,
        waitingListStoreReducer :waitingListStore,
        ordersListStoreReducer : ordersListStore
    },
})

export default store;