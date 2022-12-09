import {combineReducers,configureStore} from "@reduxjs/toolkit";
import morseReducer from "./MorseReducer/MorseReducer";
const rootReducer = combineReducers({
    MorsePage:morseReducer,
})
export const store = configureStore({
    reducer:rootReducer
})
const state = store.getState()
export type appStateType= typeof state