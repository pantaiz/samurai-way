import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import  ProfileContainerForApp from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainerforApp} from "./components/Users/UsersContainer";
import { HeaderContainerForApp} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


type AppProps={
  /*  state:AppStateType
    dispatch:dispatchType*/
}

function App(props:AppProps) {
    return (

            <div className={'app-wraper'}>
                <HeaderContainerForApp/>
                <Navbar/>
                <div className={"app-wraper-content"}>
                    <Route path={`/Profile/:userId?`} render={() => <ProfileContainerForApp/>} />
                    <Route path={"/dialogs"} render={() => <DialogsContainer />} />
                    <Route path={"/Users"} render={() => <UsersContainerforApp />} />
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                    <Route path={"/login"} component={Login}/>
                </div>
            </div>

    );
}


export default App;
