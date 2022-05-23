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

    titleHeader:{
      color:"#fff",
      alignSelf:"center",
      fontSize:20,
      fontWeight:"bold",
      marginLeft:50,
      marginRight:50
    },

    viewHeaderTitle:{
      flexDirection:"row", 
      justifyContent:"space-around",
      marginTop:10,
      marginBottom:-10
    },

    viewStatus:{
      width: '100%', 
      height:"5%", 
      justifyContent:"center", 
      backgroundColor: '#DDD'
    },

    textStatus:{
      textAlign: 'center', 
      fontSize: 16
    }
})