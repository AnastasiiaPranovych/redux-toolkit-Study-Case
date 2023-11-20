import React from "react";
import { useTranslation } from "react-i18next";


const CakesListPage = () => {
    const [t] = useTranslation('global');

    return (
        <div>
            <h1>{t('pages.cake-list-page.title')}</h1>
        </div>
    );
}
export default CakesListPage;
