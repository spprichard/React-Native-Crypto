import {
    StyleSheet
  } from 'react-native';

export default styles = StyleSheet.create({
    ActivityLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoaderText: {
        paddingTop: 25,
        color: 'blue',
        textAlign: 'center',
    },
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    CoinTable: {
        flex: 1,
        backgroundColor: 'white',
    },
    CoinTableHeader: {
        marginTop: 50,
        textAlign: 'center',
    },
    Coin : {
        flex: 1,
        flexDirection: 'row',
        backgroundColor : 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    CoinImage: {
        width: 40,
        height: 40,
    },
});