import ReactNative from 'react-native';
const {StyleSheet} = ReactNative;
export default loginStyle = StyleSheet.create({
    loginContainer:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#0284d6',
        padding: 20,

    },
    space:{
        flex:2,
        height: 150,
        alignItems:'center',
        justifyContent:'center'
    },
    userIcon:{
        width: 100/2,
        height: 135/2,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    loginOptions:{
        flex:3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    
    fbBtn:{
        backgroundColor:'#4267b2',
    },
    googleBtn:{
        backgroundColor:'#db4437',
    },
    githubBtn:{
        backgroundColor: '#000',
    }
})