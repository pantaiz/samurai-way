import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUserCount,
    setUsers,
    unfollow,
    usersReducerStateType,
    UsersType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";



export class UsersContainer extends React.Component<UsersContainerType, any> {

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)

            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users {...this.props}
                         onPageChanged={this.onPageChanged}/>}
        </>
    }
}


/*export type UsersStateToPropsType = {
    users: UsersType,
    pageSize: number
    totalUserCount: number
    currentPage: number
}*/

export type UsersDispatchToPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: UsersType) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export type UsersContainerType = usersReducerStateType & UsersDispatchToPropsType

const UsersStateToProps = (state: AppStateType): usersReducerStateType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
    }

}


export const UsersContainerforApp = connect(
    UsersStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, setIsFetching})(UsersContainer)
