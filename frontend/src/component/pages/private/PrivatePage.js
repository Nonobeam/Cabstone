import React from 'react';
import LogoutButton from '../public/login/LoginButton';
import MemberTable from './MemberTable'

const PrivatePage = () => {
    return (
        <div>
            <h2> Đây là trang private </h2>
            <MemberTable/>
            <LogoutButton />
        </div>
    );
};

export default PrivatePage;
