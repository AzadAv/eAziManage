import {configureStore} from '@reduxjs/toolkit';
import eventStore from './eventStore';

const store = configureStore({

    reducer: {eventStoreReducer : eventStore},
})

export default store;