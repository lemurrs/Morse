import React from "react";
import {encode} from '../../../../Redux/MorseReducer/MorseLogic'
import  '../../MorsePage.modal.css'

type Props={
    keyboardButton:string,
    onC:(a:string)=>void
}

const Key:React.FC<Props> =({keyboardButton,onC})=>{

    return (<div className={'key'} onClick={()=>{onC(encode(keyboardButton==='SPACE' ? '  ' : keyboardButton))}}>
        {keyboardButton}
    </div>)
}
export default React.memo(Key)