import React from 'react';
import './App.css';

function App() {
    return (
        <div className={'app-wraper'}>
            <header className={'header'}>
                <img src='https://www.logolynx.com/images/logolynx/56/567ad0122e6b61fd940ab566f6fd6598.png'/>
            </header>
            <nav className={'nav'}>
                <div><a href={'#'}>Profile</a></div>
                <div><a href={'#'}>Messages</a></div>
                <div><a href={'#'}>News</a></div>
                <div><a href={'#'}>Settings</a></div>
            </nav>
            <div className={'content'}>
                <div className={"background-Content"}>
                    <img src={'https://img3.goodfon.ru/original/1280x1024/2/5a/pasture-the-bavarian-alps.jpg'}/>
                </div>

                <div>
                    ava+description
                </div>

                <div>
                    My post
                    <div>New Post</div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>

        </div>
    );
}


export default App;
