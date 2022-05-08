import react from "react";
import { Image, Text, View } from "react-native";


export const CartEmpty = () => {
    return(
        <>
            {/*<Text style={{fontSize: 30, textAlign: "center", marginTop: 30}}>Seu carrinho está vazio!!</Text>
            <Image style={{height: '100%', width: '100%', marginTop: -50}} resizeMode='contain' source={require('./../assets/shopping_cart_empty.png')} />*/}

            <View style={{flex:1, alignItems:"center", justifyContent:"center", marginTop:360}}>
                <Text style={{fontSize:30, marginTop:130}}>Seu carrinho está vazio!</Text>
                <Image style={{height: '100%', width: '100%', marginTop:"auto", marginBottom: "50%"}} 
                resizeMode='contain' 
                source={require('./../assets/emptycart.png')}/>
             </View>
        </>
    );
}