import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {MyPostsData, ProfileInfoType, setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileStateToPropsType = {
    profileinfo: ProfileInfoType
    myPostsData: MyPostsData
}
export type ParamsPropsType = {
    userId: string | undefined;
}
type ProfileDispatchToPropsType = {
    setUserProfile: (data: any) => void
}

export type ProfilePropsType =
    ProfileStateToPropsType
    & ProfileDispatchToPropsType
    & RouteComponentProps<ParamsPropsType>

export class ProfileContainers extends React.Component<ProfilePropsType, any> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) userId='2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainers)

export const ProfileContainerForApp = connect(ProfileStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

