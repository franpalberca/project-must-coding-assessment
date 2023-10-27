import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { USER } from '../config/routes/paths';

export const RouterApp = () => {
    const LazyLandingPage = lazy(() => import('../pages/LandingPage'));
    const LazyUserPage = lazy(() => import('../pages/UserPage'));

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Suspense fallback={<div>Loading...</div>}><LazyLandingPage /></Suspense>} />
                    <Route path={USER} element={<Suspense fallback={<div>Loading...</div>}><LazyUserPage /></Suspense>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
