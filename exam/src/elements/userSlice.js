import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        registered: false,
    },
    reducers: {
        registerUser: state => {
            state.registered = true
        }
    }
});

export const { registerUser } = userSlice.actions

export const selectUserRegistered = state => state.user.registered

export default userSlice.reducer;

