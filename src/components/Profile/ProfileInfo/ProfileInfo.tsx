import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileinfoData} from "../../../index";

type ProfileInfoProps={
    profileinfo:ProfileinfoData
}
export const ProfileInfo = (props:ProfileInfoProps) => {
    return (
        <div className={s.Main}>
            <div className={s.Header}>
                    <span className={s.AvaName}>
                <img alt={'avatar'} src={props.profileinfo.avatar}/>
                        <span><div className={s.Name}>{props.profileinfo.name}</div>
                        <div className={s.Nick}>{props.profileinfo.nick}</div></span></span>
                <button className={s.button}>+Follow</button>
            </div>
            <div className={s.Description}>{props.profileinfo.description}</div>
            <div className={s.Follower}><span className={s.Followers}>{props.profileinfo.followers}k Followers</span>
                <span className={s.Following}>{props.profileinfo.following} Following</span>
            </div>
        </div>
    )

}