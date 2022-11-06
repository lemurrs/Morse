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



export function MorsePage(props){
    const [NormalWords,setNormal]=useState('')
    const [MorseWords,setMorse]=useState('')
    const morse = useSelector(state => state.MorsePage.morseWord)
    const normal = useSelector(state => state.MorsePage.normalWord)
    let[active,setActive]=useState(false)
    let [modalActive,setModalActive]=useState(false)
    const dispatch = useDispatch()

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
                                xs:"12rem",
                                sm: "12rem",
                                md: "initial",
                            },
                            fontSize:{
                                xxs:"0.6rem",
                                xs:"0.6rem",
                                sm: "0.6rem",
                                md: "initial",
                            },
                            height:{
                                xxs:"1.4rem",
                                xs:"1.4rem",
                                sm: "1.4rem",
                                md: "initial",
                            }
                        }}  endIcon={<LineStyleIcon  className={'icons'} /> } className={'button'} >
                            Change to morse
                        </Button>
                    </div>
                </div>
                <div className={active? "activeFront card__side card__side_front" : "card__side card__side_front"}>
                    <Paper elevation={3} onClick={()=>{
                        setModalActive(true)
                    }} sx={{
                        position:'absolute',
                        top:{
                            xxs: "0.9rem",
                            xs: "0.7rem",
                            sm: "0.9rem",
                            md: "0.9rem",
                            lg: "0.9rem",
                            xl: "1.2rem"
                        },
                        right: {
                            xxs: "1.2rem",
                            xs: "2rem",
                            sm: "0.8rem",
                            md: "1.2rem",
                            lg: "1.2rem",
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
                            xxs: "4vh",
                            xs: "3rem",
                            sm: "4vh",
                            md: "4vh",
                            lg: "4vh",
                            xl: "7vh"
                        },
                        fontSize: {
                            xxs: "0.5rem",
                            xs: "0.5rem",
                            sm: "0.8rem",
                            md: "1rem",
                            lg: "1.3rem",
                            xl: "1.7rem"
                        },
                    }} className={"card__side__MorseButton"}><MenuBookIcon sx={{
                        fontSize: {
                            xxs: "1.5rem",
                            xs: "1.5rem",
                            sm: "1.5rem",
                            md: "2rem",
                        },
                    }}/>
                    <Typography sx={{
                        display:{
                            xs:"none",
                            sm:"initial",
                        }
                    }} variant="p" component="p">See Morse Code</Typography></Paper>

                    <Typography variant="h2" component="h2" sx={{
                        textAlign: {
                            md: "center",
                        },
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

                    <div className={'buttons-wrapper'}>
                        <Button variant="contained" size="large" onClick={()=>{setActive(!active)
                        }} sx={{
                            alignSelf:'flex-end',
                            background:'var(--darkKey)',
                            width:{
                                xxs:"12rem",
                                xs:"12rem",
                                sm: "12rem",
                                md: "initial",
                            },
                            fontSize:{
                                xxs:"0.6rem",
                                xs:"0.6rem",
                                sm: "0.6rem",
                                md: "initial",
                            },
                            height:{
                                xxs:"1.4rem",
                                xs:"1.4rem",
                                sm: "1.4rem",
                                md: "initial",
                            }
                        }}  endIcon={<AbcIcon className={'icons'} fontSize="large"
                        /> } className={'button'} >
                            Change to normal
                        </Button>
                    </div>
                </div>
            </div>
            <p className={'glow glow1'}>Lemur</p>
            <p className={'glow glow2'}>Morse</p>
        </section>
        )
}