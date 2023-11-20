import React from "react";
import { useTranslation } from "react-i18next";


const NotFoundPage = () => {
    const [t] = useTranslation('global');

    return (
        <div>
            <h1>{t('pages.not-found-page.title')}</h1>
        </div>
    );
}
export default NotFoundPage;
