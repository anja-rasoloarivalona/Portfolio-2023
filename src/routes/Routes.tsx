import React from 'react';
import { BizbizharePage, MainPage, MphasePage, NaiaPage } from '../pages';
import { RoutesPath } from './routes-path';
import { useRoutes } from 'react-router-dom';

const routes = [
    {
        element: <MainPage />,
        path: RoutesPath.HOME,
    },
    {
        element: <BizbizharePage />,
        path: RoutesPath.BIZBIZSHARE,
    },
    {
        element: <MphasePage />,
        path: RoutesPath.MPHASE,
    },
    {
        element: <NaiaPage />,
        path: RoutesPath.NAIA,
    },
];

const Routes = () => useRoutes(routes);

export default Routes;
