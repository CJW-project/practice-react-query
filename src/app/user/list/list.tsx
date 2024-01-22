'use client'

import { useQuery } from "@tanstack/react-query"
import { requestApi } from "@/app/api/request"
import styles from '../../page.module.css'

async function getUsers() {
    const res = await requestApi({uri : 'users'});
    return res;
}

export default function ListUsers() {

    const { data } = useQuery({queryKey: ["userList"], queryFn: () => getUsers()})

    return (
        <div className={styles.main}>
            <p>User Table</p>
            <table border={2}>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>phone</th>
                </tr>
                {data?.map((user: any) => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}