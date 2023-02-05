import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileDataType, ProfileinfoData} from "../../index";

type ProfileProps={
    profileData:ProfileDataType
}


const Profile = (props:ProfileProps) => {
    return (<div className={s.content}>
            <ProfileInfo profileinfo={props.profileData.ProfileInfo}/>

            <MyPosts myPostsData={props.profileData.MyPostsData}/>
        </div>
    )

}
export default Profile
