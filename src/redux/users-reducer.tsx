import {v1} from "uuid";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";


export type ActtionType =
    followType
    | unfollowType
    | setUsersAC
    | setCurrentPageType
    | setTotalUserCountType
    | setIsFetchingType
    | setIsFollowingProgressType

export type followType = {
    type: 'follow',
    userID: string

}
export type setIsFetchingType = {
    type: 'TOOGLE_IS_FETCHING',
    isFetching: boolean

}
export type setIsFollowingProgressType = {
    type: "TOOGLE_IS_FOLLOWING_PROGRESS",
    isFetching: boolean
    userId: string | number
}
export type setCurrentPageType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number

}
export type setTotalUserCountType = {
    type: 'SET_TOTAL_USER_COUNT',
    totalUserCount: number

}
export type unfollowType = {
    type: 'un-follow',
    userID: string
}
export type setUsersAC = {
    type: 'set-users',
    users: UsersType
}
export type UsersType = Array<{
    id: string, photos: { small: string, large: string }, followed: boolean, fullName: string, status: string, location: { city: string, country: string }
}>
export type usersReducerStateType = {
    users: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: (number | string)[]
}

let initionalState: usersReducerStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: usersReducerStateType = initionalState, action: ActtionType): usersReducerStateType => {
    switch (action.type) {
        case "follow":
            return {
                ...state,
                users: state.users.map(a => a.id === action.userID ? {...a, followed: true} : a)
            };
        case "un-follow":
            return {
                ...state,
                users: state.users.map(a => a.id === action.userID ? {...a, followed: false} : a)
            };
        case 'set-users':
            return {
                ...state, users: [...action.users]
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            };
        case "SET_TOTAL_USER_COUNT":
            return {
                ...state, totalUserCount: action.totalUserCount
            };
        case "TOOGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            };
        case "TOOGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };

        default:
            return state
    }
}
export const follow = (userID: string): followType => {
    return {type: 'follow', userID: userID}
}
export const unfollow = (userID: string): unfollowType => {
    return {type: 'un-follow', userID: userID}
}
export const setUsers = (users: UsersType): setUsersAC => {
    return {type: 'set-users', users: users}
}
export const setCurrentPage = (currentPage: number): setCurrentPageType => {
    return {type: "SET_CURRENT_PAGE", currentPage: currentPage}
}
export const setTotalUserCount = (totalUserCount: number): setTotalUserCountType => {
    return {type: "SET_TOTAL_USER_COUNT", totalUserCount: totalUserCount}
}
export const setIsFetching = (isFetching: boolean): setIsFetchingType => {
    return {type: "TOOGLE_IS_FETCHING", isFetching: isFetching}
}
export const setIsFollowingProgress = (userId: string | number, isFetching: boolean,): setIsFollowingProgressType => {
    return {type: "TOOGLE_IS_FOLLOWING_PROGRESS", userId, isFetching}
}


export const getUsersThunkCreator = (currentPage:number|string, pageSize:number|string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
            })

    }
}
export const onPageChangedThunk = (pageNumber:number, pageSize:number|string) => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(setIsFetching(true))
        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))

            })

    }
}

export const acceptFollow = (id:string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(id,true))
        usersAPI.setUnFollow(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(follow(id))
                }
                dispatch(setIsFollowingProgress(id,false))
            })
}
}
export const acceptUnFollow = (id:string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(id,true))
        usersAPI.setFollow(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollow(id))
                }
                dispatch(setIsFollowingProgress(id,false))
            })
}
}
