import {configureStore} from '@reduxjs/toolkit';
import {usersAPI} from "../services/users";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [usersAPI.reducerPath]: usersAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersAPI.middleware)
});

setupListeners(store.dispatch);
