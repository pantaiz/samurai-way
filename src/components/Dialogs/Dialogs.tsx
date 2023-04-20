import React from "react";
import s from './Dialogs.module.css';
import {DialigsItem} from "./DialigsItem/DialigsItem";
import {Message} from "./Message/Message";
import {DialogPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


const Dialogs = (props: DialogPropsType) => {


    if(!props.isAuth)return <Redirect to={'/login'}/>

    return (<div className={s.dialogs}>
            <DialigsItem dialogsData={props.dialogsData.dialogsItemData}/>{/*отрисовываем наши диалоги*/}
            <Message messageData={props.dialogsData.messageData} sendMessage={props.sendMessage}
                     updatedNewMyMessage={props.updatedNewMyMessage}/>{/*отрисовываем наши сообщения*/}
        </div>
    )

}
export default Dialogs