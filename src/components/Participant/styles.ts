import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#271414',
        borderRadius:5,
        flexDirection:'row',
        alignItems:"center",
        marginBottom:10
    },
    name:{
        marginLeft:16,
        flex:1,
        color: '#FFF'
    },
    buttonText:{
        color:'#FFF',
        fontSize:24

    },
    button:{
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor:"#c12424",
        alignItems:"center",
        justifyContent:"center"
    },
})