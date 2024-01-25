'use client'

import { requestApi } from "@/app/api/request";
import { useMutation } from "@tanstack/react-query";
import styles from '../../page.module.css'
import { useState } from "react";
import { useRouter } from "next/navigation";

type postsTypes = {
    userId: number,
    title: string,
    body: string,
}

async function createPosts(params: postsTypes) {
    // 실제 서버에 업데이트 되는 것은 아님. 테스트용
    const res = await requestApi({method: 'POST', uri: 'posts', body: params});
    console.log(res);
    return res;
}

export default function PostsCreatePage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const router = useRouter();

    const mutation = useMutation({mutationKey: ["postsCreate"], mutationFn: (values: postsTypes) => createPosts(values)})

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate({userId: 1, title: title, body: body});
    }

    function goToListPage() {
        router.push('/posting');
    }

    return (
        <div className={styles.main}>
            { mutation.isPending ? (
                'Adding posts...'
            ) : ( 
                <div className={styles.div}>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>title : </label>
                            <input className={styles.formInput} type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <label>body : </label>
                            <input className={styles.formInput} type='text' value={body} onChange={(e) => setBody(e.target.value)}/>
                        </div>
                        <div className={styles.paing}>
                            <button onClick={() => goToListPage()} className={styles.basicButton}> 이전 페이지 </button>
                            <button type="submit" className={styles.createButton}> 저장 </button>
                        </div>
                    </form>
                    { mutation.isError ? (
                        <p> error message : { mutation.error.message } </p>
                    ) : null}
                    { mutation.isSuccess ? (
                        <p> Posts added! </p>
                    ) : null}
                </div>
            )}
        </div>
    )
}