import {StateType} from "../index";

export let state: StateType = {
    ProfileData: {
        MyPostsData: {
            PostData: [
                {id: 1, message: "1. Follow people you like by clicking on the ’+ Follow’ button to see their posts in your feed." +
                        "2. Share your thoughts with others and gain a following." +
                        "Happy Vogel to you!", likeCounts: 15},
                {id: 2, message: "Nam malis menandri ea, facete debitis volumus est ut, commune placerat nominati ei sea. Labore alterum probatus no sed, ius ea quas iusto inermis, ex tantas populo nonumes nam. Quo ad verear copiosae gubergren, quis commodo est et. ", likeCounts: 20},
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