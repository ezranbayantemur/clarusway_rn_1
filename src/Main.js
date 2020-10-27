import React from 'react';
import { SafeAreaView } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './context/reducer';
import initialState from './context/store';

import Component_A from './pages/Component_A';
import Component_B from './pages/Component_B';

const store = createStore(reducer, initialState);

const Main = (props) => {
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <Component_A />
                <Component_B />
            </SafeAreaView>
        </Provider>
    );
};

export default Main;