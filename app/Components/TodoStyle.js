import ReactNative from 'react-native';
const {StyleSheet} = ReactNative;
export const todoStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#f2f4f7'
    },
    inputContainer: {
        marginTop: 15,
        padding: 10,
        flex: 3
    },
    listContainer: {
        flex: 5,
        padding: 10
    }

})