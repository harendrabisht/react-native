import React, {PureComponent} from 'react'
import {Scene, Router} from 'react-native-router-flux';
import Splash from './splash';
import {Provider} from 'react-redux';
import store from './../Store';
import Login from './LoginContainer';
import Todos from './TodoContainer';
import {StyleSheet} from 'react-native'

export default class AppContainer extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root" navigationBarStyle={styles.navbar}>
                        <Scene
                            key="splash"
                            name="splash"
                            component={Splash}
                            hideNavBar
                            title="Splash"
                            />

                        <Scene
                            key="login"
                            name="login"
                            component={Login}
                            hideNavBar
                            title="Login"
                            />

                        <Scene
                            key="todos"
                            name="todos"
                            component={Todos}
                            title="Add Todos"
                            initial="true"
                            />
                    </Scene>
                </Router>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    navbar:{
        backgroundColor:'#0284d6',
        borderBottomColor: '#0569a8',
    }
});