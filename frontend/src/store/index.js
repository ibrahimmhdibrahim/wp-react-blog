import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {
    category: "",
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload.category;
        },
    }
});

const store = configureStore({
    reducer: categorySlice.reducer
});

export const categoryActions = categorySlice.actions;
export default store;