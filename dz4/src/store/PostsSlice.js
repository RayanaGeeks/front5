import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
    name: "postSlice",
    initialState: {},
    reducers: {
        addUserAction: async (user) => {
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(user)
            }
            await fetch("https://jsonplaceholder.typicode.com/users", options)
        }
    }
});

export const { addUserAction } = postSlice.actions
export default postSlice.reducer;
