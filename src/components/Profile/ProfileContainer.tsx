import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {getUserProfile, MyPostsData, ProfileInfoType} from "../../redux/profile-reducer";

import {RouteComponentProps, withRouter} from "react-router-dom";


type ProfileStateToPropsType = {
    profileinfo: ProfileInfoType
    myPostsData: MyPostsData
}
export type ParamsPropsType = {
    userId: string | undefined;
}
type ProfileDispatchToPropsType = {
    getUserProfile: (userId: string | number) => void
}

export type ProfilePropsType =
    ProfileStateToPropsType
    & ProfileDispatchToPropsType
    & RouteComponentProps<ParamsPropsType>

export class ProfileContainers extends React.Component<ProfilePropsType, any> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getUserProfile(userId)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainers)

export const ProfileContainerForApp = connect(ProfileStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent)

