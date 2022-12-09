import React, {useState} from "react";
import './MorsePage.modal.css'
import BackSide from "./BackSide/BackSide";
import FrontSide from "./FrontSide/FrontSide";
import Modal from "../../Modal/Modal";
import morseImg from "../../img/morse.png";



export function MorsePage(){
    const [active,setActive]=useState(false)
    const [modalActive,setModalActive]=useState(false)
        return(
        <section className={'MorsePage'}>
            <div className={'MorsePage__card'}>
                <BackSide active={active} setActive={setActive}/>
                <FrontSide active={active} setActive={setActive} setModalActive={setModalActive}/>
            </div>
            <p className={'glow glow1'}>Lemur</p>
            <p className={'glow glow2'}>Morse</p>
            <Modal active={modalActive} setActive={setModalActive}>
                {modalActive && <img src={morseImg} alt={'morseImage'} className={'MorsePage__morseImage'}/>}
            </Modal>
        </section>
        )
}