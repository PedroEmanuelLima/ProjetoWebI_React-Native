import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import axios from "axios";
import { useState,useEffect} from 'react';

import { Load } from '../../components/Load';
import { CartEmpty } from '../../components/CartEmpty';
import { CartProduct } from '../../components/CartProduct';
import { styles } from './Styles';

export const Cart = () => {

  const cartData = [];
  const [dataResult, setDataResult] = useState([])
  const [data, setData] = useState([]);
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
    let url = 'https://api.mercadolibre.com/items?ids=';
    cartData.map((item, index) => {
      index < 1 ? url += item.id : url += ','+item.id
    })
    
    axios.get(url)
      .then(({data}) => {
        console.log(data)
        setLoading(true)
      })
      .catch((er) => {
        setData([]);
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
       
        { (data.length <= 0 && !loading) && <Load />}
        {
            data.length <= 0 && loading
            ? <CartEmpty/> 
            : (
                <SafeAreaView style={styles.content}>
                    <FlatList
                        data={dataResult}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                </SafeAreaView>
            )
        }
  
    </View>
  );
}