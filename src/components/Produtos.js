import { StyleSheet, View, Text, Image, TouchableNativeFeedback } from "react-native";
import React from "react";

export default function Produtos ({ thumbnail, title, price }) {

  return (
    <TouchableNativeFeedback >
    <View style={styles.container}>
        <View>
          <Image resizeMode="contain"
            style={styles.image}
            source={{uri:thumbnail}}
            
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.preco}>R$ {price.toFixed(2).replace(".",",")}</Text>
        </View>
    </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({

  container: {
    width:"45%",
    height:360,
    borderRadius:15,
    borderWidth:1,
    borderColor:"#fff",
    padding: 10,
    margin:4,
    marginTop:5,
    marginLeft:4,
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor:"#fff",
    shadowColor:"blue",
    elevation:10,
    display:"flex",
    flexGrow: 1,
    flexBasis: 0
  },

  image: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 2,
    alignSelf:"center"
  },

  title: {
    width:170,
    textAlign: 'center',
    alignSelf:"center",
  },

  preco:{
    padding:15,
    width:170,
    textAlign: 'center',
    alignSelf:"center",
    color:"blue",
    fontWeight:"bold"
  }

});