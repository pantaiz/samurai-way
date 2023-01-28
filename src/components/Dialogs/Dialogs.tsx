import React from "react";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (<div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>Dimych</div>
                <div className={s.dialog}>Marharita</div>
                <div className={s.dialog}>Roma</div>
                <div className={s.dialog}>Vitalya</div>
                <div className={s.dialog}>Artem</div>
                <div className={s.dialog}>Jenya</div>
            </div>
        <div className={s.messages}>
            <div className={s.message}>Hiasd</div>
            <div className={s.message}>It's test message</div>
            <div className={s.message}>Vilkoy v glaz?</div>
        </div>
        </div>
    )

}
export default Dialogs