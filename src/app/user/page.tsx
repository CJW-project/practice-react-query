'use client'

import { useRouter } from 'next/navigation'
import styles from '../page.module.css'

export default function User() {
  const router = useRouter();

  function goToUserPage() {
    router.push('/user/list');
  }

  function goToPostingPage() {
    router.push('/posting');
  }

  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <h1>
          React Query Practice Page
        </h1>
        <p>
          Go to User list : <button onClick={goToUserPage}> Go Go </button>
        </p>
        <p>
          Go to Posting list : <button onClick={goToPostingPage}> Go Go </button>
        </p>
      </div>
    </main>
  )
}
