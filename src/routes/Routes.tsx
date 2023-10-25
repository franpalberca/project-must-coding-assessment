import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LOADING, NOTFOUND, USER } from '../config/routes/paths';

export const RouterApp = () => {
    const LazyLandingPage = lazy(() => import('../pages/LandingPage'));
    const LazyUserPage = lazy(() => import('../pages/UserPage'));
    const LazyNotFoundPage = lazy(() => import('../pages/NotFoundPage'));
    const handleFormSubmit = (userName: string) => {
        console.log(userName)
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={LOADING} element={<Suspense fallback={<div>Loading...</div>}><LazyLandingPage onFormSubmit={handleFormSubmit}/></Suspense>} />
                    <Route path={USER} element={<Suspense fallback={<div>Loading...</div>}><LazyUserPage /></Suspense>} />
                    <Route path={NOTFOUND} element={<Suspense fallback={<div>Loading...</div>}><LazyNotFoundPage /></Suspense>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
