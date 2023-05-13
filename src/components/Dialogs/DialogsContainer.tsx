import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {compose, Dispatch} from "redux";
import {
    addNewMyMessageActionCreator,
    DialogsDataType,
    updatedNewMyMessageActionCreator
} from "../../redux/dialog-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {ProfileContainers} from "../Profile/ProfileContainer";


type  DialogStateToPropsType = {
    dialogsData: DialogsDataType
    isAuth: boolean
}
type  DialogDispatchToPropsType = {
    sendMessage: () => void
    updatedNewMyMessage: (text: string) => void
}
export type  DialogPropsType = DialogStateToPropsType & DialogDispatchToPropsType


const DialogStateToProps = (state: AppStateType): DialogStateToPropsType => {
    return (
        {
            dialogsData: state.dialogReducer,
            isAuth: state.auth.isAuth
        }
    )
}
const DialogDispatchToProps = (dispatch: Dispatch): DialogDispatchToPropsType => {
    return (
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


export default compose<ComponentType>(
    withAuthRedirect,
    connect(DialogStateToProps, DialogDispatchToProps)
)(Dialogs)
