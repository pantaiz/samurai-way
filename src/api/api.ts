import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {'API-KEY': '02f68ae0-9dc2-463a-b554-75c132eaf3da'}
})
export const usersAPI = {
    getUsers  (currentPage: string | number, pageSize: string | number)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize} `,).then(response => {
            return response.data
        })
    },
    setFollow  (id: string | number) {
        return instance.delete(`follow/${id}`,
        ).then(response => {
            return response.data
        })
    },
    setUnFollow  (id: string | number) {
        return instance.post(`follow/${id}`,
        ).then(response => {
            return response.data
        })
    }
}


export const loginAPI = {
    getAuthMe  ()  {
        return instance.get(`auth/me `,
        ).then(response => {
            return response.data.data
        })
    }
}


/*get users
axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `, {
    withCredentials: true,
    headers: {'API-KEY': '02f68ae0-9dc2-463a-b554-75c132eaf3da'}
})*/
/* set follow
axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${a.id}`,{withCredentials: true,
                                    headers:{'API-KEY':'02f68ae0-9dc2-463a-b554-75c132eaf3da'}}
                                )*/


/*  set un follow
axios.(`https://social-network.samuraijs.com/api/1.0/follow/${a.id}`,{},{withCredentials: true,
                                    headers:{'API-KEY':'02f68ae0-9dc2-463a-b554-75c132eaf3da'}}
                                )
.then(response=>{ if (response.data.resultCode==0){
         props.follow(a.id) }
})*/

/* getAuthMe
axios.get(`https://social-network.samuraijs.com/api/1.0/`,
            {withCredentials: true})*/