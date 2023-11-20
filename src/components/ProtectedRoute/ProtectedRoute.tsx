import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import RoutesEnum from '../../enum/Routes.enum';

import { RootState } from '../../store/store';
import IProtectedRouteProps from './ProtectedRoute.interface';

const ProtectedRoute: React.FC<IProtectedRouteProps> = (
    props: IProtectedRouteProps
) => {
    const { pathname } = useLocation();
    const currentUrl =
        pathname === RoutesEnum.MAIN ? null : window.location.href;
    const { children, redirectPath = RoutesEnum.LOGIN } = props;
    const accountId = 'admin123';
    // const { accountId } = useSelector((state: RootState) => state.user);

    if (!accountId?.length) {
        window?.localStorage?.setItem('redirectTo', currentUrl as string);
        return <Navigate to={redirectPath} replace />;
    } else {
        window?.localStorage?.removeItem('redirectTo');
    }
    return <>{children ? children : <Outlet />}</>;
};

export default ProtectedRoute;
