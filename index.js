import './ReactotronConfig';
import React from 'react';
import { Provider }  from 'react-redux';
import { AppRegistry } from 'react-native';
import configureStore from './Store/store';
import App from './Containers/App';
import DetailsContainer from './Containers/DetailsContainer';
import { StackNavigator } from 'react-navigation';
import {
    Button
  } from 'react-native';

const store = configureStore();

handleDetails = (navigate) => {
    console.log(navigate);
}

const AppNavigator = StackNavigator({
    Home: {
        screen: App,
    },
    Details: {
        screen: DetailsContainer
    },
});

const RNRedux = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
)

AppRegistry.registerComponent('HelloWorld', () =>  RNRedux);

