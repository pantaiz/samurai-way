import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={s.content}>
            <div className={s.baner}>
                <img alt={'backround-image'}
                     src={'https://i.pinimg.com/originals/59/0c/c5/590cc5993b65315e6e552eb16f7ad98c.jpg'}/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )

}
export default Profile