// Se crea en SECCION 26 video 403 para empezar a unir el BACK con el FRONT

import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'authenticated',
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: ( state, action ) => {
            state.status = 'authenticated';
            state.user = action.payload;
            state.errorMessage = undefined;
        },
        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
        },    
        onRegister: ( state, action ) => {
            state.status = 'authenticated';
            state.user = action.payload;
            state.errorMessage = undefined;
        },   
    }
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage, onRegister } = authSlice.actions;