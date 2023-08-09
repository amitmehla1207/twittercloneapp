import { createSlice } from "@reduxjs/toolkit";


const initialState = {
            isDark: false,
            theme: 0,
            postmodal: false
}

const globalSlice = createSlice({
    name:"globalslice",
    initialState,
    reducers:{
            togglePostModal: (state,action) =>{
                state.postmodal = !state.postmodal
            }
    }
})

export const PostModalStatus = (state) => state.globalslice.postmodal;
export const {togglePostModal} = globalSlice.actions;

export default globalSlice.reducer