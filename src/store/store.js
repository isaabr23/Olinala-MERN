// export const store = configureStore({
//     reducer: {
//         calendar: calendarSlice.reducer,
//         ui: uiSlice.reducer,
//         auth: authSlice.reducer,
//     },
//     middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
//         serializableCheck: false
//     })
// });

import { configureStore } from '@reduxjs/toolkit'
import { admindsSlice } from './admins/admindsSlice'
import { authSlice } from './auth/auth'
import { carritoSlice } from './carrito/carritoSlice'
import { contactoSlice } from './contacto/contactoSlice'
import { stockSlice } from './Stock/stockSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    carrito: carritoSlice.reducer,
    contacto: contactoSlice.reducer,
    adminds: admindsSlice.reducer,
    stock: stockSlice.reducer,
  },
})
