import React from 'react';



const AdminView = () => {
    return <h1>관리자 대시보드입니다. 모든 정보가 보여집니다.</h1>
}

const GuestView = () => {
    return <h1>게스트 대시보드입니다. 로그인이 필요합니다.</h1>
}

const UserView = () => {
    return <h1>일반사용자 대시보드입니다. 내 정보가 표시됩니다.</h1>
}

const ErrorMessage = ({ message }) => {
    return <h1>에러: {message}</h1>
}

const Loading = () => {
    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <img style={{ width: '100px' }} src="/dancing.gif" alt="" />
        </div>
    )
}


export default function SimpleRouter({ userRole, isLoading }) {

    if (isLoading) {
        return <Loading />
    }


    switch (userRole) {
        case 'admin':
            return <AdminView />;
        case 'guest':
            return <GuestView />;
        case 'user':
            return <UserView />;
        default:
            return <ErrorMessage message="권한이 없습니다." />;
    }
}
