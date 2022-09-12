import { createSlice } from '@reduxjs/toolkit';
export const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        // isLoading: true,
        stocks: [ ],
        activeStock: null
    },
    reducers: {
        onLoadStocks: ( state, { payload = [] } ) => {
            state.stocks = payload;
        },
        onDeleteStock: ( state ) => {
            if( state.activeStock ){
                state.stocks = state.stocks.filter( adm => adm.id !== state.activeStock )
            }
            state.activeStock = null;
        },
        stockActive: ( state, {payload} ) => {
            state.activeStock = payload;
        },
        onAddNewStock: ( state, { payload }) => {
            state.stocks.push( payload );
        },
        onUpdateStock: ( state, { payload } ) => {
            const idUpdate = payload.dataStock.id

            state.stocks = state.stocks.map( stock => {
                if( stock.id === idUpdate ) {
                    return payload.dataStock;
                }
                return stock;
            })
        },

    }
});
// Action creators are generated for each case reducer function
export const { onAddNewStock, onLoadStocks, onDeleteStock, stockActive, onUpdateStock } = stockSlice.actions;