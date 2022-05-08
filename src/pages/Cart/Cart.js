import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import axios from "axios";
import { useState,useEffect} from 'react';
import { Searchbar } from 'react-native-paper';

import { styles } from './Styles';
import { Load } from '../../components/Load';
import { CartProduct } from '../../components/CartProduct';


export const Home = () => {

  const [cartData, setCartData] = useState([]);
  const [data, setData] = useState([]);

  setCartData([{ id: 'MLB1880052099', qtd: 1}, { id: 'MLB2141855118', qtd: 1 }]);
  
  useEffect(() => {
    // https://api.mercadolibre.com/items/MLB1880052099
    cartData.map(p => {
        url = 'https://api.mercadolibre.com/items?ids=MLB1880052099'+`,${p.id}`
    })
    axios.get(url)
        .then(res => setData(res));
  })

  const renderItem = ({ item }) => (
    <CartProduct
      title={item.title}
      thumbnail={item.thumbnail}
      price={item.price}
    />
  );

  return (

    <View>
      <StatusBar
        style = "auto"
        hidden = {false}
        backgroundColor = "rgb(3,147,213)"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      
      <View style={styles.containerSearch}>

        <Text style={styles.title}>E-commerce</Text>

        <Searchbar
            style={styles.searchBar}
            placeholder="Busque em seu carrinho..."
            onChangeText={setTextSearch}
            onSubmitEditing={produtos}
            value={textsearch}
        
        />
      </View>
       
        { (resultado.length <= 0 && textsearch.trim().length > 0 && loading) && <Load />}
        {
            data.length <= 0 
            ? <CartEmpty/> 
            : (
                <SafeAreaView style={styles.content}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                </SafeAreaView>
            )
        }
  
    </View>
  );
}

const styles = StyleSheet.create({
    content: {
        width: '100%',
    }
});