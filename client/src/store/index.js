import {configureStore} from '@reduxjs/toolkit';
import eventStore from './eventStore';
import menuStore from './menuStore';
import ordersListStore from './ordersListStore';
import uiSlice from './ui-slice';
import waitingListStore from './waitingListStore';
const store = configureStore({

    reducer: {
        eventStoreReducer : eventStore,
        waitingListStoreReducer :waitingListStore,
        ordersListStoreReducer : ordersListStore,
        menuStoreReducer : menuStore,
        uiSliceReducer : uiSlice,
    },
})

export default store;