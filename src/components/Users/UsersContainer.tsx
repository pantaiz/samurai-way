import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC, usersReducerStateType,
    UsersType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../assets/image/Loader.svg"
import {Preloader} from "../common/Preloader/Preloader";


export class UsersContainer extends React.Component<UsersContainerType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)

            })
    }

    render() {

        return <>
            {this.props.isFetching
                ?<Preloader/>
                :<Users {...this.props}
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
        isFetching:state.userPage.isFetching,
    }

}

const UsersDispatchToProps = (dispatch: Dispatch): UsersDispatchToPropsType => {
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
        setIsFetching:(isFetching:boolean)=>{
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainerforApp = connect(UsersStateToProps, UsersDispatchToProps)(UsersContainer)
