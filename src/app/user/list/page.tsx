'use client'

import { useQuery } from "@tanstack/react-query"
import { requestApi } from "@/app/api/request"

async function getUsers() {
    const res = await requestApi({uri : 'users'});
    return res;
}

export default function UserListPage() {

    const { data } = useQuery({queryKey: ["userList"], queryFn: () => getUsers()})

    return (
        <div>
            <p>User Table</p>
            <table border={2}>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>phone</th>
                </tr>
                <tr>
                    <td>testId</td>
                    <td>testName</td>
                    <td>testUserName</td>
                    <td>testPhone</td>
                </tr>
            </table>
        </div>
    )
}