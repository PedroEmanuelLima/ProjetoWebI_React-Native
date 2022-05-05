import { StyleSheet, View, Text, Image, TouchableNativeFeedback } from "react-native";
import React from "react";

export default function Produtos ({ thumbnail, title, price }) {

  return (
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
  );
}

const styles = StyleSheet.create({

  container: {
    width:'40%',
    height: 280,
    borderRadius:8,
    borderWidth:1,
    borderColor:"#fff",
    paddingHorizontal: 3,
    margin:4,
    marginLeft:3,

    alignItems: "center",
    flexGrow: 1,
    flexBasis: 0
  },

  image: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 2,
  },

  title: {
    height: 70,
    fontSize:16,
    textAlign: 'center',
  },

  preco:{
    paddingTop:10,
    fontSize:16,
    textAlign: 'center',
    color:"red"  
  }

});