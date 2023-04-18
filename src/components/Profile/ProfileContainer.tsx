import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {MyPostsData, ProfileinfoData} from "../../redux/profile-reducer";
import axios from "axios";
/*

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

const ProfileDispatchToProps=() => {}

export const ProfileContainer = connect(ProfileStateToProps, ProfileDispatchToProps)(Profile)

*/

type ProfileStateToPropsType = {
    profileinfo: ProfileinfoData
    myPostsData: MyPostsData
}

type ProfileDispatchToPropsType = {}

export type ProfilePropsType = ProfileStateToPropsType & ProfileDispatchToPropsType

class ProfileContainers extends React.Component<ProfilePropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const ProfileStateToProps = (state: AppStateType): ProfileStateToPropsType => {
    return (
        {
            profileinfo: state.profileReducer.ProfileInfo,
            myPostsData: state.profileReducer.MyPostsData
        }
    )
}

const ProfileDispatchToProps = () => {
}

export const ProfileContainerForApp = connect(ProfileStateToProps, ProfileDispatchToProps)(ProfileContainers)

