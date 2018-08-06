import React, {PureComponent} from 'react'
import TodoComponent from './../Components/TodoComponent';
import TodoListComponent from './../Components/TodoListComponent';
import Tabbar from 'react-native-tabbar-bottom';
import {bindActionCreators} from 'redux';
import {View, Text, StyleSheet} from 'react-native';
import {addTodo} from './../Actions/TodoAction';
import {connect} from 'react-redux';
class Todos extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: "HomeScreen"
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <TodoComponent/>  */}

                {this.state.page === "HomeScreen" && <TodoComponent {...this.props}/>}

                {this.state.page === "NotificationScreen" && <TodoListComponent {...this.props}></TodoListComponent>}
                {this.state.page === "ToDos" && <TodoListComponent {...this.props}></TodoListComponent>}
                {this.state.page === "ProfileScreen" && <Text>Screen3</Text>}

                <Tabbar
                    stateFunc={(tab) => {
                    this.setState({page: tab.page});
                }}
                    tabbarBgColor="#0569a8"
                    selectedIconColor="#FFF"
                    rippleEffect={true}
                    tabbarBgColor="#0284d6"
                    activePage={this.state.page}
                    tabs={[
                    {
                        page: "HomeScreen",
                        icon: "paper",
                        iconText: "Create Todo"
                    }, {
                        page: "ToDos",
                        icon: "chatboxes",
                        iconText: "My Todos"
                    }, {
                        page: "NotificationScreen",
                        icon: "notifications",
                        badgeNumber: 11,
                        iconText: "Notification"
                    }, {
                        page: "ProfileScreen",
                        icon: "person",
                        iconText: "My Profile"
                    }
                ]}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({todos: state.todos});

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        addTodo: (data)=>addTodo(data)
    }, dispatch);
}
export default connect(mapStateToProps, mapStateToDispatch)(Todos);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});