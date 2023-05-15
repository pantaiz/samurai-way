import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {
    getUserProfile,
    getUserStatus,
    MyPostsData,
    ProfileInfoType,
    updateUserSatatus
} from "../../redux/profile-reducer";

import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type ProfileStateToPropsType = {
    profileinfo: ProfileInfoType
    myPostsData: MyPostsData
    isAuth:boolean
    status:string
}
export type ParamsPropsType = {
    userId: string | undefined;
}
type ProfileDispatchToPropsType = {
    getUserProfile: (userId: string | number) => void,
    getUserStatus: (userId: string | number) => void,
    updateUserSatatus: (userId: string | number) => void,
}

export type ProfilePropsType =
    ProfileStateToPropsType
    & ProfileDispatchToPropsType
    & RouteComponentProps<ParamsPropsType>

export class ProfileContainers extends React.Component<ProfilePropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId
       if (!userId) userId = '25482'
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props}/>
        )
    }
}

const ProfileStateToProps = (state: AppStateType): ProfileStateToPropsType => {
    return (
        {
            profileinfo: state.profileReducer.ProfileInfo,
            myPostsData: state.profileReducer.MyPostsData,
            isAuth:state.auth.isAuth,
            status:state.profileReducer.status
        }
    )
}
export  default compose<ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(ProfileStateToProps, {getUserProfile,getUserStatus,updateUserSatatus}),
)(ProfileContainers)
