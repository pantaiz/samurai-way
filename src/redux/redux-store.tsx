import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";

const reducers=combineReducers({
    profileReducer,
    dialogReducer
})

export type AppStateType = ReturnType<typeof reducers>
export type storeType = ReturnType<typeof createStore>

export const store=createStore(reducers)