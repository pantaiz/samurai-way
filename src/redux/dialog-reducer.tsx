import {v1} from "uuid";
import {ActtionType, addNewMyMessageType, DialogsDataType, updatedNewMyMessageType} from "../index";

const dialogReducer:(state:DialogsDataType, action:ActtionType)=>DialogsDataType = (state, action) => {
    switch (action.type) {
        case 'updated-New-My-Message':
            state.messageData.messageSender.newMyMessage = action.newMyMessage
            return state
        case 'add-New-My-Message':
            let NewMyMessage = {
                id: v1(),
                user: {
                    name: 'Some Name',
                },
                message: {
                    text: state.messageData.messageSender.newMyMessage,
                    time: '22:00',
                }
            }
            state.messageData.myMessage.push(NewMyMessage)
            state.messageData.messageSender.newMyMessage = ''
            return state
        default:
            return state
    }
}
export const updatedNewMyMessageActionCreator:(newMyMessage:string)=>updatedNewMyMessageType = (newMyMessage) => {
    return  {type:"updated-New-My-Message",newMyMessage:newMyMessage}
}
export const addNewMyMessageActionCreator:(()=>addNewMyMessageType) = () => {
    return  {type:"add-New-My-Message"}
}

export default dialogReducer