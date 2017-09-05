import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            splashed: false,
        };
    };

    static navigationOptions = {
        title: 'Welcome',
    };

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                this.setState({splashed: true})
            },
            2000,
        );
    };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        if (this.state.splashed) {
            return (
                <View style={styles.container}>
                    <Text style={styles.instructions}>
                        home screen
                    </Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.instructions}>
                        splash screen
                    </Text>
                </View>
            );
        }
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
