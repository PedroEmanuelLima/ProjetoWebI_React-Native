import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Produtos ({ thumbnail, title, price, id, openProduto }) {

  return (
    <TouchableOpacity  style={styles.container} onPress={() => openProduto(id)}>
        <View>
          <Image resizeMode="contain"
            style={styles.image}
            source={{uri:thumbnail}}
            
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.preco}>R$ {price.toFixed(2).replace(".",",")}</Text>
        </View>
    </TouchableOpacity>
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
    width:150,
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