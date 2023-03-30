import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";

const rootReducers=combineReducers({
    profileReducer:profileReducer,
    dialogReducer:dialogReducer,
    userPage:usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducers>

 const store=createStore(rootReducers)
export default store