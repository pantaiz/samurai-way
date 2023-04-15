import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/image/user.jpg";
import axios from "axios";
import {UsersDispatchToPropsType, UsersPropsType, UsersStateToPropsType} from "./UsersContainer";


export class Users extends React.Component<UsersPropsType,any > {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users ')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        let pagesCount =this.props.totalUserCount/this.props.pageSize


        const pages=[]
        for (let i = 1; i <=pagesCount ; i++) {
        pages.push(i)
        }
        return (<div className={s.banner}>
                <div>
                    {pages.map(p=>{
                        return <span className={this.props.}>{p}</span>
                    })}
                </div>
                {this.props.users.map((a: any) => <div key={a.id}>
                    <span>
                    <div>
                        <img className={s.avatarimg} src={a.photos.small != null ? a.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {a.followed ?
                            <button onClick={() => this.props.unfollow(a.id)}>UnFollow</button> :
                            <button onClick={() => this.props.follow(a.id)}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span><div>{a.fullName}</div><div></div>
                        {a.status}</span>
                    <span><div>{'a.location.country'}</div><div>{'a.location.city'}</div></span>
                </span>
                </div>)}
                <p>USERS</p>
            </div>
        )
    }
}