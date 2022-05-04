import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,Image, TouchableNativeFeedback } from 'react-native';
import axios from "axios";
import { useState,useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import Produtos from './Produtos';


export default function Home() {

  const [resultado, setResultado] = useState([])
  const [img, setImg] = useState()
  const [textsearch, setTextSearch] = useState("")
  const [auto,setAuto] = useState(0)
  const onChangeSearch = text => setTextSearch(text);

  const produtos = () =>{
    setResultado([])
    setAuto("50%")
    setImg(require("./images/loading-unscreen.gif"))
    console.log(img)
    axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${textsearch}`).then(({ data }) => {
      let r = data.results;
      setAuto(0)
      setImg()
      setResultado(r)
    })
  }

  return (

    <View style={styles.container}>
      <StatusBar
        style = "auto"
        hidden = {false}
        backgroundColor = "rgb(168, 20, 20)"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      
      <View style={styles.containerSearch}>
        <Text style={styles.title}>E-commerce
        <TouchableNativeFeedback>
        <View style={styles.containerButton}>
          <Image
            source={require("./images/shopping_cart.png")} 
            style={styles.cartImage}     
          />
        </View>
        </TouchableNativeFeedback>
        </Text>

        <Searchbar
            style={styles.searchBar}
            placeholder="Busque por um produto..."
            onChangeText={onChangeSearch}
            onSubmitEditing={produtos}
            value={textsearch}
        
        />
      </View>
      
      <Image
          source={img}
          style={styles.load(auto)}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
          {resultado.map((r, i) => (
            <Produtos r={r} key={i} />
          ))}

      </ScrollView> 
 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(220,220,220)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  load: auto =>( {
    marginTop:auto,
    alignSelf:"center",
    justifyContent: 'center'
  }),

  title: {
    color:"#fff",
    alignSelf:"center",
    marginTop:10,
    fontSize:20,
    fontWeight:"bold"
  },

  searchBar: {
    width:"90%",
    marginTop:30,
    marginBottom:35,
    borderRadius:20,
    alignSelf: "center",
  },

  containerSearch:{
    width:"100%",
    backgroundColor:"rgb(248,0,50)",
  },

  containerButton:{
    marginTop:30
  },

  cartImage:{
    justifyContent:"space-between"
  },

  scrollView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
});