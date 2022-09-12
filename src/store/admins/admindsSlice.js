import { createSlice } from '@reduxjs/toolkit';
export const admindsSlice = createSlice({
    name: 'adminds',
    initialState: {
        // isLoading: true,
        admin: [ ],
        activeAdmin: null
    },
    reducers: {
        onLoadAdmins: ( state, { payload = [] } ) => {
            state.admin = payload;
        },
        onDeleteAdmin: ( state ) => {
            console.log(state.activeAdmin)
            if( state.activeAdmin ){
                state.admin = state.admin.filter( adm => adm.id !== state.activeAdmin )
                console.log(state.activeAdmin)
            }
            state.activeAdmin = null;
        },
        adminActive: ( state, {payload} ) => {
            state.activeAdmin = payload;
        },
        onAddNewAdmin: ( state, { payload }) => {
            state.admin.push( payload );
        },
        onUpdateAdmin: ( state, { payload } ) => {
            const idUpdate = payload.dataAdmin.id

            state.admin = state.admin.map( admin => {
                if( admin.id === idUpdate ) {
                    return payload.dataAdmin;
                }
                return admin;
            })
        },

    }
});
// Action creators are generated for each case reducer function
export const { onAddNewAdmin, onLoadAdmins, onDeleteAdmin, adminActive, onUpdateAdmin } = admindsSlice.actions;