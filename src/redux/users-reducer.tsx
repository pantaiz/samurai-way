import {v1} from "uuid";


export type ActtionType = followType | unfollowType|setUsersAC

export type followType = {
    type: 'follow',
    userID: string

}
export type unfollowType = {
    type: 'un-follow',
    userID: string
}
export type setUsersAC = {
    type: 'set-users',
    users: UsersType
}
export type UsersType = Array<{ id: string, photos:{small:string,large:string}, followed: boolean, fullName: string, status: string, location: { city: string, country: string } }>
type initionalStateType = {
    users: UsersType
}

let initionalState: initionalStateType = {
    users: [],

}

export const usersReducer = (state: initionalStateType = initionalState, action: ActtionType): initionalStateType => {
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
                ...state,users:[...state.users,...action.users]
            };

        default:
            return state
    }
}
export const followAC = (userID: string): followType => {
    return {type: 'follow', userID: userID}
}
export const unfollowAC = (userID: string): unfollowType => {
    return {type: 'un-follow', userID: userID}
}
export const setUsersAC = (users:UsersType ): setUsersAC => {
    return {type: 'set-users', users:users}
}
