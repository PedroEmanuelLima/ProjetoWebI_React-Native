import { StyleSheet} from "react-native";

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
      backgroundColor:"rgb(0,158,230)"
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

    data:{
      width: 200, 
      alignSelf:"center", 
      backgroundColor:"#fff",
      marginTop:-15,
      marginBottom:10,
      borderRadius:10,
      borderWidth:3,
      borderColor:"#000"
    },

    notfoundView:{
      flex:1, 
      width:"100%", 
      height:"100%", 
      marginTop: 60
    },

    notfoundImage:{
      alignSelf:"center"
    },

    notfoundText:{
      marginTop:30, 
      fontSize:20, 
      alignSelf:"center"
    }
  });