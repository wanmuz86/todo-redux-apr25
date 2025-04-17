// Store - container where the components will get the data from (built from the configuration file)
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'
import loggerMiddleware from '../middleware/loggerMiddleware'

// Code to create the store, based on configuration in todoSlice.js
// The store will be called from the components to have access to the state and actions on the state
export const store = configureStore({
    // You can have multiple reducer
    reducer: {
        todos:todoReducer
    },

    // Other configuration will goes here, eg: middleware
    // Add loggerMiddleware to the default/current middleware
    
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
})