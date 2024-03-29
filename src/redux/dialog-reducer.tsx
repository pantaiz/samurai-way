import {v1} from "uuid";

export type DialogsDataType = {
    messageData: MessageDataType,
    dialogsItemData: Array<DialogsItemDataType>
}
export type MessageDataType = {
    friendMessage: Array<FriendMessageData>,
    myMessage: Array<MyMessageData>
    messageSender: messageSenderType
}
export type  DialogsItemDataType = {
    id: number,
    name: string
    avatar: string
}//Типизируем наши входные диалоги
export type messageSenderType = {
    newMyMessage: string
}
export type  MyMessageData = {
    id: string,
    user: {
        name: string
    },
    message: {
        text: string
        time: string
    },
}
export type FriendMessageData = {
    id: number,
    user: {
        name: string
    },
    message: {
        text: string
        time: string
    },
}



let initionalState: DialogsDataType = {
    messageData: {
        myMessage: [
            {
                id: v1(),
                user: {
                    name: 'Some Name',
                },
                message: {
                    text: 'some textsome textsomsome textsome textsome texe textsome textsome textsome textsome text', // можно менять
                    time: '22:00',
                }
            },
            {
                id: v1(),
                user: {
                    name: 'Some Name',
                },
                message: {
                    text: 'some textsome textsomsome textsome textsome texe textsome textsome textsome textsome text', // можно менять
                    time: '22:00',
                }
            }, {
                id: v1(),
                user: {
                    name: 'Some Name',
                },
                message: {
                    text: 'some textsome textsomsome textsome textsome texe textsome textsome textsome textsome text', // можно менять
                    time: '22:00',
                }
            }
        ],
        friendMessage: [
            {
                id: 100,
                user: {
                    name: 'Friend Name',
                },
                message: {
                    text: 'extsome textsomsome textsome textsome texe textsome textsome textsomsome textsome textsome texe textsome t', // можно менять
                    time: '22:00',
                },
            },
            {
                id: 101,
                user: {
                    name: 'Friend Name',
                },
                message: {
                    text: 'extsome textsomsome textsome textsome texe textsome textsome textsomsome textsome textsome texe textsome t', // можно менять
                    time: '22:00',
                },
            }
        ],
        messageSender: {
            newMyMessage: ''
        }
    },
    dialogsItemData: [
        {
            id: 1,
            avatar: "https://sun6-23.userapi.com/s/v1/if1/xOb3RwJMBmprThflM08jZSDpC8_6sNBh_Q6gTNIwsECXl37ok2y7u9kvn2YT3dSs3_KdiC0Q.jpg?size=50x50&quality=96&crop=0,291,750,750&ava=1",
            name: "Dimych"
        },
        {
            id: 2,
            avatar: "https://sun9-15.userapi.com/impf/c639617/v639617557/8445/ZWJgwiW7Z5g.jpg?size=640x800&quality=96&sign=f0b3e281f3127933a8fc0df305f2c54e&type=album",
            name: "Marharita"
        },
        {
            id: 3,
            avatar: "https://static3.vivoo.ru/datas/photos/800x800/fb/12/628a49c7c781f76c8cf4b7301299.jpg?0",
            name: "Roma"
        },
        {
            id: 4,
            avatar: "https://avatars.steamstatic.com/ef369244316f0cf89ce5aa02e94979d3a082a8c6_medium.jpg",
            name: "Vitalya"
        },
        {id: 5, avatar: "https://i08.fotocdn.net/s122/21f4308456162c17/user_m/2796889876.jpg", name: "Artem"},
        {id: 6, avatar: "https://i08.fotocdn.net/s122/21f4308456162c17/user_m/2796889876.jpg", name: "Jenya"},
    ]

}

export const dialogReducer = (state: DialogsDataType = initionalState, action: ActtionType): DialogsDataType => {
    switch (action.type) {

      /*  case 'updated-New-My-Message': {
            const stateCopy={...state}
            stateCopy.messageData.messageSender.newMyMessage=action.newMyMessage;
            return stateCopy
        }*/
        case "ADD-NEW-MESSAGE":
            let NewMyMessage = {
                id: v1(),
                user: {
                    name: 'Some Name',
                },
                message: {
                    text: action.newMyMessage,
                    time: '22:00',
                }
            }
            const stateCopy = {...state}
            stateCopy.messageData.myMessage=[...state.messageData.myMessage, NewMyMessage]
            stateCopy.messageData.messageSender.newMyMessage = ''
            return stateCopy
        default:
            return state
    }
}
export type ActtionType = addNewMyMessageType


export type addNewMyMessageType = ReturnType<typeof addNewMyMessageActionCreator>
/*export type updatedNewMyMessageType = ReturnType<typeof updatedNewMyMessageActionCreator>

export const updatedNewMyMessageActionCreator = () => {
    return {type: "updated-New-My-Message", }  as  const
}*/
export const addNewMyMessageActionCreator= (newMyMessage:string) => {
    return {type: "ADD-NEW-MESSAGE",newMyMessage} as  const
}
