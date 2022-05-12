import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
    },
    content: {
        flex:1,
        marginHorizontal: "5%",
        flexDirection: "row",
        justifyContent: "center",
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

      buttonClear: {
        width:"80%",
        borderRadius:30,
        borderWidth:1,
        borderColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        backgroundColor:"red",
        marginTop:10,
        padding: 15
      },

      titleBuy: {
        fontSize:20,
        textAlign: 'center',
        alignSelf:"center",
        color:"#fff"
      },

});