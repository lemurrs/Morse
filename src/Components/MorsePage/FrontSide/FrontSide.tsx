import React, {useState} from "react";
import {Button, Paper, TextareaAutosize, Typography} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {translateToNormal} from "../../../Redux/MorseReducer/MorseReducer";
import Key from "./Key/Key";
import AbcIcon from "@mui/icons-material/Abc";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../../Redux/toolkitReduxStore";

type Props={
    active:boolean,
    setActive:(a:boolean)=>void,
    setModalActive:(a:boolean)=>void
}

const FrontSide:React.FC<Props>=({active,setActive,setModalActive})=>{
    const [MorseWords,setMorse]=useState('')
    const normal = useSelector((state:appStateType) => state.MorsePage.normalWord)
    const dispatch = useDispatch()

    function KeyboardHandler(str:string){
        setMorse(MorseWords+str+' ')
        dispatch(translateToNormal(MorseWords+str))
    }

    return<div className={active? "activeFront card__side card__side_front" : "card__side card__side_front"}>

        <Paper elevation={3} onClick={()=>{
            setModalActive(true)
        }} sx={{
            position:'absolute',
            top:{
                xxs: "0.9rem",
                xs: "0.7rem",
                sm: "0.9rem",
                xl: "1.2rem"
            },
            right: {
                xxs: "1.2rem",
                xs: "2rem",
                sm: "0.8rem",
                md: "1.2rem",
                xl: "1.6rem"
            },
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            width:{
                xxs: "2rem",
                xs: "3rem",
                sm: "15vw",
                md: "12vw",
            },
            minHeight: {
                xxs: "3rem",
                xl: "4rem"
            },
            fontSize: {
                xxs: "0.5rem",
                sm: "0.8rem",
                md: "1rem",
                lg: "1.3rem",
                xl: "1.7rem"
            },
        }} className={"card__side__MorseButton"}><MenuBookIcon/>
            <Typography sx={{
                display:{
                    xs:"none",
                    xl:"initial"
                }
            }}  component="p">See Morse Code</Typography></Paper>

        <Typography variant="h2" component="h2" sx={{
            textAlign: {
                md: "center",
            },
            marginBottom:'1.5rem',
            marginTop:'1.5rem',
            fontSize:{
                xxs: "1.3rem",
                sm: "1.5rem",
                md: "1.6rem",
                lg: "2rem",
                xl: "3rem"
            }
        }} >
            Morse to English
        </Typography>
        <TextareaAutosize maxLength={400} aria-label="empty textarea" placeholder="Write here" className={'MorsePage__input'} onChange={(e)=>{
            setMorse(e.target.value)
            dispatch(translateToNormal(e.target.value))

        }} value={MorseWords}
        />

        <div className={'MorsePage__translated'}>{MorseWords.length===0? '' :normal}</div>
        <div className={'MorsePage__keyboard'}>
            <Key keyboardButton={'Q'} onC={KeyboardHandler}/>
            <Key keyboardButton={'W'} onC={KeyboardHandler}/>
            <Key keyboardButton={'E'} onC={KeyboardHandler}/>
            <Key keyboardButton={'R'} onC={KeyboardHandler}/>
            <Key keyboardButton={'T'} onC={KeyboardHandler}/>
            <Key keyboardButton={'Y'} onC={KeyboardHandler}/>
            <Key keyboardButton={'U'} onC={KeyboardHandler}/>
            <Key keyboardButton={'I'} onC={KeyboardHandler}/>
            <Key keyboardButton={'O'} onC={KeyboardHandler}/>
            <Key keyboardButton={'P'} onC={KeyboardHandler}/>
            <Key keyboardButton={'A'} onC={KeyboardHandler}/>
            <Key keyboardButton={'S'} onC={KeyboardHandler}/>
            <Key keyboardButton={'D'} onC={KeyboardHandler}/>
            <Key keyboardButton={'F'} onC={KeyboardHandler}/>
            <Key keyboardButton={'G'} onC={KeyboardHandler}/>
            <Key keyboardButton={'H'} onC={KeyboardHandler}/>
            <Key keyboardButton={'J'} onC={KeyboardHandler}/>
            <Key keyboardButton={'K'} onC={KeyboardHandler}/>
            <Key keyboardButton={'L'} onC={KeyboardHandler}/>
            <Key keyboardButton={'Z'} onC={KeyboardHandler}/>
            <Key keyboardButton={'X'} onC={KeyboardHandler}/>
            <Key keyboardButton={'C'} onC={KeyboardHandler} />
            <Key keyboardButton={'V'} onC={KeyboardHandler}/>
            <Key keyboardButton={'B'} onC={KeyboardHandler} />
            <Key keyboardButton={'N'} onC={KeyboardHandler}/>
            <Key keyboardButton={'M'} onC={KeyboardHandler}/>
            <Key keyboardButton={'.'} onC={KeyboardHandler}/>
            <Key keyboardButton={'SPACE'} onC={KeyboardHandler}/>
        </div>

        <div className={'buttons-wrapper'}>
            <Button variant="contained" size="large" onClick={()=>{setActive(!active)
            }} sx={{
                alignSelf:'flex-end',
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
            }}  endIcon={<AbcIcon className={'icons'} fontSize="large"
            /> } className={'button'} >
                Change to normal
            </Button>
        </div>
    </div>
}
export default React.memo(FrontSide)