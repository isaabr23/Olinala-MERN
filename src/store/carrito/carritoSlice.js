// Se crea en SECCION 26 video 403 para empezar a unir el BACK con el FRONT

import { createSlice } from '@reduxjs/toolkit';
export const carritoSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        counter: 0
    },
    reducers: {
        addProduct: ( state, {payload} ) => {
            
            let idRepetido = state.cart.find( i => i.id === payload.id)
            
            if (idRepetido) {
                state.cart = state.cart.map( (item) => {
                    if( item.id === idRepetido.id ) {
                        return { ...item, cantidad: item.cantidad + 1 }
                    } else {
                        return item
                    }
                })
            } else {
                state.cart.push({...payload, cantidad: 1});
            }
        },
        deleteProduct: ( state, {payload} ) => {
            
            let idRepetido = state.cart.find( i => i.id === payload.id)
            let cantidadID = payload.cantidad > 1
            
            if (idRepetido && cantidadID) {
                state.cart = state.cart.map( (item) => {
                    if( item.id === idRepetido.id && item.cantidad > 1 ) {
                        return { ...item, cantidad: item.cantidad - 1 }
                    } else {
                        return item
                    }
                })
            } else {
                state.cart = state.cart.filter((item) => item.id !== payload.id)
            }
        },
        loadProduct: ( state, {payload} ) => {
            state.cart = payload ;
        },
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
        decrement: (state, /* action */ ) => {
            if ( state.counter > 0 ){
                state.counter -= 1;
            }
        },
    }
});

// Action creators are generated for each case reducer function
export const { addProduct, loadProduct, deleteProduct, updateProduct, increment, decrement } = carritoSlice.actions;