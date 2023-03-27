import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {dispatchType, ProfileDataType, ProfileinfoData} from "../../index";

type ProfileProps={
    profileData:ProfileDataType
    dispatch:dispatchType
}


const Profile = (props:ProfileProps) => {
    return (<div className={s.content}>
            <ProfileInfo profileinfo={props.profileData.ProfileInfo}/>

            <MyPosts />
        </div>
    )

}
export default Profile
