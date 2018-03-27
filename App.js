import React, { Component } from 'react';
import Styles from './Themes/Styles.js';
import CoinTable from './Components/CoinTable';
import coinData from './Data/coinData';
import ActivityLoader from './Components/ActivityLoader';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      coins: [],
    };
    coinAPIBaseURL = 'https://api.coinmarketcap.com';
  }

  componentDidMount() {
    return fetch(`${coinAPIBaseURL}/v1/ticker/?limit=10`)
      .then(response => response.json())
      .then(resposneJSON => {
        this.setState({
          loading: false,
          coins: resposneJSON
        })
      })
      .catch(error => {
        console.log(`An error occured: ${error}`)
      });
  }

  renderLoader = () => {
    return (
      <ActivityLoader />
    )
  }

  renderCoinTable = () => {
    return (
        <CoinTable coins={this.state.coins} />
    )
  }

  render() {  
    return (
      <View style={styles.Container}>
        {this.state.loading ? this.renderLoader() : this.renderCoinTable()}
      </View>
    );
  }
}