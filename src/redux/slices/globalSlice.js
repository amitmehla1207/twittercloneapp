import { createSlice } from "@reduxjs/toolkit";


const initialState = {
            isDark: false,
            featureBox: 1,
            postmodal: false,
            userContolMenu: false,
            topbar: false,
            trans_overlay:false,
            avatar: "avatar.png"
}

const globalSlice = createSlice({
    name:"globalslice",
    initialState,
    reducers:{
            togglePostModal: (state,action) =>{
                state.postmodal = !state.postmodal
            },
            toggleUserControlMenu: (state,action) =>{
                state.userContolMenu = !state.userContolMenu
                state.trans_overlay = !state.trans_overlay
            },
            toggleTopBar: (state,action) =>{
                state.topbar = !state.topbar
            },
            toggleFeatureBox: (state,action) =>{
                state.featureBox = 0
            },
    }
})

export const PostModalStatus = (state) => state.globalslice.postmodal;
export const userContolMenuStatus = (state) => state.globalslice.userContolMenu;
export const Overlay = (state) => state.globalslice.trans_overlay;
export const featureBox = (state) => state.globalslice.featureBox;
export const {togglePostModal, toggleUserControlMenu, toggleTopBar, toggleFeatureBox} = globalSlice.actions;

export default globalSlice.reducer