import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    home screen
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const KakaSearch = StackNavigator({
    Home: {screen: HomeScreen},
});

AppRegistry.registerComponent('KakaSearch', () => KakaSearch);
