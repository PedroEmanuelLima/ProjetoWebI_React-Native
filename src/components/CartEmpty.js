import react from "react";
import { Image, Text } from "react-native";


export const CartEmpty = () => {
    return(
        <>
            <Text style={{fontSize: 30, textAlign: "center", marginTop: 30}}>Seu carrinho está vazio!!</Text>
            <Image style={{height: '100%', width: '100%', marginTop: -50}} resizeMode='contain' source={require('./../assets/shopping_cart_not_faund-removebg-preview.png')} />
        </>
    );
}