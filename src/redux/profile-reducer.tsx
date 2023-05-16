import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


export type ProfileInfoType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: string | number
    photos: {
        small: string | null
        large: string | null
    }
}

export type ProfileDataType = {
    ProfileInfo: ProfileInfoType
    MyPostsData: MyPostsData
    status: string
}
export type MyPostsData = {
    PostsData: Array<PostData>,
    AddPostData: AddPostData
}

export type AddPostData = {
    newPostText: string,
}

export type PostData = {
    id: string,
    avatar: string,
    name: string,
    nick: string
    message: string,
    likeCounts: number
}
let initionalState: ProfileDataType = {
    ProfileInfo: {
        aboutMe: "The standard chunk of Lorem Ipsum used since is reproduced. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'не ищу а дурачусь',
        fullName: "Shay Jordon",
        userId: 1,
        photos: {
            small: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
            large: null,
        }
    }
    ,
    MyPostsData: {
        PostsData: [
            {
                id: v1(),
                avatar: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
                nick: "@Shay_Jordon",
                name: "Shay Jordon",
                message: "1. Follow people you like by clicking on the ’+ Follow’ button to see their posts in your feed." +
                    "2. Share your thoughts with others and gain a following." +
                    "Happy Vogel to you!", likeCounts: 15
            },
            {
                id: v1(),
                avatar: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
                nick: "@Shay_Jordon",
                name: "Shay Jordon",
                message: "Nam malis menandri ea, facete debitis volumus est ut, commune " +
                    "placerat nominati ei sea. Labore alterum probatus no sed, ius ea quas iusto inermis," +
                    " ex tantas populo nonumes nam. Quo ad verear copiosae gubergren, quis commodo est et. ",
                likeCounts: 40
            },

        ],
        AddPostData: {
            newPostText: ''
        }
    },
    status: ''
}


export const profileReducer = (state: ProfileDataType = initionalState, action: ActtionType): ProfileDataType => {
    switch (action.type) {
        case "SET_USER_PROFILE": {
            return {...state, ProfileInfo: action.profileInfo}
        }
        case 'add-Post': {

            debugger
            let newPost = {
                id: v1(),
                avatar: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
                nick: "@Shay_Jordon",
                name: "Shay Jordon",
                message: action.postMessage,
                likeCounts: 0
            }
            const stateCopy = {
                ...state,
                MyPostsData: {
                    ...state.MyPostsData,
                    PostsData: [newPost, ...state.MyPostsData.PostsData]
                }
            }
            stateCopy.MyPostsData.AddPostData.newPostText = ''
            return stateCopy
        }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

type ActtionType = addPostType  | setUserProfileACType | setStatusType
export type addPostType =  ReturnType<typeof AddPostActionCreator>
export type setUserProfileACType = ReturnType<typeof setUserProfile>
type setStatusType = ReturnType<typeof setStatusAC>

export const AddPostActionCreator= (postMessage:string)  => {
    return {type: "add-Post" ,postMessage} as const
}
export const setUserProfile = (profileInfo: ProfileInfoType) => {
    return {type: "SET_USER_PROFILE", profileInfo} as  const
}
export const setStatusAC = (status: string) => {
    return {type: "SET-STATUS", status} as const
}



export const getUserProfile = (userId: number | string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })

    }
}
export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusAC(response.data))
        })
    }
}
export const updateUserSatatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })

    }
}