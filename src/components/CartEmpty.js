import react from "react";
import { Image } from "react-native";


export const CartEmpty = () => {
    return(
        <Image source={require('./../assets/shopping_cart.png')} />
    );
}