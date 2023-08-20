import { Admin } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../app/services/auth";
import { RootState } from "../app/store";

interface InitialState {
    admin: Admin & {token: string} | null;
    isAuthentificated: boolean;
}

const initialState: InitialState = {
    admin: null,
    isAuthentificated: false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
                state.admin = action.payload;
                state.isAuthentificated = true;
            })
            .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
                state.admin = action.payload;
                state.isAuthentificated = true;
            })
            .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
                state.admin = action.payload;
                state.isAuthentificated = true;
            })
    }
})

export const { logout } = slice.actions;
export default slice.reducer;
export const selectIsAuthentificated = (state: RootState) => state.auth.isAuthentificated;
export const selectAdmin = (state: RootState) => state.auth.admin;
