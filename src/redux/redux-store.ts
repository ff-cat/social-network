import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from './profile-reducer'
import {dialogsReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {usersReducer} from './users-reducer'
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

export type StoreType = typeof store
export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.store = store

