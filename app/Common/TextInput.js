import React, {PureComponent} from 'react'
import {View, TextInput} from 'react-native';
import styles from './commonStyle';

export default class Input extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let {onChangeText, placeholder, value} = this.props;
        return (
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    underlineColorAndroid="transparent"></TextInput>
            </View>
        )
    }
}
