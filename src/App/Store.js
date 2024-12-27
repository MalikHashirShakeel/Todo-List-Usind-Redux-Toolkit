import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/TodoSlice'; // Import the default export

export const store = configureStore({
    reducer: {
        todos: todoReducer, // Assign the slice reducer to a key in the store
    },
});
