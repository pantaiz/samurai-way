import React from "react";
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.baner}>
                <img alt={'backround-image'}
                     src={'https://i.pinimg.com/originals/59/0c/c5/590cc5993b65315e6e552eb16f7ad98c.jpg'}/>
            </div>
            <div className={s.Ava}>
                ava+description
            </div>
        </div>
    )

}