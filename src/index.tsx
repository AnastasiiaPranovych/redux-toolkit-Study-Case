import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import global_ua from './translation/ua/global.json';
import global_pl from './translation/pl/global.json';
import global_en from './translation/en/global.json';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './app/App';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
            global: global_en,
        },
        pl: {
            global: global_pl,
        },
        ua: {
            global: global_ua,
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <BrowserRouter basename='/'>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement
);
