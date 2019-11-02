import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#0275d8" barStyle="light-content" />
            <Routes />
        </>
    )
}
