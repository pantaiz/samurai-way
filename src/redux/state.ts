import {StateType, StoreType} from "../index";
import {v1} from "uuid";

export const store:StoreType ={
    _state: {
        ProfileData: {
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
                    newPostText: 'asd'
                }
            },
        },
        DialogsData: {
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

        },
    },
    getState(){
        return this._state
    },
    rerenderPost(state:StateType){
        console.log('123')
    },
    updatedNewMyMessage  (newMyMessage: string) {
        this._state.DialogsData.messageData.messageSender.newMyMessage = newMyMessage
        this.rerenderPost(store._state)
    },
    addNewMyMessage  ()  {
        let NewMyMessage = {
            id: v1(),
            user: {
                name: 'Some Name',
            },
            message: {
                text:  store._state.DialogsData.messageData.messageSender.newMyMessage,
                time: '22:00',
            }
        }
        this._state.DialogsData.messageData.myMessage.push(NewMyMessage)
        this._state.DialogsData.messageData.messageSender.newMyMessage=''
        this.rerenderPost(this._state)
    },
    addPost  ()  {
        let newPost = {
            id: v1(),
            avatar: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
            nick: "@Shay_Jordon",
            name: "Shay Jordon",
            message: store._state.ProfileData.MyPostsData.AddPostData.newPostText,
            likeCounts: 0
        }
        this._state.ProfileData.MyPostsData.PostData.unshift(newPost)
        this._state.ProfileData.MyPostsData.AddPostData.newPostText = ''
        this.rerenderPost(this._state)
    },
    updateNewPostTexts  (newPostText: string)  {
        this._state.ProfileData.MyPostsData.AddPostData.newPostText = newPostText
        this.rerenderPost(this._state)
    },
    subscribe  (observer:(state:StateType)=>void)  {
        this.rerenderPost=observer
    }
}
/*
export let state: StateType = {
    ProfileData: {
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
                newPostText: 'asd'
            }
        },
    },
    DialogsData: {
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

    },
}


export const updatedNewMyMessage  (newMyMessage: string) {
    state.DialogsData.messageData.messageSender.newMyMessage = newMyMessage
    rerenderPost(state)
};
export const addNewMyMessage = () => {
    let NewMyMessage = {
        id: v1(),
        user: {
            name: 'Some Name',
        },
        message: {
            text:  state.DialogsData.messageData.messageSender.newMyMessage,
            time: '22:00',
        }
    }
    state.DialogsData.messageData.myMessage.push(NewMyMessage)
    state.DialogsData.messageData.messageSender.newMyMessage=''
    rerenderPost(state)
}

export const addPost = () => {
    let newPost = {
        id: v1(),
        avatar: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
        nick: "@Shay_Jordon",
        name: "Shay Jordon",
        message: state.ProfileData.MyPostsData.AddPostData.newPostText,
        likeCounts: 0
    }
    state.ProfileData.MyPostsData.PostData.unshift(newPost)
    state.ProfileData.MyPostsData.AddPostData.newPostText = ''
    rerenderPost(state)
}

export const updateNewPostTexts = (newPostText: string) => {
    state.ProfileData.MyPostsData.AddPostData.newPostText = newPostText
    rerenderPost(state)
}

export const subscribe = (observer:(state:StateType)=>void) => {
    rerenderPost=observer
}
*/
