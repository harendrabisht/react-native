import React, {PureComponent} from 'react'
import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Container, View, Text} from 'native-base'
import LoginComponent from './../Components/LoginComponent'

export default class Login extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // Actions.login();
    }

    render() {
        return (
            <React.Fragment>
                <LoginComponent/>
            </React.Fragment>
        )
    }
}
