import react from "react";
import { View, Image, TouchableOpacity } from "react-native";

export const CartProduct = ({ thumbnail, title, price, quantity }) => {

    console.log(thumbnail)
    console.log(title)
    console.log(price)
    console.log(quantity)

    useEffect(() => {
        cartData.map(elemento => {

        })
    }, [])

    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={{uri:thumbnail}}
            /> 

            <View>
                <View style={styles.title}>{title}</View>
                <View style={styles.quantity}>
                    <View>
                        <TouchableOpacity style={styles.headleQuantity}>-</TouchableOpacity>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <TouchableOpacity style={styles.headleQuantity}>+</TouchableOpacity>
                    </View>
                    <Text style={styles.price}>{price}</Text>    
                </View>

            </View>
        </View>
    );
}

