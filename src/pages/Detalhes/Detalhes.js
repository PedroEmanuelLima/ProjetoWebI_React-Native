import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { styles } from './Styles';



export const Detalhes = ({route}) => {
  const {info} = route.params
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
          <Text style={styles.estoque}>{info.available_quantity>0?"Estoque disponível": "Estoque indisponível"} </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.buttonBuy}>
        <Text style={styles.titleBuy}>Comprar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCart}>
        <Text style={styles.titleCart}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}


