import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return( <div className={s.content}>
        <div className={ s.baner}>
            <img alt={'backround-image'} src={'https://img3.goodfon.ru/original/1280x1024/2/5a/pasture-the-bavarian-alps.jpg'}/>
        </div>

        <div>
            ava+description
        </div>

        <MyPosts/>
    </div>
    )

}
export default Profile