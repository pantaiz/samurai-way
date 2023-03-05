import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { StateType } from '.';


type AppProps={
    state:StateType
    addPost:(postMessage: string)=>void
    updateNewPostTexts:(postMessage: string)=>void
}

function App(props:AppProps) {
    return (

            <div className={'app-wraper'}>
                <Header/>
                <Navbar/>
                <div className={"app-wraper-content"}>
                    <Route path={"/Profile"} render={() => <Profile updateNewPostTexts={props.updateNewPostTexts} addPost={props.addPost} profileData={props.state.ProfileData}/>} />
                    <Route path={"/dialogs"} render={() => <Dialogs dialogsData={props.state.DialogsData}/>} />
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>

    );
}


export default App;
