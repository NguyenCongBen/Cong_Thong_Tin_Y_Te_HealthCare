import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userSlices from "./slices/userSlices";


const persistConfig = {
    key: "root",
    storage,
};


const rootReducer = combineReducers({
    auth: userSlices,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
});


export const persistor = persistStore(store);