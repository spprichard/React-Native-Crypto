import React, { Component } from 'react';
import {Text, View, ActivityIndicator} from 'react-native'
import Styles from './../Themes/Styles';

class ActivityLoader extends Component {
    render() {
        return (
            <View style={styles.ActivityLoader}>
                <ActivityIndicator />
                <Text style={styles.LoaderText}>Loading, please wait...</Text>
            </View>
        )
    }
}

export default ActivityLoader