import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";

const rootReducers=combineReducers({
    profileReducer:profileReducer,
    dialogReducer:dialogReducer,
})

export type AppStateType = ReturnType<typeof rootReducers>

 const store=createStore(rootReducers)
export default store