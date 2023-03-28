import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {MyPostsData, ProfileinfoData} from "../../redux/profile-reducer";

type ProfileStateToPropsType = {
    profileinfo: ProfileinfoData
    myPostsData:MyPostsData
}

type ProfileDispatchToPropsType = {}

export type ProfilePropsType = ProfileStateToPropsType & ProfileDispatchToPropsType

const ProfileStateToProps = (state: AppStateType): ProfileStateToPropsType => {
    return (
        {
            profileinfo: state.profileReducer.ProfileInfo,
            myPostsData:state.profileReducer.MyPostsData
        }
    )
}

const ProfileDispatchToProps = {}

export const ProfileContainer = connect(ProfileStateToProps, ProfileDispatchToProps)(Profile)

