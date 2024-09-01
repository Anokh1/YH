// src/pages/Auth/AuthPage.tsx
import React, { useState } from 'react';
import { AuthLogin } from './AuthLogin';
import { AuthCreate } from './AuthCreate';
import '../../css/Auth.css'

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-page">
            {isLogin ? (
                <AuthLogin toggleAuthMode={toggleAuthMode} />
            ) : (
                <AuthCreate toggleAuthMode={toggleAuthMode} />
            )}
        </div>
    );
};

export default AuthPage;
