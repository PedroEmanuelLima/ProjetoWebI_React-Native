import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import { useState,useEffect} from 'react';
import { Searchbar } from 'react-native-paper';

import { styles } from './Styles';
import Produtos from './../../components/Produtos';
import { Load } from '../../components/Load';
import { api } from '../../config';

//import DateTimePickerModal from "react-native-modal-datetime-picker";


export const Home = ({navigation}) => {

  const [resultado, setResultado] = useState([]);
  const [textsearch, setTextSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const imageCart = require("./../../assets/shopping_cart.png")/*Alteração aqui*/
  const notfound = require("./../../assets/notfound.png")/*Alteração aqui*/
  
  /*Alteração aqui*/
  const getItems = ()=>{
    let url = `sites/MLB/search?q=eletronicos`;
    setLoading(true)
    api.get(url)
    .then(({ data }) => {
      setResultado(data.results);
   })
  }
  
  //const [open, setOpen] = useState(false);

  /*const showDatePicker = () => {
    setOpen(true);
  };

  const hideDatePicker = () => {
    setOpen(false);
  };

  const handleConfirm = (date) => {
    console.log("A date selecionada foi: ", date);
    hideDatePicker();
  };*/

  /*Alteração aqui*/
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
      if (data.results.length===0){
        setLoading(false)
      }
    })

  }

  const openProduto = id =>{

    api.get(`items/${id}`)
    .then(({ data }) => {
    let i = data
    navigation.navigate("Detalhes",{info:i}) 
    
    })
    
  }
  /*Alteração aqui*/
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

        {/*<Button title="Exibir Calendário" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={open}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />*/}

      </View>

      {/*Alteração aqui*/}
      {(resultado.length===0 && loading) && <Load />}
      {(resultado.length===0 && !loading)?

      <View style={styles.notfoundView}>
        <Image
        source={notfound}
        style={styles.notfoundImage}     
        /><Text style={styles.notfoundText}>Nenhum resultado encontrado</Text>
       </View>:false}

      {/*{(resultado.length <= 0 && textsearch.trim().length > 0 && loading) && <Load />}*/}

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
