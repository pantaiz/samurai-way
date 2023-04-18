import React from "react";
import s from './News.module.css';

const News = () => {
    return (<div className={s.banner}>

            <img alt={'logo'} src={'https://gamerwall.pro/uploads/posts/2022-05/1652459950_45-gamerwall-pro-p-shesternya-minimalizm-oboi-krasivo-70.png'}/>
            <p>News in the process of development</p>
        </div>
    )

}
export default News



/*

type ProfileInfoType={
    aboutMe: "The standard chunk of Lorem Ipsum used since is reproduced. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    contacts: {
       facebook:null
       website: null
       vk: null
       twitter: null
        instagram: null
        youtube: null
        github: null
        mainLink: null
    },
    lookingForAJob: true
    lookingForAJobDescription:'не ищу а дурачусь',
    fullNam: "Shay Jordon",
    userId: 1
    photos: {
        small: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg"
        large: null
    }
}
const ProfileInfo: {
    avatar: "https://i.ytimg.com/vi/ygkc7841kBk/hqdefault.jpg",
        id: 1,
        name: "Shay Jordon",
        nick: "Shay_Jordon",
        description: "The standard chunk of Lorem Ipsum used since is reproduced. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
        followers: 391,
        following: 30,
}*/
