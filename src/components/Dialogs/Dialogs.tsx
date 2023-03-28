import React from "react";
import s from './Dialogs.module.css';
import {DialigsItem} from "./DialigsItem/DialigsItem";
import { Message } from "./Message/Message";
import {DialogsDataType, dispatchType, MessageDataType} from "../../index";


export type DialogsProps={
  /*  dialogsData:DialogsDataType
    dispatch:dispatchType*/
}


const Dialogs = (props:DialogsProps) => {


    return (<div className={s.dialogs}>
                <DialigsItem dialogsData={props.dialogsData.dialogsItemData}/>{/*отрисовываем наши диалоги*/}
                <Message messageData={props.dialogsData.messageData} dispatch={props.dispatch}/>{/*отрисовываем наши сообщения*/}
        </div>
    )

}
export default Dialogs