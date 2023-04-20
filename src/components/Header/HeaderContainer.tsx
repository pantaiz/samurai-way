import React from "react"
import Header from "./Header";
import axios from "axios";

import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";

export type HeaderStateToPropsType = {
    login:string|null
    isAuth:boolean
}
export type HeaderDispatchToPropsType = {
    getAuthUserData: () => void
}


export type HeaderContainerType = HeaderStateToPropsType & HeaderDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderContainerType, any> {
    componentDidMount() {

        this.props.getAuthUserData()
    }


    render() {
        return (
            <Header login={this.props.login}  isAuth={this.props.isAuth}/>
        )
    }
}

const HeaderStateToProps = (state: AppStateType): HeaderStateToPropsType => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })
}


export const HeaderContainerForApp = connect(HeaderStateToProps, {getAuthUserData})(HeaderContainer)

