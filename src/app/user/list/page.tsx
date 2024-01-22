import ListUsers from "./list";
import { Suspense } from "react";
import styles from '../../page.module.css'

export default function UserListPage() {
    return (
      <div className={styles.main}>
        <Suspense
                fallback={
                <p style={{ textAlign: "center" }}>loading...</p>
                }
        >
            <ListUsers />
        </Suspense>
      </div>
    )
}