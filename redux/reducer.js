import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clinet: { test: false}
}

export const ReducerSlice = createSlice({
    name: "crudapp",
    initialState,
    reducers: {
        changeFunc: (state) => {
            state.clinet.test = state.clinet.test
        }
    }
})

export const { changeFunc } = ReducerSlice.actions
export default ReducerSlice.reducer