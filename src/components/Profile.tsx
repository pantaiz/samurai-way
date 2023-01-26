import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return( <div className={s.content}>
        <div className={ s.baner}>
            <img alt={'backround-image'} src={'https://img3.goodfon.ru/original/1280x1024/2/5a/pasture-the-bavarian-alps.jpg'}/>
        </div>

        <div>
            ava+description
        </div>

        <div>
            My post
            <div className={s.posts}>New Post</div>
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
        </div>
    </div>
    )

}
export default Profile