import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {Dispatch} from "redux";
import {updateNewPostTextsActionCreator} from "../../redux/profile-reducer";
import {addNewMyMessageActionCreator, DialogsDataType} from "../../redux/dialog-reducer";



type  DialogStateToPropsType = {
    dialogsData: DialogsDataType
}
type  DialogDispatchToPropsType = {
    sendMessage: () => void
    updatedNewMyMessage: (text: string) => void
}
export type  DialogPropsType = DialogStateToPropsType & DialogDispatchToPropsType


const DialogStateToProps = (state: AppStateType):DialogStateToPropsType => {
    return (
        {
        dialogsData : state.dialogReducer
        }
        )
}
const DialogDispatchToProps = (dispatch: Dispatch): DialogDispatchToPropsType => {
    return(
        {
            sendMessage: () => {
                dispatch(addNewMyMessageActionCreator())
            },
            updatedNewMyMessage: (text: string) => {
                dispatch(updateNewPostTextsActionCreator(text))
            }
        }
    )
}

export const DialogsContainer = connect(DialogStateToProps, DialogDispatchToProps)(Dialogs)
