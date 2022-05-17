import React from "react";
import { Image, Text, View } from "react-native";

export const CartEmpty = () => {
    return(
        <>
            {/*<Text style={{fontSize: 30, textAlign: "center", marginTop: 30}}>Seu carrinho está vazio!!</Text>
            <Image style={{height: '100%', width: '100%', marginTop: -50}} resizeMode='contain' source={require('./../assets/shopping_cart_empty.png')} />*/}
            {/*Alteração aqui*/}
            <View style={{flex:1, height: '100%', width: '100%', marginTop:"50%"}}>
                <Image style={{alignSelf:"center"}} 
                resizeMode='contain' 
                source={require('./../assets/emptycart.png')}/>
                <Text style={{fontSize:30, alignSelf:"center"}}>Seu carrinho está vazio!</Text>
             </View>
        </>
    );
}