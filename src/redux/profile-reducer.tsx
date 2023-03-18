import {v1} from "uuid";
import {ActtionType, addPostType, ProfileDataType, updateNewPostTextsType} from "../index";

export const profileReducer :(state:ProfileDataType, action:ActtionType)=> ProfileDataType =(state,action) => {
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