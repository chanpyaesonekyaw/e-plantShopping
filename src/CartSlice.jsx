import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if item already exists in cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If item exists, increment its quantity
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    removeItem: (state, action) => {
      // Remove item from cart based on name
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      // Find the item in the cart
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      
      // If item exists and new quantity is valid, update it
      if (item && quantity >= 0) {
        item.quantity = quantity;
        // If quantity is 0, remove the item
        if (quantity === 0) {
          state.items = state.items.filter(item => item.name !== name);
        }
      }
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store configuration
export default CartSlice.reducer;
