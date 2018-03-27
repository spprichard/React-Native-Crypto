import React, { Component } from 'react';
import Styles from './../Themes/Styles';
import CoinList from './CoinList';
import {
    Text,
    View
  } from 'react-native';

class CoinTable extends Component {
    render() {
        return (
            <View style={styles.CoinTable}>
                <Text style={styles.CoinTableHeader}>Coin Prices</Text>
                <CoinList coins={this.props.coins} />
            </View>
        )
    }
}

export default CoinTable;