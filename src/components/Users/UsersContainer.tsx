import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";


export class UsersContainer extends React.Component<UsersContainerType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <Users {...this.props}
                      onPageChanged={this.onPageChanged}/>
    }
}



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

export type UsersContainerType = UsersStateToPropsType & UsersDispatchToPropsType

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

export const UsersContainerforApp = connect(UsersStateToProps, UsersDispatchToProps)(UsersContainer)
