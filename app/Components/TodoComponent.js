import React, {PureComponent} from 'react'
import {Container, View, Text, Button} from 'native-base';
import {Alert} from 'react-native';
import {todoStyle} from './TodoStyle';
import Input from './../Common/TextInput'
import TextArea from './../Common/TextArea'
import styles from './../Common/commonStyle'

export default class TodoComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.createTodo = this
      .createTodo
      .bind(this);
    this.onTitleChange = this
      ._onChangeTitle
      .bind(this);
    this.onDetailChange = this
      ._onChangeDetails
      .bind(this);
    this.state = {
      title: '',
      description: ''
    };
  }
  createTodo() {
    this
      .props
      .addTodo(this.state);
    this.setState({title: '', description: ''})
    // Alert.alert(   'Add Todo',   'Do you want to add?',   [     {text: 'Cancel',
    // onPress: () => console.log('Cancel Pressed'), style: 'cancel'},     {text:
    // 'OK', onPress: () => console.log('OK Pressed')},   ],   { cancelable: false }
    // )
  }
  _onChangeTitle(title) {
    this.setState({title});
  }

  _onChangeDetails(description) {
    this.setState({description});
  }

  render() {
    console.log(this.props.todos);
    return (
      <Container style={todoStyle.container}>

        <View style={todoStyle.inputContainer}>
          <Input
            onChangeText={this.onTitleChange}
            placeholder="Add title"
            value={this.state.title}></Input>
          <TextArea
            onChangeText={this.onDetailChange}
            placeholder="Add Details!"
            value={this.state.description}></TextArea>
          <Button style={styles.btn} onPress={this.createTodo}>
            <Text>Add Todo</Text>
          </Button>
        </View>

      </Container>
    )
  }
}
