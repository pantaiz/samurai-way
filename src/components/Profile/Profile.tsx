import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileDataType} from "../../index";

type Profile={
    profileData:ProfileDataType
}


const Profile = (props:Profile) => {
    return (<div className={s.content}>
            <ProfileInfo/>

            <MyPosts myPostsData={props.profileData.MyPostsData}/>
        </div>
    )

}
export default Profile