import React, {Component} from 'react';
import {AppRegistry} from 'react-native'
import {StackNavigator} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'
import MainScreen from './js/main'


export default class KakaSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first: true,
        };
    };

    componentDidMount() {
        if (this.state.first) {
            this.timer = setTimeout(
                () => {
                    SplashScreen.hide();
                    this.setState({first: false});
                },
                2000,
            );
        } else {
            SplashScreen.hide();
        }
    };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <Navigator />
        )
    }
}


const Navigator = StackNavigator({
        index: {screen: MainScreen},
    },
    {
        initialRouteName: 'index',
        headerMode: 'none',
        mode: 'card',
    }
);

AppRegistry.registerComponent('KakaSearch', () => KakaSearch);
