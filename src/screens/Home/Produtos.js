import { StyleSheet, View, Text, Image, TouchableNativeFeedback } from "react-native";
import React from "react";

export default function Produtos (props) {


  return (
    <View style={styles.container}>
        <View>
          <Image resizeMode="contain"
            style={styles.image}
            source={{uri:props.r.thumbnail}}
            
          />
          <Text style={styles.title}>{props.r.title}</Text>
          <Text style={styles.preco}>R$ {props.r.price.toFixed(2).replace(".",",")}</Text>
        </View>
    </View>
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
    marginTop:5,
    marginLeft:3,
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor:"#fff",
    shadowColor:"red",
    elevation:20,
    display:"flex"
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
    color:"red"  
  }

});