import React from "react";
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div className={s.Main}>
            <div className={s.Header}>
                    <span className={s.AvaName}>
                <img alt={'avatar'} src={'https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg'}/>
                        <span><div className={s.Name}>Shay Jordon</div>
                        <div className={s.Nick}>@Shay_Jordon</div></span></span>
                <button className={s.button}>+Follow</button>
            </div>
            <div className={s.Description}>The standard chunk of Lorem Ipsum used since is reproduced. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature..</div>
            <div className={s.Follower}><span className={s.Followers}>391k Followers</span>
                <span className={s.Following}>30 Following</span>
            </div>
        </div>
    )

}