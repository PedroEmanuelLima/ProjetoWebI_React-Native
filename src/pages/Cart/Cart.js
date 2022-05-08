import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useState,useEffect} from 'react';

import { Load } from '../../components/Load';
import { CartEmpty } from '../../components/CartEmpty';
import { CartProduct } from '../../components/CartProduct';
import { styles } from './Styles';
import { api } from '../../config';

export const Cart = () => {

  const cartData = [];
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  cartData.push({ id: 'MLB1880052099', qtd: 1})
  cartData.push({ id: 'MLB2141855118', qtd: 1 });
  
  // setData([...data, {
  //   id: product.body.id,
  //   title: product.body.title,
  //   thumbnail: product.body.thumbnail,
  //   price: product.body.price,
  //   quantity: cartData[index].quantity
  // }])

  useEffect(() => {
    let url = 'items?ids=';
    cartData.map((item, index) => {
      index < 1 ? url += item.id : url += ','+item.id
    })
    
    api.get(url)
      .then(({ data }) => {
        data.map((res, indx) => {
          setDataProducts(dataProducts => [...dataProducts, {
            id: res.body.id,
            title: res.body.title,
            thumbnail: res.body.thumbnail,
            price: res.body.price,
            quantity: cartData[indx].qtd
          }])
        })
        setLoading(true)
      })
      .catch((er) => {
        setDataProducts([]);
        setLoading(true);
      });

    }, []);

  const renderItem = ({ item }) => (
    <CartProduct
      title={item.title}
      thumbnail={item.thumbnail}
      price={item.price}
      quantity={item.quantity}
    />
  );

  return (

   
    <View style={{flex:1}}>
      <StatusBar
        style = "auto"
        hidden = {false}
        backgroundColor = "rgb(3,147,213)"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
       
        { (dataProducts.length <= 0 && !loading) && <Load />}
        {
            dataProducts.length <= 0 && loading
            ? <CartEmpty/> 
            : (
                <View style={styles.container}>
                  <SafeAreaView style={styles.content}>
                      <FlatList
                          data={dataProducts}
                          keyExtractor={(item) => item.id}
                          renderItem={renderItem}
                      />
                  </SafeAreaView>

                  <TouchableOpacity style={styles.buttonBuy}>
                    <Text style={styles.titleBuy}>Finalizar Compra</Text>
                  </TouchableOpacity>
                </View>
            )
        }
  
    </View>
  );
}