import React from "react";
import {encode} from '../../Redux/MorseReducer/MorseLogic'
import  './MorsePage.modal.css'

type Props={
    keyboardButton:string,
    onC:(a:string)=>void
}

export const Key =({keyboardButton,onC}:Props)=>{

    return (<div className={'key'} onClick={()=>{onC(encode(keyboardButton==='SPACE' ? '  ' : keyboardButton))}}>
        {keyboardButton}
    </div>)
}