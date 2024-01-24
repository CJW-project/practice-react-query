'use client'

import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { requestApi } from "@/app/api/request"
import styles from '../page.module.css'
import { useState } from "react"
import { useRouter } from 'next/navigation'


async function getPosts(page: number) {
    const res = await requestApi({method: 'GET', uri : `posts?_limit=10&_page=${page}}`});
    return res;
}

export default function ListPosting() {
    const [page, setPage] = useState(1);
    const { isError, error, data, isPlaceholderData } = useQuery({queryKey: ["postingList", page], queryFn: () => getPosts(page), placeholderData: keepPreviousData})
    const router = useRouter();

    function goToCreatePage() {
        router.push('/posting/create');
    }

    return (
        <div style={{width: '100%'}}>
            {!isError ? (
                <>
                    <div className={styles.tableTitle}>
                        <p>Posting Table</p>
                        <span>Current Page: {page}</span>
                    </div>
                    <table style={{width: '100%'}} border={2}>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                        {data?.map((user: Record<string, string>) => (
                            <tr>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
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
                        <button
                            style={{ float: 'right', background: 'blue', color: 'white' }}
                            onClick={() => goToCreatePage()}
                        >
                            등록
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