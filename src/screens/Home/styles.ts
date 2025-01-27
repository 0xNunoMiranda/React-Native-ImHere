import {StyleSheet}from'react-native';

export const styles= StyleSheet.create({

    container: {
      flex:1,
      backgroundColor:'#0a080c',
      padding:24
    },
    input:{
        flex:1,
        height:56,
        backgroundColor:'#1F1E25',
        borderRadius:5,
        color:'#FFF',
        padding:16,
        fontSize:16,
        marginRight:7

    },
    buttonText:{
        color:'#FFF',
        fontSize:24

    },
    button:{
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor:"#45b53b",
        alignItems:"center",
        justifyContent:"center"
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop:36,
        marginBottom:42
    }

})