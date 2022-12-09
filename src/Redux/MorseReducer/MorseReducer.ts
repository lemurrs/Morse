import {createSlice} from "@reduxjs/toolkit";
import {decode, encode} from "./MorseLogic";

const morseReducer=createSlice({
    name:'morse',
    initialState:{
        morseWord:'',
        normalWord:'',
    },
    reducers: {
        translateToNormal(state, action) {
            state.normalWord = decode(action.payload)
        },
        translateToMorse(state, action) {
            state.morseWord = encode(action.payload)
        },
    }})
export default morseReducer.reducer
export const {translateToNormal,translateToMorse}=morseReducer.actions