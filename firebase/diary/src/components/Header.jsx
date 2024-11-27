import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../img/logo.svg'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLocation } from 'react-router-dom';

export default function Header() {

    const { logout } = useLogout();
    const { user } = useAuthContext();
    const location = useLocation();

    return (
        <header>
            <div className={styles["header-wrap"]}>
                <h1><Link href="./"><img className={styles.logo} src={logo} alt="두근두근 비밀일기" /></Link></h1>
                <div>
                    {!user &&
                        <>
                            {
                                location.pathname === "/signup" ? <Link to="/login" className={"btn-join"}>로그인</Link> : <Link to="/signup" className={"btn-join"}>회원가입</Link>
                            }
                        </>
                    }

                    {
                        user &&
                        <>
                            <p>환영합니다!! <strong>{user.displayName}</strong>님!!</p>
                            <Link to="/" className={"btn-join"} onClick={logout}>로그아웃</Link>
                        </>
                    }

                </div>
            </div>
        </header>
    )
}
