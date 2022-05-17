import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, SafeAreaView, FlatList, Button} from 'react-native';
import { useState,useEffect} from 'react';
import { Searchbar } from 'react-native-paper';

import { styles } from './Styles';
import Produtos from './../../components/Produtos';
import { Load } from '../../components/Load';
import { api } from '../../config';

import DateTimePickerModal from "react-native-modal-datetime-picker";


export const Home = ({navigation}) => {

  const dateFormat = (data) =>{
    const dia  = data.getDate().toString();
    const diaF = (dia.length == 1) ? '0'+dia : dia;
    const mes  = (data.getMonth()+1).toString();
    const mesF = (mes.length == 1) ? '0'+mes : mes;
    const anoF = data.getFullYear();
    return anoF+"-"+mesF+"-"+diaF;
  }
  
  const [resultado, setResultado] = useState([]);
  const [textsearch, setTextSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const imageCart = require("./../../assets/shopping_cart.png")
  const notfound = require("./../../assets/notfound.png")
  
  const [open, setOpen] = useState(false);
  const [dateSelect, setDateSelect] = useState(new Date());


  const handleConfirm = (date) => {
    setOpen(false);
    setDateSelect(date);
    setResultado([]);
    getItems();
    console.log("A data selecionada foi: ", dateFormat(date)); 
  };

  const produtos = () =>{
    if(textsearch===""){
      return false
    }
    let url = `sites/MLB/search?q=${textsearch}`;
    setResultado([]);
    setLoading(true)
    api.get(url)
    .then(({ data }) => {
      setResultado(data.results);
      setLoading(false)
    })

  }

  const openProduto = id =>{

    api.get(`items/${id}`)
    .then(({ data }) => {
    let i = data
    navigation.navigate("Detalhes",{info:i}) 
    
    })
    
  }

  const getItems = ()=>{
    let url = `sites/MLB/search?q=eletronicos`;
    setLoading(true)
    api.get(url)
    .then(({ data }) => {
      setResultado(data.results);
      setLoading(false)
   })
  }

  useEffect(() => {
    if (resultado.length===0 && textsearch===""){
      getItems();
    }
  }, [resultado.length, textsearch]);

  const renderItem = ({ item }) => (
    <Produtos
      title={item.title}
      thumbnail={item.thumbnail}
      price={item.price}
      id={item.id}
      navigation={navigation} 
      openProduto={openProduto}
    />
  );

  const goCart = () => {
    if(resultado.length===0){
      setTextSearch("")
      getItems();
    }
    navigation.navigate("Cart");
  }

  return (

    <View style={{flex:1}}>
      <StatusBar
        style = "auto"
        hidden = {false}
        backgroundColor = "rgb(3,147,213)"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      
      <View style={styles.containerSearch}>
        <TouchableOpacity onPress={goCart} style={styles.containerImage}>
          <Image
              source={imageCart} 
              style={styles.cartImage}     
          />
        </TouchableOpacity>
        <Text style={styles.title}>E-commerce</Text>

        <Searchbar
            style={styles.searchBar}
            placeholder="Busque por um produto..."
            onChangeText={setTextSearch}
            onSubmitEditing={produtos}
            value={textsearch}
        
        />

        <Button title="Filtrar produtos por Data" onPress={()=> setOpen(true)} />
        <DateTimePickerModal
          date={dateSelect}
          isVisible={open}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={()=>setOpen(false)}
        />

      </View>

      {(resultado.length===0 && loading) && <Load />}
      {(resultado.length===0 && !loading)?

      <View style={styles.notfoundView}>
        <Image
        source={notfound}
        style={styles.notfoundImage}     
        /><Text style={styles.notfoundText}>Nenhum resultado encontrado</Text>
       </View>:false}

      <SafeAreaView style={styles.content}>
          <FlatList
            data={resultado}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={renderItem}
            onEndReachedThreshold={0.1}
          />
      </SafeAreaView>
  
    </View>
  );
}
