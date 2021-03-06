import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './app/Containers/AppContainer'

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  async componentWillMount(){
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
  }
  render() {
    return (
      <AppContainer></AppContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection:'row'
  },
});
