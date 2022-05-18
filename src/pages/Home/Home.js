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

  const dateFormat = (date) =>{
    const dia  = date.getDate().toString();
    const diaF = (dia.length == 1) ? '0'+dia : dia;
    const mes  = (date.getMonth()+1).toString();
    const mesF = (mes.length == 1) ? '0'+mes : mes;
    const anoF = date.getFullYear();
    return {ano: anoF, mes: mesF, dia: diaF};
  }
  
  const [resultado, setResultado] = useState([]);
  const [textsearch, setTextSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const imageCart = require("./../../assets/shopping_cart.png")
  const notfound = require("./../../assets/notfound.png")
  
  const [open, setOpen] = useState(false);
  const [dateSelect, setDateSelect] = useState(new Date());
  const [restore,setRestore] = useState([])

  const dateProductsDate = (date) =>{
    setResultado([])
    setLoading(true)
    let url = 'items?ids=';
    resultado.map((item,index) => {
      index < 1 ? url += item.id : index<20? url += ','+item.id : false
    })
    api.get(url)
    .then(({ data }) => {
      data.map((res) => {

        const filter = [...filter, {
          id: res.body.id,
          title: res.body.title,
          thumbnail: res.body.thumbnail,
          price: res.body.price,
          date_c: res.body.date_created
          
        }]
        const date_c = new Date(res.body.date_created);
        dateFormat(date_c) === dateFormat(date)? setResultado(filter): setLoading(false);
        console.log(dateFormat(date_c))
        
      })
    })
  }
  
  const openFilter = () =>{
    setOpen(true);
    setResultado(restore);
    
   
  }
  const handleConfirm = (date) => {
    setOpen(false);
    setDateSelect(date);
    dateProductsDate(date);

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
      setRestore(data.results);
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
      setRestore(data.results);
      setLoading(false)
      
   })
  }

  useEffect(() => {
    if (resultado.length===0 && textsearch===""){
      getItems();
    }
  }, []);

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

        <View style={styles.viewFilter}>
          <TouchableOpacity style={styles.buttonFilter} onPress={openFilter}>
                <Text style={styles.textFilter}> Filtrar produtos por Data</Text>
          </TouchableOpacity>
        </View>

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
