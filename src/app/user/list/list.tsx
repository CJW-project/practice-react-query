'use client'

import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { requestApi } from "@/app/api/request"
import styles from '../../page.module.css'
import { useState } from "react"

async function getUsers(page: number) {
    const res = await requestApi({uri : `users?_limit=5&_page=${page}}`});
    return res;
}

export default function ListUsers() {
    const [page, setPage] = useState(1);

    const { isError, error, data, isPlaceholderData } = useQuery({queryKey: ["userList", page], queryFn: () => getUsers(page), placeholderData: keepPreviousData})

    return (
        <div style={{width: '100%'}}>
            {!isError ? (
                <>
                    <div className={styles.tableTitle}>
                        <p>User Table</p>
                        <span>Current Page: {page}</span>
                    </div>
                    <table style={{width: '100%'}} border={2}>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>phone</th>
                        </tr>
                        {data?.map((user: Record<string, string>) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </table>
                    <div className={styles.paing}>
                        <button
                            onClick={() => setPage((old) => Math.max(old - 1, 0))}
                            disabled={page === 1}
                        >
                            Prev
                        </button>{' '}
                        <button
                            onClick={() => {
                                if (!isPlaceholderData) {
                                    setPage((old) => old + 1)
                                }
                            }}
                            disabled={isPlaceholderData || data?.length === 0}
                        >
                            Next
                        </button>
                    </div>
                 </> ) : (
                    <>
                        <h2> 에러 발생 !!</h2>
                        <p>{error as any}</p>
                    </>
                )
            }
        </div>
    )
}