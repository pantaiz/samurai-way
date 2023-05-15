import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";



const Profile = (props:ProfilePropsType) => {
    return (<div className={s.content}>
            <ProfileInfo status={props.status} updateStatus={props.updateUserSatatus} profileinfo={props.profileinfo}/>
            <MyPosts postData={props.myPostsData.PostsData} />
        </div>
    )

}
export default Profile
