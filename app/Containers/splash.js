import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {Container} from 'native-base';
import {Actions} from 'react-native-router-flux';
import image from './../assets/resources';
import ReactNative from 'react-native';
const {Image, StyleSheet} = ReactNative;
class Splash extends PureComponent {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        Actions.login();
    }
    render() {
        return (
            <Container>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={image.splashScreen} ></Image>
                </View>
            </Container>
        )
    }
}
export default Splash;

var styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1
    }
  });