import React from "react";
import { useTranslation } from "react-i18next";


const LoginPage = () => {
    const [t] = useTranslation('global');

    return (
        <div>
            <h1>{t('pages.login-page.title')}</h1>
        </div>
    );
}
export default LoginPage;
