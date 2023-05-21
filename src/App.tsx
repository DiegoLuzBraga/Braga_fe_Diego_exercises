import * as React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import UserOverview from './pages/UserOverview/view';
import TeamOverview from './pages/TeamOverview/view';
import Teams from './pages/Teams/view';
import {NotificationProvider} from './hooks/useNotification';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Teams />,
        },
        {
            path: '/team/:teamId',
            element: <TeamOverview />,
        },
        {
            path: '/user/:useId',
            element: <UserOverview />,
        },
    ]);
    return (
        <NotificationProvider>
            <RouterProvider router={router} />
        </NotificationProvider>
    );
};

export default App;
