import React from 'react'
import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';
import DiaryList from './DiaryList';

export default function Home() {
    const { user } = useAuthContext();
    const { documents, error } = useCollection('diary');

    console.log(documents);

    return (
        <div className="container">
            <main className={styles["diary-main"]}>
                <h2 className="heart">2023.06.08의 비밀일기</h2>
                <DiaryForm uid={user.uid}></DiaryForm>
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul>
                    {error && <strong>일기를 불러올 수 없습니다 : {error}</strong>}
                    {documents && <DiaryList diaries={documents} />}
                </ul>
            </section>
        </div>
    )
}