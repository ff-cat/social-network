import React from 'react';
import './App.css';
import Navbar from "./components/Nav/Navbar";
import {Route, Routes} from 'react-router-dom'
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


const App: React.FC = () => {
    return (
        <div>
            <HeaderContainer/>
            <div className="app-wrapper">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>

    );
}

export default App;
