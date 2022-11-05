import React, {useState} from "react";

import LineStyleIcon from '@mui/icons-material/LineStyle';
import AbcIcon from '@mui/icons-material/Abc';
import {useDispatch, useSelector} from "react-redux";
import { translateToMorse, translateToNormal} from "../../Redux/MorseReducer/MorseReducer";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import './MorsePage.modal.css'
import {Button, Paper, TextareaAutosize, Typography} from "@mui/material";
import Modal from '../../Modal/Modal.jsx'
import morseImg from '../../img/morse.png'
import {Key} from './Key'
import {encode} from '../../Redux/MorseReducer/MorseLogic'


export function MorsePage(props){
    const [NormalWords,setNormal]=useState('')
    const [MorseWords,setMorse]=useState('')
    const morse = useSelector(state => state.MorsePage.morseWord)
    const normal = useSelector(state => state.MorsePage.normalWord)
    let[active,setActive]=useState(false)
    let [modalActive,setModalActive]=useState(false)
    const dispatch = useDispatch()
        let regex =/\w/g

    function KeyboardHandler(str){
        setMorse(MorseWords+str+' ')
        dispatch(translateToNormal(MorseWords+str))
    }
        return(
        <section className={'MorsePage'}>
                <Modal active={modalActive} setActive={setModalActive}>
                    {modalActive && <img src={morseImg} alt={'morseImage'} className={'MorsePage__morseImage'}/>}
                </Modal>


            <div className={'MorsePage__card'}>
                <div className={active? "card__side card__side_front activeFront" : "card__side card__side_front"}>


                        <Typography variant="h2" component="h2" sx={{
                            textAlign:'center',
                            marginBottom:'1.5rem',
                            marginTop:'1.5rem'
                        }} >
                            English to Morse
                        </Typography>
                        <TextareaAutosize maxLength={240} aria-label="empty textarea" placeholder="Write here" className={'MorsePage__input'} onChange={(e)=>{
                            setNormal(e.target.value)
                            dispatch(translateToMorse(e.target.value))
                        }} value={NormalWords}
                        />

                    <div className={'MorsePage__translated'}>{morse}</div>


                        <Button variant="contained" size="large" onClick={()=>{setActive(!active)}} sx={{
                            position:'absolute',
                            background:'var(--darkKey)',
                            bottom:'1rem',
                            right:'1rem'
                        }}  endIcon={<LineStyleIcon className={'icons'} fontSize="large"   /> } className={'button'} >
                            Change to morse
                        </Button>

                </div>
                <div className={active? "activeBack card__side card__side_back" : "card__side card__side_back"}>
                    <Paper elevation={3} onClick={()=>{
                        setModalActive(true)
                    }} sx={{
                        position:'absolute',
                        top:'1.6rem',
                        right:'1rem',
                        display:'flex',
                        justifyContent:'center',
                        flexDirection:'column',
                        alignItems:'center',
                        width:'12vw',
                        minHeight:'7vh',
                        fontSize:'1.7rem',
                    }} className={"card__side__MorseButton"}><MenuBookIcon fontSize={"large"} sx={{
                    }}/>
                    <Typography variant="p" component="p">See Morse Code</Typography></Paper>

                    <Typography variant="h2" component="h2" sx={{
                        textAlign:'center',
                        marginBottom:'1.5rem',
                        marginTop:'1.5rem'
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
                        <Key children={'Q'} onC={KeyboardHandler}/>
                        <Key children={'W'} onC={KeyboardHandler}/>
                        <Key children={'E'} onC={KeyboardHandler}/>
                        <Key children={'R'} onC={KeyboardHandler}/>
                        <Key children={'T'} onC={KeyboardHandler}/>
                        <Key children={'Y'} onC={KeyboardHandler}/>
                        <Key children={'U'} onC={KeyboardHandler}/>
                        <Key children={'I'} onC={KeyboardHandler}/>
                        <Key children={'O'} onC={KeyboardHandler}/>
                        <Key children={'P'} onC={KeyboardHandler}/>
                        <Key children={'A'} onC={KeyboardHandler}/>
                        <Key children={'S'} onC={KeyboardHandler}/>
                        <Key children={'D'} onC={KeyboardHandler}/>
                        <Key children={'F'} onC={KeyboardHandler}/>
                        <Key children={'G'} onC={KeyboardHandler}/>
                        <Key children={'H'} onC={KeyboardHandler}/>
                        <Key children={'J'} onC={KeyboardHandler}/>
                        <Key children={'K'} onC={KeyboardHandler}/>
                        <Key children={'L'} onC={KeyboardHandler}/>
                        <Key children={'Z'} onC={KeyboardHandler}/>
                        <Key children={'X'} onC={KeyboardHandler}/>
                        <Key children={'C'} onC={KeyboardHandler} />
                        <Key children={'V'} onC={KeyboardHandler}/>
                        <Key children={'B'} onC={KeyboardHandler} />
                        <Key children={'N'} onC={KeyboardHandler}/>
                        <Key children={'M'} onC={KeyboardHandler}/>
                        <Key children={'.'} onC={KeyboardHandler}/>
                        <Key children={'SPACE'} onC={KeyboardHandler}/>
                    </div>

                    <Button variant="contained" size="large" onClick={()=>{setActive(!active)
                    }} sx={{
                        position:'absolute',
                        background:'var(--darkKey)',
                        bottom:'1rem',
                        right:'1rem'

                    }}  endIcon={<AbcIcon className={'icons'} fontSize="large"   /> } className={'button'} >
                        Change to normal
                    </Button>
                </div>


            </div>
            <p className={'glow glow1'}>Lemur</p>
            <p className={'glow glow2'}>Morse</p>
        </section>
        )
}