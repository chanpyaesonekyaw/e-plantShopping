import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
    // Define the root reducer object
    reducer: {
        // 'cart' is the name of the slice in the store, and it's managed by cartReducer
        cart: cartReducer,
    },
    // Add middleware configuration if needed
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['persist/PERSIST'],
            },
        }),
    // Enable Redux DevTools Extension for better debugging
    devTools: process.env.NODE_ENV !== 'production',
});

// Optional: Add store subscription for logging or persistence
store.subscribe(() => {
    const state = store.getState();
    // You can add logging or persistence logic here
    console.log('Current state:', state);
});

export default store; // Export the store for use in the app
