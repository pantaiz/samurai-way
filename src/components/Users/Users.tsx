import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/image/user.jpg";
import {UsersContainerType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersAPIComponentProps = { onPageChanged: (p: number) => void }
type UsersPropsType = UsersContainerType & UsersAPIComponentProps

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)


    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (<div className={s.banner}>
            <div>
                {pages.map(p => {
                        /*Добавил небольшой фильтр страничек, что бы сразу не так много выскакивало,
                        есть много косяков, с максимальной длинной нет взаимосвязи, и с 1ым э
                        элементом тоже*/
                        return p >= props.currentPage - 3 && p <= props.currentPage + 3
                            ? <span
                                key={p}
                                onClick={() => props.onPageChanged(p)}
                                className={props.currentPage === p ? s.selectedPage : ''
                                }>
                                    {p}
                            </span>
                            : ''

                    }
                )}
            </div>
            {props.users.map((a: any) => <div key={a.id}>
                    <span>
                    <div>
                        <NavLink to={'/profile/' + a.id}>
                        <img alt={'avatar'} className={s.avatarimg}
                             src={a.photos.small != null ? a.photos.small : userPhoto}/></NavLink>
                    </div>
                    <div>
                        {a.followed
                            ?<button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${a.id}`,{withCredentials: true,
                                    headers:{'API-KEY':'02f68ae0-9dc2-463a-b554-75c132eaf3da'}}
                                )
                                    .then(response=>{
                                        if (response.data.resultCode==0){
                                            props.unfollow(a.id)
                                        }
                                    })


                            }}>UnFollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${a.id}`,{},{withCredentials: true,
                                    headers:{'API-KEY':'02f68ae0-9dc2-463a-b554-75c132eaf3da'}}
                                )
                                    .then(response=>{
                                        if (response.data.resultCode==0){
                                            props.follow(a.id)
                                        }
                                    })


                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span><div>{a.name}</div><div> </div>
                        {a.status}</span>
                    <span><div>{'a.location.country'}</div><div>{'a.location.city'}</div></span>
                </span>
            </div>)}
            <p>USERS</p>
        </div>
    )

}