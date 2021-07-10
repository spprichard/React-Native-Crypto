import React, { Component } from 'react';
import Styles from './../Themes/Styles';
import CoinItem from './CoinItem';
import {
    Text,
    View,
    FlatList,
  } from 'react-native';

class CoinList extends Component {
    render() {
        return (
            <FlatList 
                style={Styles.CoinList}
                data={this.props.coins}   
                keyExtractor={item => item.name }
                renderItem={({item}) => <CoinItem coin={item}/>}
            />
        )
    }
}

export default CoinList;