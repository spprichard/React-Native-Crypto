import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from './../Themes/Styles.js';
import CoinTable from './../Components/CoinTable';
import coinData from './../Data/coinData';
import ActivityLoader from './../Components/ActivityLoader';
import fetchCoins from './../Actions/Actions.js';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const mapStateToProps = state => ({
  coins: state.coinStore.coins,
  loading: state.coinStore.loading,
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchCoins: () => dispatch(fetchCoins()),
});

class App extends Component {
  componentDidMount() {    
    this.props.fetchCoins();
  }

  renderLoader = () => {
    return (
      <ActivityLoader />
    )
  }

  renderCoinTable = () => {
    return (
        <CoinTable coins={this.props.coins} />
    )
  }

  render() { 
    return (
        <View style={Styles.Container}>
          {this.props.loading ? this.renderLoader() : this.renderCoinTable()}
        </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);