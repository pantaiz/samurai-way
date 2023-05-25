import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";


type authReducerStateType = {
    id: null | string
    login: null | string
    email: null | string
    isAuth: boolean
}
const initionalState = {
    id: null,
    login: null,
    email: null,
    isAuth: true
}
export type ActtionType = setUserDataACType
type setUserDataACType = {
    type: "SET_USER_DATA"
    data: {
        id: null | string
        login: null | string
        email: null | string
    }
}

export const authReducer = (state: authReducerStateType = initionalState, action: ActtionType): authReducerStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export const setUserData = (id: string, email: string, login: string): setUserDataACType => {
    return {type: "SET_USER_DATA", data: {id, email, login}}
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(data => {
                let {id, email, login} = data
                dispatch(setUserData(id, email, login))
            })
    }
}
