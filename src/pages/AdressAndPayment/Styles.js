import { StyleSheet} from "react-native";



export const styles = StyleSheet.create({
    
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius:30,
        padding: 10,
    },

    buttonBuy: {
        width:"80%",
        borderRadius:30,
        borderWidth:1,
        borderColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        backgroundColor:"rgb(0,158,230)",
        marginTop:10,
        padding: 15
      },

    titleBuy: {
        fontSize:20,
        textAlign: 'center',
        alignSelf:"center",
        color:"#fff"
      },

    lineDiv:{
        marginTop:30,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    title: {
        alignSelf:"center", 
        marginTop:30, 
        fontSize:20
    }


});