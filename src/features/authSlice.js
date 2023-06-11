import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isError: false,
    isSuccuess: false,
    isLoading: false,
    message: ""
}

export const loginUser = createAsyncThunk("user/loginUser", async(user, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/login', {
            email: user.email,
            password: user.password
        });
        return response.data;
    } catch(error) {
        if(error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getMeUser = createAsyncThunk("user/getMeUser", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:5000/me");
        return response.data;
    } catch(error) {
        if(error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const logOutUser = createAsyncThunk("user/logout", async () => {
    await axios.delete('http://localhost:5000/logout');
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        //auth login
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccuess = true;
            state.user = action.payload
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        // get me
        builder.addCase(getMeUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMeUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccuess = true;
            state.user = action.payload;
        });
        builder.addCase(getMeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;
