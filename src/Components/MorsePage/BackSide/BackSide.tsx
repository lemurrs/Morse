import React, {useState} from "react";
import {Button, TextareaAutosize, Typography} from "@mui/material";
import {translateToMorse} from "../../../Redux/MorseReducer/MorseReducer";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../../Redux/toolkitReduxStore";

type Props={
    active:boolean,
    setActive:(a:boolean)=>void
}

const BackSide:React.FC<Props>=({active,setActive})=>{
    const [NormalWords,setNormal]=useState('')
    const morse = useSelector((state:appStateType) => state.MorsePage.morseWord)
    const dispatch = useDispatch()
    return  (
        <div className={active? "card__side card__side_back activeBack" : "card__side card__side_back"}>
            <Typography variant="h2" component="h2" sx={{
                textAlign:'center',
                marginBottom:'1.5rem',
                marginTop:'1.5rem',
                fontSize:{
                    xxs: "1.3rem",
                    xs: "1.3rem",
                    sm: "1.5rem",
                    md: "1.6rem",
                    lg: "2rem",
                    xl: "3rem"
                }
            }} >
                English to Morse
            </Typography>
            <TextareaAutosize maxLength={240} aria-label="empty textarea" placeholder="Write here" className={'MorsePage__input'} onChange={(e)=>{
                setNormal(e.target.value)
                dispatch(translateToMorse(e.target.value))
            }} value={NormalWords}
            />
            <div className={'MorsePage__translated'}>{morse}</div>
            <div className={'buttons-wrapper'}>
                <Button  variant="contained" size="large" onClick={()=>{setActive(!active)}} sx={{
                    background:'var(--darkKey)',
                    width:{
                        xxs:"12rem",
                        md: "initial",
                    },
                    fontSize:{
                        xxs:"0.6rem",
                        md: "initial",
                    },
                    height:{
                        xxs:"1.4rem",
                        md: "initial",
                    }
                }}  endIcon={<LineStyleIcon  className={'icons'} /> } className={'button'} >
                    Change to morse
                </Button>
            </div>
        </div>
    )

}
export default React.memo(BackSide)