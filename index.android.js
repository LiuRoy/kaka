import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking,
    AppRegistry,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

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
            <TouchableOpacity
                style={styles.container}
                onPress={(e)=> {
                    Linking.openURL('http://www.devio.org/');
                }}
            >
                <View >
                    <Text style={styles.item}>
                        SplashScreen 启动屏
                    </Text>
                    <Text style={styles.item}>
                        @：http://www.devio.org/
                    </Text>
                    <Text style={styles.item}>
                        GitHub:https://github.com/crazycodeboy
                    </Text>
                    <Text style={styles.item}>
                        Email:crazycodeboy@gmail.com
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
        marginTop: 30
    },
    item: {
        fontSize: 20,
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
});

AppRegistry.registerComponent('KakaSearch', () => KakaSearch);
