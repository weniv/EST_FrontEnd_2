import { useState } from "react";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";


export const useLogout = () => {
    // 에러의 상태
    const [error, setError] = useState(null);

    // 서버와 통신중인지 판단하는 상태
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();


    const logout = () => {
        setError(null);
        setIsPending(true);

        signOut(appAuth).then(() => {
            dispatch({ type: 'logout' });
            setIsPending(false);
        }).catch((error) => {
            setError(error);
            setIsPending(false);
        });
    }

    return { logout, error, isPending }
}