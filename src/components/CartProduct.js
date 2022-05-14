import react, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const CartProduct = ({ id, thumbnail, title, price, quantity, less, more }) => {

    const [quantityProduct, setQuantityProduct] = useState(quantity)

    const headleLess = () => {
        less(id, setQuantityProduct);
    }
    
    const headleMore = () => {
        more(id, setQuantityProduct);
    }

    return(
        <>
        { quantityProduct <= 0 ? null :
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={{uri:thumbnail}}
                    /> 
                </View>

                <View style={styles.informations}>
                    <View>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </View>


                    <View style={styles.quantityAndPrice}>
                        <View style={styles.quantityDisplay}>
                                <TouchableOpacity onPress={headleLess}><Text style={styles.headleLess}>-</Text></TouchableOpacity>
                                <Text style={styles.quantity}>{quantityProduct}</Text>
                                <TouchableOpacity onPress={headleMore}><Text style={styles.headleMore}>+</Text></TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.price}>{(price*quantityProduct).toFixed(2).replace(".",",")}</Text>
                        </View>
                    </View>
                </View>
            </View>
        }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width:"97%",
        borderRadius:8,
        borderWidth:1,
        borderColor:"#fff",

        padding: 10,
        paddingLeft: 0,
        margin:4,
        marginTop:20,
        marginLeft:4,

        display:"flex",
        flexDirection: "row",
        backgroundColor:"#fff",
        shadowColor:"blue",

        elevation:10,
        flexGrow: 1,
        flexBasis: 0
    },

    imageContainer: {
        width: '35%',
        borderRightWidth: 1,
        borderRightColor: '#000',
        padding: 5,

        alignSelf:"flex-start",
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 2,
    },

    informations: {
        width: '70%',
        paddingRight: 10,
        marginLeft: 5,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    titleStyle: {
        fontSize: 15,
        textAlign: 'left'
    },

    quantityDisplay: {
        width: '30%',
        borderWidth: 1,
        borderRadius: 8,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",

    },

    headleLess: {
        padding: 0,
        marginHorizontal: 4,
        fontSize: 30,
    },

    headleMore: {
        marginHorizontal: 4,
        fontSize: 20,
    },

    quantity: {
        fontSize: 20,
    },

    quantityAndPrice: {
        width: '95%',

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    price: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})

