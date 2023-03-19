import {v1} from "uuid";
import {ActtionType, addPostType, ProfileDataType, updateNewPostTextsType} from "../index";

let initionalState:ProfileDataType={
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
        PostData: [
            {
                id: v1(),
                avatar: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
                nick: "@Shay_Jordon", name: "Shay Jordon",
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

export const profileReducer :(state:ProfileDataType, action:ActtionType)=> ProfileDataType =(state=initionalState,action) => {
    switch (action.type) {
        case 'add-Post':
            let newPost = {
                id: v1(),
                avatar: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
                nick: "@Shay_Jordon",
                name: "Shay Jordon",
                message: state.MyPostsData.AddPostData.newPostText,
                likeCounts: 0
            }
            state.MyPostsData.PostData.unshift(newPost)
            state.MyPostsData.AddPostData.newPostText = ''
            return state
        case 'update-New-Post-Texts':
            state.MyPostsData.AddPostData.newPostText = action.newPostText
            return state
        default:
            return state
    }
}
export const updateNewPostTextsActionCreator:(newPostText:string)=>updateNewPostTextsType = (newPostText) => {
    return  {type:"update-New-Post-Texts",newPostText:newPostText}
}
export const AddPostActionCreator:()=>addPostType = () => {
    return  {type:"add-Post"}
}