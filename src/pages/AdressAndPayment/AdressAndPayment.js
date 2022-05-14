import { View, Text } from 'react-native';

export const AdressAndPayment = ({route}) => {
    const {valor} = route.params
    return(
        <View style={{alignSelf:"center"}}>
          <Text style={{alignSelf:"center", marginTop:30, fontSize:20}}>
            VALOR TOTAL DA COMPRA: R$ {valor.toFixed(2)}
          </Text>
        </View>
    )
}