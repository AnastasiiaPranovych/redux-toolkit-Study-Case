import React from "react";
import { useTranslation } from "react-i18next";


const LogoutPage = () => {
    const [t] = useTranslation('global');

    return (
        <div>
            <h1>{t('pages.logout-page.title')}</h1>
        </div>
    );
}
export default LogoutPage;
