import { createSlice } from "@reduxjs/toolkit";


const initialState = {
            isDark: false,
            theme: 0
}

const globalSlice = createSlice({
    name:"globalslice",
    initialState,
    reducers:{

    }
})