import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {Dispatch} from "redux";

import {
    addNewMyMessageActionCreator,
    DialogsDataType,
    updatedNewMyMessageActionCreator
} from "../../redux/dialog-reducer";



type  DialogStateToPropsType = {
    dialogsData: DialogsDataType
    isAuth:boolean
}
type  DialogDispatchToPropsType = {
    sendMessage: () => void
    updatedNewMyMessage: (text: string) => void
}
export type  DialogPropsType = DialogStateToPropsType & DialogDispatchToPropsType


const DialogStateToProps = (state: AppStateType):DialogStateToPropsType => {
    return (
        {
        dialogsData : state.dialogReducer,
            isAuth:state.auth.isAuth
        }
        )
}
const DialogDispatchToProps = (dispatch: Dispatch): DialogDispatchToPropsType => {
    return(
        {
            sendMessage: () => {
                dispatch(addNewMyMessageActionCreator())
            },
            updatedNewMyMessage: (newPostText: string) => {
                dispatch(updatedNewMyMessageActionCreator(newPostText))
            }
        }
    )
}

export const DialogsContainer = connect(DialogStateToProps, DialogDispatchToProps)(Dialogs)
