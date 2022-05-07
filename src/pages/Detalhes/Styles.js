import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    container: {
      width:"80%",
      borderRadius:15,
      borderWidth:1,
      borderColor:"#fff",
      padding: 10,
      margin:10,
      alignSelf:"center",
      backgroundColor:"#fff",
      shadowColor:"blue",
      elevation:10,
      display:"flex",
    },
  
    buttonBuy: {
      width:"80%",
      height:"5%",
      borderRadius:10,
      borderWidth:1,
      borderColor:"#fff",
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center",
      backgroundColor:"rgb(0,158,230)",
      marginTop:10
    },
  
    buttonCart: {
      width:"80%",
      height:"5%",
      borderRadius:10,
      borderWidth:1,
      borderColor:"#fff",
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center",
      backgroundColor:"rgb(227,237,251)",
      marginTop:10
    },
  
    titleBuy: {
      fontSize:20,
      textAlign: 'center',
      alignSelf:"center",
      color:"#fff"
    },
  
    titleCart: {
      fontSize:20,
      textAlign: 'center',
      alignSelf:"center",
      color:"rgb(0,158,230)"
    },
  
    image: {
      width: 200,
      height: 200,
      margin: 10,
      borderRadius: 2,
      alignSelf:"center"
    },
  
    title: {
      width:200,
      textAlign: 'center',
      alignSelf:"center",
      color:"black"
    },
  
    preco:{
      padding:15,
      textAlign: 'center',
      alignSelf:"center",
      color:"blue",
      fontWeight:"bold",
      fontSize:30
    },
  
    quantidade:{
      padding:5,
      textAlign: 'center',
      alignSelf:"center",
      fontWeight:"bold",
      fontSize:15,
      color:"gray"
    },
  
    estoque:{
      padding:5,
      textAlign: 'center',
      alignSelf:"center",
      fontWeight:"bold",
      fontSize:15
    }
  
  });
