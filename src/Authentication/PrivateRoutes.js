import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const user = false;
    const location = useLocation();
    if (!user) {
        return <Navigate to={'login'} state={{ from: location }} replace />
    }
    return <Outlet />
};

export default PrivateRoutes;