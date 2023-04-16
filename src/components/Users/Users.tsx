import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/image/user.jpg";
import axios from "axios";
import {UsersDispatchToPropsType, UsersPropsType, UsersStateToPropsType} from "./UsersContainer";


export class Users extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)


        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (<div className={s.banner}>
                <div>
                    {pages.map(p => {
                        /*Добавил небольшой фильтр страничек, что бы сразу не так много выскакивало,
                        есть много косяков, типо с максимальной длинной нету взаимосвязи, и с 1ым э
                        элементом тоже*/
                            return p >= this.props.currentPage - 3 && p <= this.props.currentPage + 3
                                ? <span
                                    onClick={(e) => this.onPageChanged(p)}
                                    className={this.props.currentPage === p ? s.selectedPage : ''
                                    }>
                                    {p}
                            </span>
                                :<> </>

                        }
                    )}
                </div>
                {this.props.users.map((a: any) => <div key={a.id}>
                    <span>
                    <div>
                        <img alt={'avatar'} className={s.avatarimg}
                             src={a.photos.small != null ? a.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {a.followed ?
                            <button onClick={() => this.props.unfollow(a.id)}>UnFollow</button> :
                            <button onClick={() => this.props.follow(a.id)}>Follow</button>}

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
}