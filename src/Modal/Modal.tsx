import React from "react";
import './ModalModule.css'

type Props={
    active:boolean,
    setActive:(a:boolean)=>void,
    children:React.ReactNode
}

const Modal = ({active,setActive, children}:Props)=>{
    return (<div className={active? `modal active`:`modal`} onClick={()=> setActive(false)}>
        <div className={(active?`modal__content active`: `modal__content`)+' Purple'} onClick={e=> e.stopPropagation()}>
            {children}
        </div>
    </div>)
}
export default Modal