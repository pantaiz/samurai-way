import React from "react";
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import axios from "axios";
import userPhoto from '../../assets/image/user.jpg'
export const Users = (props:UsersPropsType) => {
let users=[
        {
            id: v1(),
            photoURL:'https://www.meme-arsenal.com/memes/9021a567c31b9d2326dbe4ad0fafa5f4.jpg',
            followed: true,
            fullName: 'Dmitry',
            status: 'Iam a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoURL:'https://www.meme-arsenal.com/memes/9021a567c31b9d2326dbe4ad0fafa5f4.jpg',
            followed: false,
            fullName: 'Sasha',
            status: 'Iam a boss',
            location: {city: 'Moskow', country: 'Russian'}
        },
        {
            id: v1(),
            photoURL:'https://www.meme-arsenal.com/memes/9021a567c31b9d2326dbe4ad0fafa5f4.jpg',
            followed: true,
            fullName: 'Andrew',
            status: 'Iam a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        }, {
        id: v1(),
        photoURL:'https://www.meme-arsenal.com/memes/9021a567c31b9d2326dbe4ad0fafa5f4.jpg',
        followed: true,
        fullName: 'Andrew',
        status: 'Iam a boss',
        location: {city: 'Kiev', country: 'Ukraine'}
    },
    ]

    if (props.users.length===0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users ')
            .then(response=>{
                props.setUsers(response.data.items)
            })

    }

    return (<div className={s.banner}>
            {props.users.map(a=><div key={a.id}>
                <span>

                    <div >
                        <img className={s.avatarimg} src={a.photos.small!=null? a.photos.small:userPhoto}/>
                    </div>
                    <div>
                        {a.followed?
                            <button onClick={()=>props.unfollow(a.id)}>UnFollow</button>:
                            <button onClick={()=>props.follow(a.id)}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span><div>{a.fullName}</div><div></div>{a.status}</span>
                    <span><div>{'a.location.country'}</div><div>{'a.location.city'}</div></span>
                </span>
            </div>)}
            <p>USERS</p>
        </div>
    )

}
