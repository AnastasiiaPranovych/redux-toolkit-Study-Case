import React from "react";
import { useTranslation } from "react-i18next";


const HomePage = () => {
    const [t] = useTranslation('global');

    return (
        <div>
            <h1>{t('pages.home-page.title')}</h1>
        </div>
    );
}
export default HomePage;
