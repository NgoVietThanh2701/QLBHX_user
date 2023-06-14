import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    carts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const createCart = createAsyncThunk("user/cart", async(cart, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:5000/cart", {
            codeProduct: cart.codeProduct,
            quantity: cart.quantity,
            classify: cart.classify
         });
        return response.data;
    } catch(error) {
        if(error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getCart = createAsyncThunk("user/getCart", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:5000/cart");
        return response.data;
    } catch(error) {
        if(error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCart: (state) => initialState
    },
    extraReducers: (builder) => {
        //post cart
        builder.addCase(createCart.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.carts = action.payload;
        });
        builder.addCase(createCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        // get cart
        builder.addCase(getCart.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.carts = action.payload;
        });
        builder.addCase(getCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const {resetCart} = cartSlice.actions;
export default cartSlice.reducer;
