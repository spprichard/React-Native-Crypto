import React, { Component } from 'react';
import Styles from './../Themes/Styles';
import {
    Text,
    View,
    Image,
  } from 'react-native';
import {CryptoImages} from './../Data/coinImages';

class CoinItem extends Component {
    getImage = (symbol) => {
        const uri = CryptoImages[symbol]
        return (
            <Image 
                source={{uri: uri}}
                style={Styles.CoinImage}             
            />
        )
    }    

    render() {
        const {coin} = this.props;
        return (
            <View key={coin.name} style={Styles.Coin}>
                {this.getImage(coin.symbol)}
                <Text>{coin.symbol} | {coin.name}</Text>
                <Text>${coin.price_usd}</Text>
                <Text>24h: {coin.percent_change_24h}%</Text>
            </View>
        )
    }
}

export default CoinItem;
