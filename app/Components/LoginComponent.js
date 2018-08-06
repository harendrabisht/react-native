import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Container, Text, Button} from 'native-base';
import loginStyle from './LoginStyle';
import styles from './../Common/commonStyle';
import image from './../assets/resources';
import {Actions} from 'react-native-router-flux';
import ReactNative from 'react-native';
const {Image} = ReactNative;

export class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.gotoTodo = this.gotoTodo.bind(this);
    }

    gotoTodo(){
        Actions.todos();
    }

    render() {
        return (
            <Container>
                <View style={loginStyle.loginContainer}>
                    <View style={loginStyle.space}>
                        <Image source={image.user} style={loginStyle.userIcon}></Image>
                        <Text>Select your profile</Text>
                    </View>
                    <View style={loginStyle.loginOptions}>

                        <Button
                            style={[loginStyle.fbBtn, styles.btn]}
                            onPress={this.gotoTodo}>
                            <Text >Connect using Facebook</Text>
                        </Button>
                        <Button
                            style={[loginStyle.googleBtn, styles.btn]}
                            onPress={() => {
                            return;
                        }}>
                            <Text >Connect using Google</Text>
                        </Button>
                        <Button
                            style={[loginStyle.githubBtn, styles.btn]}
                            onPress={() => {
                            return;
                        }}>
                            <Text>Connect using GIthub</Text>
                        </Button>

                    </View>
                    {/* <View style={loginStyle.space}></View> */}
                </View>
            </Container>
        )
    }
}

export default LoginComponent;
