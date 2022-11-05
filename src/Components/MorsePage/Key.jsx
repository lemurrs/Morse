import React from "react";
import {encode} from '../../Redux/MorseReducer/MorseLogic'
import  './MorsePage.modal.css'
export const Key =({children,onC})=>{

    return (<div className={'key'} onClick={()=>{onC(encode(children==='SPACE' ? '  ' : children))}}>
        {children}
    </div>)
}