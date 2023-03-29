import {v1} from "uuid";



export type ActtionType = followType | unfollowType

export type followType = {
    type: 'follow'

}
export type unfollowType = {
    type: 'un-follow'
}

let initionalState = {
   users:[
       {id:v1,followed:true,fullName:'Dmitry',status:'Iam a boss',location:{city:'Minsk',country:'Belarus'}},
       {id:v1,followed:false,fullName:'Sasha',status:'Iam a boss',location:{city:'Moskow',country:'Russian'}},
       {id:v1,followed:true,fullName:'Andrew',status:'Iam a boss',location:{city:'Kiev',country:'Ukraine'}},
   ],

}

export const dialogReducer = (state = initionalState, action: ActtionType) => {
    switch (action.type) {

        default:
            return state
    }
}
export const followAC: () => followType = () => {
    return {type: 'follow'}
}
export const unfollowAC: (() => unfollowType) = () => {
    return {type: 'un-follow'}
}
