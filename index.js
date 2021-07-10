import './ReactotronConfig';
import React from 'react';
import { Provider }  from 'react-redux';
import { AppRegistry } from 'react-native';
import configureStore from './Store/store';
import App from './Containers/App';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App /> 
    </Provider>
)

AppRegistry.registerComponent('HelloWorld', () =>  RNRedux);

