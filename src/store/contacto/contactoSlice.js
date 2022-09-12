// Se crea en SECCION 26 video 403 para empezar a unir el BACK con el FRONT

// import { createSlice } from '@reduxjs/toolkit';
// export const contactoSlice = createSlice({
//     name: 'contactos',
//     initialState: {
//         contactos: {},
//         errorMessage: undefined,
//     },
//     reducers: {  
//         onContacto: ( state, action ) => {
//             // state.status = 'not-authenticated';
//             state.contactos = action.payload;
//             state.errorMessage = undefined;
//         },    
//     }
// });

// // Action creators are generated for each case reducer function
// export const { onContacto } = contactoSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
export const contactoSlice = createSlice({
    name: 'contacto',
    initialState: {
        // isLoading: true,
        contactos: [ ],
        activeContacto: null
    },
    reducers: {
        onContacto: ( state, action ) => {
                // state.status = 'not-authenticated';
                // state.contactos = action.payload;
                // state.errorMessage = undefined;
            },
        onLoadContactos: ( state, { payload = [] } ) => {
            state.contactos = payload;
        },
        onDeleteContacto: ( state ) => {
            if( state.activeContacto ){
                state.contactos = state.contactos.filter( cont => cont.id !== state.activeContacto )
            }
            state.activeContacto = null;
        },
        contactosActive: ( state, {payload} ) => {
            state.activeContacto = payload;
        },
        onAddNewContacto: ( state, { payload }) => {
            state.contactos.push( payload );
        },
        onUpdateContacto: ( state, { payload } ) => {
            
            const idUpdate = payload.dataContacto.id

            state.contactos = state.contactos.map( contact => {
                if( contact.id === idUpdate ) {
                    console.log(contact)
                    return payload.dataContacto;
                }
                return contact;
            })
        },

    }
});
// Action creators are generated for each case reducer function
export const { onContacto, onAddNewContacto, onLoadContactos, onDeleteContacto, contactosActive, onUpdateContacto } = contactoSlice.actions;