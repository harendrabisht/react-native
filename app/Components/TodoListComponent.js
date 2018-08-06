//import liraries
import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Content,
    List,
    Text,
    Icon,
    Container,
    SwipeRow,
    Button
} from 'native-base';
// create a component
class ListComponent extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let {todos} = this.props;
        let todosList= todos.map((todo,index)=>{
            return(
                <SwipeRow
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    key={index}
                    left={
                        <Button success onPress={() => alert('Add')}>
                            <Icon active name="done-all" />
                        </Button>
                    }
                    body={
                    <View style={styles.listItem}>
                        <Text>{todo.title}</Text>
                    </View>
                    }
                    right={
                        <Button danger onPress={() => alert('Trash')}>
                            <Icon active name="trash" />
                        </Button>
                    }
                />
            )
        })
        return (
            <Container style={styles.container}>
                <Content scrollEnabled={false}>
                    <List>
                        {todosList}
                    </List>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row'
    },
    listItem:{
        paddingLeft: 10,

    },
    icon:{
        color:'#4267b2',
        backgroundColor: '#000'
    }
});

//make this component available to the app
export default ListComponent;
