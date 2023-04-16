import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";

export type UsersStateToPropsType = {
    users:UsersType,
    pageSize:number
    totalUserCount: number
    currentPage:number
}

export type UsersDispatchToPropsType = {
    follow: (userId: string)=>void,
    unfollow: (userId: string)=>void,
    setUsers: (users: UsersType) =>void
    setCurrentPage: (currentPage: number) =>void
    setTotalUserCount: (totalUserCount: number) =>void
}

export type UsersPropsType = UsersStateToPropsType & UsersDispatchToPropsType

const UsersStateToProps = (state: AppStateType): UsersStateToPropsType => {
    return {
        users: state.userPage.users,
        pageSize:state.userPage.pageSize,
        totalUserCount:state.userPage.totalUserCount,
        currentPage:state.userPage.currentPage
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
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalUserCount: number) => {
            dispatch(setTotalUserCountAC(totalUserCount))
        },
    }
}

export const UsersContainer = connect(UsersStateToProps, UsersDispatchToProps)(Users)
