import React from 'react';
import { Route } from 'react-router-dom'
import MainLayout from '../components/layout'

export default function RouteLayout({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={matchProps => (
            <MainLayout>
                <Component {...matchProps} />
            </MainLayout>
        )} />
    )
}