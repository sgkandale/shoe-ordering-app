import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header';
import Sidebar from './components/sidebar';
import { store } from './globalState';
import ItemsDisplay from './itemsDisplay';

export default function App() {
    return <Provider store={store}>
        <div className="App">
            <Header />
            <Sidebar />
            <ItemsDisplay />
        </div>
    </Provider>
}