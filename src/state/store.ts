import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from './reducers/profile-reducer'
import {dialogsReducer} from './reducers/dialogs-reducer'
import {sidebarReducer} from './reducers/sidebar-reducer'
import {usersReducer} from './reducers/users-reducer'
import {authReducer} from "./reducers/auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type RootStateType = ReturnType<typeof reducers>
// export type StoreType = typeof store

//@ts-ignore
window.store = store

