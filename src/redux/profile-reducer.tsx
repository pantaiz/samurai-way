import {v1} from "uuid";

export type ProfileDataType = {

    ProfileInfo: ProfileinfoData
    MyPostsData: MyPostsData
}
export type ProfileinfoData = {
    avatar: string,
    id: number,
    name: string,
    nick: string,
    description: string,
    followers: number,
    following: number,
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
        avatar: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
        id: 1,
        name: "Shay Jordon",
        nick: "Shay_Jordon",
        description: "The standard chunk of Lorem Ipsum used since is reproduced. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
        followers: 391,
        following: 30,
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
}
type ActtionType = addPostType | updateNewPostTextsType
export type addPostType = {
    type: 'add-Post'

}
export type updateNewPostTextsType = {
    type: 'update-New-Post-Texts'
    newPostText: string
}


export const profileReducer = (state: ProfileDataType = initionalState, action: ActtionType): ProfileDataType => {
    switch (action.type) {
        case 'add-Post': {
            debugger
            let newPost = {
                id: v1(),
                avatar: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
                nick: "@Shay_Jordon",
                name: "Shay Jordon",
                message: state.MyPostsData.AddPostData.newPostText,
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
        case 'update-New-Post-Texts':

            const stateCopy = {...state}
            stateCopy.MyPostsData.AddPostData.newPostText = action.newPostText
            return stateCopy
        default:
            return state
    }
}
export const updateNewPostTextsActionCreator: (newPostText: string) => updateNewPostTextsType = (newPostText) => {
    return {type: "update-New-Post-Texts", newPostText: newPostText}
}
export const AddPostActionCreator: () => addPostType = () => {
    return {type: "add-Post"}
}