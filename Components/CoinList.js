import React, { Component } from 'react';
import Styles from './../Themes/Styles';
import CoinItem from './CoinItem';
import {
    Text,
    View
  } from 'react-native';

class CoinList extends Component {
    render() {
        return (
            // TODO: use Flatlist instead
            this.props.coins.map((coin) => {
                return <CoinItem key={coin.name} coin={coin} />
            })
        );
    }
}

export default CoinList;