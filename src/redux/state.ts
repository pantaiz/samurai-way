import {StateType} from "../index";

export let state: StateType = {
    ProfileData: {
        MyPostsData: {
            PostData: [
                {id: 1, message: "It\'s my first comment", likeCounts: 15},
                {id: 2, message: "Hi, how are you? ", likeCounts: 20},
            ],
            Mypost: []
        },
    },
    DialogsData: {
        messageData: [
            {id: 1, text: "Hi"},
            {id: 2, text: "Darova chel"},
            {id: 3, text: "It's test messag"},
            {id: 4, text: "Ti cho bla?"},
            {id: 5, text: "Vilkoy v glaz?"},
            {id: 6, text: "Aga"},
        ],
        dialogsItemData: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Marharita"},
            {id: 3, name: "Roma"},
            {id: 4, name: "Vitalya"},
            {id: 5, name: "Artem"},
            {id: 6, name: "Jenya"},
        ]

    },
}