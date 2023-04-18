import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {MyPostsData, ProfileInfoType, setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";

type ProfileStateToPropsType = {
    profileinfo: ProfileInfoType
    myPostsData: MyPostsData
}

type ProfileDispatchToPropsType = {
    setUserProfile: (data: any) => void
}

export type ProfilePropsType = ProfileStateToPropsType & ProfileDispatchToPropsType

class ProfileContainers extends React.Component<ProfilePropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1124`)
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


export const ProfileContainerForApp = connect(ProfileStateToProps, {setUserProfile})(ProfileContainers)

