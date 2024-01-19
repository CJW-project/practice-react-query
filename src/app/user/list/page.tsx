'use client'

export default function UserListPage() {
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