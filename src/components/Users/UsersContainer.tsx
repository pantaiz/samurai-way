import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    acceptFollow, acceptUnFollow,
    follow, getUsersThunkCreator, onPageChangedThunk,
    setCurrentPage,
    setIsFetching, setIsFollowingProgress,
    setTotalUserCount,
    setUsers,
    unfollow,
    usersReducerStateType,
    UsersType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";



export class UsersContainer extends React.Component<UsersContainerType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        /* this.props.setIsFetching(true);
         usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
             .then(data => {
                 this.props.setIsFetching(false)
                 this.props.setUsers(data.items)
                 this.props.setTotalUserCount(data.totalCount)
             })*/
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangedThunk(pageNumber,this.props.pageSize)
       /* this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)

            })*/
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users users={this.props.users}
                         acceptFollow={this.props.acceptFollow} acceptUnFollow={this.props.acceptUnFollow}
                         onPageChanged={this.onPageChanged}
                         followingInProgress={this.props.followingInProgress}
                         getUsers={this.props.getUsers}
                         currentPage={this.props.currentPage}
                         pageSize={this.props.pageSize}
                         totalUserCount={this.props.totalUserCount}/>}
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
    setIsFollowingProgress: (userId: string | number, isFetching: boolean) => void
    getUsers: (currentPage: number | string, pageSize: number | string) => void
    onPageChangedThunk: (pageNumber: number , pageSize: number | string) => void
    acceptFollow: (id: string) => void
    acceptUnFollow: (id: string) => void
}

export type UsersContainerType = usersReducerStateType & UsersDispatchToPropsType

const UsersStateToProps = (state: AppStateType): usersReducerStateType => {
    return {
        ...state.userPage

    }

}


export const UsersContainerforApp = connect(
    UsersStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUserCount,
        setIsFetching,
        setIsFollowingProgress,
        getUsers: getUsersThunkCreator,
        onPageChangedThunk,
        acceptFollow,
        acceptUnFollow,
    })(UsersContainer)
