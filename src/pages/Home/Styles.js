import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  
    searchBar: {
      width:"90%",
      marginTop:30,
      marginBottom:35,
      borderRadius:20,
      alignSelf: "center",
    },
  
    containerSearch:{
      width:"100%",
      backgroundColor:"rgb(3,147,213)"
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
    },

    viewFilter:{
      flexDirection:"row", 
      justifyContent:"space-around",
      marginTop:-10,
      marginBottom:15

    },

    buttonFilter:{
      width:"45%", 
      height:30, 
      backgroundColor:"rgb(89,205,255)",
      borderRadius:30,
      alignItems:"center",
      padding:3
    },
    
    textFilter: {
      textAlign:"center", 
      fontSize:15,
      fontWeight:"400"
    }


  });