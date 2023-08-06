import React from 'react';
import LoginButton from '../public/login/LoginButton';
import Member from './register/Register';

const PublicPage = () => {
    return (
        <div>
            <h2> Đây là trang public </h2>
            <Member />
            <LoginButton/>
        </div>
    );
};

export default PublicPage;
