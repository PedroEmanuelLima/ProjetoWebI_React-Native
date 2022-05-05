import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TouchableNativeFeedback, SafeAreaView, FlatList } from 'react-native';
import axios from "axios";
import { useState,useEffect} from 'react';
import { Searchbar } from 'react-native-paper';

import { styles } from './Styles';
import Produtos from './../../components/Produtos';
import { Load } from '../../components/Load';


export const Home = () => {

  const [resultado, setResultado] = useState([]);
  const [textsearch, setTextSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const produtos = () =>{
    setResultado([]);
    setLoading(true);
    axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${textsearch}`)
    .then(({ data }) => {
      setResultado(data.results);
    })
  }
  
  useEffect(() => {
    if (textsearch===""){
     setLoading(true);
     axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=MLB1000`)
     .then(({ data }) => {
       setResultado(data.results);
     })}
  });

  /*const renderItem = ({ item }) => (
    <Produtos
      title={item.title}
      thumbnail={item.thumbnail}
      price={item.price}
    />
  );*/

  const renderItem = ({ item }) => (<Produtos {...item}/>)

  return (

    <View>
      <StatusBar
        style = "auto"
        hidden = {false}
        backgroundColor = "rgb(3,147,213)"//backgroundColor = "rgb(168, 20, 20)"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      
      <View style={styles.containerSearch}>
        <TouchableNativeFeedback >
          <View style={styles.containerImage}>
          <Image
              source={require("./../../assets/shopping_cart.png")} 
              style={styles.cartImage}     
          />
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.title}>E-commerce</Text>

        <Searchbar
            style={styles.searchBar}
            placeholder="Busque por um produto..."
            onChangeText={setTextSearch}
            onSubmitEditing={produtos}
            value={textsearch}
        
        />
      </View>
       
      { (resultado.length <= 0 && textsearch.trim().length > 0 && loading) && <Load />}
      <SafeAreaView style={styles.content}>
          <FlatList
            data={resultado}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={renderItem}
          />
      </SafeAreaView>
  
    </View>
  );
}
