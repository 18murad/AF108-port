import { createSlice } from "@reduxjs/toolkit";


const basketSlice = createSlice ({
    name: "basket",
    initialState: [],
    reducers: {
        addToBasket: (state, action) => {
            const existing = state.find(item => item.id === action.payload.id);
            if (existing) {
                existing.count +=1;
            }else {
                state.push({ ...action.payload, count: 1});
            }
        },
        removeFromBasket: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;