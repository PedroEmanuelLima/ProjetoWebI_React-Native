import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Load } from '../../components/Load';
import { CartEmpty } from '../../components/CartEmpty';
import { CartProduct } from '../../components/CartProduct';
import { styles } from './Styles';
import { api } from '../../config';

export const Cart = () => {

  const [cartData, setCartData] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const getData = async() =>{
    const response = await AsyncStorage.getItem('cart');
    if(response) {
      setCartData(JSON.parse(response));
    }
  }

  const less = async (id) => {
    let savedItems = [];
    const response = await AsyncStorage.getItem('cart');
    savedItems = JSON.parse(response);
    const item = savedItems.find( p => p.id === id );
    const index = savedItems.indexOf(item);
    savedItems.splice(index, index+1);
    
    if (item.qtd-1 > 0) {
      savedItems.push({ id: item.id, qtd: item.qtd-1 });
    }

    await AsyncStorage.setItem('cart', JSON.stringify(savedItems));
    setCartData(savedItems);
  }

  const more = async (id) => {
    let savedItems = [];
    const response = await AsyncStorage.getItem('cart');
    
    if(response) savedItems = JSON.parse(response);

    const item = savedItems.find( p => p.id === id );
    const index = savedItems.indexOf(item);
    savedItems.splice(index, index+1);
    savedItems.push({ id: item.id, qtd: item.qtd+1 });

    await AsyncStorage.setItem('cart', JSON.stringify(savedItems));
    setCartData(savedItems);
  }


  useEffect(() => {
    async function tempFunction() {
      await getData();
    }
    tempFunction();
    return () => {};
  }, []);

  useEffect(() => {
    let url = 'items?ids=';
    cartData.map((item, index) => {
      index < 1 ? url += item.id : url += ','+item.id
    })
    
    api.get(url)
      .then(({ data }) => {
        setDataProducts([]);
        data.map((res) => {
          setDataProducts(dataProducts => [...dataProducts, {
            id: res.body.id,
            title: res.body.title,
            thumbnail: res.body.thumbnail,
            price: res.body.price,
            quantity: cartData.find(p => p.id === res.body.id).qtd
          }])
        })
        setLoading(true);
      })
      .catch((er) => {
        setDataProducts([]);
        setLoading(true);
      });

    }, [cartData]);

  const renderItem = ({ item }) => (
    <CartProduct
      id={item.id}
      title={item.title}
      thumbnail={item.thumbnail}
      price={item.price}
      quantity={item.quantity}
      less={less}
      more={more}
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