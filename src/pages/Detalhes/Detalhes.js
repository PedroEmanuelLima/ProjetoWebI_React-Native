import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './Styles';



export const Detalhes = ({route,navigation}) => {
  const {info} = route.params
  const [disponivel, setDisponivel] = useState(true);


  function inserir(){
    let savedItems = [];
    let item = {}
    AsyncStorage.getItem('cart')
      .then(res => {
        if (res){
          savedItems = JSON.parse(res);
          item = savedItems.find( p => p.id === info.id );
          if (item) {
            item.qtd += 1;
          } else {
            savedItems.push({ id: info.id, qtd: 1 });
          }
        } else { savedItems.push({ id: info.id, qtd: 1 }); }
        AsyncStorage.setItem('cart', JSON.stringify(savedItems));
      });
  }

  useEffect(() => {
    setDisponivel(info.available_quantity>0);

  }, [])

  const headlePursh = async () => {
    await AsyncStorage.clear()
    // disponivel
    //   ? navigation.navigate("AdressAndPayment", {valor: info.price})
    //   : null // ALERTA QUE ESTÁ INDISPONIVEL
  }

  const headleAddCart = async () => {
    if (disponivel) {
      inserir();
      Alert.alert("Produto", "Produto adicionado ao carrinho!")
      //navigation.navigate("Cart")
    } else {
      // ALERTA QUE ESTÀ INDISPONIVEL
    }
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
      <View style={styles.container}>
        <View>
          <Image resizeMode="contain"
            style={styles.image}
            source={{uri:info.thumbnail}}
            
          />
          <Text style={styles.title}>{info.title}</Text>
          <Text style={styles.preco}>R$ {info.price.toFixed(2).replace(".",",")}</Text>
          <Text style={styles.quantidade}>Quantidade: {info.available_quantity}</Text>
          <Text style={styles.estoque}>{disponivel?"Estoque disponível": "Estoque indisponível"} </Text>
        </View>
      </View>

      <TouchableOpacity onPress={headlePursh} style={styles.buttonBuy}>
        <Text style={styles.titleBuy}>Comprar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={headleAddCart} style={styles.buttonCart}>
        <Text style={styles.titleCart}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}
