import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import RoutesEnum from './enum/Routes.enum';

import {
    LogoutPage,
    NotFoundPage,
    LoginPage,
    CakesListPage,
    HomePage
} from './pages';

const ContentRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={RoutesEnum.LOGOUT} element={<LogoutPage />} />
            <Route path={RoutesEnum.LOGIN} element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>
                <Route path={'/'} element={<Navigate to='/cakes/' />} />
                <Route
                    path={RoutesEnum.CAKES}
                    element={<CakesListPage />}
                />
                <Route
                    path={RoutesEnum.HOME}
                    element={<HomePage />}
                />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
};

export default ContentRoutes;
