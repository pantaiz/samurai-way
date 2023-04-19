import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

const rootReducers=combineReducers({
    profileReducer:profileReducer,
    dialogReducer:dialogReducer,
    userPage:usersReducer,
    auth:authReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

const store=createStore(rootReducers)
export default store