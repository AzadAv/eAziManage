import {configureStore} from '@reduxjs/toolkit';
import eventStore from './eventStore';
import menuStore from './menuStore';
import ordersListStore from './ordersListStore';
import uiSlice from './ui-slice';
import waitingListStore from './waitingListStore';
import manageStore from './manageStore';
const store = configureStore({

    reducer: {
        eventStoreReducer : eventStore,
        waitingListStoreReducer :waitingListStore,
        ordersListStoreReducer : ordersListStore,
        menuStoreReducer : menuStore,
        manageStoreReducer : manageStore,
        uiSliceReducer : uiSlice,
    },
})

export default store;