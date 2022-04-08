import { configureStore, createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSideBar: false
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBar = !state.isSideBar;
        }
    }
});

export const { toggleSideBar } = appSlice.actions;

export const selectIsSideBar = (state) => state.app.isSideBar;
export const selectIsShader = (state) => selectIsSideBar(state);

export const store = configureStore({
    reducer: {
        app: appSlice.reducer
    }
});