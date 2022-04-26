import s from "./Users.module.css";
import cat from "../../assets/images/cat.png";
import React from "react";
import {UsersType} from "../../state/reducers/users-reducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<string>
    onPageChanged: (pageNumber: number) => void
    Follow: (userId: string) => void
    Unfollow: (userId: string) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => <span
                        key={p}
                        className={props.currentPage === p ? s.selectedPage : s.page}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                    >{p}</span>)
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                  <img alt={'ava'} src={u.photos.small || cat} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.Unfollow(u.id)
                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.Follow(u.id)
                                    // props.toggleFollowingProgress(true, u.id)
                                    // usersAPI.follow(u.id)
                                    //     .then(data => {
                                    //         if (data.resultCode === 0) {
                                    //             props.followSuccess(u.id)
                                    //         }
                                    //         props.toggleFollowingProgress(false, u.id)
                                    //     })
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}