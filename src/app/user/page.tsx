'use client'

import { useRouter } from 'next/navigation'

export default function User() {
  const router = useRouter();

//   function goToUserPage() {
//     router.push('/user/detail');
//   }

  return (
    <main>
      <div>
        <h1>
          React Query Practice Page
        </h1>
        {/* <p>
          Go to User Page : <button onClick={goToUserPage}> User </button>
        </p> */}
      </div>
    </main>
  )
}
