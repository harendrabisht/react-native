import React, {PureComponent} from 'react'
import {View, TextInput} from 'react-native';
import styles from './commonStyle';

export default class TextArea extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let {placeholder, onChangeText, value} = this.props;
        return (
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.textArea}
                    placeholder={placeholder}
                    multiline={true}
                    numberOfLines={3}
                    onChangeText= {onChangeText}
                    value={value}
                    underlineColorAndroid="transparent"></TextInput>
            </View>
        )
    }
}
