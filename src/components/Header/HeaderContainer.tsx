import React from "react"
import Header from "./Header";
import axios from "axios";

import {setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import { loginAPI} from "../../api/api";

export type HeaderStateToPropsType = {
    login:string|null
    isAuth:boolean
}
export type HeaderDispatchToPropsType = {
    setUserData: (id: string, email: string, login: string) => void
}


export type HeaderContainerType = HeaderStateToPropsType & HeaderDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderContainerType, any> {
    componentDidMount() {


        loginAPI.getAuthMe()
            .then(data => {
                let {id, email, login} = data
                this.props.setUserData(id, email, login)

            })
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


export const HeaderContainerForApp = connect(HeaderStateToProps, {setUserData})(HeaderContainer)

