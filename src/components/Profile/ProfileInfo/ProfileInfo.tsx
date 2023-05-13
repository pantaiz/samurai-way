import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileInfoType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/image/user.jpg";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoProps = {
    profileinfo: ProfileInfoType
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    return (
        <div className={s.Main}>
            <div className={s.Header}>
                    <span className={s.AvaName}>
                <img alt={'avatar'}
                     src={props.profileinfo.photos.small != null ? props.profileinfo.photos.small : userPhoto}/>
                        <span><div className={s.Name}>{props.profileinfo.fullName}</div>
                        <div className={s.Nick}>{props.profileinfo.fullName}<ProfileStatus status={'sadasaaaaaaada'}/></div></span></span>
                <button className={s.button}>+Follow</button>
            </div>
            <div className={s.Description}>{props.profileinfo.aboutMe}</div>
            <div className={s.Follower}><span className={s.Followers}>{Math.ceil(Math.random() * 100)} Followers</span>
                <span className={s.Following}>{Math.ceil(Math.random() * 100)} Following</span>
            </div>
        </div>
    )

}