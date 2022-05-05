import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({

    title: {
      color:"#fff",
      alignSelf:"center",
      marginTop:-35,
      fontSize:20,
      fontWeight:"bold"
    },
  
    searchBar: {
      width:"90%",
      marginTop:30,
      marginBottom:35,
      borderRadius:20,
      alignSelf: "center",
    },
  
    containerSearch:{
      width:"100%",
      backgroundColor:"rgb(0,158,230)"//backgroundColor:"rgb(248,0,50)",
    },
  
    containerImage:{
      width:50,
      borderRadius:10,
      alignSelf:"flex-end",
      marginRight:10,
      marginTop:10
    },
  
    cartImage:{
      height:40,
      width:40,
      alignSelf:"center",
      marginRight:3,
      marginTop:10
    },

    content: {
      flex:1,
      paddingHorizontal: 3,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    },
  });