import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";

type UsersStateToPropsType = {
    users:UsersType
}

type UsersDispatchToPropsType = {
    follow: (userId: string)=>void,
    unfollow: (userId: string)=>void,
    setUsers: (users: UsersType) =>void
}

export type UsersPropsType = UsersStateToPropsType & UsersDispatchToPropsType

const UsersStateToProps = (state: AppStateType): UsersStateToPropsType => {
    return {
        users: state.userPage.users
    }

}

const UsersDispatchToProps = (dispatch: Dispatch):UsersDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        },
    }
}

export const UsersContainer = connect(UsersStateToProps, UsersDispatchToProps)(Users)

