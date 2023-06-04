import React, {FC} from 'react';
import './login.scss'
import {AuthByPhoneFeature} from "../../features/auth/by-username";

const Login: FC = () => {
    const handleSuccess = () => {
        console.log("SuccessLogin")
    }
    return (
        <div className="loginPage">
            <AuthByPhoneFeature
                onSuccess={handleSuccess}/>
        </div>
    );
};

export default Login;