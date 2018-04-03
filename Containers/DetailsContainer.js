import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View
  } from 'react-native';

  const mapStateToProps = state => ({
    coins: state.coinStore.coins,
    loading: state.coinStore.loading,
  });
  
// This doesn't really need to be connected to the store....
class DetailsContainer extends Component {
    static navigationOptions = {
        title: 'Details'
    }

    render() {
        console.log(this.props.coins)
        return (
            <View> 
                <Text>Have you lost your money yet?</Text>
            </View>
        )
    }
}


export default connect(mapStateToProps)(DetailsContainer);